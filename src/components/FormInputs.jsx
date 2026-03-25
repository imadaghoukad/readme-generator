export default function FormInputs({ data, updateData }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-white mb-1">Personal Information</h2>
        <p className="text-[var(--color-github-text-muted)] text-sm mb-4">Introduce yourself to the community.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1">Name</label>
          <input
            type="text"
            className="w-full bg-[var(--color-github-darker)] border border-[var(--color-github-border)] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[var(--color-github-accent)] focus:ring-1 focus:ring-[var(--color-github-accent)] transition-colors"
            placeholder="e.g. John Doe"
            value={data.name}
            onChange={(e) => updateData('name', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1">Subtitle</label>
          <input
            type="text"
            className="w-full bg-[var(--color-github-darker)] border border-[var(--color-github-border)] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[var(--color-github-accent)] focus:ring-1 focus:ring-[var(--color-github-accent)] transition-colors"
            placeholder="e.g. Full-stack Developer"
            value={data.subtitle}
            onChange={(e) => updateData('subtitle', e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1">About Me</label>
          <textarea
            className="w-full bg-[var(--color-github-darker)] border border-[var(--color-github-border)] rounded-md px-3 py-2 text-white h-24 resize-y focus:outline-none focus:border-[var(--color-github-accent)] focus:ring-1 focus:ring-[var(--color-github-accent)] transition-colors"
            placeholder="Tell us a little about yourself..."
            value={data.about}
            onChange={(e) => updateData('about', e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-[var(--color-github-border)]">
        <h3 className="text-lg font-medium text-white mb-1">GitHub Integration</h3>
        <p className="text-[var(--color-github-text-muted)] text-sm mb-4">Required to fetch GitHub Stats.</p>
        <div>
          <label className="block text-sm font-medium text-[var(--color-github-text)] mb-1">GitHub Username</label>
          <input
            type="text"
            className="w-full bg-[var(--color-github-darker)] border border-[var(--color-github-border)] rounded-md px-3 py-2 text-white focus:outline-none focus:border-[var(--color-github-accent)] focus:ring-1 focus:ring-[var(--color-github-accent)] transition-colors"
            placeholder="e.g. torvalds"
            value={data.github}
            onChange={(e) => updateData('github', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
