export function ProjectsSection() {
  const projects = [
    { id: 1, title: 'Project One', description: 'Amazing project with creative studio design' },
    { id: 2, title: 'Project Two', description: 'Another cool project showcasing my skills' },
    { id: 3, title: 'Project Three', description: 'Innovative solution with modern tech stack' },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}