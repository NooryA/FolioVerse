export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
        <p className="text-lg mb-8 text-muted-foreground">I&apos;m always open to discussing new projects and opportunities.</p>
        <a
          href="mailto:contact@example.com"
          className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          Send Me An Email
        </a>
      </div>
    </section>
  );
}
