export function ProjectsSection() {
  const projects = [
    { year: 2024, title: 'Temporal Dashboard', summary: 'Real‑time metrics across time slices', tags: ['Next.js', 'WebSockets'] },
    { year: 2023, title: 'Archive Explorer', summary: 'Browse historical releases with diffs', tags: ['TypeScript', 'Prisma'] },
    { year: 2022, title: 'Retro UI Kit', summary: 'Vintage‑styled component library', tags: ['Tailwind', 'Storybook'] },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects Over Time</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.title} className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm px-2 py-1 rounded bg-muted">{p.year}</span>
                <div className="flex gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded border">{t}</span>
                  ))}
                </div>
              </div>
              <div className="text-xl font-semibold">{p.title}</div>
              <p className="text-muted-foreground">{p.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}