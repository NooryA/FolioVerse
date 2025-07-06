"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Subtle background gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}% ${mousePosition.y}%, var(--minimal-accent), transparent 70%)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <p className="text-fluid-lg text-minimal-accent mb-6 font-light tracking-wide">Hello, I&apos;m</p>
            <Sparkles className="inline-block w-4 h-4 ml-2 text-minimal-accent animate-pulse" />
          </motion.div>

          {/* Name with letter animation */}
          <motion.h1
            className="text-fluid-4xl minimal-heading text-minimal-primary mb-8 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {["Y", "o", "u", "r", " ", "N", "a", "m", "e"].map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.05,
                  ease: "easeOut",
                }}
                className="inline-block hover:text-minimal-accent transition-colors duration-300 cursor-default"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Title */}
          <motion.h2
            className="text-fluid-2xl text-minimal-secondary mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span className="relative">
              Product Designer & Frontend Developer
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-minimal-accent to-transparent"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </span>
            <br />
            <motion.span
              className="text-minimal-accent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Creating thoughtful digital experiences
            </motion.span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-fluid-lg text-minimal-accent max-w-2xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            I specialize in crafting user-centered designs and bringing them to life with clean, performant code. Currently focused on
            design systems and accessible web experiences.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.button
              onClick={() => scrollToSection("work")}
              className="minimal-button group flex items-center space-x-2 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-minimal-accent-dark to-minimal-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                layoutId="buttonBg"
              />
              <span className="relative z-10">View My Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              className="minimal-button-outline flex items-center space-x-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get In Touch</span>
              <motion.div
                className="w-2 h-2 bg-minimal-accent rounded-full opacity-0 group-hover:opacity-100"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </motion.button>
          </motion.div>

          {/* Stats with enhanced animations */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "∞", label: "Coffee Consumed" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="flex flex-col group cursor-default"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              >
                <motion.span
                  className="text-2xl font-light minimal-heading text-minimal-primary group-hover:text-minimal-accent transition-colors duration-300"
                  whileHover={{
                    textShadow: "0 0 8px rgba(0, 102, 204, 0.3)",
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-sm text-minimal-accent group-hover:text-minimal-primary transition-colors duration-300">
                  {stat.label}
                </span>
                <motion.div
                  className="h-0.5 bg-minimal-accent opacity-0 group-hover:opacity-100 mt-2"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.0 }}
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="text-minimal-accent hover:text-minimal-primary transition-colors duration-200 flex flex-col items-center space-y-2 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-xs font-medium tracking-wider uppercase group-hover:tracking-widest transition-all duration-300">
              Scroll
            </span>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ChevronDown size={16} className="group-hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-minimal-accent to-transparent opacity-50"
              initial={{ height: 0 }}
              animate={{ height: 32 }}
              transition={{ duration: 1, delay: 2.2 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
