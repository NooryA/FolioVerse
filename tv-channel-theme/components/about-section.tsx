export function AboutSection() {
  const segments = [
    { name: 'About Me', slot: '08:00', desc: 'Developer with a love for broadcast‑style UX and high‑impact visuals.' },
    { name: 'Skills', slot: '12:00', desc: 'TypeScript, Next.js, Node.js, Tailwind, and design systems.' },
    { name: 'Highlights', slot: '18:00', desc: 'Shipped dashboards, design systems, and real‑time apps.' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About the Channel</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((s) => (
            <div key={s.name} className="rounded-lg border bg-card p-6">
              <div className="text-xs text-muted-foreground">Slot {s.slot}</div>
              <div className="text-xl font-semibold">{s.name}</div>
              <p className="text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}