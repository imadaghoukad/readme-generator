import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const techCategories = {
  // ... (same as before)
  Frontend: [
    { name: 'JavaScript', badge: 'JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', category: 'Frontend' },
    { name: 'TypeScript', badge: 'TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white', category: 'Frontend' },
    { name: 'React', badge: 'React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', category: 'Frontend' },
    { name: 'Next.js', badge: 'Next-black?style=for-the-badge&logo=next.js&logoColor=white', category: 'Frontend' },
    { name: 'Vue.js', badge: 'Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D', category: 'Frontend' },
    { name: 'Angular', badge: 'Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white', category: 'Frontend' },
    { name: 'Tailwind CSS', badge: 'Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', category: 'Frontend' },
    { name: 'Figma', badge: 'Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white', category: 'Frontend' }
  ],
  Backend: [
    { name: 'Node.js', badge: 'Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white', category: 'Backend' },
    { name: 'Express', badge: 'Express.js-404D59?style=for-the-badge&logo=express&logoColor=white', category: 'Backend' },
    { name: 'Django', badge: 'Django-092E20?style=for-the-badge&logo=django&logoColor=white', category: 'Backend' },
    { name: 'Python', badge: 'Python-14354C?style=for-the-badge&logo=python&logoColor=white', category: 'Backend' },
    { name: 'Go', badge: 'Go-00ADD8?style=for-the-badge&logo=go&logoColor=white', category: 'Backend' },
    { name: 'Java', badge: 'Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white', category: 'Backend' },
    { name: 'PHP', badge: 'PHP-777BB4?style=for-the-badge&logo=php&logoColor=white', category: 'Backend' }
  ],
  'Low-Level': [
    { name: 'C', badge: 'C-00599C?style=for-the-badge&logo=c&logoColor=white', category: 'Low-Level' },
    { name: 'C++', badge: 'C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white', category: 'Low-Level' },
    { name: 'Rust', badge: 'Rust-000000?style=for-the-badge&logo=rust&logoColor=white', category: 'Low-Level' },
    { name: 'Bash', badge: 'GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white', category: 'Low-Level' },
    { name: 'Makefile', badge: 'Makefile-000000?style=for-the-badge&logo=make&logoColor=white', category: 'Low-Level' },
    { name: 'Linux', badge: 'Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black', category: 'Low-Level' }
  ],
  Cybersecurity: [
    { name: 'Kali Linux', badge: 'Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white', category: 'Cybersecurity' },
    { name: 'TryHackMe', badge: 'TryHackMe-212c42?style=for-the-badge&logo=tryhackme&logoColor=white', category: 'Cybersecurity' },
    { name: 'HackTheBox', badge: 'HackTheBox-111921?style=for-the-badge&logo=hackthebox&logoColor=9fef00', category: 'Cybersecurity' },
    { name: 'Wireshark', badge: 'Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white', category: 'Cybersecurity' },
    { name: 'Nmap', badge: 'Nmap-4F5E6B?style=for-the-badge&logo=nmap&logoColor=white', category: 'Cybersecurity' }
  ],
  'DevOps & Tools': [
    { name: 'Git', badge: 'Git-F05032?style=for-the-badge&logo=git&logoColor=white', category: 'DevOps & Tools' },
    { name: 'Docker', badge: 'Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white', category: 'DevOps & Tools' }
  ]
};

export default function TechStackSelector({ selectedTech, updateTech }) {
  const [expandedCategories, setExpandedCategories] = useState({
    Frontend: true,
    Backend: true,
    'Low-Level': true,
    Cybersecurity: true,
    'DevOps & Tools': true
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const toggleTech = (tech) => {
    if (selectedTech.some(t => t.name === tech.name)) {
      updateTech(selectedTech.filter(t => t.name !== tech.name));
    } else {
      updateTech([...selectedTech, tech]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white mb-1">Tech Stack</h2>
        <p className="text-[var(--color-github-text-muted)] text-sm mb-4">Select the technologies you work with.</p>
      </div>

      <div className="space-y-4">
        {Object.entries(techCategories).map(([category, items]) => {
          const isExpanded = expandedCategories[category];
          const selectedInCategory = items.filter(tech => selectedTech.some(t => t.name === tech.name)).length;

          return (
            <div key={category} className="border border-[var(--color-github-border)] rounded-lg overflow-hidden bg-[var(--color-github-darker)]">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-4 hover:bg-[var(--color-github-dark)] transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? <ChevronDown className="w-5 h-5 text-[var(--color-github-text-muted)]" /> : <ChevronRight className="w-5 h-5 text-[var(--color-github-text-muted)]" />}
                  <span className="font-semibold text-white">{category}</span>
                  {selectedInCategory > 0 && (
                    <span className="bg-[var(--color-github-accent)] text-white text-xs px-2 py-0.5 rounded-full">
                      {selectedInCategory}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[var(--color-github-text-muted)] uppercase tracking-wider font-medium">
                  {items.length} optional
                </span>
              </button>

              {isExpanded && (
                <div className="p-4 pt-0">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 border-t border-[var(--color-github-border)] pt-4">
                    {items.map(tech => {
                      const isSelected = selectedTech.some(t => t.name === tech.name);
                      return (
                        <button
                          key={tech.name}
                          onClick={() => toggleTech(tech)}
                          className={`flex items-center justify-center text-center px-3 py-2 rounded-md border text-xs font-medium transition-all duration-200 ease-in-out ${
                            isSelected 
                              ? 'bg-[var(--color-github-accent)]/20 border-[var(--color-github-accent)] text-[var(--color-github-accent)] shadow-[0_0_10px_rgba(47,129,247,0.3)]' 
                              : 'bg-[var(--color-github-darker)] border-[var(--color-github-border)] text-[var(--color-github-text)] hover:border-[var(--color-github-text-muted)] hover:text-white'
                          }`}
                        >
                          {tech.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
