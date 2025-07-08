"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Droplets, Waves, Sparkles, Play, ArrowRight, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    setMounted(true);
    controls.start("visible");

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newRipple = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          timestamp: Date.now(),
        };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 1200);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f4ff 100%)",
      }}
    >
      {/* Subtle Liquid Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slow Moving Ambient Blobs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute liquid-morph opacity-20"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
              width: `${150 + i * 40}px`,
              height: `${150 + i * 40}px`,
              background: `linear-gradient(${45 + i * 72}deg, 
                rgba(6, 182, 212, 0.15) 0%, 
                rgba(139, 92, 246, 0.15) 50%, 
                rgba(59, 130, 246, 0.15) 100%)`,
              filter: `blur(${25 + i * 5}px)`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 15, 0],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Gentle Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Click Ripples (only on click) */}
      <div className="absolute inset-0 pointer-events-none">
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="absolute"
            style={{
              left: ripple.x,
              top: ripple.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-cyan-400 rounded-full"
                style={{
                  width: `${20 + i * 15}px`,
                  height: `${20 + i * 15}px`,
                  transform: "translate(-50%, -50%)",
                  animation: `liquid-ripple 1.2s ease-out ${i * 0.1}s forwards`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Main Content - Higher z-index and better contrast */}
      <motion.div
        className="relative z-20 flex items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="text-center max-w-6xl mx-auto">
          {/* Liquid Logo */}
          <motion.div
            className="relative mb-12"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="w-32 h-32 mx-auto relative liquid-glow">
              <div className="absolute inset-0 liquid-morph liquid-gradient rounded-full" />
              <div className="absolute inset-4 liquid-glass rounded-full flex items-center justify-center bg-white/20 backdrop-blur-lg">
                <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.8, ease: "easeInOut" }}>
                  <Droplets className="w-12 h-12 text-cyan-600" />
                </motion.div>
              </div>

              {/* Subtle Orbiting Elements */}
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-cyan-400 rounded-full opacity-60"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: `0 ${50 + i * 15}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12 + i * 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Heading - Better contrast */}
          <motion.div className="mb-8" variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <motion.span
                className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent liquid-wave"
                whileHover={{ scale: 1.02 }}
              >
                Liquid
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent liquid-wave"
                style={{ animationDelay: "0.3s" }}
                whileHover={{ scale: 1.02 }}
              >
                Interface
              </motion.span>
            </h1>
            <motion.div
              className="h-2 w-24 mx-auto liquid-morph liquid-gradient rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Subtitle - Better contrast */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed font-medium"
            variants={itemVariants}
          >
            Experience fluid designs that{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">flow seamlessly</span>{" "}
            across all devices. Where creativity meets{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">liquid motion</span>.
          </motion.p>

          {/* Feature Cards - Better contrast */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" variants={itemVariants}>
            {[
              {
                icon: Waves,
                title: "Fluid Animations",
                description: "Smooth transitions that feel natural and responsive",
                color: "from-cyan-400 to-blue-500",
              },
              {
                icon: Sparkles,
                title: "Morphing Elements",
                description: "Components that adapt and transform dynamically",
                color: "from-purple-400 to-pink-500",
              },
              {
                icon: Play,
                title: "Interactive Magic",
                description: "Touch, hover, and watch elements come alive",
                color: "from-green-400 to-emerald-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-lg border border-white/40 rounded-3xl p-8 transition-all duration-300 hover:bg-white/90 hover:scale-105 hover:shadow-xl group cursor-pointer"
                whileHover={{ scale: 1.03, y: -5 }}
                whileTap={{ scale: 0.97 }}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 liquid-morph bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons - Better visibility */}
          <motion.div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" variants={itemVariants}>
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg px-10 py-4 rounded-full font-semibold flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Experience the Flow</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="bg-white/80 backdrop-blur-lg border border-white/40 text-lg px-10 py-4 rounded-full font-semibold flex items-center gap-3 text-gray-700 hover:text-gray-800 hover:bg-white/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Liquid Stats - Better contrast */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16" variants={itemVariants}>
            {[
              { value: "100%", label: "Fluid Design", color: "text-cyan-600" },
              { value: "∞", label: "Possibilities", color: "text-purple-600" },
              { value: "60fps", label: "Smooth Animation", color: "text-blue-600" },
              { value: "0ms", label: "Lag Time", color: "text-green-600" },
            ].map((stat, index) => (
              <motion.div key={index} className="text-center group" whileHover={{ scale: 1.05 }}>
                <div className="relative">
                  <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color} liquid-pulse`}>{stat.value}</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500 rounded-full" />
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            variants={itemVariants}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex flex-col items-center gap-2 text-gray-600">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-8 h-8 bg-white/80 backdrop-blur-lg border border-white/40 rounded-full flex items-center justify-center">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
