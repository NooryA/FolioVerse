export function ProjectsSection() {
  const repos = [
    { name: 'dx-kit', desc: 'CLI tools and utilities for developer workflows' },
    { name: 'react-forms', desc: 'Type‑safe forms with great UX' },
    { name: 'observability', desc: 'Tracing and logs for apps at scale' },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((r) => (
            <div key={r.name} className="rounded-lg border bg-card p-6">
              <div className="text-xl font-semibold">{r.name}</div>
              <p className="text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}