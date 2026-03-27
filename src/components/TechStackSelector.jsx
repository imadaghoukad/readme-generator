import { useState } from 'react';
import { ChevronDown, ChevronRight, Shield, Cpu, Globe, Terminal, Monitor, Server, Wrench, Check } from 'lucide-react';

/* ── Category icons mapped by key ── */
const categoryIcons = {
  'Frontend':                Monitor,
  'Backend':                 Server,
  'Scripting & Automation':  Terminal,
  'Low-Level & Systems':     Cpu,
  'Cybersecurity & Pentesting': Shield,
  'Networking & Cloud Security': Globe,
  'DevOps & Tools':          Wrench,
};

/* ── Tech items — each has a shields.io badge string and a README category ── */
const techCategories = {
  Frontend: [
    { name: 'JavaScript', badge: 'JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', category: 'Frontend' },
    { name: 'TypeScript', badge: 'TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white', category: 'Frontend' },
    { name: 'React', badge: 'React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB', category: 'Frontend' },
    { name: 'Next.js', badge: 'Next-black?style=for-the-badge&logo=next.js&logoColor=white', category: 'Frontend' },
    { name: 'Vue.js', badge: 'Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D', category: 'Frontend' },
    { name: 'Angular', badge: 'Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white', category: 'Frontend' },
    { name: 'Tailwind CSS', badge: 'Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white', category: 'Frontend' },
    { name: 'Figma', badge: 'Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white', category: 'Frontend' },
  ],
  Backend: [
    { name: 'Node.js', badge: 'Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white', category: 'Backend' },
    { name: 'Express', badge: 'Express.js-404D59?style=for-the-badge&logo=express&logoColor=white', category: 'Backend' },
    { name: 'Django', badge: 'Django-092E20?style=for-the-badge&logo=django&logoColor=white', category: 'Backend' },
    { name: 'Java', badge: 'Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white', category: 'Backend' },
    { name: 'PHP', badge: 'PHP-777BB4?style=for-the-badge&logo=php&logoColor=white', category: 'Backend' },
  ],
  'Scripting & Automation': [
    { name: 'Python', badge: 'Python-14354C?style=for-the-badge&logo=python&logoColor=white', category: 'Scripting & Automation' },
    { name: 'Bash', badge: 'GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white', category: 'Scripting & Automation' },
    { name: 'Go', badge: 'Go-00ADD8?style=for-the-badge&logo=go&logoColor=white', category: 'Scripting & Automation' },
    { name: 'Rust', badge: 'Rust-000000?style=for-the-badge&logo=rust&logoColor=white', category: 'Scripting & Automation' },
    { name: 'PowerShell', badge: 'PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white', category: 'Scripting & Automation' },
    { name: 'Lua', badge: 'Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white', category: 'Scripting & Automation' },
    { name: 'Perl', badge: 'Perl-39457E?style=for-the-badge&logo=perl&logoColor=white', category: 'Scripting & Automation' },
    { name: 'Ruby', badge: 'Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white', category: 'Scripting & Automation' },
  ],
  'Low-Level & Systems': [
    { name: 'C', badge: 'C-00599C?style=for-the-badge&logo=c&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'C++', badge: 'C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'Assembly', badge: 'Assembly-654FF0?style=for-the-badge&logo=assemblyscript&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'Linux', badge: 'Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black', category: 'Low-Level & Systems' },
    { name: 'Makefile', badge: 'Makefile-000000?style=for-the-badge&logo=make&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'Kernel Dev', badge: 'Kernel-FCC624?style=for-the-badge&logo=linux&logoColor=black', category: 'Low-Level & Systems' },
    { name: 'Embedded Systems', badge: 'Embedded-3C3C3D?style=for-the-badge&logo=arduino&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'Drivers', badge: 'Drivers-0078D6?style=for-the-badge&logo=windows&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'Reverse Engineering', badge: 'Reverse%20Engineering-000000?style=for-the-badge&logo=hackaday&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'GDB', badge: 'GDB-A42E2B?style=for-the-badge&logo=gnu&logoColor=white', category: 'Low-Level & Systems' },
    { name: 'LLDB', badge: 'LLDB-4B0082?style=for-the-badge&logo=llvm&logoColor=white', category: 'Low-Level & Systems' },
  ],
  'Cybersecurity & Pentesting': [
    { name: 'Kali Linux', badge: 'Kali_Linux-557C94?style=for-the-badge&logo=kali-linux&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'Metasploit', badge: 'Metasploit-2596CD?style=for-the-badge&logo=metasploit&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'Nmap', badge: 'Nmap-4F5E6B?style=for-the-badge&logo=nmap&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'Wireshark', badge: 'Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'Burp Suite', badge: 'Burp%20Suite-FF6633?style=for-the-badge&logo=burp-suite&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'John the Ripper', badge: 'John%20the%20Ripper-000000?style=for-the-badge&logo=hackthebox&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'OWASP', badge: 'OWASP-000000?style=for-the-badge&logo=owasp&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'TryHackMe', badge: 'TryHackMe-212C42?style=for-the-badge&logo=tryhackme&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'HackTheBox', badge: 'HackTheBox-111921?style=for-the-badge&logo=hackthebox&logoColor=9FEF00', category: 'Cybersecurity & Pentesting' },
    { name: 'Hashcat', badge: 'Hashcat-3E3E3E?style=for-the-badge&logo=hackaday&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'Ghidra', badge: 'Ghidra-BF0000?style=for-the-badge&logo=nsa&logoColor=white', category: 'Cybersecurity & Pentesting' },
    { name: 'Aircrack-ng', badge: 'Aircrack--ng-00599C?style=for-the-badge&logo=wifi&logoColor=white', category: 'Cybersecurity & Pentesting' },
  ],
  'Networking & Cloud Security': [
    { name: 'Docker Security', badge: 'Docker%20Security-2CA5E0?style=for-the-badge&logo=docker&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'Kubernetes', badge: 'Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'AWS', badge: 'AWS-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'Azure', badge: 'Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'GCP', badge: 'GCP-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'Firewalls', badge: 'Firewall-EE0000?style=for-the-badge&logo=pfSense&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'VPN / Proxy', badge: 'VPN-4B8BBE?style=for-the-badge&logo=wireguard&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'Tor', badge: 'Tor-7D4698?style=for-the-badge&logo=tor-browser&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'Cloudflare', badge: 'Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white', category: 'Networking & Cloud Security' },
    { name: 'Nginx', badge: 'Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white', category: 'Networking & Cloud Security' },
  ],
  'DevOps & Tools': [
    { name: 'Git', badge: 'Git-F05032?style=for-the-badge&logo=git&logoColor=white', category: 'DevOps & Tools' },
    { name: 'Docker', badge: 'Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white', category: 'DevOps & Tools' },
    { name: 'GitHub Actions', badge: 'GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white', category: 'DevOps & Tools' },
    { name: 'Terraform', badge: 'Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white', category: 'DevOps & Tools' },
    { name: 'Ansible', badge: 'Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white', category: 'DevOps & Tools' },
    { name: 'Jenkins', badge: 'Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white', category: 'DevOps & Tools' },
    { name: 'VS Code', badge: 'VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white', category: 'DevOps & Tools' },
    { name: 'Vim', badge: 'Vim-019733?style=for-the-badge&logo=vim&logoColor=white', category: 'DevOps & Tools' },
  ],
};

/* ── Default state: core categories open, new expansions collapsed ── */
const defaultExpanded = {
  'Frontend': false,
  'Backend': false,
  'Scripting & Automation': false,
  'Low-Level & Systems': false,
  'Cybersecurity & Pentesting': false,
  'Networking & Cloud Security': false,
  'DevOps & Tools': false,
};

export default function TechStackSelector({ selectedTech, updateTech }) {
  const [expandedCategories, setExpandedCategories] = useState(defaultExpanded);

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
      <div className="px-1">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Tech Stack</h2>
        <p className="text-[#8E8E93] text-sm">Select the technologies you work with.</p>
      </div>

      <div className="space-y-4">
        {Object.entries(techCategories).map(([category, items]) => {
          const isExpanded = expandedCategories[category];
          const selectedInCategory = items.filter(tech => selectedTech.some(t => t.name === tech.name)).length;
          const IconComponent = categoryIcons[category];

          return (
            <div key={category} className="bg-[#1C1C1E] rounded-[28px] overflow-hidden border border-white/5 card-float">
              <button
                onClick={() => toggleCategory(category)}
                className="w-full flex items-center justify-between p-4 md:p-5 min-h-[48px] hover:bg-white/5 transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  {isExpanded ? <ChevronDown className="w-5 h-5 text-[#8E8E93]" /> : <ChevronRight className="w-5 h-5 text-[#8E8E93]" />}
                  {IconComponent && <IconComponent className="w-5 h-5 text-[#0A84FF]" />}
                  <span className="font-semibold text-white">{category}</span>
                  {selectedInCategory > 0 && (
                    <span className="bg-[#0A84FF] text-white text-xs px-2.5 py-0.5 rounded-full font-medium">
                      {selectedInCategory}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#636366] uppercase tracking-wider font-medium">
                  {items.length} items
                </span>
              </button>

              {isExpanded && (
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 border-t border-white/5 pt-4">
                    {items.map(tech => {
                      const isSelected = selectedTech.some(t => t.name === tech.name);
                      return (
                        <button
                          key={tech.name}
                          onClick={() => toggleTech(tech)}
                          className={`relative flex items-center justify-center text-center px-3 py-2.5 min-h-[48px] rounded-full text-xs md:text-sm font-medium transition-all duration-200 ease-in-out ${
                            isSelected
                              ? 'bg-[#0A84FF]/15 border border-[#0A84FF]/40 text-[#0A84FF] shadow-[0_0_12px_rgba(10,132,255,0.2)]'
                              : 'bg-[#2C2C2E] border border-transparent text-[#8E8E93] hover:text-white hover:border-white/10'
                          }`}
                        >
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 mr-1.5 shrink-0" strokeWidth={3} />
                          )}
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
