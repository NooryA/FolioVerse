"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Globe, Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "web",
  });

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const parallaxSpeed = scrollY * 0.1;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "", projectType: "web" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "alex@example.com", href: "mailto:alex@example.com" },
    { icon: <Phone className="w-6 h-6" />, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: <MapPin className="w-6 h-6" />, label: "Location", value: "San Francisco, CA", href: "#" },
    { icon: <Calendar className="w-6 h-6" />, label: "Schedule", value: "Book a Call", href: "#" },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "#" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "#" },
    { icon: <Twitter className="w-6 h-6" />, label: "Twitter", href: "#" },
    { icon: <Globe className="w-6 h-6" />, label: "Website", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="gradient-orb orb-primary w-96 h-96 top-20 left-20 floating-element"
          style={{ transform: `translateY(${parallaxSpeed}px) translateZ(100px)` }}
        />
        <div
          className="gradient-orb orb-secondary w-72 h-72 bottom-20 right-20 floating-element"
          style={{ transform: `translateY(${parallaxSpeed * 1.5}px) translateZ(150px)` }}
        />
        <div
          className="gradient-orb orb-accent w-48 h-48 top-1/2 left-1/2 floating-element"
          style={{ transform: `translate(-50%, -50%) translateY(${parallaxSpeed * 0.8}px) translateZ(200px)` }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="particle floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 12 + 8}s`,
              transform: `translateZ(${Math.random() * 200}px) translateY(${parallaxSpeed * 0.5}px)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-3d">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="depth-card">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Start a Project</h3>
              <p className="text-gray-300">Fill out the form below and I'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    placeholder="Project subject"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  >
                    <option value="web">Web Application</option>
                    <option value="3d">3D Experience</option>
                    <option value="mobile">Mobile App</option>
                    <option value="vr">VR/AR Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, timeline, and any specific requirements..."
                />
              </div>

              <button type="submit" className="button-3d w-full flex items-center justify-center gap-3 text-lg py-4">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="depth-card">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">{method.icon}</div>
                    <div>
                      <div className="text-white font-medium">{method.label}</div>
                      <div className="text-gray-300 text-sm">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="depth-card">
              <h3 className="text-2xl font-bold text-white mb-6">Connect Online</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <div className="text-purple-400 group-hover:text-pink-400 transition-colors">{social.icon}</div>
                    <span className="text-white font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="depth-card">
              <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white font-medium">Available for new projects</span>
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="mb-2">🕐 Response time: Usually within 24 hours</p>
                  <p className="mb-2">📍 Time zone: PST (UTC-8)</p>
                  <p className="mb-2">💼 Currently accepting: Web & 3D projects</p>
                  <p>🚀 Next availability: Immediate start</p>
                </div>
              </div>
            </div>

            {/* Fun Stats */}
            <div className="depth-card">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24h</div>
                  <div className="text-gray-300 text-sm">Avg Response</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-400 mb-1">98%</div>
                  <div className="text-gray-300 text-sm">Client Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-indigo-400 mb-1">100+</div>
                  <div className="text-gray-300 text-sm">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400 mb-1">5⭐</div>
                  <div className="text-gray-300 text-sm">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
