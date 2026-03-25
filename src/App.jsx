import { useState } from 'react';
import FormInputs from './components/FormInputs';
import TechStackSelector from './components/TechStackSelector';
import SocialLinks from './components/SocialLinks';
import PreviewCodePanel from './components/PreviewCodePanel';
import { FaGithub } from 'react-icons/fa';
import { Toaster } from 'react-hot-toast';
import './index.css';

function App() {
  const [data, setData] = useState({
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
    }
  });

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

      <main className="flex-1 flex flex-col md:flex-row overflow-hidden h-[calc(100vh-73px)]">
        {/* Left Panel - Editor */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto p-6 md:p-8 border-r border-[var(--color-github-border)] space-y-10 scrollbar-thin">
          <FormInputs data={data} updateData={updateData} />
          <hr className="border-[var(--color-github-border)]" />
          <TechStackSelector selectedTech={data.techStack} updateTech={(tech) => updateData('techStack', tech)} />
          <hr className="border-[var(--color-github-border)]" />
          <SocialLinks socials={data.socials} updateSocials={updateSocials} />
          <div className="pb-8"></div>
        </div>

        {/* Right Panel - Preview */}
        <div className="w-full md:w-1/2 h-full overflow-y-auto bg-[var(--color-github-darker)] p-6 md:p-8">
          <PreviewCodePanel data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
