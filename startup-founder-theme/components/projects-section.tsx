export function ProjectsSection() {
  const studies = [
    { title: 'MVP to PMF', impact: 'ARR +$1.2M', desc: 'Shipped core features and iterated to product‑market fit.' },
    { title: 'Design System', impact: 'Dev speed +40%', desc: 'Unified UI across apps with accessible components.' },
    { title: 'Data Platform', impact: 'Costs -30%', desc: 'Centralized analytics with robust pipelines.' },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Studies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((s) => (
            <div key={s.title} className="rounded-lg border bg-card p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-xl font-semibold">{s.title}</div>
                <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary">{s.impact}</span>
              </div>
              <p className="text-muted-foreground">{s.desc}</p>
              <div className="mt-4">
                <button className="text-sm text-primary hover:underline">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}