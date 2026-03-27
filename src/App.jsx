import { useState, useEffect } from 'react';
import FormInputs from './components/FormInputs';
import TechStackSelector from './components/TechStackSelector';
import SocialLinks from './components/SocialLinks';
import PreviewCodePanel from './components/PreviewCodePanel';
import { FaGithub } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import './index.css';

function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('github-readme-generator-data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved data", e);
      }
    }
    return {
      name: '',
      subtitle: '',
      about: '',
      github: '',
      techStack: [],
      socials: {
        linkedin: '',
        twitter: '',
        instagram: '',
        facebook: '',
        youtube: '',
        discord: '',
        email: ''
      },
      statsTheme: 'github_dark',
      showLanguages: true,
      showStreak: true
    };
  });

  useEffect(() => {
    localStorage.setItem('github-readme-generator-data', JSON.stringify(data));
  }, [data]);

  const updateData = (section, value) => {
    setData(prev => ({ ...prev, [section]: value }));
  };

  const updateSocials = (platform, url) => {
    setData(prev => ({
      ...prev,
      socials: { ...prev.socials, [platform]: url }
    }));
  };

  return (
    <div
      className="min-h-screen bg-[#000000] text-white flex flex-col"
      style={{
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: { background: '#1C1C1E', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '9999px', fontSize: '14px' },
          success: { iconTheme: { primary: '#0A84FF', secondary: '#fff' } }
        }}
      />

      {/* Header */}
      <header className="bg-[#000000] px-6 md:px-12 pb-4 pt-12 md:pt-8 flex items-center gap-3 z-10">
        <FaGithub className="w-7 h-7 md:w-8 md:h-8 text-[#0A84FF]" />
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">README Generator</h1>
      </header>

      {/* Main Content — single-column mobile, 60/40 desktop grid */}
      <main className="flex-1 flex flex-col md:grid md:grid-cols-[1.1fr_0.9fr] overflow-hidden md:h-[calc(100vh-80px)]">
        {/* Left Panel — Editor */}
        <div className="w-full md:h-full overflow-y-auto px-6 md:px-12 pb-8 scrollbar-thin">
          <div className="flex flex-col gap-8 md:gap-10">
            <FormInputs data={data} updateData={updateData} />
            <TechStackSelector selectedTech={data.techStack} updateTech={(tech) => updateData('techStack', tech)} />
            <SocialLinks socials={data.socials} updateSocials={updateSocials} />
          </div>
          <div className="pb-[env(safe-area-inset-bottom)]"></div>
        </div>

        {/* Right Panel — Preview */}
        <div className="w-full md:h-full overflow-y-auto px-6 md:px-12 pb-8">
          <PreviewCodePanel data={data} />
          <div className="pb-[env(safe-area-inset-bottom)]"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
