import React from 'react';
import { Copy, Download, Check } from 'lucide-react';

const PreviewCodePanel = ({ markdown, isPreview, setIsPreview }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
  };

  return (
    <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex space-x-2">
          <button
            onClick={() => setIsPreview(true)}
            className={`px-3 py-1 text-sm rounded ${isPreview ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Preview
          </button>
          <button
            onClick={() => setIsPreview(false)}
            className={`px-3 py-1 text-sm rounded ${!isPreview ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'}`}
          >
            Code
          </button>
        </div>
        <div className="flex space-x-2">
          <button onClick={handleDownload} className="flex items-center space-x-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded transition">
            <Download size={16} />
            <span>Download README.md</span>
          </button>
          <button onClick={handleCopy} className="flex items-center space-x-1 px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-sm rounded transition">
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? 'Copied!' : 'Copy Markdown'}</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        {/* L-code dyal l-render gha i-koun hna */}
      </div>
    </div>
  );
};

export default PreviewCodePanel;