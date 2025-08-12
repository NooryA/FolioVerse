export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "File Manager",
      description: "Tabbing, drag-and-drop, and preview panes for productivity.",
      actions: ["Open", "Pin", "Settings"],
    },
    {
      id: 2,
      title: "Task Center",
      description: "Background jobs with progress, logs, and retry policies.",
      actions: ["Open", "Logs", "Terminate"],
    },
    {
      id: 3,
      title: "Dev Console",
      description: "Realtime logs, metrics, and inspector tools.",
      actions: ["Open", "Tail", "Export"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-accent/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Apps & Utilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="rounded-xl border bg-background shadow-sm overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium">{project.title}</span>
                </div>
                <div className="text-xs text-muted-foreground">Running</div>
              </div>
              {/* Body */}
              <div className="p-6">
                <p className="text-muted-foreground mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.actions.map((a) => (
                    <button key={a} className="text-xs px-2 py-1 rounded border bg-background hover:bg-muted/50">
                      {a}
                    </button>
                  ))}
                </div>
              </div>
              {/* Status bar */}
              <div className="px-4 py-2 border-t text-xs text-muted-foreground bg-muted/40">Status: OK • CPU 2% • RAM 512MB</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}