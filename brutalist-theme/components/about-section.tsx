"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function AboutSection() {
  const [glitching, setGlitching] = useState(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  // Trigger random glitch effect
  const triggerGlitch = () => {
    setGlitching(true);
    setTimeout(() => setGlitching(false), 500);
  };

  const skills = [
    { name: "HTML/CSS", level: 95, color: "#FF0000" },
    { name: "JAVASCRIPT", level: 90, color: "#FFFF00" },
    { name: "REACT", level: 85, color: "#00FF00" },
    { name: "NODE.JS", level: 80, color: "#0000FF" },
    { name: "TYPESCRIPT", level: 88, color: "#FF00FF" },
    { name: "BRUTALISM", level: 100, color: "#000000" },
  ];

  const experiences = [
    { year: "2024", role: "SENIOR DESTROYER", company: "TECH CORP" },
    { year: "2022", role: "CODE WARRIOR", company: "STARTUP INC" },
    { year: "2020", role: "PIXEL PUSHER", company: "AGENCY X" },
    { year: "2018", role: "JUNIOR BREAKER", company: "WEB CO" },
  ];

  return (
    <section id="about" className="brutal-section bg-white relative overflow-hidden" onClick={triggerGlitch}>
      {/* Glitch overlay */}
      {glitching && (
        <div className="absolute inset-0 z-50 pointer-events-none">
          <div className="absolute inset-0 bg-red-500 mix-blend-multiply animate-pulse" />
          <div className="absolute inset-0 bg-blue-500 mix-blend-multiply animate-pulse animation-delay-100" />
          <div className="absolute inset-0 bg-yellow-500 mix-blend-multiply animate-pulse animation-delay-200" />
        </div>
      )}

      <div className="brutal-container">
        {/* BRUTAL TITLE */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
        >
          <h2 className="brutal-title text-6xl md:text-8xl lg:text-9xl mb-4 relative">
            <span className={glitching ? "brutal-glitch" : ""}>ABOUT ME</span>
            <motion.span
              className="absolute -top-2 -left-2 text-red-500 -z-10"
              animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
            >
              ABOUT ME
            </motion.span>
          </h2>
          <div className="brutal-divider brutal-divider-red mx-auto w-64" />
        </motion.div>

        {/* BRUTAL BIO */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          <motion.div initial={{ x: -500 }} animate={{ x: 0 }} transition={{ delay: 0.2, type: "spring", damping: 10 }}>
            <div className="brutal-card brutal-card-yellow p-8">
              <h3 className="brutal-heading text-4xl mb-4">I BREAK THINGS</h3>
              <p className="brutal-body text-lg mb-4">
                I'M A DEVELOPER WHO DOESN'T BELIEVE IN SUBTLETY. MY CODE IS LOUD, MY DESIGNS ARE LOUDER, AND MY COMMITS ARE THE LOUDEST.
              </p>
              <p className="brutal-body text-lg">
                SPECIALIZING IN CREATING WEB EXPERIENCES THAT PUNCH YOU IN THE FACE WITH THEIR BOLDNESS. NO GRADIENTS. NO SHADOWS. JUST RAW
                POWER.
              </p>

              {/* Random brutal shapes */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-black"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500" />
            </div>
          </motion.div>

          {/* BRUTAL STATS */}
          <motion.div
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, type: "spring", damping: 10 }}
            className="space-y-4"
          >
            <div className="brutal-card p-4">
              <div className="flex justify-between items-center">
                <span className="brutal-heading text-2xl">PROJECTS DESTROYED</span>
                <span className="brutal-title text-4xl text-red-500">999+</span>
              </div>
            </div>
            <div className="brutal-card brutal-card-blue p-4">
              <div className="flex justify-between items-center">
                <span className="brutal-heading text-2xl text-white">BUGS CREATED</span>
                <span className="brutal-title text-4xl text-yellow-500">∞</span>
              </div>
            </div>
            <div className="brutal-card brutal-card-red p-4">
              <div className="flex justify-between items-center">
                <span className="brutal-heading text-2xl text-white">COFFEE CONSUMED</span>
                <span className="brutal-title text-4xl text-white">▓▓▓▓▓</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BRUTAL SKILLS */}
        <motion.div className="mb-24" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
          <h3 className="brutal-heading text-5xl mb-8 text-center">
            <span className="bg-black text-white px-4 py-2">SKILLS</span>
          </h3>

          <div className="brutal-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`brutal-card ${activeSkill === index ? "brutal-card-red" : ""}`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                whileHover={{ scale: 1.05, rotate: Math.random() * 10 - 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4 className="brutal-heading text-2xl mb-4">{skill.name}</h4>
                <div className="relative h-8 bg-gray-300 border-4 border-black">
                  <motion.div
                    className="absolute h-full border-r-4 border-black"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 brutal-mono font-black">{skill.level}%</span>
                </div>
                {activeSkill === index && (
                  <motion.div
                    className="absolute -inset-2 border-8 border-red-500 pointer-events-none"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BRUTAL EXPERIENCE */}
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring", damping: 10 }}>
          <h3 className="brutal-heading text-5xl mb-8 text-center">
            <span className="bg-yellow-500 px-4 py-2 rotate-3 inline-block">EXPERIENCE</span>
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                className="relative"
                initial={{ x: index % 2 === 0 ? -1000 : 1000 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", damping: 15 }}
              >
                <div className={`brutal-card ${index % 2 === 0 ? "brutal-card-red" : "brutal-card-yellow"}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <div className="brutal-title text-6xl mb-2">{exp.year}</div>
                      <h4 className="brutal-heading text-3xl">{exp.role}</h4>
                      <p className="brutal-mono text-xl">{exp.company}</p>
                    </div>
                    <motion.div
                      className="brutal-button brutal-button-yellow md:brutal-button"
                      whileHover={{ x: -4, y: -4 }}
                      whileTap={{ x: 4, y: 4 }}
                    >
                      VIEW MORE
                    </motion.div>
                  </div>
                </div>

                {/* Connecting line */}
                {index < experiences.length - 1 && <div className="absolute left-1/2 -translate-x-1/2 w-2 h-16 bg-black -bottom-8" />}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BRUTAL DECORATION */}
        <motion.div
          className="fixed bottom-10 right-10 brutal-button brutal-button-red z-40"
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.2, rotate: 180 }}
        >
          <span className="brutal-heading text-2xl">!</span>
        </motion.div>

        {/* ASCII art decoration */}
        <pre className="brutal-mono text-xs text-center mt-16 text-gray-500">
          {`
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌
▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀█░█▀▀ ▐░▌       ▐░▌     ▐░▌     ▐░█▀▀▀▀▀▀▀█░▌▐░▌
▐░▌       ▐░▌▐░▌     ▐░▌  ▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░▌      ▐░▌ ▐░█▄▄▄▄▄▄▄█░▌     ▐░▌     ▐░▌       ▐░▌▐░█▄▄▄▄▄▄▄▄▄
▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌     ▐░▌     ▐░▌       ▐░▌▐░░░░░░░░░░░▌
 ▀▀▀▀▀▀▀▀▀▀▀  ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀       ▀       ▀         ▀  ▀▀▀▀▀▀▀▀▀▀▀
`}
        </pre>
      </div>
    </section>
  );
}
