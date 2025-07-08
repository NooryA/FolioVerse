"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import {
  Mail,
  Send,
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  User,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  Heart,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [blobPositions, setBlobPositions] = useState<Array<{ x: number; y: number; scale: number; delay: number }>>([]);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@liquidui.dev",
      description: "Send me a message anytime",
      color: "from-blue-400 to-cyan-500",
      link: "mailto:hello@liquidui.dev",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available 9 AM - 6 PM EST",
      color: "from-green-400 to-emerald-500",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work",
      color: "from-purple-400 to-pink-500",
      link: "#",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "Usually much faster!",
      color: "from-orange-400 to-red-500",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "#", color: "from-gray-600 to-gray-800" },
    { icon: Twitter, name: "Twitter", url: "#", color: "from-blue-400 to-blue-600" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "from-blue-600 to-blue-800" },
    { icon: Instagram, name: "Instagram", url: "#", color: "from-pink-400 to-purple-600" },
    { icon: Globe, name: "Website", url: "#", color: "from-green-400 to-teal-600" },
  ];

  const formFields = [
    { name: "name", label: "Full Name", type: "text", icon: User },
    { name: "email", label: "Email Address", type: "email", icon: Mail },
    { name: "subject", label: "Subject", type: "text", icon: MessageCircle },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const generateBlobPositions = () => {
      const positions = [];
      for (let i = 0; i < 8; i++) {
        positions.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          scale: 0.6 + Math.random() * 0.8,
          delay: Math.random() * 5,
        });
      }
      setBlobPositions(positions);
    };

    generateBlobPositions();
    const blobInterval = setInterval(generateBlobPositions, 12000);

    return () => {
      clearInterval(blobInterval);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 360],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      }}
    >
      {/* Subtle Liquid Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slow Moving Ambient Blobs */}
        {blobPositions.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute liquid-morph opacity-20"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${80 + index * 15}px`,
              height: `${80 + index * 15}px`,
              background: `linear-gradient(${45 + index * 36}deg, 
                rgba(6, 182, 212, 0.3) 0%, 
                rgba(139, 92, 246, 0.3) 50%, 
                rgba(59, 130, 246, 0.3) 100%)`,
              filter: `blur(${15 + index * 2}px)`,
              transform: `translate(-50%, -50%) scale(${blob.scale})`,
            }}
            animate={{
              scale: [blob.scale, blob.scale * 1.4, blob.scale],
              rotate: [0, 360],
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 30 - 15, 0],
            }}
            transition={{
              duration: 18 + index * 2,
              repeat: Infinity,
              ease: "linear",
              delay: blob.delay,
            }}
          />
        ))}

        {/* Gentle Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 7 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <motion.div className="max-w-7xl mx-auto relative z-10" variants={containerVariants} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              className="w-20 h-20 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Mail className="w-10 h-10 text-white" />
            </motion.div>
            <motion.div
              className="h-1 w-32 liquid-morph liquid-gradient rounded-full"
              animate={{ scaleX: [1, 1.3, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
            <span className="liquid-text-gradient">Get In Touch</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to create something <span className="text-cyan-400 font-semibold">extraordinary</span>? Let's discuss your project and
            bring your <span className="text-cyan-400 font-semibold">vision to life</span>
            with liquid design.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="liquid-card liquid-glass border-white/10">
              <motion.div className="flex items-center gap-4 mb-8" whileHover={{ scale: 1.02 }}>
                <div className="w-12 h-12 liquid-morph bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Send Message</h3>
                  <p className="text-gray-400">I'll get back to you within 24 hours</p>
                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Form Fields */}
                    {formFields.map((field, index) => (
                      <motion.div
                        key={field.name}
                        className="relative"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="relative">
                          <field.icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10" />
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            className="liquid-input text-white placeholder-gray-400 pl-12 bg-white/5 border-white/10"
                            placeholder={field.label}
                            required
                          />

                          {/* Floating Label */}
                          <motion.label
                            className={`absolute left-12 text-sm font-medium pointer-events-none transition-all duration-300 ${
                              focusedField === field.name || formData[field.name as keyof typeof formData]
                                ? "top-0 text-cyan-400 -translate-y-1/2"
                                : "top-1/2 text-gray-400 -translate-y-1/2"
                            }`}
                            animate={{
                              scale: focusedField === field.name ? 1.05 : 1,
                            }}
                          >
                            {field.label}
                          </motion.label>

                          {/* Focus Effect */}
                          <motion.div
                            className="absolute inset-0 rounded-2xl border-2 border-cyan-400 opacity-0"
                            animate={{
                              opacity: focusedField === field.name ? 0.3 : 0,
                              scale: focusedField === field.name ? 1.02 : 1,
                            }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}

                    {/* Message Field */}
                    <motion.div
                      className="relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="relative">
                        <MessageCircle className="absolute left-4 top-6 w-5 h-5 text-gray-400 z-10" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          rows={5}
                          className="liquid-input text-white placeholder-gray-400 pl-12 bg-white/5 border-white/10 resize-none"
                          placeholder="Your message..."
                          required
                        />

                        {/* Floating Label */}
                        <motion.label
                          className={`absolute left-12 text-sm font-medium pointer-events-none transition-all duration-300 ${
                            focusedField === "message" || formData.message ? "top-2 text-cyan-400" : "top-6 text-gray-400"
                          }`}
                          animate={{
                            scale: focusedField === "message" ? 1.05 : 1,
                          }}
                        >
                          Message
                        </motion.label>

                        {/* Focus Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-cyan-400 opacity-0"
                          animate={{
                            opacity: focusedField === "message" ? 0.3 : 0,
                            scale: focusedField === "message" ? 1.02 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full liquid-button text-lg py-4 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className="w-5 h-5 liquid-morph bg-white rounded-full animate-pulse" />
                            <span>Sending...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="send"
                            className="flex items-center gap-3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  >
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 liquid-morph bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <motion.div
                      className="flex items-center justify-center gap-2 text-cyan-400"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Heart className="w-5 h-5" />
                      <span>Appreciate your interest!</span>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  className="liquid-card liquid-hover liquid-glass border-white/10 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 liquid-morph bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center liquid-shadow flex-shrink-0`}
                      variants={floatingVariants}
                      animate="animate"
                      transition={{ delay: index * 0.5 }}
                    >
                      <info.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{info.title}</h3>
                      <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-gray-400">{info.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div className="liquid-card liquid-glass border-white/10" variants={itemVariants}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 liquid-morph bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Connect With Me</h3>
                  <p className="text-gray-400">Follow my journey in liquid design</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`w-12 h-12 liquid-morph bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center liquid-shadow liquid-hover group`}
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div className="liquid-card liquid-glass border-white/10" variants={itemVariants}>
              <div className="flex items-center gap-4">
                <motion.div
                  className="w-4 h-4 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">Available for Projects</h3>
                  <p className="text-gray-400">Currently accepting new freelance opportunities and collaborations</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div className="text-center mt-20" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-6 liquid-glass rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-10 h-10 liquid-morph liquid-gradient rounded-full flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <div className="text-left">
              <div className="text-lg font-bold text-white">Let's create something liquid together</div>
              <div className="text-gray-400">Your next project awaits a fluid transformation</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
