"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Globe, Heart, Award, Users } from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const skills = [
    {
      name: "Frontend Development",
      items: ["React", "Next.js", "TypeScript", "Vue.js"],
      color: "from-blue-400 to-cyan-400",
      icon: Code,
    },
    {
      name: "Design & UX",
      items: ["Figma", "Sketch", "Framer", "Principle"],
      color: "from-purple-400 to-pink-400",
      icon: Palette,
    },
    {
      name: "Backend & Tools",
      items: ["Node.js", "Python", "Docker", "AWS"],
      color: "from-green-400 to-emerald-400",
      icon: Zap,
    },
    {
      name: "Web Technologies",
      items: ["GraphQL", "REST", "WebGL", "PWA"],
      color: "from-orange-400 to-red-400",
      icon: Globe,
    },
  ];

  const experiences = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Corp",
      description: "Leading architecture decisions and mentoring junior developers",
      icon: Award,
    },
    {
      year: "2022",
      title: "Frontend Lead",
      company: "Digital Solutions Inc",
      description: "Built scalable applications serving 1M+ users",
      icon: Users,
    },
    {
      year: "2021",
      title: "UI/UX Developer",
      company: "Creative Agency",
      description: "Designed and developed award-winning interfaces",
      icon: Palette,
    },
    {
      year: "2020",
      title: "Junior Developer",
      company: "StartUp Studios",
      description: "Started journey in modern web development",
      icon: Code,
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Problem Solver", icon: "🔧" },
  ];

  return (
    <section ref={containerRef} id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3), transparent)",
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 glass-floating opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              clipPath:
                i % 2 === 0 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="glass-premium inline-block px-8 py-3 rounded-full glass-shimmer-premium mb-6">
            <span className="text-sm font-medium text-white/90 flex items-center gap-2">
              <Heart className="w-4 h-4 text-pink-400" />
              About Me
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold glass-text-glow-premium mb-6 font-['Orbitron']">
            Crafting Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Experiences
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Story Section - REMOVED COFFEE ICON */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card-premium glass-particles relative">
              {/* Removed the coffee icon that was bouncing around */}

              <h3 className="text-3xl font-bold glass-text-glow-premium mb-6 font-['Orbitron']">My Creative Journey</h3>

              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate developer who believes in the power of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                    beautiful code
                  </span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                    exceptional design
                  </span>
                  .
                </p>

                <p>
                  My journey began with a simple curiosity about how websites work, and it evolved into a deep passion for creating digital
                  experiences that not only function flawlessly but also inspire and delight users.
                </p>

                <p>
                  I specialize in bridging the gap between design and development, ensuring every pixel serves a purpose and every
                  interaction feels natural and intuitive.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Creative Problem Solver", "Detail Oriented", "Team Player", "Continuous Learner"].map((trait) => (
                  <span key={trait} className="glass-premium px-4 py-2 rounded-full text-sm text-white/90 glass-shimmer-premium">
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card-premium glass-shimmer-premium hover:glass-glow-primary transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl glass-premium flex items-center justify-center bg-gradient-to-r ${category.color}`}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{category.name}</h4>
                </div>

                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Professional Journey</h3>
            <p className="text-white/70 text-lg">My path through the tech industry</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-16`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`glass-card-premium w-5/12 glass-shimmer-premium hover:glass-glow-secondary transition-all duration-300 ${
                    index % 2 === 0 ? "mr-8" : "ml-8"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl glass-premium flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400">
                      <exp.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm text-white/60 font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {exp.year}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                  <div className="text-white/80 text-sm mb-3 font-medium">{exp.company}</div>
                  <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div className="absolute left-1/2 transform -translate-x-1/2" whileHover={{ scale: 1.3 }}>
                  <div className="w-6 h-6 rounded-full glass-premium bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card-premium text-center glass-shimmer-premium hover:glass-glow-accent transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold glass-text-premium mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card-premium glass-particles max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Ready to Create Something Amazing?</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Let's collaborate and bring your vision to life with cutting-edge technology and creative design.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-premium glass-glow-primary flex items-center space-x-2 mx-auto"
            >
              <span>Let's Work Together</span>
              <Heart className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Ambient Particles */}
      <div className="glass-particles absolute inset-0 pointer-events-none opacity-30"></div>
    </section>
  );
}
