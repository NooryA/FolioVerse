"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Clock,
  Coffee,
  CheckCircle,
} from "lucide-react";

export function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "alex@example.com",
      href: "mailto:alex@example.com",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "#", color: "bg-gray-900" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "#", color: "bg-blue-600" },
    { icon: <Twitter className="w-6 h-6" />, label: "Twitter", href: "#", color: "bg-sky-500" },
    { icon: <Globe className="w-6 h-6" />, label: "Website", href: "#", color: "bg-indigo-600" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's work together to bring your ideas to life
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-[120px]">
          {/* Contact Form - Large */}
          <div className="md:col-span-4 lg:col-span-5 md:row-span-4 bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="w-6 h-6 text-blue-500" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium py-3 px-6 rounded-xl hover:from-blue-600 hover:to-green-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {isSuccess && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-700 font-medium">Message sent successfully! I'll get back to you soon.</span>
              </div>
            )}
          </div>

          {/* Contact Methods */}
          {contactMethods.map((method, index) => (
            <div key={index} className="md:col-span-2 lg:col-span-1 md:row-span-1">
              <a
                href={method.href}
                className={`block h-full bg-gradient-to-br ${method.color} rounded-2xl p-4 text-white hover:scale-105 transition-transform duration-300 group`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">{method.icon}</div>
                </div>
                <h4 className="font-semibold mb-1">{method.label}</h4>
                <p className="text-sm opacity-90">{method.value}</p>
              </a>
            </div>
          ))}

          {/* Availability Status */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-green-50 rounded-2xl p-4 border border-green-200">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div>
                <h4 className="font-semibold text-green-800">Available for Projects</h4>
                <p className="text-sm text-green-600">Open to new opportunities</p>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="md:col-span-2 lg:col-span-1 md:row-span-1 bg-blue-50 rounded-2xl p-4 border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">24h</p>
                <p className="text-sm text-blue-600">Response Time</p>
              </div>
              <Clock className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 lg:col-span-3 md:row-span-1 bg-gray-50 rounded-2xl p-4 border border-gray-200">
            <h4 className="font-semibold mb-4 text-gray-800">Connect with me</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${social.color} p-3 rounded-xl text-white hover:scale-110 transition-transform duration-300 flex items-center justify-center`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coffee Status */}
          <div className="md:col-span-2 lg:col-span-1 md:row-span-1 bg-amber-50 rounded-2xl p-4 border border-amber-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-amber-600">∞</p>
                <p className="text-sm text-amber-600">Coffee Level</p>
              </div>
              <Coffee className="w-8 h-8 text-amber-500" />
            </div>
          </div>

          {/* Time Zone */}
          <div className="md:col-span-2 lg:col-span-1 md:row-span-1 bg-purple-50 rounded-2xl p-4 border border-purple-200">
            <div className="text-center">
              <p className="text-lg font-bold text-purple-600">PST</p>
              <p className="text-sm text-purple-600">Time Zone</p>
              <p className="text-xs text-purple-500 mt-1">UTC-8</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="md:col-span-4 lg:col-span-3 md:row-span-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Based in San Francisco</h4>
                <p className="text-sm opacity-90">Available for remote work worldwide</p>
              </div>
              <div className="text-3xl">🌎</div>
            </div>
          </div>

          {/* Meeting Scheduler */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-white rounded-2xl p-4 border border-gray-200 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="w-5 h-5 text-green-500" />
              <h4 className="font-semibold">Schedule a Call</h4>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
            >
              Book Meeting
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">What's your typical response time?</h4>
              <p className="text-gray-600 text-sm">I usually respond within 24 hours during business days.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Do you work with international clients?</h4>
              <p className="text-gray-600 text-sm">Yes, I work with clients worldwide and am flexible with time zones.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">What's your preferred communication method?</h4>
              <p className="text-gray-600 text-sm">Email for initial contact, then video calls for project discussions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Are you available for long-term projects?</h4>
              <p className="text-gray-600 text-sm">Yes, I'm open to both short-term and long-term collaborations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
