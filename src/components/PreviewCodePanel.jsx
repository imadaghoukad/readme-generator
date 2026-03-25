import { useState } from 'react';
import { generateMarkdown } from '../utils/markdownGenerator';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import toast from 'react-hot-toast';
import { FaCopy, FaCheck, FaEye, FaCode } from 'react-icons/fa';

export default function PreviewCodePanel({ data }) {
  const [view, setView] = useState('preview'); // 'preview' or 'code'
  const [copied, setCopied] = useState(false);

  const markdown = generateMarkdown(data);
  const isEmpty = !data.name && !data.about && !data.github && data.techStack.length === 0 && !Object.values(data.socials).some(s => s);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    toast.success('Markdown copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex bg-[var(--color-github-dark)] border border-[var(--color-github-border)] rounded-md p-1">
          <button
            onClick={() => setView('preview')}
            className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-sm transition-colors \${
              view === 'preview' ? 'bg-[var(--color-github-border)] text-white' : 'text-[var(--color-github-text-muted)] hover:text-white'
            }`}
          >
            <FaEye className="w-4 h-4" /> Preview
          </button>
          <button
            onClick={() => setView('code')}
            className={`flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-sm transition-colors \${
              view === 'code' ? 'bg-[var(--color-github-border)] text-white' : 'text-[var(--color-github-text-muted)] hover:text-white'
            }`}
          >
            <FaCode className="w-4 h-4" /> Code
          </button>
        </div>

        <button
          onClick={handleCopy}
          disabled={isEmpty}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border transition-colors \${
            isEmpty 
              ? 'opacity-50 cursor-not-allowed border-[var(--color-github-border)] text-[var(--color-github-text-muted)]' 
              : copied 
                ? 'bg-green-500/10 border-green-500/50 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]' 
                : 'bg-[var(--color-github-border)] hover:bg-[var(--color-github-border)]/80 text-white border-[var(--color-github-border)] hover:border-[var(--color-github-text-muted)]'
          }`}
        >
          {copied ? <FaCheck className="w-4 h-4" /> : <FaCopy className="w-4 h-4" />}
          {copied ? 'Copied!' : 'Copy Markdown'}
        </button>
      </div>

      <div className="flex-1 bg-[var(--color-github-dark)] border border-[var(--color-github-border)] rounded-md overflow-hidden flex flex-col relative w-full shadow-inner">
        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-[var(--color-github-text-muted)]">
            <div className="p-4 bg-[var(--color-github-darker)] rounded-full mb-4 ring-1 ring-[var(--color-github-border)]">
              <FaCode className="w-8 h-8 opacity-50 text-[var(--color-github-accent)]" />
            </div>
            <p className="text-lg font-medium text-white mb-2">Nothing to preview yet</p>
            <p className="text-sm max-w-sm">Start filling out the form on the left to generate your customized GitHub Profile README.</p>
          </div>
        ) : view === 'preview' ? (
          <div className="flex-1 overflow-y-auto p-6 md:p-8 markdown-body text-white scrollbar-thin">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
          </div>
        ) : (
          <textarea
            readOnly
            value={markdown}
            className="w-full h-full bg-transparent text-[var(--color-github-text)] p-6 md:p-8 font-mono text-sm resize-none focus:outline-none scrollbar-thin selection:bg-[var(--color-github-accent)]/30"
            spellCheck="false"
          />
        )}
      </div>
    </div>
  );
}
