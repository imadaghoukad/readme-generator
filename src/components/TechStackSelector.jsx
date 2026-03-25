const techCategories = {
  Languages: [
    { name: 'JavaScript', badge: 'JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
    { name: 'TypeScript', badge: 'TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white' },
    { name: 'Python', badge: 'Python-14354C?style=for-the-badge&logo=python&logoColor=white' },
    { name: 'Java', badge: 'Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white' },
    { name: 'C++', badge: 'C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white' },
    { name: 'C', badge: 'C-00599C?style=for-the-badge&logo=c&logoColor=white' },
    { name: 'Go', badge: 'Go-00ADD8?style=for-the-badge&logo=go&logoColor=white' },
    { name: 'Rust', badge: 'Rust-000000?style=for-the-badge&logo=rust&logoColor=white' },
    { name: 'PHP', badge: 'PHP-777BB4?style=for-the-badge&logo=php&logoColor=white' }
  ],
  Frameworks: [
    { name: 'React', badge: 'React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    { name: 'Next.js', badge: 'Next-black?style=for-the-badge&logo=next.js&logoColor=white' },
    { name: 'Vue.js', badge: 'Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D' },
    { name: 'Angular', badge: 'Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white' },
    { name: 'Node.js', badge: 'Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
    { name: 'Express', badge: 'Express.js-404D59?style=for-the-badge&logo=express&logoColor=white' },
    { name: 'Django', badge: 'Django-092E20?style=for-the-badge&logo=django&logoColor=white' },
    { name: 'Tailwind CSS', badge: 'Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' }
  ],
  Tools: [
    { name: 'Git', badge: 'Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
    { name: 'Docker', badge: 'Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white' },
    { name: 'Linux', badge: 'Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black' },
    { name: 'Kali', badge: 'Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white' },
    { name: 'Bash', badge: 'GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white' },
    { name: 'Figma', badge: 'Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white' }
  ]
};

export default function TechStackSelector({ selectedTech, updateTech }) {
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

      {Object.entries(techCategories).map(([category, items]) => (
        <div key={category} className="space-y-3">
          <h3 className="text-lg font-medium text-white">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {items.map(tech => {
              const isSelected = selectedTech.some(t => t.name === tech.name);
              return (
                <button
                  key={tech.name}
                  onClick={() => toggleTech(tech)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 ease-in-out hover:-translate-y-0.5 \${
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
      ))}
    </div>
  );
}
