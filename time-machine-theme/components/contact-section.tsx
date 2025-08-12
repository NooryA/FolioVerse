export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Send a Time Capsule</h2>
          <p className="text-muted-foreground">Leave a message to be retrieved at just the right moment.</p>
        </div>
        <form className="grid gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input className="rounded-md border bg-background px-3 py-2" placeholder="Your name" />
            <input type="email" className="rounded-md border bg-background px-3 py-2" placeholder="you@example.com" />
          </div>
          <textarea rows={5} className="rounded-md border bg-background px-3 py-2 resize-none" placeholder="Your message across time..." />
          <button className="w-full sm:w-auto px-6 py-3 rounded-md bg-primary text-primary-foreground">Dispatch</button>
        </form>
      </div>
    </section>
  );
}