"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle, Sparkles, Heart, Star } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeGradient, setActiveGradient] = useState(0);
  const [mounted, setMounted] = useState(false);

  const gradients = [
    "gradient-primary",
    "gradient-secondary",
    "gradient-accent",
    "gradient-rainbow-1",
    "gradient-rainbow-2",
    "gradient-animated-1",
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@gradientdev.com",
      gradient: "gradient-primary",
      description: "Drop me a line anytime!",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      gradient: "gradient-secondary",
      description: "Available 9AM-6PM EST",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      gradient: "gradient-accent",
      description: "Open to remote work",
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "< 24 hours",
      gradient: "gradient-rainbow-1",
      description: "I reply quickly!",
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      gradient: "gradient-primary",
      emoji: "🐦",
      handle: "@gradientdev",
    },
    {
      name: "LinkedIn",
      gradient: "gradient-secondary",
      emoji: "💼",
      handle: "/in/gradientdev",
    },
    {
      name: "GitHub",
      gradient: "gradient-accent",
      emoji: "🐙",
      handle: "@gradientdev",
    },
    {
      name: "Dribbble",
      gradient: "gradient-rainbow-1",
      emoji: "🎨",
      handle: "@gradientdev",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveGradient((prev) => (prev + 1) % gradients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="gradient-animated-1 absolute inset-0 opacity-15" />
        <div className="gradient-animated-2 absolute inset-0 opacity-10" />
        <div className="gradient-animated-3 absolute inset-0 opacity-20" />
      </div>

      {/* Floating Gradient Hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-gradient-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <Heart
              className={`w-6 h-6 ${
                i % 4 === 0 ? "text-pink-400" : i % 4 === 1 ? "text-purple-400" : i % 4 === 2 ? "text-blue-400" : "text-green-400"
              } opacity-30 fill-current`}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className={`w-20 h-20 rounded-full ${gradients[activeGradient]} p-1 animate-gradient-rotate`}>
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-gradient-1" />
              </div>
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 text-gradient-rainbow animate-gradient-shift">GET IN TOUCH</h2>

          <p className="text-2xl md:text-3xl font-bold text-white/90 max-w-4xl mx-auto">
            Ready to add some
            <span className="text-gradient-2 animate-gradient-pulse"> gradient magic </span>
            to your next project? Let's create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div className="card-gradient hover-scale-gradient">
              <h3 className="text-4xl font-bold text-gradient-1 mb-8 text-center">Send Me a Message</h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Message Sent!</h4>
                  <p className="text-white/80 mb-6">Thanks for reaching out! I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-gradient gradient-secondary text-white font-bold py-3 px-8 rounded-full hover-scale-gradient"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="form-gradient space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-semibold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your awesome name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Let's create something amazing!"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your gradient-powered project ideas..."
                      required
                      rows={6}
                      className="w-full resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-gradient ${
                      gradients[activeGradient]
                    } text-white font-bold py-4 rounded-full hover-scale-gradient flex items-center justify-center gap-3 transition-all duration-300 ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="gradient-spinner w-6 h-6" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Social Links */}
            <div className="card-gradient hover-scale-gradient">
              <h3 className="text-3xl font-bold text-gradient-2 mb-6 text-center">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`${social.gradient} p-4 rounded-2xl text-white font-semibold hover-scale-gradient flex items-center gap-3 transition-all duration-300`}
                  >
                    <span className="text-2xl">{social.emoji}</span>
                    <div>
                      <div className="font-bold">{social.name}</div>
                      <div className="text-sm opacity-90">{social.handle}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="card-gradient hover-scale-gradient">
              <h3 className="text-4xl font-bold text-gradient-3 mb-8 text-center">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-gradient p-6 rounded-2xl hover-scale-gradient">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${info.gradient} flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{info.label}</h4>
                        <p className="text-lg text-white/90 font-semibold mb-2">{info.value}</p>
                        <p className="text-white/70">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="card-gradient hover-scale-gradient text-center">
              <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center animate-gradient-pulse">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-1 mb-4">Available for Projects</h3>
              <p className="text-xl text-white/90 mb-6">
                I'm currently accepting new clients and excited to work on gradient-powered projects!
              </p>
              <div className="flex items-center justify-center gap-2 text-green-400">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="font-semibold">Available Now</span>
              </div>
            </div>

            {/* Response Time Promise */}
            <div className="card-gradient hover-scale-gradient">
              <h3 className="text-2xl font-bold text-gradient-2 mb-6 text-center">My Promise to You</h3>
              <div className="space-y-4">
                {[
                  { icon: Clock, text: "Quick response within 24 hours" },
                  { icon: Heart, text: "Passionate about every project" },
                  { icon: Star, text: "High-quality gradient designs" },
                  { icon: Sparkles, text: "Creative and innovative solutions" },
                ].map((promise, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg ${gradients[index % gradients.length]} flex items-center justify-center`}>
                      <promise.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/90 font-semibold">{promise.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <div className="text-6xl mb-6 animate-gradient-bounce">🎨</div>
            <h3 className="text-4xl font-bold text-gradient-rainbow mb-4">Let's Create Magic Together!</h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to bring your ideas to life with stunning gradients and animations? I can't wait to hear from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
