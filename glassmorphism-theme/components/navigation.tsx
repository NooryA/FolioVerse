"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, FolderOpen, Mail, Sparkles, Github, Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Active section detection
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrollY > 50 ? "glass-nav-premium backdrop-blur-2xl" : "glass-nav-premium backdrop-blur-md"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section - Fixed Width */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 min-w-0 flex-shrink-0"
            >
              <div className="relative">
                <motion.div
                  className="glass-premium w-12 h-12 rounded-2xl flex items-center justify-center glass-shimmer-premium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block min-w-0">
                <div className="text-lg font-bold glass-text-glow-premium font-['Orbitron'] truncate">Glassmorphism Portfolio</div>
                <div className="text-xs text-white/60 truncate">Creative Developer</div>
              </div>
            </motion.div>

            {/* Desktop Navigation Items - Centered */}
            <div className="hidden lg:flex items-center justify-center space-x-1 flex-1 max-w-2xl mx-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`glass-button-premium px-4 py-2.5 rounded-2xl flex items-center space-x-2 transition-all duration-300 text-sm font-medium ${
                    activeSection === item.id ? "glass-glow-primary border-blue-400/50 scale-105" : "hover:glass-glow-secondary"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Medium Screen Navigation - Compact */}
            <div className="hidden md:flex lg:hidden items-center space-x-1 flex-1 justify-center mx-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`glass-button-premium p-2.5 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    activeSection === item.id ? "glass-glow-primary border-blue-400/50 scale-105" : "hover:glass-glow-secondary"
                  }`}
                  title={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </motion.button>
              ))}
            </div>

            {/* CTA Button - Fixed Width */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hidden lg:flex items-center flex-shrink-0"
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-button-premium glass-glow-accent px-5 py-2.5 rounded-2xl flex items-center space-x-2 text-sm font-medium"
              >
                <span>Let's Connect</span>
                <MessageCircle className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden glass-premium p-3 rounded-2xl hover:glass-glow-primary transition-all duration-300 flex-shrink-0"
            >
              {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.button>
          </div>
        </div>

        {/* Particle Effects Overlay */}
        <div className="glass-particles absolute inset-0 pointer-events-none opacity-10"></div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] md:hidden"
            style={{ zIndex: 9998 }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-80 glass-card-premium glass-particles border-l border-white/20"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="glass-premium w-10 h-10 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-lg font-bold glass-text-glow-premium font-['Orbitron']">Menu</div>
                      <div className="text-xs text-white/60">Navigation</div>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsOpen(false)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-premium p-2 rounded-xl hover:glass-glow-primary transition-all duration-300"
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-3 mb-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full glass-button-premium p-4 rounded-2xl flex items-center space-x-3 transition-all duration-300 ${
                        activeSection === item.id ? "glass-glow-primary border-blue-400/50" : "hover:glass-glow-secondary"
                      }`}
                    >
                      <item.icon className="w-6 h-6" />
                      <span className="font-medium text-lg">{item.label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Social Links */}
                <div className="space-y-4 mb-8">
                  <div className="text-sm text-white/60 font-medium">Connect</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Github, label: "GitHub", href: "https://github.com" },
                      { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
                      { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
                      { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                    ].map((social) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-premium p-3 rounded-xl flex items-center space-x-2 hover:glass-glow-secondary transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{social.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    onClick={() => scrollToSection("contact")}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full glass-button-premium glass-glow-accent p-4 rounded-2xl flex items-center justify-center space-x-2"
                  >
                    <span className="font-medium">Let's Connect</span>
                    <MessageCircle className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
