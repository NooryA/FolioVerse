export function ProjectsSection() {
  const shows = [
    { title: 'Project News', desc: 'Latest launches and updates', tag: 'Live' },
    { title: 'Dev Documentary', desc: 'Deep dives into architecture', tag: 'HD' },
    { title: 'UX Spotlight', desc: 'Design systems and accessibility', tag: '4K' },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Program Lineup</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((s) => (
            <div key={s.title} className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-semibold">{s.title}</div>
                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">{s.tag}</span>
              </div>
              <p className="text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <button className="text-sm text-primary hover:underline">Watch Trailer</button>
                <button className="text-sm px-3 py-1 rounded bg-primary text-primary-foreground">View Episode</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}