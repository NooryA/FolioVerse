"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Code, Palette, Rocket, Globe, ChevronDown, Sparkles } from "lucide-react";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    { text: "Creative Developer", gradient: "from-cyan-300 via-blue-400 to-indigo-500" },
    { text: "UI/UX Designer", gradient: "from-fuchsia-300 via-pink-400 to-rose-500" },
    { text: "Frontend Architect", gradient: "from-lime-300 via-green-400 to-emerald-500" },
    { text: "Digital Artist", gradient: "from-orange-300 via-red-400 to-pink-500" },
  ];

  // Generate fixed positions for floating shapes
  const [floatingShapes] = useState(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 60 + Math.random() * 40,
      clipPath: (() => {
        const shapes = [
          "polygon(50% 0%, 0% 100%, 100% 100%)",
          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
          "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
        ];
        return shapes[Math.floor(Math.random() * shapes.length)];
      })(),
      duration: 8 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
  });

  useEffect(() => {
    // Ensure page starts from the very top
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "TypeScript", icon: "🔷" },
    { name: "Node.js", icon: "🟢" },
    { name: "Design", icon: "🎨" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Next.js", icon: "▲" },
  ];

  const stats = [
    { value: "100+", label: "Projects", icon: "🚀" },
    { value: "50+", label: "Clients", icon: "🤝" },
    { value: "5+", label: "Years", icon: "📅" },
    { value: "99%", label: "Success", icon: "✨" },
  ];

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden flex items-center justify-center pt-24">
      {/* Fixed Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingShapes.map((shape) => (
          <motion.div
            key={shape.id}
            className="absolute glass-floating opacity-20"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              clipPath: shape.clipPath,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Corner Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 glass-premium p-6 rounded-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Code className="w-8 h-8 text-blue-400" />
        </motion.div>
        <motion.div
          className="absolute top-10 right-10 glass-premium p-6 rounded-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        >
          <Palette className="w-8 h-8 text-purple-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-10 glass-premium p-6 rounded-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          <Rocket className="w-8 h-8 text-pink-400" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 glass-premium p-6 rounded-3xl"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
        >
          <Globe className="w-8 h-8 text-cyan-400" />
        </motion.div>
      </div>

      <motion.div style={{ y, opacity }} className="text-center z-10 max-w-6xl mx-auto px-4">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-card-premium glass-particles mb-12 glass-shimmer-premium"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-lg text-white/80 font-medium">Welcome to my digital universe</span>
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold glass-text-glow-premium mb-6 font-['Orbitron'] leading-tight"
          >
            John Doe
          </motion.h1>

          {/* Premium Dynamic Role Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <div className="text-2xl md:text-3xl text-white/90 font-light mb-4">I'm a passionate</div>

            {/* Premium Role Container */}
            <div className="relative h-24 flex items-center justify-center">
              {/* Glass Background Container */}
              <div className="absolute inset-0 glass-premium rounded-3xl overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer-wave"></div>

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>

              {/* Role Text with Premium Animation */}
              <div className="relative z-10 px-8 py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentRole}
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.8,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -30,
                      scale: 1.1,
                      filter: "blur(10px)",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    className="relative"
                  >
                    {/* Main Text */}
                    <div
                      className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${roles[currentRole].gradient} bg-clip-text text-transparent font-['Orbitron']`}
                    >
                      {roles[currentRole].text}
                    </div>

                    {/* Text Glow Effect */}
                    <div
                      className={`absolute inset-0 text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${roles[currentRole].gradient} bg-clip-text text-transparent font-['Orbitron'] opacity-60 blur-sm`}
                      aria-hidden="true"
                    >
                      {roles[currentRole].text}
                    </div>

                    {/* Sparkle Effects */}
                    <div className="absolute -top-2 -right-2">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles className="w-6 h-6 text-yellow-400/80" />
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Premium Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-white/20 via-white/40 to-white/20 bg-clip-border opacity-40"></div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 max-w-4xl mx-auto"
          >
            Creating stunning digital experiences with cutting-edge technology,
            <br className="hidden md:block" />
            beautiful design, and seamless user interactions.
          </motion.p>

          {/* Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-premium px-4 py-3 rounded-2xl glass-shimmer-premium hover:glass-glow-primary transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-white/90">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-premium glass-glow-primary flex items-center space-x-3 text-lg px-8 py-4"
            >
              <span>View My Work</span>
              <Rocket className="w-6 h-6" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-premium glass-glow-secondary flex items-center space-x-3 text-lg px-8 py-4"
            >
              <span>Get In Touch</span>
              <Globe className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card-premium text-center glass-shimmer-premium hover:glass-glow-accent transition-all duration-300 cursor-pointer"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold glass-text-premium mb-1">{stat.value}</div>
              <div className="text-sm text-white/70 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="glass-premium p-3 rounded-full cursor-pointer hover:glass-glow-primary transition-all duration-300"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="w-6 h-6 text-white/80" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Particle System */}
      <div className="glass-particles absolute inset-0 pointer-events-none opacity-40"></div>
    </section>
  );
}
