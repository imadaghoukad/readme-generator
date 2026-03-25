import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaYoutube, FaDiscord } from 'react-icons/fa';

const socialPlatforms = [
  { id: 'linkedin', name: 'LinkedIn', icon: FaLinkedin, placeholder: 'https://linkedin.com/in/username' },
  { id: 'twitter', name: 'Twitter', icon: FaTwitter, placeholder: 'https://twitter.com/username' },
  { id: 'instagram', name: 'Instagram', icon: FaInstagram, placeholder: 'https://instagram.com/username' },
  { id: 'facebook', name: 'Facebook', icon: FaFacebook, placeholder: 'https://facebook.com/username' },
  { id: 'youtube', name: 'YouTube', icon: FaYoutube, placeholder: 'https://youtube.com/c/username' },
  { id: 'discord', name: 'Discord', icon: FaDiscord, placeholder: 'https://discord.gg/invitecode' },
  { id: 'email', name: 'Email', icon: FaEnvelope, placeholder: 'you@example.com' }
];

export default function SocialLinks({ socials, updateSocials }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white mb-1">Social Links</h2>
        <p className="text-[var(--color-github-text-muted)] text-sm mb-4">Connect with people across platforms.</p>
      </div>

      <div className="space-y-4">
        {socialPlatforms.map(platform => {
          const Icon = platform.icon;
          return (
            <div key={platform.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="flex items-center gap-2 sm:w-32 text-sm font-medium text-[var(--color-github-text)]">
                <Icon className="w-5 h-5 text-[var(--color-github-text-muted)]" />
                {platform.name}
              </label>
              <input
                type={platform.id === 'email' ? 'email' : 'url'}
                className="flex-1 bg-[var(--color-github-darker)] border border-[var(--color-github-border)] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[var(--color-github-accent)] focus:ring-1 focus:ring-[var(--color-github-accent)] transition-colors"
                placeholder={platform.placeholder}
                value={socials[platform.id]}
                onChange={(e) => updateSocials(platform.id, e.target.value)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
