"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [hoveredField, setHoveredField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-180, 180]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@example.com", color: "#6366f1" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "#ec4899" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA", color: "#8b5cf6" },
  ];

  const socialLinks = [
    { icon: Github, url: "https://github.com", color: "#000000" },
    { icon: Linkedin, url: "https://linkedin.com", color: "#0077B5" },
    { icon: Twitter, url: "https://twitter.com", color: "#1DA1F2" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section ref={containerRef} id="contact" className="relative min-h-screen py-20 px-4 overflow-hidden bg-parallax-darker preserve-3d">
      {/* Animated Background Layers */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div style={{ y: y2, rotate }} className="absolute -top-40 -left-40 w-80 h-80">
          <div className="w-full h-full gradient-orb orb-primary" />
        </motion.div>
        <motion.div style={{ y: y1, rotate: rotate }} className="absolute -bottom-40 -right-40 w-96 h-96">
          <div className="w-full h-full gradient-orb orb-secondary" />
        </motion.div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50, z: -100 }}
          whileInView={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative preserve-3d"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-3d mb-4">Get In Touch</h2>
          <p className="text-xl text-parallax-text-secondary max-w-2xl mx-auto">
            Let's create something amazing together. I'm always open to discussing new projects and opportunities.
          </p>

          {/* Floating decoration */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateX: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 preserve-3d"
          >
            <div className="w-full h-full bg-gradient-to-br from-parallax-accent to-parallax-primary rounded-xl opacity-20 rotating-element" />
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            style={{ y: y1, scale }}
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative preserve-3d"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                whileHover={{ z: 30 }}
                onMouseEnter={() => setHoveredField("name")}
                onMouseLeave={() => setHoveredField(null)}
                className="relative preserve-3d"
              >
                <label className="block text-sm font-medium text-parallax-text-secondary mb-2">Your Name</label>
                <motion.input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-parallax-surface border border-parallax-primary/20 rounded-lg 
                           focus:outline-none focus:border-parallax-primary transition-all duration-300
                           text-parallax-text-primary placeholder-parallax-text-muted"
                  placeholder="John Doe"
                  style={{
                    transform: hoveredField === "name" ? "translateZ(10px)" : "translateZ(0)",
                    boxShadow: hoveredField === "name" ? "0 10px 30px -10px rgba(99, 102, 241, 0.4)" : "none",
                  }}
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                whileHover={{ z: 30 }}
                onMouseEnter={() => setHoveredField("email")}
                onMouseLeave={() => setHoveredField(null)}
                className="relative preserve-3d"
              >
                <label className="block text-sm font-medium text-parallax-text-secondary mb-2">Email Address</label>
                <motion.input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-parallax-surface border border-parallax-primary/20 rounded-lg 
                           focus:outline-none focus:border-parallax-primary transition-all duration-300
                           text-parallax-text-primary placeholder-parallax-text-muted"
                  placeholder="john@example.com"
                  style={{
                    transform: hoveredField === "email" ? "translateZ(10px)" : "translateZ(0)",
                    boxShadow: hoveredField === "email" ? "0 10px 30px -10px rgba(236, 72, 153, 0.4)" : "none",
                  }}
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                whileHover={{ z: 30 }}
                onMouseEnter={() => setHoveredField("message")}
                onMouseLeave={() => setHoveredField(null)}
                className="relative preserve-3d"
              >
                <label className="block text-sm font-medium text-parallax-text-secondary mb-2">Message</label>
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-parallax-surface border border-parallax-primary/20 rounded-lg 
                           focus:outline-none focus:border-parallax-primary transition-all duration-300
                           text-parallax-text-primary placeholder-parallax-text-muted resize-none"
                  placeholder="Tell me about your project..."
                  style={{
                    transform: hoveredField === "message" ? "translateZ(10px)" : "translateZ(0)",
                    boxShadow: hoveredField === "message" ? "0 10px 30px -10px rgba(139, 92, 246, 0.4)" : "none",
                  }}
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, z: 50 }}
                whileTap={{ scale: 0.95 }}
                className="button-3d w-full flex items-center justify-center gap-2 text-lg preserve-3d"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Floating particles */}
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="particle absolute w-1 h-1 bg-parallax-primary rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, x: 100, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8 }}
            className="relative preserve-3d space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: 50, z: -50 }}
                  whileInView={{ opacity: 1, x: 0, z: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ z: 50, scale: 1.05 }}
                  className="depth-card flex items-center gap-4 preserve-3d"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${info.color}33, ${info.color}11)`,
                      border: `1px solid ${info.color}44`,
                    }}
                  >
                    <info.icon className="w-5 h-5" style={{ color: info.color }} />
                  </motion.div>
                  <div>
                    <div className="text-sm text-parallax-text-secondary">{info.label}</div>
                    <div className="text-parallax-text-primary font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative preserve-3d"
            >
              <h3 className="text-xl font-semibold mb-4 text-parallax-text-primary">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      z: 30,
                      scale: 1.2,
                      rotate: 360,
                    }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center depth-card preserve-3d"
                    style={{
                      background: `linear-gradient(135deg, ${social.color}22, transparent)`,
                    }}
                  >
                    <social.icon className="w-5 h-5" style={{ color: social.color }} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* 3D Decorative Element */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 preserve-3d"
              animate={{
                rotateX: 360,
                rotateY: 360,
                rotateZ: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full relative preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-parallax-primary/20 to-transparent rounded-full transform rotateX-45" />
                <div className="absolute inset-0 bg-gradient-to-tr from-parallax-secondary/20 to-transparent rounded-full transform rotateY-45" />
                <div className="absolute inset-0 bg-gradient-to-bl from-parallax-accent/20 to-transparent rounded-full transform rotateZ-45" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
