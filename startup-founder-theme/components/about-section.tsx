export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Founder Profile</h2>
          <p className="text-muted-foreground mt-2">Mission‑driven engineering and product execution</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { label: 'Products Shipped', value: '12' },
            { label: 'Users Served', value: '100k+' },
            { label: 'NPS', value: '72' },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border bg-card p-6 text-center">
              <div className="text-sm text-muted-foreground">{s.label}</div>
              <div className="text-3xl font-semibold">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="text-xl font-semibold mb-2">Mission</div>
            <p className="text-muted-foreground">Build delightful, scalable products that solve real problems and create value.</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <div className="text-xl font-semibold mb-2">Values</div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>User empathy</li>
              <li>Reliability</li>
              <li>Velocity with quality</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}