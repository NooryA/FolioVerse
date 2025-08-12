export function ProjectsSection() {
  const projects = [
    { id: 1, title: 'Analytics Dashboard', description: 'Executive-grade analytics with SSO and SOC2 compliance', tags: ['Next.js', 'PostgreSQL', 'SSO'], kpi: '98% CSAT' },
    { id: 2, title: 'Customer Portal', description: 'Self-serve billing, usage insights, and ticketing', tags: ['React', 'Stripe', 'GraphQL'], kpi: 'ARR +25%' },
    { id: 3, title: 'Design System', description: 'Accessible component library for enterprise scale', tags: ['TypeScript', 'Storybook', 'A11y'], kpi: 'Dev speed +40%' },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Case Studies</h2>
          <p className="text-muted-foreground mt-2">Impact-focused delivery with measurable outcomes</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs px-2 py-1 rounded bg-primary/10 text-primary font-medium">{project.kpi}</span>
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded border bg-background">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-sm font-medium text-primary hover:underline">Read Case Study</button>
                  <button className="text-sm px-3 py-1 rounded bg-primary text-primary-foreground">View Demo</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-4">
          <div className="rounded-lg border bg-background p-6 text-center">
            <div className="text-sm text-muted-foreground">NPS</div>
            <div className="text-2xl font-semibold">72</div>
          </div>
          <div className="rounded-lg border bg-background p-6 text-center">
            <div className="text-sm text-muted-foreground">Time to Launch</div>
            <div className="text-2xl font-semibold">8 weeks</div>
          </div>
          <div className="rounded-lg border bg-background p-6 text-center">
            <div className="text-sm text-muted-foreground">On-time Delivery</div>
            <div className="text-2xl font-semibold">100%</div>
          </div>
        </div>
      </div>
    </section>
  );
}