"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Droplets, Waves, Sparkles, Play, ArrowRight, ChevronDown, Zap, Globe, Heart, Code, Palette, Rocket } from "lucide-react";

export function HeroSection() {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure page starts from the very top
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newRipple = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 1000);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-40"
              style={{
                left: `${10 + i * 20}%`,
                top: `${10 + i * 15}%`,
                width: `${150 + i * 50}px`,
                height: `${150 + i * 50}px`,
                background: `linear-gradient(${45 + i * 72}deg, 
                  rgba(6, 182, 212, 0.3) 0%, 
                  rgba(139, 92, 246, 0.3) 50%, 
                  rgba(59, 130, 246, 0.3) 100%)`,
                filter: `blur(${30 + i * 10}px)`,
              }}
              animate={{
                x: [0, 30, -20, 0],
                y: [0, -20, 25, 0],
                scale: [1, 1.2, 0.8, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Main Loading Animation */}
        <div className="relative z-10 text-center">
          {/* Central Liquid Orb */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
          >
            {/* Main Orb */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 rounded-full"
                animate={{
                  opacity: [0.8, 1, 0.8],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Inner Glass Effect */}
            <div className="absolute inset-4 bg-white/30 backdrop-blur-sm rounded-full border border-white/50 flex items-center justify-center">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
                <Droplets className="w-12 h-12 text-white drop-shadow-lg" />
              </motion.div>
            </div>

            {/* Orbiting Particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(45deg, 
                    rgba(6, 182, 212, 0.8) 0%, 
                    rgba(139, 92, 246, 0.8) 100%)`,
                  top: "50%",
                  left: "50%",
                  transformOrigin: `0 ${50 + i * 8}px`,
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Pulsing Ring */}
            <motion.div
              className="absolute -inset-4 border-4 border-cyan-300/50 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.div className="space-y-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Liquid UI
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 font-medium"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Initializing liquid experience...
            </motion.p>

            {/* Liquid Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f0f4ff 100%)",
      }}
    >
      {/* Subtle Liquid Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slow Moving Ambient Blobs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${5 + i * 12}%`,
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              background: `linear-gradient(${45 + i * 60}deg, 
                rgba(6, 182, 212, 0.08) 0%, 
                rgba(139, 92, 246, 0.08) 50%, 
                rgba(59, 130, 246, 0.08) 100%)`,
              filter: `blur(${20 + i * 5}px)`,
            }}
            animate={{
              x: [0, 20, -10, 0],
              y: [0, -15, 10, 0],
              scale: [1, 1.1, 0.9, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Gentle Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Click Ripples */}
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
            <div
              className="absolute border-2 border-cyan-400 rounded-full"
              style={{
                width: "20px",
                height: "20px",
                transform: "translate(-50%, -50%)",
                animation: `liquid-ripple 1s ease-out forwards`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Hero Logo */}
          <motion.div
            className="mb-16 mt-20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-40 h-40 mx-auto">
              {/* Main Logo Circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" />
              </div>

              {/* Inner Glass Circle */}
              <div className="absolute inset-4 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <Droplets className="w-16 h-16 text-cyan-600" />
                </motion.div>
              </div>

              {/* Orbiting Elements */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-purple-400 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                    transformOrigin: `0 ${40 + i * 10}px`,
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-7xl md:text-9xl font-bold mb-8 leading-none">
              <motion.span
                className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Liquid
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                UI
              </motion.span>
            </h1>

            {/* Animated Underline */}
            <motion.div
              className="h-2 w-32 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-2xl md:text-3xl text-gray-700 mb-20 max-w-5xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Create stunning{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              fluid experiences
            </span>{" "}
            that captivate and inspire. Where design meets{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">liquid motion</span>.
          </motion.p>

          {/* Feature Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              {
                icon: Waves,
                title: "Fluid Animations",
                description: "Smooth, natural transitions that feel alive",
                gradient: "from-cyan-400 to-blue-500",
                bgGradient: "from-cyan-50 to-blue-50",
              },
              {
                icon: Sparkles,
                title: "Morphing Elements",
                description: "Dynamic components that transform beautifully",
                gradient: "from-purple-400 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
              },
              {
                icon: Zap,
                title: "Interactive Magic",
                description: "Responsive design that reacts to every touch",
                gradient: "from-green-400 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`relative bg-gradient-to-br ${feature.bgGradient} border border-white/50 rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <div className="text-center">
                  <div
                    className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xl px-12 py-5 rounded-full font-semibold flex items-center gap-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Start Creating</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              className="bg-white/80 backdrop-blur-lg border border-white/50 text-xl px-12 py-5 rounded-full font-semibold flex items-center gap-4 text-gray-700 hover:text-gray-800 hover:bg-white/90 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-6 h-6" />
              <span>Watch Demo</span>
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {[
              { icon: Globe, value: "100%", label: "Responsive", color: "text-cyan-600" },
              { icon: Heart, value: "∞", label: "Possibilities", color: "text-purple-600" },
              { icon: Code, value: "60fps", label: "Performance", color: "text-blue-600" },
              { icon: Palette, value: "0ms", label: "Lag Time", color: "text-green-600" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <div className="relative mb-4">
                  <div
                    className={`w-16 h-16 mx-auto ${stat.color} bg-gradient-to-r from-current to-current opacity-20 rounded-full flex items-center justify-center mb-4`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-700 font-medium text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
