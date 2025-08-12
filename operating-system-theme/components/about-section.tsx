export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl border bg-background shadow-sm overflow-hidden">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm font-medium">About Me — System Info</span>
            </div>
            <div className="text-xs text-muted-foreground">v1.0 • Read-only</div>
          </div>

          {/* Content */}
          <div className="p-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Alex Rodriguez</h2>
              <p className="text-muted-foreground">
                Full‑Stack Developer focused on building delightful web applications. I love operating‑system metaphors, window
                management, and productive UX.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">Role</div>
                  <div className="font-medium">Engineer</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">Experience</div>
                  <div className="font-medium">5+ years</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-xs text-muted-foreground">Location</div>
                  <div className="font-medium">San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold mb-2">Tech Stack</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'].map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-muted/50 border">{t}</span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-semibold mb-2">Capabilities</div>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li>System‑level UX and window management</li>
                  <li>Design systems and accessibility</li>
                  <li>Performance and CI/CD</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t text-xs text-muted-foreground bg-muted/40">
            <div>System: FolioOS • Uptime: 99.99%</div>
            <div>User: alex • Shell: zsh</div>
          </div>
        </div>
      </div>
    </section>
  );
}
