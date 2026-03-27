import { useState } from 'react';
import { Copy, Download, Eye, Code } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { generateMarkdown } from '../utils/markdownGenerator';

import { toast } from 'react-hot-toast';

const PreviewCodePanel = ({ data }) => {
  const [isPreview, setIsPreview] = useState(true);
  const markdown = generateMarkdown(data);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    toast.success('Markdown copied to clipboard!');
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success('README.md downloaded successfully!');
  };

  return (
    <div className="bg-[#1C1C1E] rounded-[28px] border border-white/5 overflow-hidden flex flex-col h-full card-float">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-4 md:px-5 py-3 border-b border-white/5">
        <div className="flex gap-1">
          <button
            onClick={() => setIsPreview(true)}
            className={`flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] text-sm font-medium rounded-full transition-all ${
              isPreview ? 'bg-[#2C2C2E] text-white' : 'text-[#8E8E93] hover:text-white'
            }`}
          >
            <Eye size={18} />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setIsPreview(false)}
            className={`flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] text-sm font-medium rounded-full transition-all ${
              !isPreview ? 'bg-[#2C2C2E] text-white' : 'text-[#8E8E93] hover:text-white'
            }`}
          >
            <Code size={18} />
            <span>Code</span>
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-5 py-2.5 min-h-[44px] bg-[#0A84FF] hover:bg-[#0A84FF]/80 text-white text-sm font-semibold rounded-full transition-all"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Download</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-5 py-2.5 min-h-[44px] bg-[#1C1C1E] border border-white/5 hover:bg-white/10 text-[#0A84FF] text-sm font-semibold rounded-full transition-all"
          >
            <Copy size={18} />
            <span className="hidden sm:inline">Copy</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-5 md:p-6 scrollbar-thin">
        {isPreview ? (
          <div className="prose prose-invert max-w-none markdown-preview">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <pre className="text-sm font-mono text-[#8E8E93] whitespace-pre-wrap break-all overflow-x-auto bg-[#000000] p-4 rounded-2xl border border-white/5">
            {markdown}
          </pre>
        )}
      </div>
    </div>
  );
};

export default PreviewCodePanel;