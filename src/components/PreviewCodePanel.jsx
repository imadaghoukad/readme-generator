import { useState } from 'react';
import { Copy, Download, Check, Eye, Code } from 'lucide-react';
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
    <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex space-x-2">
          <button
            onClick={() => setIsPreview(true)}
            className={`flex items-center space-x-1 px-3 py-1 text-sm rounded transition ${isPreview ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Eye size={16} />
            <span>Preview</span>
          </button>
          <button
            onClick={() => setIsPreview(false)}
            className={`flex items-center space-x-1 px-3 py-1 text-sm rounded transition ${!isPreview ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            <Code size={16} />
            <span>Code</span>
          </button>
        </div>
        <div className="flex space-x-2">
          <button onClick={handleDownload} className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition">
            <Download size={16} />
            <span>Download README.md</span>
          </button>
          <button onClick={handleCopy} className="flex items-center space-x-1 px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded transition">
            <Copy size={16} />
            <span>Copy Markdown</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-6 scrollbar-thin">
        {isPreview ? (
          <div className="prose prose-invert max-w-none markdown-preview">
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {markdown}
            </ReactMarkdown>
          </div>
        ) : (
          <pre className="text-sm font-mono text-slate-300 whitespace-pre-wrap bg-slate-950 p-4 rounded border border-slate-800">
            {markdown}
          </pre>
        )}
      </div>
    </div>
  );
};

export default PreviewCodePanel;