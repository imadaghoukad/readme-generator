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
    <section className="rounded-3xl border border-emerald-500/15 bg-white/5 p-8 shadow-[0_0_20px_rgba(16,185,129,0.1)] backdrop-blur-xl md:p-10">
      <div className="space-y-8">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-300/80">Social Links</p>
        <h2 className="text-2xl font-semibold text-white mb-2">Social Links</h2>
        <p className="text-[var(--color-github-text-muted)] text-sm">Connect with people across platforms.</p>
      </div>

      <hr className="border-0 border-t border-emerald-500/20" />

      <div className="space-y-5">
        {socialPlatforms.map(platform => {
          const Icon = platform.icon;
          return (
            <div key={platform.id} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <label className="flex items-center gap-2 sm:w-36 text-sm font-medium text-[var(--color-github-text)]">
                <Icon className="w-5 h-5 text-[var(--color-github-text-muted)]" />
                {platform.name}
              </label>
              <input
                type={platform.id === 'email' ? 'email' : 'url'}
                className="flex-1 bg-[var(--color-github-darker)]/80 border border-[var(--color-github-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/60 transition-colors"
                placeholder={platform.placeholder}
                value={socials[platform.id]}
                onChange={(e) => updateSocials(platform.id, e.target.value)}
              />
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
