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
    <div className="bg-[#1C1C1E] rounded-[28px] p-5 md:p-6 border border-white/5 card-float">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Social Links</h2>
      <p className="text-[#8E8E93] text-sm mb-5">Connect with people across platforms.</p>

      <div className="space-y-3">
        {socialPlatforms.map(platform => {
          const Icon = platform.icon;
          return (
            <div key={platform.id} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <label className="flex items-center gap-2 sm:w-32 text-sm font-medium text-[#8E8E93]">
                <Icon className="w-5 h-5 text-[#8E8E93]" />
                {platform.name}
              </label>
              <input
                type={platform.id === 'email' ? 'email' : 'url'}
                className="flex-1 min-h-[48px] bg-[#2C2C2E] border-none rounded-2xl px-4 py-3 text-white placeholder-[#636366] focus:outline-none focus:ring-1 focus:ring-blue-600/50"
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
