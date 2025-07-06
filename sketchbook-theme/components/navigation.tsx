"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, Mail, Palette, Book, Coffee, Menu, X } from "lucide-react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" />, sketch: "🏠", color: "#3b82f6" },
    { id: "about", label: "About", icon: <User className="w-5 h-5" />, sketch: "👨‍💻", color: "#ec4899" },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-5 h-5" />, sketch: "💼", color: "#10b981" },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" />, sketch: "📬", color: "#f59e0b" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);

      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation - Notebook Tabs */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block"
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: isVisible ? 1 : 0.3,
          x: isVisible ? 0 : 50,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          {/* Notebook Spine */}
          <div className="absolute -left-6 top-0 bottom-0 w-8 bg-red-600 rounded-l-lg shadow-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-4 h-1 bg-gray-800 rounded-full opacity-30" />
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-3 px-6 py-3 rounded-l-xl transition-all duration-300 group ${
                  activeSection === item.id
                    ? "bg-paper shadow-lg transform translate-x-0"
                    : "bg-paper/80 hover:bg-paper hover:shadow-md transform translate-x-4 hover:translate-x-0"
                }`}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Tab Content */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.sketch}</span>
                  <motion.span
                    className={`handwritten font-bold transition-all duration-300 ${
                      activeSection === item.id ? "text-gray-800" : "text-gray-600"
                    }`}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{
                      width: activeSection === item.id ? "auto" : 0,
                      opacity: activeSection === item.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.label}
                  </motion.span>
                </div>

                {/* Active Indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.6 }}
                  />
                )}

                {/* Hover Sketch Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-l-xl opacity-0 group-hover:opacity-30"
                  initial={false}
                  animate={{
                    strokeDasharray: activeSection === item.id ? [0, 0] : [5, 5],
                    rotate: activeSection === item.id ? 0 : Math.random() * 4 - 2,
                  }}
                />

                {/* Page Corner Fold */}
                <div className="absolute top-0 right-0 w-4 h-4 bg-gray-200 transform rotate-45 translate-x-2 -translate-y-2 opacity-20" />
              </motion.button>
            ))}
          </div>

          {/* Decorative Elements */}
          <motion.div
            className="absolute -top-4 right-4 text-2xl opacity-30"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ✏️
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-6 right-6 z-50 md:hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-14 h-14 bg-paper sketch-border rounded-full flex items-center justify-center shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-gray-700" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Palette className="w-6 h-6 text-gray-700" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-16 right-0 bg-paper sketch-border rounded-lg shadow-xl p-4 min-w-[200px]"
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-700"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-2xl">{item.sketch}</span>
                    <span className="handwritten font-bold">{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        className="w-2 h-2 rounded-full ml-auto"
                        style={{ backgroundColor: item.color }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Decorations */}
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <div className="handwritten text-sm text-gray-500">Made with ❤️</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Action Button - Portfolio Theme Toggle */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className="w-16 h-16 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center sketch-hover"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            y: { duration: 3, repeat: Infinity },
            rotate: { duration: 4, repeat: Infinity },
          }}
          title="Sketchbook Theme"
        >
          <Book className="w-8 h-8 text-gray-700" />
        </motion.button>
      </motion.div>

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        style={{
          scaleX: typeof window !== "undefined" ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) : 0,
        }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.1 }}
      />

      {/* Background Sketch Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 text-4xl opacity-10"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          ✏️
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-4xl opacity-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          🎨
        </motion.div>
        <motion.div
          className="absolute top-1/2 left-10 text-3xl opacity-10"
          animate={{
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          📝
        </motion.div>
      </div>
    </>
  );
}
