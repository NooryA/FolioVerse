export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu shadow-neu dark:shadow-neu-dark p-8">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-neu-textDark dark:text-neu-darkText mb-6 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-neu-textLight dark:text-neu-darkTextLight mb-8">
            I’m always open to discussing new projects and opportunities.
          </p>
          <form className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-neu shadow-neu-inset dark:shadow-neu-dark-inset bg-neu-surface dark:bg-neu-darkSurface p-4">
                <label className="block text-sm text-neu-textLight dark:text-neu-darkTextLight mb-2">Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent outline-none text-neu-textDark dark:text-neu-darkText"
                />
              </div>
              <div className="rounded-neu shadow-neu-inset dark:shadow-neu-dark-inset bg-neu-surface dark:bg-neu-darkSurface p-4">
                <label className="block text-sm text-neu-textLight dark:text-neu-darkTextLight mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent outline-none text-neu-textDark dark:text-neu-darkText"
                />
              </div>
            </div>
            <div className="rounded-neu shadow-neu-inset dark:shadow-neu-dark-inset bg-neu-surface dark:bg-neu-darkSurface p-4">
              <label className="block text-sm text-neu-textLight dark:text-neu-darkTextLight mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent outline-none resize-none text-neu-textDark dark:text-neu-darkText"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-neu bg-neu-surface dark:bg-neu-darkSurface shadow-neu dark:shadow-neu-dark hover:shadow-neu-hover dark:hover:shadow-neu-dark-hover text-neu-textDark dark:text-neu-darkText font-medium"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
