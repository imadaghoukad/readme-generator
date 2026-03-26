export default function FormInputs({ data, updateData }) {
  return (
    <section className="rounded-3xl border border-emerald-500/15 bg-white/5 p-8 shadow-[0_0_20px_rgba(16,185,129,0.1)] backdrop-blur-xl md:p-10">
      <div className="space-y-8">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-300/80">Personal Info</p>
          <h2 className="text-2xl font-semibold text-white mb-2">Personal Information</h2>
          <p className="text-[var(--color-github-text-muted)] text-sm">Introduce yourself to the community.</p>
        </div>

        <hr className="border-0 border-t border-emerald-500/20" />

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1.5">Name</label>
            <input
              type="text"
              className="w-full bg-[var(--color-github-darker)]/80 border border-[var(--color-github-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/60 transition-colors"
              placeholder="e.g. John Doe"
              value={data.name}
              onChange={(e) => updateData('name', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1.5">Subtitle</label>
            <input
              type="text"
              className="w-full bg-[var(--color-github-darker)]/80 border border-[var(--color-github-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/60 transition-colors"
              placeholder="e.g. Full-stack Developer"
              value={data.subtitle}
              onChange={(e) => updateData('subtitle', e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1.5">About Me</label>
            <textarea
              className="w-full bg-[var(--color-github-darker)]/80 border border-[var(--color-github-border)] rounded-md px-4 py-3 text-white h-28 resize-y focus:outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/60 transition-colors"
              placeholder="Tell us a little about yourself..."
              value={data.about}
              onChange={(e) => updateData('about', e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-300/80">GitHub Integration</p>
            <h3 className="text-xl font-medium text-white mb-2">GitHub Integration</h3>
            <p className="text-[var(--color-github-text-muted)] text-sm">Required to fetch GitHub Stats.</p>
          </div>

          <hr className="border-0 border-t border-emerald-500/20" />

          <div>
            <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1.5">GitHub Username</label>
            <input
              type="text"
              className="w-full bg-[var(--color-github-darker)]/80 border border-[var(--color-github-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/60 transition-colors"
              placeholder="e.g. torvalds"
              value={data.github}
              onChange={(e) => updateData('github', e.target.value)}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--color-github-dark)]/90 border border-[var(--color-github-border)]">
              <span className="text-sm font-medium text-white">Show Top Languages Card</span>
              <button
                onClick={() => updateData('showLanguages', !data.showLanguages)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${data.showLanguages ? 'bg-[var(--color-github-accent)]' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${data.showLanguages ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-[var(--color-github-dark)]/90 border border-[var(--color-github-border)]">
              <span className="text-sm font-medium text-white">Show GitHub Streak Stats</span>
              <button
                onClick={() => updateData('showStreak', !data.showStreak)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${data.showStreak ? 'bg-[var(--color-github-accent)]' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${data.showStreak ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1.5">GitHub Stats Theme</label>
            <select
              className="w-full bg-[var(--color-github-darker)]/80 border border-[var(--color-github-border)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-emerald-400/70 focus:ring-1 focus:ring-emerald-400/60 transition-colors appearance-none cursor-pointer"
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
    </section>
  );
}
