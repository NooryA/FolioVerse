"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Zap,
  Brain,
  Cpu,
  Headphones,
  Eye,
  Gamepad2,
} from "lucide-react";

export function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Neural ID required";
    if (!formData.email.trim()) newErrors.email = "Communication link required";
    if (!formData.projectType.trim()) newErrors.projectType = "Project dimension required";
    if (!formData.message.trim()) newErrors.message = "Message data required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactMethods = [
    {
      id: "neural",
      icon: <Brain className="w-8 h-8" />,
      title: "Neural Link",
      description: "Direct brain-computer interface",
      value: "alex.neural@metaverse.dev",
      href: "mailto:alex.neural@metaverse.dev",
      color: "from-cyan-500 to-blue-600",
      available: true,
      responseTime: "< 1 hour",
    },
    {
      id: "quantum",
      icon: <Cpu className="w-8 h-8" />,
      title: "Quantum Comm",
      description: "Instantaneous quantum communication",
      value: "+1 (555) VR-WORLD",
      href: "tel:+15558796753",
      color: "from-purple-500 to-pink-600",
      available: true,
      responseTime: "Instantaneous",
    },
    {
      id: "hologram",
      icon: <Eye className="w-8 h-8" />,
      title: "Hologram",
      description: "Holographic presence meeting",
      value: "Schedule Virtual Meeting",
      href: "#",
      color: "from-green-500 to-cyan-600",
      available: true,
      responseTime: "< 24 hours",
    },
    {
      id: "metaverse",
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Metaverse HQ",
      description: "Visit my virtual office",
      value: "coords: 42.3601, -71.0589, Layer 7",
      href: "#",
      color: "from-orange-500 to-red-600",
      available: true,
      responseTime: "Real-time",
    },
  ];

  const socialChannels = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      handle: "@alexvr",
      followers: "25.4k",
      description: "Open source XR projects",
      href: "#",
      color: "bg-gray-900 hover:bg-gray-800",
      pulse: true,
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      handle: "Alex Chen VR",
      followers: "50.2k",
      description: "Professional network",
      href: "#",
      color: "bg-blue-600 hover:bg-blue-700",
      pulse: false,
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      handle: "@alexbuildsXR",
      followers: "32.1k",
      description: "XR development updates",
      href: "#",
      color: "bg-sky-500 hover:bg-sky-600",
      pulse: false,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Portfolio",
      handle: "alexvr.dev",
      followers: "Live",
      description: "Interactive showcase",
      href: "#",
      color: "bg-indigo-600 hover:bg-indigo-700",
      pulse: true,
    },
  ];

  const projectTypes = [
    { value: "vr", label: "VR Experience", icon: <Headphones className="w-5 h-5" /> },
    { value: "ar", label: "AR Application", icon: <Eye className="w-5 h-5" /> },
    { value: "metaverse", label: "Metaverse Platform", icon: <Globe className="w-5 h-5" /> },
    { value: "consultation", label: "XR Consultation", icon: <Brain className="w-5 h-5" /> },
    { value: "training", label: "Training Simulation", icon: <Cpu className="w-5 h-5" /> },
    { value: "other", label: "Other Reality", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Neural Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center animate-pulse">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neural Interface
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
              <Send className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Initialize connection protocol. Ready to collaborate on experiences that transcend the boundaries of physical reality.
          </p>
        </div>

        {/* Status Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-black/50 backdrop-blur-lg border border-green-500/30 rounded-2xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">ONLINE</span>
            </div>
            <div className="text-gray-300 text-sm">System Status</div>
          </div>
          <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-4 text-center">
            <div className="text-cyan-400 font-bold text-lg">{"< 1h"}</div>
            <div className="text-gray-300 text-sm">Response Time</div>
          </div>
          <div className="bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-4 text-center">
            <div className="text-purple-400 font-bold text-lg">98.9%</div>
            <div className="text-gray-300 text-sm">Uptime</div>
          </div>
          <div className="bg-black/50 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-4 text-center">
            <div className="text-pink-400 font-bold text-lg">24/7</div>
            <div className="text-gray-300 text-sm">Available</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Neural Communication Form */}
          <div className="lg:col-span-2">
            <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-2xl">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Neural Message</h3>
                  <p className="text-gray-300">Direct thought transmission protocol</p>
                </div>
              </div>

              {isSuccess && (
                <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center gap-4">
                  <div className="bg-green-500 p-2 rounded-full">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">Connection Established!</h4>
                    <p className="text-green-300 text-sm">Your neural pattern has been received. Initiating response protocol...</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Neural ID *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 bg-gray-900/50 border rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-500 ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      }`}
                      placeholder="Enter your neural identifier"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Communication Link *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-4 bg-gray-900/50 border rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-500 ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      }`}
                      placeholder="neural.link@metaverse.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Project Dimension *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-4 bg-gray-900/50 border rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white ${
                      errors.projectType ? "border-red-500" : "border-gray-700"
                    }`}
                  >
                    <option value="">Select reality dimension</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-400 text-sm mt-1">{errors.projectType}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">Message Data *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-4 bg-gray-900/50 border rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-500 ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    }`}
                    placeholder="Describe your vision for the digital realm. Include project scope, timeline, and any specific XR requirements..."
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-4 px-8 rounded-2xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Neural Data...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Initialize Connection</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Communication Channels */}
          <div className="space-y-6">
            <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-2xl w-fit mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Neural Link</h4>
              <p className="text-gray-400 text-sm mb-3">Direct brain-computer interface</p>
              <p className="font-medium text-gray-300 text-sm mb-3">alex.neural@metaverse.dev</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
                <span className="text-cyan-400 text-xs font-medium">{"< 1 hour"}</span>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-2xl w-fit mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-white mb-2">Quantum Comm</h4>
              <p className="text-gray-400 text-sm mb-3">Instantaneous quantum communication</p>
              <p className="font-medium text-gray-300 text-sm mb-3">+1 (555) VR-WORLD</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-medium">Available</span>
                </div>
                <span className="text-cyan-400 text-xs font-medium">Instantaneous</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-green-400" />
                <h4 className="font-bold text-lg text-white">Neural Network Status</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Current Status:</span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">Active & Ready</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Response Time:</span>
                  <span className="font-medium text-cyan-400">{"< 1 hour"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Next Available:</span>
                  <span className="font-medium text-green-400">Immediate</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 rounded-xl font-medium hover:from-green-600 hover:to-cyan-600 transition-all duration-300">
                Schedule Hologram Meeting
              </button>
            </div>
          </div>
        </div>

        {/* Social Channels */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Digital Presence</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#"
              className="bg-gray-900 hover:bg-gray-800 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">GitHub</h4>
                  <p className="text-sm opacity-80">@alexvr</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Followers</span>
                  <span className="font-bold">25.4k</span>
                </div>
                <p className="text-xs opacity-70">Open source XR projects</p>
              </div>
            </a>

            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-sm opacity-80">Alex Chen VR</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Followers</span>
                  <span className="font-bold">50.2k</span>
                </div>
                <p className="text-xs opacity-70">Professional network</p>
              </div>
            </a>

            <a
              href="#"
              className="bg-sky-500 hover:bg-sky-600 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Twitter className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Twitter</h4>
                  <p className="text-sm opacity-80">@alexbuildsXR</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Followers</span>
                  <span className="font-bold">32.1k</span>
                </div>
                <p className="text-xs opacity-70">XR development updates</p>
              </div>
            </a>

            <a
              href="#"
              className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Portfolio</h4>
                  <p className="text-sm opacity-80">alexvr.dev</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm opacity-80">Status</span>
                  <span className="font-bold">Live</span>
                </div>
                <p className="text-xs opacity-70">Interactive showcase</p>
              </div>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="bg-black/50 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 md:p-10">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Queries</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">What XR platforms do you specialize in?</h4>
                  <p className="text-gray-300 text-sm">
                    I work across all major XR platforms including Oculus, HTC Vive, HoloLens, Magic Leap, and WebXR for cross-platform
                    experiences.
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">Can you handle enterprise-scale projects?</h4>
                  <p className="text-gray-300 text-sm">
                    Absolutely! I've delivered XR solutions for Fortune 500 companies with support for thousands of concurrent users.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">What's your development timeline?</h4>
                  <p className="text-gray-300 text-sm">
                    Project timelines vary based on complexity. Simple VR experiences: 2-4 weeks. Complex metaverse platforms: 3-6 months.
                  </p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-white mb-2">Do you offer ongoing support?</h4>
                  <p className="text-gray-300 text-sm">
                    Yes! I provide comprehensive post-launch support including updates, bug fixes, and feature enhancements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
