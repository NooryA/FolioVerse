"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const skills = [
    { name: "React", level: 95, color: "#61DAFB", layer: 1 },
    { name: "TypeScript", level: 90, color: "#3178C6", layer: 2 },
    { name: "Three.js", level: 85, color: "#000000", layer: 3 },
    { name: "Next.js", level: 92, color: "#000000", layer: 1 },
    { name: "Node.js", level: 88, color: "#339933", layer: 2 },
    { name: "WebGL", level: 80, color: "#990000", layer: 3 },
  ];

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen py-20 px-4 overflow-hidden perspective-1000">
      {/* Background Gradient Orbs */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 pointer-events-none">
        <div className="gradient-orb orb-primary w-96 h-96 -top-48 -left-48" />
        <div className="gradient-orb orb-secondary w-80 h-80 top-1/2 -right-40" />
        <div className="gradient-orb orb-accent w-64 h-64 bottom-0 left-1/3" />
      </motion.div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="particle absolute w-1 h-1 bg-parallax-primary rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
          animate={{
            y: [-100, window.innerHeight + 100],
            x: [0, Math.random() * 200 - 100],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative preserve-3d">
        {/* Layered Title */}
        <motion.div style={{ y: y1 }} className="text-center mb-16 relative preserve-3d">
          <motion.h2
            initial={{ opacity: 0, z: -200 }}
            whileInView={{ opacity: 1, z: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-3d mb-4"
          >
            About Me
          </motion.h2>
          <motion.div style={{ rotateZ: rotate }} className="absolute -top-10 -right-10 w-20 h-20 rotating-element">
            <div className="w-full h-full bg-gradient-to-br from-parallax-primary to-parallax-accent rounded-lg opacity-20" />
          </motion.div>
        </motion.div>

        {/* 3D Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bio */}
          <motion.div style={{ y: y2, scale }} className="relative preserve-3d">
            <motion.div
              initial={{ opacity: 0, x: -100, rotateY: -45 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="depth-card relative"
              whileHover={{
                rotateY: 5,
                rotateX: -5,
                z: 50,
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-parallax-primary">Creative Developer & 3D Artist</h3>
              <p className="text-parallax-text-secondary mb-4 leading-relaxed">
                I specialize in creating immersive web experiences that push the boundaries of what's possible in the browser. With a deep
                passion for 3D graphics, interactive animations, and cutting-edge web technologies, I bring ideas to life in ways that
                captivate and inspire.
              </p>
              <p className="text-parallax-text-secondary leading-relaxed">
                My journey spans from traditional web development to advanced WebGL implementations, always focusing on performance,
                accessibility, and creating experiences that users will never forget.
              </p>

              {/* Floating decoration */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20"
                animate={{
                  rotateZ: 360,
                  y: [-10, 10, -10],
                }}
                transition={{
                  rotateZ: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-parallax-secondary to-transparent rounded-full blur-xl opacity-50" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div style={{ y: y1 }} className="relative preserve-3d">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 100, z: -100 }}
                  whileInView={{ opacity: 1, x: 0, z: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative preserve-3d layer-${skill.layer}`}
                  whileHover={{ z: 50, scale: 1.05 }}
                >
                  <div className="depth-card p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-parallax-text-primary">{skill.name}</span>
                      <span className="text-sm text-parallax-text-secondary">{skill.level}%</span>
                    </div>
                    <div className="relative h-4 bg-parallax-dark rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="absolute h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                          boxShadow: `0 0 20px ${skill.color}66`,
                        }}
                      />
                      {/* Animated glow effect */}
                      <motion.div
                        className="absolute h-full w-20 bg-white opacity-30 blur-xl"
                        animate={{
                          x: [-100, skill.level * 4],
                        }}
                        transition={{
                          duration: 2,
                          delay: index * 0.1,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3D Decorative Element */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-40 h-40 preserve-3d"
              animate={{
                rotateX: 360,
                rotateY: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="w-full h-full relative preserve-3d">
                <div className="absolute inset-0 bg-gradient-to-br from-parallax-primary to-parallax-accent rounded-lg opacity-20 transform rotateX-45" />
                <div className="absolute inset-0 bg-gradient-to-tr from-parallax-secondary to-transparent rounded-lg opacity-20 transform rotateY-45" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Experience Timeline with 3D Cards */}
        <motion.div style={{ y: y3 }} className="mt-24 relative preserve-3d">
          <h3 className="text-3xl font-bold text-center mb-12 text-3d">Experience & Journey</h3>
          <div className="relative">
            {/* 3D Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-parallax-primary to-parallax-accent opacity-30" />

            {[
              { year: "2024", title: "Senior 3D Web Developer", company: "Tech Innovations Inc" },
              { year: "2022", title: "Creative Developer", company: "Digital Studios" },
              { year: "2020", title: "Frontend Developer", company: "StartUp Labs" },
              { year: "2018", title: "Junior Developer", company: "Web Agency" },
            ].map((exp, index) => (
              <motion.div
                key={exp.year}
                initial={{ opacity: 0, z: -200 }}
                whileInView={{ opacity: 1, z: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center justify-${index % 2 === 0 ? "start" : "end"} mb-12`}
              >
                <motion.div whileHover={{ z: 100, scale: 1.1 }} className={`depth-card w-5/12 ${index % 2 === 0 ? "mr-auto" : "ml-auto"}`}>
                  <div className="text-parallax-primary font-bold text-xl mb-1">{exp.year}</div>
                  <div className="text-parallax-text-primary font-semibold">{exp.title}</div>
                  <div className="text-parallax-text-secondary text-sm">{exp.company}</div>
                </motion.div>

                {/* 3D Dot */}
                <motion.div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6" whileHover={{ scale: 1.5, rotateZ: 180 }}>
                  <div className="w-full h-full bg-gradient-to-br from-parallax-primary to-parallax-accent rounded-full animate-pulse-3d" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
