export default function FormInputs({ data, updateData }) {
  return (
    <div className="space-y-8">
      {/* Personal Information Card */}
      <div className="bg-[#1C1C1E] rounded-[28px] p-5 md:p-6 border border-white/5 card-float">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-1">Personal Information</h2>
        <p className="text-[#8E8E93] text-sm mb-5">Introduce yourself to the community.</p>

        <div className="space-y-4">
          <div>
            <label className="block text-[#8E8E93] text-sm font-medium mb-1.5">Name</label>
            <input
              type="text"
              className="w-full min-h-[48px] bg-[#2C2C2E] border-none rounded-2xl px-4 py-3 text-white placeholder-[#636366] focus:outline-none focus:ring-1 focus:ring-blue-600/50"
              placeholder="e.g. John Doe"
              value={data.name}
              onChange={(e) => updateData('name', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[#8E8E93] text-sm font-medium mb-1.5">Subtitle</label>
            <input
              type="text"
              className="w-full min-h-[48px] bg-[#2C2C2E] border-none rounded-2xl px-4 py-3 text-white placeholder-[#636366] focus:outline-none focus:ring-1 focus:ring-blue-600/50"
              placeholder="e.g. Full-stack Developer"
              value={data.subtitle}
              onChange={(e) => updateData('subtitle', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-[#8E8E93] text-sm font-medium mb-1.5">About Me</label>
            <textarea
              className="w-full min-h-[48px] bg-[#2C2C2E] border-none rounded-2xl px-4 py-3 text-white h-28 resize-y placeholder-[#636366] focus:outline-none focus:ring-1 focus:ring-blue-600/50"
              placeholder="Tell us a little about yourself..."
              value={data.about}
              onChange={(e) => updateData('about', e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>

      {/* GitHub Integration Card */}
      <div className="bg-[#1C1C1E] rounded-[28px] p-5 md:p-6 border border-white/5 card-float">
        <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1">GitHub Integration</h3>
        <p className="text-[#8E8E93] text-sm mb-5">Required to fetch GitHub Stats.</p>
        
        <div>
          <label className="block text-[#8E8E93] text-sm font-medium mb-1.5">GitHub Username</label>
          <input
            type="text"
            className="w-full min-h-[48px] bg-[#2C2C2E] border-none rounded-2xl px-4 py-3 text-white placeholder-[#636366] focus:outline-none focus:ring-1 focus:ring-blue-600/50"
            placeholder="e.g. torvalds"
            value={data.github}
            onChange={(e) => updateData('github', e.target.value)}
          />
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between p-4 min-h-[48px] rounded-2xl bg-[#2C2C2E]">
            <span className="text-sm font-medium text-white">Show Top Languages Card</span>
            <button
              onClick={() => updateData('showLanguages', !data.showLanguages)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none ${data.showLanguages ? 'bg-[#0A84FF]' : 'bg-[#3A3A3C]'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${data.showLanguages ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-4 min-h-[48px] rounded-2xl bg-[#2C2C2E]">
            <span className="text-sm font-medium text-white">Show GitHub Streak Stats</span>
            <button
              onClick={() => updateData('showStreak', !data.showStreak)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-200 focus:outline-none ${data.showStreak ? 'bg-[#0A84FF]' : 'bg-[#3A3A3C]'}`}
            >
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${data.showStreak ? 'translate-x-7' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-[#8E8E93] text-sm font-medium mb-1.5">GitHub Stats Theme</label>
          <select
            className="w-full min-h-[48px] bg-[#2C2C2E] border-none rounded-2xl px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-blue-600/50 appearance-none cursor-pointer"
            value={data.statsTheme}
            onChange={(e) => updateData('statsTheme', e.target.value)}
          >
            <option value="github_dark">GitHub Dark</option>
            <option value="radical">Radical</option>
            <option value="dracula">Dracula</option>
            <option value="tokyonight">Tokyo Night</option>
          </select>
        </div>
      </div>
    </div>
  );
}
