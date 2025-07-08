"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Heart,
  Star,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"default" | "loading" | "success">("default");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("loading");

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Reset to default after 3 seconds
    setTimeout(() => setFormStatus("default"), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@johndoe.dev",
      href: "mailto:hello@johndoe.dev",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Let's have a conversation",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "https://maps.google.com",
      description: "Available for remote work",
    },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "from-gray-400 to-gray-600" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "from-blue-400 to-blue-600" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "from-blue-400 to-blue-500" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "from-pink-400 to-purple-600" },
  ];

  const quickContactOptions = [
    { icon: MessageCircle, label: "Quick Chat", action: "Let's have a quick chat about your project!" },
    { icon: Mail, label: "Email Me", action: "Send me an email with your requirements" },
    { icon: Phone, label: "Schedule Call", action: "Book a call to discuss your ideas" },
  ];

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Floating Message Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Mail, Send, Heart, Star].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute glass-premium w-16 h-16 rounded-2xl flex items-center justify-center opacity-20"
            style={{
              left: `${20 + index * 20}%`,
              top: `${30 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8 text-white/60" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="glass-premium inline-block px-8 py-3 rounded-full glass-shimmer-premium mb-6">
            <span className="text-sm font-medium text-white/90 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-pink-400" />
              Get In Touch
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold glass-text-glow-premium mb-6 font-['Orbitron']">
            Let's Create
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card-premium glass-particles"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Send Message</h3>
              <p className="text-white/70 leading-relaxed">
                Ready to bring your vision to life? Let's discuss your project and create something amazing together.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass-input-premium"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass-input-premium"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="glass-input-premium"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="glass-input-premium resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.button
                  key={formStatus}
                  type="submit"
                  disabled={formStatus === "loading"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ scale: formStatus === "default" ? 1.05 : 1 }}
                  whileTap={{ scale: formStatus === "default" ? 0.95 : 1 }}
                  className={`w-full glass-button-premium p-4 rounded-2xl flex items-center justify-center space-x-3 transition-all duration-300 ${
                    formStatus === "loading"
                      ? "glass-glow-secondary"
                      : formStatus === "success"
                      ? "glass-glow-accent"
                      : "glass-glow-primary"
                  }`}
                >
                  {formStatus === "loading" && (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  )}
                  {formStatus === "success" && (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  )}
                  {formStatus === "default" && (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="glass-card-premium glass-particles">
              <h3 className="text-3xl font-bold glass-text-glow-premium mb-6 font-['Orbitron']">Contact Info</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="glass-premium p-6 rounded-2xl flex items-center space-x-4 hover:glass-glow-primary transition-all duration-300 cursor-pointer block"
                  >
                    <div className="glass-premium w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-lg">{info.label}</div>
                      <div className="text-white/80 font-medium">{info.value}</div>
                      <div className="text-white/60 text-sm">{info.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-card-premium glass-particles"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold glass-text-glow-premium font-['Orbitron']">Available for Work</h3>
              </div>
              <p className="text-white/70 mb-4">
                I'm currently accepting new projects and collaborations. Let's build something amazing together!
              </p>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock className="w-4 h-4" />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Connect With Me</h3>
            <p className="text-white/70 text-lg">Find me on these platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card-premium text-center glass-shimmer-premium hover:glass-glow-secondary transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-2xl glass-premium flex items-center justify-center bg-gradient-to-r ${social.color} mx-auto mb-4`}
                >
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <div className="font-medium text-white">{social.label}</div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Quick Actions</h3>
            <p className="text-white/70 text-lg">Choose your preferred way to connect</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {quickContactOptions.map((option, index) => (
              <motion.button
                key={option.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card-premium glass-particles hover:glass-glow-accent transition-all duration-300 text-center p-6"
              >
                <div className="glass-premium w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-4">
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{option.label}</h4>
                <p className="text-white/70 text-sm">{option.action}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card-premium glass-particles max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Ready to Start Your Project?</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              From concept to completion, I'm here to help bring your digital vision to life. Let's create something extraordinary together!
              🚀
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-premium glass-glow-primary flex items-center space-x-2 mx-auto"
            >
              <span>Let's Build Something Great</span>
              <Heart className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Ambient Particles */}
      <div className="glass-particles absolute inset-0 pointer-events-none opacity-30"></div>
    </section>
  );
}
