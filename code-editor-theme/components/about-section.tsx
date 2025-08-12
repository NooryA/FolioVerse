export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-lg border overflow-hidden shadow-lg">
          {/* Editor Tabs */}
          <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <button className="px-2 py-1 rounded bg-background text-foreground border">about.tsx</button>
              <button className="px-2 py-1 rounded text-muted-foreground hover:text-foreground">skills.json</button>
              <button className="px-2 py-1 rounded text-muted-foreground hover:text-foreground">timeline.md</button>
            </div>
            <div className="text-xs text-muted-foreground">UTF-8 • LF • TypeScript React</div>
          </div>

          {/* Editor Pane */}
          <div className="grid md:grid-cols-2">
            {/* Code Pane */}
            <div className="p-6 font-mono text-sm bg-background/60">
              <pre className="whitespace-pre-wrap leading-6">
                <code>
{`type Developer = {
  name: string;
  role: string;
  location: string;
  interests: string[];
  skills: Record<string, string[]>;
};

const me: Developer = {
  name: "Alex Rodriguez",
  role: "Full-Stack Developer",
  location: "San Francisco, CA",
  interests: ["DX", "Design Systems", "3D/WebGL", "OSS"],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind"],
    backend: ["Node.js", "GraphQL", "PostgreSQL", "MongoDB"],
    cloud: ["AWS", "Docker", "CI/CD"],
  },
};

export function greet(name: string) {
  return ` + "\"" + `Hey ${name}, let’s build something great!` + "\"" + `;
}

// Motivation: create delightful, accessible interfaces that scale.
`}
                </code>
              </pre>
            </div>

            {/* Preview/Doc Pane */}
            <div className="p-8 bg-muted/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I design and build polished developer experiences and user interfaces. I care about performance, accessibility,
                and maintainable architectures.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="rounded-lg border p-4 bg-background">
                  <div className="text-sm text-muted-foreground">Experience</div>
                  <div className="text-2xl font-semibold">5+ years</div>
                </div>
                <div className="rounded-lg border p-4 bg-background">
                  <div className="text-sm text-muted-foreground">Projects shipped</div>
                  <div className="text-2xl font-semibold">50+</div>
                </div>
                <div className="rounded-lg border p-4 bg-background">
                  <div className="text-sm text-muted-foreground">Open Source</div>
                  <div className="text-2xl font-semibold">Active</div>
                </div>
                <div className="rounded-lg border p-4 bg-background">
                  <div className="text-sm text-muted-foreground">Mentorship</div>
                  <div className="text-2xl font-semibold">Available</div>
                </div>
              </div>

              <div className="text-sm">
                <div className="font-semibold mb-2">Highlights</div>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Scaled apps to 100k+ users with robust CI/CD.</li>
                  <li>Led migrations to TypeScript and modern design systems.</li>
                  <li>Built dashboards, editors, and real-time features.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 text-xs border-t bg-muted/40">
            <div className="text-muted-foreground">Ln 1, Col 1 • Spaces: 2 • TS</div>
            <div className="text-muted-foreground">Prettier • ESLint • Git: main</div>
          </div>
        </div>
      </div>
    </section>
  );
}