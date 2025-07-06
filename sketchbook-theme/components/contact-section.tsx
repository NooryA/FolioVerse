"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Heart, Coffee, Zap, Star, MessageCircle, Linkedin, Github, Twitter } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredInput, setHoveredInput] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success animation
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "hello@yourname.com",
      href: "mailto:hello@yourname.com",
      sketch: "📧",
      color: "#3b82f6",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      sketch: "📞",
      color: "#10b981",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
      sketch: "📍",
      color: "#f59e0b",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
      color: "#374151",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername",
      color: "#0077b5",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "https://twitter.com/yourusername",
      color: "#1da1f2",
    },
  ];

  const InputField = ({
    type,
    field,
    label,
    placeholder,
    isTextarea = false,
  }: {
    type?: string;
    field: string;
    label: string;
    placeholder: string;
    isTextarea?: boolean;
  }) => (
    <motion.div className="relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <label className="handwritten-bold text-lg text-gray-700 mb-2 block">
        {label} {field === "name" && "✏️"} {field === "email" && "📧"} {field === "message" && "💬"}
      </label>

      <div className="relative">
        {isTextarea ? (
          <textarea
            value={formData[field as keyof typeof formData]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onMouseEnter={() => setHoveredInput(field)}
            onMouseLeave={() => setHoveredInput(null)}
            onFocus={() => setHoveredInput(field)}
            onBlur={() => setHoveredInput(null)}
            placeholder={placeholder}
            rows={4}
            className="w-full p-4 bg-paper sketch-border handwritten text-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            style={{
              backgroundImage:
                hoveredInput === field
                  ? "linear-gradient(transparent 35px, #3b82f6 35px, #3b82f6 36px, transparent 36px)"
                  : "linear-gradient(transparent 35px, #e5e7eb 35px, #e5e7eb 36px, transparent 36px)",
              backgroundSize: "100% 36px",
            }}
          />
        ) : (
          <input
            type={type || "text"}
            value={formData[field as keyof typeof formData]}
            onChange={(e) => handleInputChange(field, e.target.value)}
            onMouseEnter={() => setHoveredInput(field)}
            onMouseLeave={() => setHoveredInput(null)}
            onFocus={() => setHoveredInput(field)}
            onBlur={() => setHoveredInput(null)}
            placeholder={placeholder}
            className="w-full p-4 bg-paper sketch-border handwritten text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            style={{
              backgroundImage:
                hoveredInput === field
                  ? "linear-gradient(transparent 35px, #3b82f6 35px, #3b82f6 36px, transparent 36px)"
                  : "linear-gradient(transparent 35px, #e5e7eb 35px, #e5e7eb 36px, transparent 36px)",
              backgroundSize: "100% 36px",
            }}
          />
        )}

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: hoveredInput === field ? "100%" : "0%" }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Doodle decorations */}
      <motion.div
        className="absolute -top-2 -right-2 text-xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {field === "name" && "✨"}
        {field === "email" && "📬"}
        {field === "message" && "💭"}
      </motion.div>
    </motion.div>
  );

  return (
    <section id="contact" className="min-h-screen paper-texture notebook-lines margin-line py-16 relative">
      <div className="container mx-auto px-8 ml-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="handwritten-bold text-6xl md:text-7xl mb-4 scribble-underline">Let's Connect!</h2>
          <p className="handwritten text-xl text-gray-600 mb-8">Ready to bring your ideas to life? Drop me a line!</p>

          {/* Animated coffee cup */}
          <motion.div
            className="text-6xl inline-block"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ☕
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Form */}
          <motion.div
            className="bg-paper sketch-border p-8 torn-paper relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Form Title */}
            <div className="mb-8 text-center">
              <h3 className="handwritten-bold text-3xl mb-2">Send me a message</h3>
              <p className="handwritten text-lg text-gray-600">Let's start a conversation!</p>
            </div>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-6" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <InputField field="name" label="Your Name" placeholder="John Doe" />

                  <InputField type="email" field="email" label="Email Address" placeholder="john@example.com" />

                  <InputField field="message" label="Message" placeholder="Tell me about your project or just say hello!" isTextarea />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white p-4 rounded-lg handwritten text-xl font-bold sketch-hover disabled:opacity-50 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="flex items-center justify-center gap-2"
                      animate={isSubmitting ? { x: [-10, 10, -10] } : {}}
                      transition={{ duration: 0.5, repeat: isSubmitting ? Infinity : 0 }}
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.div>

                    {/* Animated background for loading */}
                    {isSubmitting && (
                      <motion.div
                        className="absolute inset-0 bg-blue-700"
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  className="text-center py-16"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                >
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 0.8 }}
                  >
                    🎉
                  </motion.div>
                  <h3 className="handwritten-bold text-3xl mb-4 text-green-600">Message Sent!</h3>
                  <p className="handwritten text-lg text-gray-600">Thanks for reaching out! I'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form decorations */}
            <div className="absolute top-4 right-4 text-2xl opacity-30">✉️</div>
            <div className="absolute bottom-4 left-4 text-2xl opacity-30">💌</div>
          </motion.div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              className="bg-paper sketch-border p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="handwritten-bold text-3xl mb-6 text-center">Get in Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-lg sketch-hover transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <div className="text-4xl">{contact.sketch}</div>
                    <div>
                      <p className="handwritten-bold text-lg" style={{ color: contact.color }}>
                        {contact.label}
                      </p>
                      <p className="handwritten text-lg text-gray-700">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="sticky-note p-6"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: -2 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h4 className="handwritten-bold text-2xl mb-4 text-center">Find me online</h4>

              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white sketch-hover"
                    style={{ backgroundColor: social.color }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Fun Fact */}
            <motion.div
              className="bg-paper sketch-border p-6 doodle-heart"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <h4 className="handwritten-bold text-xl mb-4">Fun Fact!</h4>
              <p className="handwritten text-lg text-gray-700 leading-relaxed">
                I respond to messages within 24 hours, usually with a cup of coffee in hand! ☕ Let's create something amazing together! 🚀
              </p>
            </motion.div>

            {/* Response Time */}
            <motion.div
              className="bg-green-50 sketch-border p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              <div className="handwritten-bold text-lg text-green-700 mb-2">⚡ Quick Response Time</div>
              <div className="handwritten text-sm text-green-600">Usually within 24 hours</div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Doodles */}
        <motion.div
          className="mt-16 flex justify-center space-x-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <motion.div className="text-4xl" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0 }}>
            💌
          </motion.div>
          <motion.div className="text-4xl" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}>
            📧
          </motion.div>
          <motion.div className="text-4xl" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}>
            💬
          </motion.div>
          <motion.div className="text-4xl" animate={{ y: [0, -15, 0] }} transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}>
            🤝
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-4 text-2xl opacity-20 rotate-12">✨</div>
      <div className="absolute top-3/4 right-8 text-2xl opacity-20 -rotate-12">💫</div>
      <div className="absolute bottom-1/4 left-1/3 text-2xl opacity-20 rotate-45">⭐</div>
    </section>
  );
}
