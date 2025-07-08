"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderOpen, Mail, Droplets, Menu, X, Sparkles } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [wavePhase, setWavePhase] = useState(0);
  const navRef = useRef<HTMLElement>(null);

  const navItems = [
    {
      href: "#home",
      label: "Home",
      icon: Home,
      color: "from-cyan-400 to-blue-500",
      hoverColor: "hover:from-cyan-500 hover:to-blue-600",
    },
    {
      href: "#about",
      label: "About",
      icon: User,
      color: "from-purple-400 to-pink-500",
      hoverColor: "hover:from-purple-500 hover:to-pink-600",
    },
    {
      href: "#projects",
      label: "Projects",
      icon: FolderOpen,
      color: "from-green-400 to-emerald-500",
      hoverColor: "hover:from-green-500 hover:to-emerald-600",
    },
    {
      href: "#contact",
      label: "Contact",
      icon: Mail,
      color: "from-orange-400 to-red-500",
      hoverColor: "hover:from-orange-500 hover:to-red-600",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const waveAnimation = () => {
      setWavePhase((prev) => (prev + 1) % 360);
    };

    const waveInterval = setInterval(waveAnimation, 50);

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(waveInterval);
    };
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {/* Liquid Wave Background */}
      <div className="fixed top-0 left-0 right-0 h-32 z-30 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 182, 212, 0.1)" />
              <stop offset="50%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
          </defs>
          <path
            d={`M0,64 Q300,${32 + Math.sin(wavePhase * 0.02) * 16} 600,64 T1200,64 V0 H0 Z`}
            fill="url(#waveGradient)"
            className="liquid-wave"
          />
          <path
            d={`M0,80 Q300,${48 + Math.sin(wavePhase * 0.025) * 12} 600,80 T1200,80 V0 H0 Z`}
            fill="rgba(6, 182, 212, 0.05)"
            className="liquid-wave"
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      <motion.nav
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrollY > 50 ? "liquid-glass backdrop-blur-xl border-b border-white/10 shadow-lg" : "bg-transparent"
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{
          background:
            scrollY > 50
              ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(6, 182, 212, 0.05) 0%, transparent 70%), var(--liquid-gradient-glass)`
              : "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Liquid Logo */}
            <motion.div className="flex items-center gap-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <div className="relative">
                <div className="w-16 h-16 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow relative overflow-hidden">
                  <Droplets className="w-8 h-8 text-white z-10" />

                  {/* Liquid Blob Effect */}
                  <div
                    className="absolute inset-0 liquid-blob opacity-30"
                    style={{
                      background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                    }}
                  />
                </div>

                {/* Orbiting Particles */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `0 ${25 + i * 8}px`,
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4 + i * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>

              <div>
                <div className="text-2xl font-bold liquid-text-gradient">LiquidUI</div>
                <div className="text-sm text-gray-500">Fluid Experience</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="group relative"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative px-6 py-3 overflow-hidden rounded-full">
                    {/* Morphing Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}
                    />

                    {/* Liquid Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-white/10 transform scale-0 group-hover:scale-150 transition-all duration-700 ease-out opacity-0 group-hover:opacity-100" />

                    <div className="relative flex items-center gap-3 z-10">
                      <item.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      <span className="text-gray-700 group-hover:text-white font-medium transition-colors duration-300">{item.label}</span>
                    </div>

                    {/* Floating Particle */}
                    <motion.div
                      className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        y: [0, -10, 0],
                        x: [0, 5, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.div className="relative" animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <div className="w-12 h-12 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>

                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 liquid-pulse" />
              </motion.div>

              <div className="text-sm">
                <div className="text-gray-700 font-medium">Liquid Active</div>
                <div className="text-gray-500">{new Date().toLocaleTimeString()}</div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-12 h-12 liquid-morph liquid-gradient rounded-full flex items-center justify-center text-white liquid-shadow overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Morphing Background */}
              <div
                className="absolute inset-0 liquid-blob opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
                }}
              />

              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 z-10" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 z-10" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden liquid-glass backdrop-blur-xl border-t border-white/10"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative p-4 overflow-hidden rounded-2xl liquid-glass border border-white/10">
                      {/* Mobile Morphing Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}
                      />

                      {/* Liquid Shape */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 liquid-blob bg-white/10 rounded-2xl" />
                      </div>

                      <div className="relative flex items-center gap-4 z-10">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center liquid-shadow`}
                        >
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-gray-700 group-hover:text-white font-semibold text-lg transition-colors duration-300">
                            {item.label}
                          </div>
                          <div className="text-gray-500 group-hover:text-white/70 text-sm transition-colors duration-300">
                            Liquid Navigation
                          </div>
                        </div>
                      </div>

                      {/* Mobile Ripple Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-white/10 transform scale-0 group-hover:scale-110 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100" />
                    </div>

                    {/* Floating Bubbles */}
                    <motion.div
                      className={`absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100`}
                      animate={{
                        y: [0, -15, 0],
                        scale: [1, 1.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
