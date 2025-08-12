export function AboutSection() {
  const timeline = [
    { year: '2019', title: 'Junior Developer', detail: 'Began crafting web apps with a passion for clean UX.' },
    { year: '2021', title: 'Full‑Stack Engineer', detail: 'Built data‑driven products with Next.js and Node.' },
    { year: '2024', title: 'Senior Developer', detail: 'Leading projects, shipping features at scale.' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground mt-2">A journey through time, skills, and experience</p>
        </div>
        <div className="relative border-l-2 border-gray-300 pl-6">
          {timeline.map((item, index) => (
            <div key={item.year} className="mb-8">
              <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-white border-2 border-gray-400" />
              <div className="text-sm text-gray-500">{item.year}</div>
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="text-muted-foreground">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}