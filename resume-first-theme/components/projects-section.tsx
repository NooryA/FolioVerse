export function ProjectsSection() {
  const items = [
    { title: 'E‑commerce Platform', detail: 'Checkout redesign, conversion +18%' },
    { title: 'Analytics Suite', detail: 'Reduced load time by 40%' },
    { title: 'Design System', detail: 'Unified UI across 5 products' },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Selected Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-lg border bg-card p-6">
              <div className="text-xl font-semibold">{i.title}</div>
              <p className="text-muted-foreground">{i.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}