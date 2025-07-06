import { Mail, MessageCircle, Github, Linkedin, Twitter, ExternalLink, Users, Coffee } from "lucide-react";

export function ContactSection() {
  const contactMethods = [
    {
      title: "Email",
      description: "Send me an email for professional inquiries",
      icon: Mail,
      value: "alex@alexrodriguez.dev",
      action: "mailto:alex@alexrodriguez.dev",
      color: "bg-blue-500",
    },
    {
      title: "GitHub Discussions",
      description: "Start a discussion about projects or collaborations",
      icon: MessageCircle,
      value: "Open Discussion",
      action: "https://github.com/alexrodriguez/discussions",
      color: "bg-gray-800",
    },
    {
      title: "Coffee Chat",
      description: "Schedule a virtual coffee chat to discuss ideas",
      icon: Coffee,
      value: "Book a Meeting",
      action: "https://calendly.com/alexrodriguez",
      color: "bg-amber-600",
    },
    {
      title: "Mentorship",
      description: "Get guidance on your development journey",
      icon: Users,
      value: "Request Mentorship",
      action: "https://mentorship.alexrodriguez.dev",
      color: "bg-green-600",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/alexrodriguez",
      username: "@alexrodriguez",
      followers: "2.3K",
      description: "Follow my open source work",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/alexrodriguez",
      username: "Alex Rodriguez",
      followers: "5.2K",
      description: "Connect professionally",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/alexrodriguez",
      username: "@alexrodriguez",
      followers: "1.8K",
      description: "Follow my tech thoughts",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to contribute to meaningful open-source
            initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Get in Touch</h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${method.color} text-white`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{method.title}</h4>
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{method.description}</p>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Contribution Style */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Follow My Work</h3>

            {/* Social Platforms */}
            <div className="space-y-4 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <social.icon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{social.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{social.username}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{social.followers}</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">followers</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">{social.description}</p>
                </a>
              ))}
            </div>

            {/* Contribution Style Status */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Current Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-700 dark:text-gray-300">Available for new projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Open to collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Mentoring developers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Speaking at events</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-lg mb-6 opacity-90">Let&apos;s collaborate and create something that makes a difference in the world.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:alex@alexrodriguez.dev"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
              <a
                href="https://github.com/alexrodriguez"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
