"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Star, Heart, Coffee, Code, Palette, Sparkles, MessageCircle, User } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="relative py-32 px-4 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="gradient-animated-3 absolute inset-0 opacity-15" />
        <div className="gradient-animated-1 absolute inset-0 opacity-12" />

        {/* Enhanced floating gradient shapes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-8 animate-gradient-float ${
              i % 5 === 0
                ? "gradient-primary"
                : i % 5 === 1
                ? "gradient-secondary"
                : i % 5 === 2
                ? "gradient-accent"
                : i % 5 === 3
                ? "gradient-rainbow-1"
                : "gradient-rainbow-2"
            }`}
            style={{
              width: `${40 + Math.random() * 80}px`,
              height: `${40 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? "50%" : "20%",
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              filter: "blur(2px)",
            }}
          />
        ))}

        {/* Enhanced radial gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-gradient-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-gradient-float animation-delay-2000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="w-24 h-24 rounded-full gradient-rainbow-2 p-1 animate-gradient-rotate shadow-lg">
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <MessageCircle className="w-12 h-12 text-gradient-rainbow animate-gradient-bounce" />
              </div>
            </div>
          </div>

          <h2 className="text-7xl md:text-9xl lg:text-[8rem] font-black mb-8 text-gradient-rainbow animate-gradient-shift leading-none">
            CONTACT
          </h2>

          <p className="text-3xl md:text-4xl font-bold max-w-5xl mx-auto leading-relaxed">
            <span
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ backgroundSize: "200% 200%", textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              Ready to create something
            </span>
            <br />
            <span className="text-gradient-2 animate-gradient-pulse font-black"> extraordinary </span>
            <span
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ backgroundSize: "200% 200%", textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              together? Let's make it happen!
            </span>
          </p>
        </div>

        {/* Enhanced Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced Contact Form */}
          <div className="space-y-10">
            <div className="card-gradient hover-scale-gradient border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center shadow-lg border border-white/20">
                    <Mail className="w-8 h-8 text-gray-900" style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }} />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Send Me a Message
                  </h3>
                </div>

                {submitted && (
                  <div className="mb-8 p-6 bg-gradient-to-r from-green-500/20 via-teal-500/20 to-cyan-500/20 rounded-2xl border-2 border-green-400/30 backdrop-blur-sm">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center">
                        <Sparkles
                          className="w-6 h-6 text-gray-900 animate-spin"
                          style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                          Message Sent Successfully!
                        </h4>
                        <p className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent font-bold">
                          Thanks for reaching out! I'll get back to you soon.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Your Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-purple-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          className="w-full pl-14 pr-6 py-5 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-sm rounded-2xl border-2 border-white/20 focus:border-purple-400 focus:outline-none text-lg font-medium placeholder-gray-500 transition-all duration-300 hover:border-white/30 text-gray-800"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Your Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-blue-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          className="w-full pl-14 pr-6 py-5 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-sm rounded-2xl border-2 border-white/20 focus:border-blue-400 focus:outline-none text-lg font-medium placeholder-gray-500 transition-all duration-300 hover:border-white/30 text-gray-800"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                      Subject
                    </label>
                    <div className="relative">
                      <Sparkles className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-green-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="w-full pl-14 pr-6 py-5 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-sm rounded-2xl border-2 border-white/20 focus:border-green-400 focus:outline-none text-lg font-medium placeholder-gray-500 transition-all duration-300 hover:border-white/30 text-gray-800"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="w-full px-6 py-5 bg-gradient-to-r from-white/90 via-white/95 to-white/90 backdrop-blur-sm rounded-2xl border-2 border-white/20 focus:border-red-400 focus:outline-none text-lg font-medium placeholder-gray-500 transition-all duration-300 hover:border-white/30 resize-none text-gray-800"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-gradient gradient-rainbow-1 font-black text-2xl px-12 py-6 rounded-full hover-scale-gradient shadow-gradient-1 border-2 border-white/20 flex items-center justify-center gap-4 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {isSubmitting ? (
                      <>
                        <div className="w-8 h-8 border-4 border-gray-800/30 border-t-gray-800 rounded-full animate-spin" />
                        <span
                          className="relative z-10 text-gray-900 font-black"
                          style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
                        >
                          Sending...
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-300 relative z-10 text-gray-900" />
                        <span
                          className="relative z-10 text-gray-900 font-black"
                          style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
                        >
                          Send Message
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-10">
            {/* Enhanced Contact Details */}
            <div className="card-gradient hover-scale-gradient border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center shadow-lg border border-white/20">
                    <Phone className="w-8 h-8 text-gray-900" style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }} />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Let's Connect
                  </h3>
                </div>

                <div className="space-y-8">
                  {[
                    {
                      icon: Mail,
                      title: "Email",
                      value: "hello@gradientfolio.com",
                      gradient: "from-pink-500 to-purple-600",
                      textGradient: "from-pink-400 to-purple-400",
                    },
                    {
                      icon: Phone,
                      title: "Phone",
                      value: "+1 (555) 123-4567",
                      gradient: "from-blue-500 to-cyan-600",
                      textGradient: "from-blue-400 to-cyan-400",
                    },
                    {
                      icon: MapPin,
                      title: "Location",
                      value: "San Francisco, CA",
                      gradient: "from-green-500 to-teal-600",
                      textGradient: "from-green-400 to-teal-400",
                    },
                  ].map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-6 p-6 glass-gradient rounded-2xl hover:scale-105 transition-all duration-300 border border-white/20"
                    >
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center shadow-lg border border-white/20`}
                      >
                        <contact.icon
                          className="w-8 h-8 text-gray-900"
                          style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                        />
                      </div>
                      <div>
                        <h4 className={`text-xl font-bold mb-2 bg-gradient-to-r ${contact.textGradient} bg-clip-text text-transparent`}>
                          {contact.title}
                        </h4>
                        <p
                          className="text-lg bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent font-medium"
                          style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                        >
                          {contact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Fun Stats */}
            <div className="card-gradient hover-scale-gradient border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center shadow-lg border border-white/20">
                    <Star className="w-8 h-8 text-gray-900" style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }} />
                  </div>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Fun Facts
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    {
                      icon: Coffee,
                      label: "Coffee Cups",
                      value: "∞",
                      gradient: "from-amber-500 to-orange-600",
                      textGradient: "from-amber-400 to-orange-400",
                    },
                    {
                      icon: Code,
                      label: "Lines of Code",
                      value: "100k+",
                      gradient: "from-green-500 to-teal-600",
                      textGradient: "from-green-400 to-teal-400",
                    },
                    {
                      icon: Palette,
                      label: "Gradients Created",
                      value: "500+",
                      gradient: "from-pink-500 to-purple-600",
                      textGradient: "from-pink-400 to-purple-400",
                    },
                    {
                      icon: Heart,
                      label: "Happy Clients",
                      value: "50+",
                      gradient: "from-red-500 to-pink-600",
                      textGradient: "from-red-400 to-pink-400",
                    },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-6 glass-gradient rounded-2xl hover:scale-105 transition-all duration-300 border border-white/20"
                    >
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.gradient} mx-auto mb-4 flex items-center justify-center shadow-lg border border-white/20`}
                      >
                        <stat.icon
                          className="w-8 h-8 text-gray-900"
                          style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                        />
                      </div>
                      <div className={`text-3xl font-black mb-2 bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div
                        className="text-base font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent"
                        style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Response Time */}
            <div className="card-gradient hover-scale-gradient text-center border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-teal-500/5 to-cyan-500/5" />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-teal-600 mx-auto mb-6 flex items-center justify-center shadow-lg border border-white/20">
                  <Sparkles
                    className="w-10 h-10 text-gray-900 animate-pulse"
                    style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                  />
                </div>
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Quick Response
                </h3>
                <p
                  className="text-xl leading-relaxed bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold"
                  style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                >
                  I typically respond to messages within <span className="font-bold text-gradient-2">24 hours</span>. Let's bring your
                  colorful ideas to life!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="card-gradient hover-scale-gradient max-w-4xl mx-auto border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rainbow-500/5 via-rainbow-600/5 to-rainbow-700/5" />

            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full gradient-rainbow-1 mx-auto mb-8 flex items-center justify-center shadow-lg border border-white/20">
                <Palette
                  className="w-12 h-12 text-gray-900 animate-gradient-bounce"
                  style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                />
              </div>
              <h3 className="text-6xl font-black text-gradient-rainbow mb-8 leading-tight">Ready to Paint the Web?</h3>
              <p
                className="text-3xl mb-12 leading-relaxed bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
              >
                Whether you need a stunning website, a colorful dashboard, or just want to chat about gradients, I'm here to help make your
                vision a reality!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-gradient gradient-rainbow-1 font-black text-2xl px-16 py-6 rounded-full hover-scale-gradient shadow-gradient-1 border-2 border-white/20 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                    Start a Project
                  </span>
                </button>
                <button className="btn-gradient gradient-rainbow-2 font-black text-2xl px-16 py-6 rounded-full hover-scale-gradient shadow-gradient-2 border-2 border-white/20 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                    Schedule a Call
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
