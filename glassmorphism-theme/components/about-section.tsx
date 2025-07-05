"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const skills = [
    { name: "Frontend", items: ["React", "Next.js", "TypeScript"], color: "rgba(59, 130, 246, 0.3)" },
    { name: "Design", items: ["Figma", "Framer", "Tailwind"], color: "rgba(139, 92, 246, 0.3)" },
    { name: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL"], color: "rgba(236, 72, 153, 0.3)" },
    { name: "Tools", items: ["Git", "Docker", "AWS"], color: "rgba(6, 182, 212, 0.3)" },
  ];

  const experiences = [
    { year: "2024", title: "Senior Developer", company: "Tech Corp", description: "Leading frontend architecture" },
    { year: "2022", title: "Full Stack Developer", company: "StartUp Inc", description: "Building scalable applications" },
    { year: "2020", title: "Junior Developer", company: "Agency X", description: "Creating beautiful interfaces" },
  ];

  return (
    <section ref={containerRef} id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: `radial-gradient(circle, ${["#3b82f6", "#8b5cf6", "#ec4899", "#06b6d4"][i % 4]}33, transparent)`,
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${[10, 70, 20, 80, 30, 60][i]}%`,
              top: `${[20, 60, 80, 10, 50, 30][i]}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold glass-text-glow mb-4">About Me</h2>
          <div className="glass-divider max-w-xs mx-auto" />
        </motion.div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="glass-card glass-shimmer">
              <h3 className="text-2xl font-semibold text-white mb-4">Crafting Digital Experiences</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                I'm a passionate developer specializing in creating beautiful, functional, and user-centered digital experiences. With
                expertise in modern web technologies and a keen eye for design, I transform ideas into elegant solutions.
              </p>
              <p className="text-white/80 leading-relaxed">
                My approach combines technical excellence with creative innovation, ensuring every project not only works flawlessly but
                also delights users with its aesthetic appeal and intuitive interaction design.
              </p>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 rounded-full glass-glow"
                style={{ background: "rgba(59, 130, 246, 0.2)" }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((category, index) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass p-4 glass-glow"
                style={{ background: category.color }}
              >
                <h4 className="font-semibold text-white mb-2">{category.name}</h4>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-white/70 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Professional Journey</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full glass-divider-vertical" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center justify-${index % 2 === 0 ? "start" : "end"} mb-12`}
              >
                <motion.div whileHover={{ scale: 1.05 }} className="glass-card w-5/12 glass-glow">
                  <div className="text-sm text-white/60 mb-1">{exp.year}</div>
                  <h4 className="text-lg font-semibold text-white mb-1">{exp.title}</h4>
                  <div className="text-white/80 text-sm mb-2">{exp.company}</div>
                  <p className="text-white/70 text-sm">{exp.description}</p>
                </motion.div>

                {/* Timeline Dot */}
                <motion.div className="absolute left-1/2 transform -translate-x-1/2" whileHover={{ scale: 1.3 }}>
                  <div className="w-4 h-4 bg-white rounded-full glass-glow" />
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
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "100%", label: "Passion" },
          ].map((stat, index) => (
            <motion.div key={stat.label} whileHover={{ y: -10 }} className="glass-card text-center glass-shimmer">
              <motion.div
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full glass"
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-32 h-32 rounded-full glass"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
