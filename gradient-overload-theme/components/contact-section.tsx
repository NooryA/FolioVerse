"use client";

import { useState, useEffect, useMemo } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Globe, MessageCircle, Star, Heart, Coffee } from "lucide-react";
import { useTheme } from "./theme-context";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { currentTheme, gradientIndex, themeIndex } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use theme colors from context
  const gradients = currentTheme.gradients;
  const textGradients = currentTheme.textGradients;

  // Generate stable random values for floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      gradient: gradients[i % gradients.length],
      width: 6 + Math.random() * 14,
      height: 6 + Math.random() * 14,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 15,
      animationDuration: 12 + Math.random() * 24,
    }));
  }, [gradients, themeIndex]); // Re-generate when theme changes

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@gradient-portfolio.com",
      gradient: "from-pink-500 to-purple-600",
      link: "mailto:hello@gradient-portfolio.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      gradient: "from-blue-500 to-cyan-600",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      gradient: "from-green-500 to-teal-600",
      link: "https://maps.google.com/?q=San+Francisco,+CA",
    },
    {
      icon: Globe,
      label: "Website",
      value: "gradient-portfolio.com",
      gradient: "from-orange-500 to-red-600",
      link: "https://gradient-portfolio.com",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/username",
      gradient: "from-gray-700 to-gray-900",
      hoverGradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/username",
      gradient: "from-blue-600 to-blue-800",
      hoverGradient: "from-blue-500 to-blue-700",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/username",
      gradient: "from-sky-500 to-sky-700",
      hoverGradient: "from-sky-400 to-sky-600",
    },
    {
      icon: MessageCircle,
      label: "Discord",
      url: "https://discord.com/users/username",
      gradient: "from-indigo-600 to-purple-700",
      hoverGradient: "from-indigo-500 to-purple-600",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Enhanced Background with Gradient Layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div
          className={`absolute top-20 left-10 w-80 h-80 bg-gradient-to-r ${gradients[0]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-0`}
        />
        <div
          className={`absolute top-32 right-20 w-64 h-64 bg-gradient-to-r ${gradients[1]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-4000`}
        />
        <div
          className={`absolute bottom-20 left-32 w-72 h-72 bg-gradient-to-r ${gradients[2]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-8000`}
        />
        <div
          className={`absolute bottom-32 right-16 w-88 h-88 bg-gradient-to-r ${gradients[3]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-12000`}
        />
      </div>

      {/* Enhanced floating gradient elements with stable values */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full bg-gradient-to-r ${element.gradient} opacity-6 animate-gradient-float`}
            style={{
              width: `${element.width}px`,
              height: `${element.height}px`,
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            <span className={`bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent animate-gradient-shift`}>
              Get In Touch
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            <span
              className={`font-semibold bg-gradient-to-r ${
                textGradients[(gradientIndex + 1) % textGradients.length]
              } bg-clip-text text-transparent font-black animate-gradient-shift`}
              style={{ backgroundSize: "200% 200%" }}
            >
              Ready to create something amazing together? Let's turn your vision into a colorful reality!
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
            <div className="mb-8">
              <h3
                className={`text-3xl font-bold mb-4 bg-gradient-to-r ${
                  textGradients[(gradientIndex + 2) % textGradients.length]
                } bg-clip-text text-transparent font-black animate-gradient-shift`}
                style={{ backgroundSize: "200% 200%" }}
              >
                Send a Message
              </h3>
              <p
                className={`bg-gradient-to-r ${
                  textGradients[(gradientIndex + 3) % textGradients.length]
                } bg-clip-text text-transparent font-medium`}
              >
                Fill out the form below and I'll get back to you within 24 hours!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold mb-2 text-gray-800"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold mb-2 text-gray-800"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-gray-800 placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-bold mb-2 text-gray-800"
                  style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-gray-800 placeholder-gray-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-bold mb-2 text-gray-800"
                  style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-white/90 backdrop-blur-sm border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-gray-800 placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r ${gradients[gradientIndex]} hover:scale-105 disabled:scale-100 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-3 border border-white/20`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                      Sending...
                    </span>
                  </>
                ) : submitStatus === "success" ? (
                  <>
                    <Heart className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                      Message Sent!
                    </span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                      Send Message
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3
                className={`text-3xl font-bold mb-8 bg-gradient-to-r ${
                  textGradients[(gradientIndex + 4) % textGradients.length]
                } bg-clip-text text-transparent font-black animate-gradient-shift`}
                style={{ backgroundSize: "200% 200%" }}
              >
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-700" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                        {item.label}
                      </p>
                      <p className="font-bold text-lg text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3
                className={`text-3xl font-bold mb-8 bg-gradient-to-r ${
                  textGradients[(gradientIndex + 5) % textGradients.length]
                } bg-clip-text text-transparent font-black animate-gradient-shift`}
                style={{ backgroundSize: "200% 200%" }}
              >
                Let's Connect
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${social.gradient} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20`}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold text-white group-hover:text-white transition-colors duration-300">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-lg">
              <h3
                className={`text-3xl font-bold mb-8 bg-gradient-to-r ${
                  textGradients[(gradientIndex + 6) % textGradients.length]
                } bg-clip-text text-transparent font-black animate-gradient-shift`}
                style={{ backgroundSize: "200% 200%" }}
              >
                Fun Facts
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl shadow-lg">
                  <Coffee className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">500+</div>
                  <div className="text-sm font-semibold text-white/80">Cups of Coffee</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl shadow-lg">
                  <Star className="w-8 h-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-black text-white">24/7</div>
                  <div className="text-sm font-semibold text-white/80">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
              <h3
                className={`text-3xl font-bold bg-gradient-to-r ${
                  textGradients[(gradientIndex + 7) % textGradients.length]
                } bg-clip-text text-transparent font-black animate-gradient-shift`}
                style={{ backgroundSize: "200% 200%" }}
              >
                Let's Create Magic Together!
              </h3>
              <Heart className="w-8 h-8 text-pink-500 animate-pulse" />
            </div>
            <p
              className={`text-xl mb-8 bg-gradient-to-r ${
                textGradients[(gradientIndex + 8) % textGradients.length]
              } bg-clip-text text-transparent font-medium`}
            >
              I'm always excited to work on new projects and collaborate with amazing people. Whether you have a question, a project idea,
              or just want to say hi, I'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
                <span className="text-white">Schedule a Call</span>
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:scale-105 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20">
                <span className="text-white">View My Work</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(120deg);
          }
          66% {
            transform: translateY(8px) rotate(240deg);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
          background-size: 200% 200%;
        }

        .animate-gradient-float {
          animation: gradient-float 18s ease-in-out infinite;
        }

        .animation-delay-0 {
          animation-delay: 0s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-8000 {
          animation-delay: 8s;
        }

        .animation-delay-12000 {
          animation-delay: 12s;
        }
      `}</style>
    </section>
  );
}
