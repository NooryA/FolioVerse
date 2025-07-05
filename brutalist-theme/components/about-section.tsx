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
    <section id="about" className="brutal-section bg-white relative overflow-brutal" onClick={triggerGlitch}>
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
          className="text-center mb-12 relative"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", damping: 10, stiffness: 100 }}
        >
          <h2 className="brutal-title brutal-responsive-text mb-4 relative">
            <span className={glitching ? "brutal-glitch" : ""}>ABOUT ME</span>
            <motion.span
              className="absolute -top-1 -left-1 text-red-500 -z-10 hidden md:block"
              animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
            >
              ABOUT ME
            </motion.span>
          </h2>
          <div className="brutal-divider brutal-divider-red mx-auto max-w-xs" />
        </motion.div>

        {/* BRUTAL BIO */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, type: "spring", damping: 10 }}
            className="relative"
          >
            <div className="brutal-card brutal-card-yellow brutal-safe-spacing relative">
              <h3 className="brutal-heading text-2xl md:text-3xl mb-4">I BREAK THINGS</h3>
              <p className="brutal-body text-base md:text-lg mb-4">
                I'M A DEVELOPER WHO DOESN'T BELIEVE IN SUBTLETY. MY CODE IS LOUD, MY DESIGNS ARE LOUDER, AND MY COMMITS ARE THE LOUDEST.
              </p>
              <p className="brutal-body text-base md:text-lg">
                SPECIALIZING IN CREATING WEB EXPERIENCES THAT PUNCH YOU IN THE FACE WITH THEIR BOLDNESS. NO GRADIENTS. NO SHADOWS. JUST RAW
                POWER.
              </p>

              {/* Random brutal shapes - only on larger screens */}
              <motion.div
                className="absolute -top-2 -right-2 w-12 h-12 md:w-16 md:h-16 bg-black hidden sm:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 md:w-12 md:h-12 bg-red-500 hidden sm:block" />
            </div>
          </motion.div>

          {/* BRUTAL STATS */}
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.3, type: "spring", damping: 10 }}
            className="space-y-4"
          >
            <div className="brutal-card brutal-safe-spacing">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="brutal-heading text-lg md:text-xl">PROJECTS DESTROYED</span>
                <span className="brutal-title text-2xl md:text-3xl text-red-500">999+</span>
              </div>
            </div>
            <div className="brutal-card brutal-card-blue brutal-safe-spacing">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="brutal-heading text-lg md:text-xl text-white">BUGS CREATED</span>
                <span className="brutal-title text-2xl md:text-3xl text-yellow-500">∞</span>
              </div>
            </div>
            <div className="brutal-card brutal-card-red brutal-safe-spacing">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <span className="brutal-heading text-lg md:text-xl text-white">COFFEE CONSUMED</span>
                <span className="brutal-title text-2xl md:text-3xl text-white">▓▓▓▓▓</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BRUTAL SKILLS */}
        <motion.div className="mb-16" initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
          <h3 className="brutal-heading text-3xl md:text-4xl mb-8 text-center">
            <span className="bg-black text-white px-4 py-2 inline-block">SKILLS</span>
          </h3>

          <div className="brutal-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className={`brutal-card brutal-safe-spacing ${activeSkill === index ? "brutal-card-red" : ""}`}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                whileHover={{ scale: 1.02, rotate: Math.random() * 4 - 2 }}
                whileTap={{ scale: 0.98 }}
              >
                <h4 className="brutal-heading text-lg md:text-xl mb-4">{skill.name}</h4>
                <div className="relative h-6 md:h-8 bg-gray-300 border-4 border-black">
                  <motion.div
                    className="absolute h-full border-r-4 border-black"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  />
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 brutal-mono font-black text-xs md:text-sm">
                    {skill.level}%
                  </span>
                </div>
                {activeSkill === index && (
                  <motion.div
                    className="absolute -inset-1 border-4 md:border-6 border-red-500 pointer-events-none"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* BRUTAL EXPERIENCE */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring", damping: 10 }}
          className="mb-16"
        >
          <h3 className="brutal-heading text-3xl md:text-4xl mb-8 text-center">
            <span className="bg-yellow-500 px-4 py-2 rotate-1 inline-block">EXPERIENCE</span>
          </h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.year}
                className="relative"
                initial={{ x: index % 2 === 0 ? -500 : 500 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", damping: 15 }}
              >
                <div className={`brutal-card brutal-safe-spacing ${index % 2 === 0 ? "brutal-card-red" : "brutal-card-yellow"}`}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                      <div className="brutal-title text-3xl md:text-4xl lg:text-5xl mb-2">{exp.year}</div>
                      <h4 className="brutal-heading text-xl md:text-2xl">{exp.role}</h4>
                      <p className="brutal-mono text-base md:text-lg">{exp.company}</p>
                    </div>
                    <motion.div
                      className="brutal-button brutal-button-yellow md:brutal-button text-sm md:text-base"
                      whileHover={{ x: -2, y: -2 }}
                      whileTap={{ x: 2, y: 2 }}
                    >
                      VIEW MORE
                    </motion.div>
                  </div>
                </div>

                {/* Connecting line */}
                {index < experiences.length - 1 && (
                  <div className="flex justify-center">
                    <div className="w-1 h-8 bg-black" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ASCII art decoration */}
        <div className="text-center">
          <pre className="brutal-mono text-xs text-gray-500 overflow-x-auto">
            {`
 ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄         ▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄▄▄▄▄▄▄▄▄▄▄  ▄
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌
▐░█▀▀▀▀▀▀▀█░▌▐░█▀▀▀▀▀▀▀█░▌▐░▌       ▐░▌ ▀▀▀▀█░█▀▀▀▀ ▐░█▀▀▀▀▀▀▀█░▌▐░▌
▐░▌       ▐░▌▐░▌       ▐░▌▐░▌       ▐░▌     ▐░▌     ▐░▌       ▐░▌▐░▌
▐░█▄▄▄▄▄▄▄█░▌▐░█▄▄▄▄▄▄▄█░▌▐░▌       ▐░▌     ▐░▌     ▐░█▄▄▄▄▄▄▄█░▌▐░▌
▐░░░░░░░░░░░▌▐░░░░░░░░░░░▌▐░▌       ▐░▌     ▐░▌     ▐░░░░░░░░░░░▌▐░▌
`}
          </pre>
        </div>
      </div>
    </section>
  );
}
