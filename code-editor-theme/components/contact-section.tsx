export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Terminal/Form Panel */}
          <div className="rounded-lg border overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
              <div className="text-sm font-mono">terminal — contact.sh</div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="p-6 bg-background/60">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <textarea
                    rows={5}
                    className="w-full rounded-md border bg-background px-3 py-2 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button type="submit" className="inline-flex px-4 py-2 rounded-md border bg-primary text-primary-foreground">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Code Preview */}
          <div className="rounded-lg border overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/40">
              <div className="text-sm font-mono">preview — contact.ts</div>
              <div className="text-xs text-muted-foreground">UTF-8 • LF • TypeScript</div>
            </div>
            <div className="p-6 font-mono text-sm bg-muted/20">
              <pre className="whitespace-pre-wrap leading-6">
{`type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

async function submitContact(payload: ContactPayload) {
  // TODO: wire this to your API route
  console.log('Sending message...', payload);
  return { ok: true };
}

// Tip: Validate on both client and server.
`}
              </pre>
            </div>
            <div className="px-4 py-2 text-xs border-t bg-muted/40 text-muted-foreground">Ln 1, Col 1 • Spaces: 2</div>
          </div>
        </div>
      </div>
    </section>
  );
}