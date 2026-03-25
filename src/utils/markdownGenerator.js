export const generateUnicodeHeading = (text) => {
  const chars = {
    A: '𝗔', B: '𝗕', C: '𝗖', D: '𝗗', E: '𝗘', F: '𝗙', G: '𝗚', H: '𝗛', I: '𝗜', J: '𝗝', K: '𝗞', L: '𝗟', M: '𝗠', N: '𝗡', O: '𝗢', P: '𝗣', Q: '𝗤', R: '𝗥', S: '𝗦', T: '𝗧', U: '𝗨', V: '𝗩', W: '𝗪', X: '𝗫', Y: '𝗬', Z: '𝗭',
    a: '𝗮', b: '𝗯', c: '𝗰', d: '𝗱', e: '𝗲', f: '𝗳', g: '𝗴', h: '𝗵', i: '𝗶', j: '𝗷', k: '𝗸', l: '𝗹', m: '𝗺', n: '𝗻', o: '𝗼', p: '𝗽', q: '𝗾', r: '𝗿', s: '𝘀', t: '𝘁', u: '𝘂', v: '𝘃', w: '𝘄', x: '𝘅', y: '𝘆', z: '𝘇'
  };
  return text.split('').map(c => chars[c] || c).join('');
};

export function generateMarkdown(data) {
  let md = '';

  // Header
  if (data.name) {
    md += `<h1 align="center" style="margin-bottom: 0;">Hi 👋, I'm ${data.name}</h1>\n`;
  }
  if (data.subtitle) {
    md += `<h3 align="center" style="margin-top: 0;">${data.subtitle}</h3>\n\n`;
  }

  // Socials
  const socialLinks = [];
  if (data.socials.twitter) socialLinks.push(`<a href="${data.socials.twitter}" target="_blank"><img src="https://img.shields.io/badge/twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white" alt="Twitter"/></a>`);
  if (data.socials.linkedin) socialLinks.push(`<a href="${data.socials.linkedin}" target="_blank"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>`);
  if (data.socials.instagram) socialLinks.push(`<a href="${data.socials.instagram}" target="_blank"><img src="https://img.shields.io/badge/instagram-%23E4405F.svg?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>`);
  if (data.socials.facebook) socialLinks.push(`<a href="${data.socials.facebook}" target="_blank"><img src="https://img.shields.io/badge/facebook-%231877F2.svg?style=for-the-badge&logo=facebook&logoColor=white" alt="Facebook"/></a>`);
  if (data.socials.youtube) socialLinks.push(`<a href="${data.socials.youtube}" target="_blank"><img src="https://img.shields.io/badge/youtube-%23FF0000.svg?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/></a>`);
  if (data.socials.discord) socialLinks.push(`<a href="${data.socials.discord}" target="_blank"><img src="https://img.shields.io/badge/discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"/></a>`);
  if (data.socials.email) socialLinks.push(`<a href="mailto:${data.socials.email}"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email"/></a>`);

  if (socialLinks.length > 0) {
    md += `<p align="center">\n${socialLinks.join(' ')}\n</p>\n\n`;
  }

  // About Me
  if (data.about) {
    md += `## ${generateUnicodeHeading('About Me')}\n\n${data.about}\n\n`;
  }

  // Tech Stack
  if (data.techStack && data.techStack.length > 0) {
    md += `## ${generateUnicodeHeading('Tech Stack')}\n\n`;
    md += `<p align="left">\n`;
    md += data.techStack.map(tech => `<img src="https://img.shields.io/badge/${tech.badge}" alt="${tech.name}" />`).join(' ');
    md += `\n</p>\n\n`;
  }

  // GitHub Stats
  if (data.github) {
    md += `## ${generateUnicodeHeading('GitHub Stats')}\n\n`;
    md += `<p align="center">\n`;
    md += `  <img src="https://github-readme-stats.vercel.app/api?username=${data.github}&show_icons=true&theme=${data.statsTheme}" alt="${data.github}'s GitHub stats" />\n`;
    md += `  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${data.github}&layout=compact&theme=${data.statsTheme}" alt="Top Languages" />\n`;
    md += `</p>\n\n`;
  }

  return md;
}
