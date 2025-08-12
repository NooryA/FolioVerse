export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Professional Summary</h2>
          <p className="text-muted-foreground">Full‑Stack Developer with 5+ years of experience</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="text-sm text-muted-foreground">Core Skills</div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
              <li>React / Next.js</li>
              <li>TypeScript / Node.js</li>
              <li>SQL / NoSQL</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="text-sm text-muted-foreground">Achievements</div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
              <li>Scaled apps to 100k+ users</li>
              <li>Improved performance by 40%</li>
              <li>Led migration to TypeScript</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="text-sm text-muted-foreground">Focus</div>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 mt-2">
              <li>DX and a11y</li>
              <li>Design systems</li>
              <li>Reliable delivery</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
