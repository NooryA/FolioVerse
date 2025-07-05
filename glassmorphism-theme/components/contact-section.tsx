"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, Check } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@example.com", color: "rgba(59, 130, 246, 0.3)" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "rgba(139, 92, 246, 0.3)" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", color: "rgba(236, 72, 153, 0.3)" },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com", name: "GitHub" },
    { icon: Linkedin, url: "https://linkedin.com", name: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", name: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 rounded-full glass"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold glass-text-glow mb-4">Let's Connect</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div whileHover={{ scale: 1.02 }} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)}>
                <label className="block text-white/80 mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`glass-input ${focusedField === "name" ? "glass-glow" : ""}`}
                  placeholder="John Doe"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div whileHover={{ scale: 1.02 }} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)}>
                <label className="block text-white/80 mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`glass-input ${focusedField === "email" ? "glass-glow" : ""}`}
                  placeholder="john@example.com"
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div whileHover={{ scale: 1.02 }} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)}>
                <label className="block text-white/80 mb-2 text-sm font-medium">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`glass-textarea ${focusedField === "message" ? "glass-glow" : ""}`}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`glass-button glass-button-primary w-full flex items-center justify-center gap-2 ${
                  isSuccess ? "glass-button-secondary" : ""
                }`}
              >
                {isSubmitting ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : isSuccess ? (
                  <>
                    <Check className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="glass-card flex items-center gap-4 glass-shimmer"
                  style={{ background: info.color }}
                >
                  <div className="glass p-3 rounded-full">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Connect on Social</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="glass-button p-3 rounded-full glass-glow"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card glass-shimmer"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-white font-medium">Available for Projects</span>
              </div>
              <p className="text-white/70 text-sm">
                I'm currently accepting new projects and collaborations. Let's discuss how we can work together!
              </p>
            </motion.div>

            {/* Decorative Element */}
            <motion.div className="relative h-32 overflow-hidden rounded-2xl glass" whileHover={{ scale: 1.02 }}>
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))",
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white/80 text-lg font-medium">Let's Create Magic ✨</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
