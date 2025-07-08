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
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="relative">
                <div className="glass-premium w-12 h-12 rounded-2xl flex items-center justify-center glass-shimmer-premium">
                  <Sparkles className="w-6 h-6 text-blue-400" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse" />
              </div>
              <div className="hidden md:block">
                <div className="text-lg font-bold glass-text-glow-premium font-['Orbitron']">Glassmorphism Portfolio</div>
                <div className="text-xs text-white/60">Creative Developer</div>
              </div>
            </motion.div>

            {/* Desktop Navigation Items */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`glass-button-premium px-6 py-3 rounded-2xl flex items-center space-x-2 transition-all duration-300 ${
                    activeSection === item.id ? "glass-glow-primary border-blue-400/50 scale-105" : "hover:glass-glow-secondary"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex glass-button-premium glass-glow-accent px-6 py-3 rounded-2xl items-center space-x-2"
            >
              <span className="font-medium">Let's Connect</span>
              <MessageCircle className="w-5 h-5" />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden glass-premium p-3 rounded-2xl hover:glass-glow-primary transition-all duration-300"
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
              <div className="p-6">
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
                  <button
                    onClick={() => setIsOpen(false)}
                    className="glass-premium p-2 rounded-xl hover:glass-glow-primary transition-all duration-300"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="space-y-4 mb-8">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.id)}
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
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  onClick={() => scrollToSection("contact")}
                  className="w-full glass-button-premium glass-glow-accent p-4 rounded-2xl flex items-center justify-center space-x-2"
                >
                  <span className="font-medium">Let's Connect</span>
                  <MessageCircle className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
