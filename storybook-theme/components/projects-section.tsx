export function ProjectsSection() {
  const chapters = [
    { title: 'Chapter I: The Dashboard', desc: 'A tale of real‑time data and elegant charts.' },
    { title: 'Chapter II: The Design System', desc: 'Patterns that brought harmony to UI.' },
    { title: 'Chapter III: The Migration', desc: 'The journey from JS to TS.' },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Chapters</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((c) => (
            <div key={c.title} className="rounded-lg border bg-card p-6">
              <div className="text-xl font-semibold">{c.title}</div>
              <p className="text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}