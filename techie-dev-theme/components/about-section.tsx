export function AboutSection() {
  const stack = ['Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL', 'Docker'];
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground">Building reliable systems with modern web tech</p>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="text-lg text-muted-foreground mb-6">
            I focus on developer experience, type‑safe APIs, and scalable frontends.
          </div>
          <div className="flex flex-wrap gap-2">
            {stack.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded border bg-background">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}