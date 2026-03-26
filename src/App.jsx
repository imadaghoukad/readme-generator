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
    <div className="min-h-screen bg-[var(--color-github-dark)] text-[var(--color-github-text)] flex flex-col font-sans">
      <Toaster 
        position="bottom-right" 
        toastOptions={{ 
          style: { background: 'var(--color-github-darker)', color: 'var(--color-github-text)', border: '1px solid var(--color-github-border)' },
          success: { iconTheme: { primary: '#2f81f7', secondary: '#fff' } }
        }} 
      />
      <header className="border-b border-[var(--color-github-border)] bg-[var(--color-github-darker)] p-4 flex items-center gap-3 shadow-md z-10">
        <FaGithub className="w-8 h-8 text-[var(--color-github-text)]" />
        <h1 className="text-xl font-bold tracking-tight text-white">GitHub Profile README Generator</h1>
      </header>

      <main className="flex-1 overflow-hidden h-[calc(100vh-73px)]">
        <div className="h-full overflow-y-auto px-6 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 scrollbar-thin">
          <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-10 xl:grid-cols-2">
            <div className="space-y-8 xl:space-y-10">
              <FormInputs data={data} updateData={updateData} />
              <TechStackSelector selectedTech={data.techStack} updateTech={(tech) => updateData('techStack', tech)} />
              <SocialLinks socials={data.socials} updateSocials={updateSocials} />
              <div className="pb-8"></div>
            </div>

            <div className="pt-2 md:pt-4 xl:pt-8">
              <PreviewCodePanel data={data} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
