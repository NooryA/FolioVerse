"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isDestroying, setIsDestroying] = useState(false);

  const projects = [
    {
      id: 1,
      title: "WEBSITE DESTROYER",
      description: "A TOOL THAT LITERALLY BREAKS OTHER WEBSITES",
      tech: ["JAVASCRIPT", "CHAOS", "DESTRUCTION"],
      status: "DEPLOYED",
      color: "#FF0000",
      year: "2024",
    },
    {
      id: 2,
      title: "BRUTALIST CMS",
      description: "CONTENT MANAGEMENT WITHOUT THE MANAGEMENT",
      tech: ["REACT", "PAIN", "SUFFERING"],
      status: "IN PROGRESS",
      color: "#FFFF00",
      year: "2024",
    },
    {
      id: 3,
      title: "ANTI-SOCIAL NETWORK",
      description: "SOCIAL MEDIA BUT EVERYONE HATES IT",
      tech: ["NODE.JS", "MONGODB", "REGRET"],
      status: "ABANDONED",
      color: "#00FF00",
      year: "2023",
    },
    {
      id: 4,
      title: "CSS OBLITERATOR",
      description: "REMOVES ALL CSS FROM ANY WEBSITE",
      tech: ["VANILLA JS", "RAGE", "SPITE"],
      status: "COMPLETE",
      color: "#0000FF",
      year: "2023",
    },
    {
      id: 5,
      title: "ERROR GENERATOR",
      description: "CREATES BUGS FASTER THAN YOU CAN FIX THEM",
      tech: ["TYPESCRIPT", "BUGS", "MORE BUGS"],
      status: "ALWAYS BROKEN",
      color: "#FF00FF",
      year: "2022",
    },
    {
      id: 6,
      title: "LOADING SIMULATOR",
      description: "INFINITE LOADING SCREENS AS A SERVICE",
      tech: ["NEXT.JS", "PATIENCE", "FRUSTRATION"],
      status: "LOADING...",
      color: "#00FFFF",
      year: "2022",
    },
  ];

  const triggerDestroy = () => {
    setIsDestroying(true);
    setTimeout(() => setIsDestroying(false), 1000);
  };

  return (
    <section id="projects" className="brutal-section bg-black relative overflow-hidden">
      <div className="brutal-container">
        {/* BRUTAL TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 10 }}
        >
          <h2 className="brutal-title text-6xl md:text-8xl lg:text-9xl text-white mb-4">PROJECTS</h2>
          <div className="flex justify-center gap-4">
            <div className="brutal-divider brutal-divider-yellow w-32" />
            <div className="brutal-divider brutal-divider-red w-32" />
            <div className="brutal-divider brutal-divider-blue w-32" />
          </div>
        </motion.div>

        {/* PROJECT STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <motion.div className="brutal-card brutal-card-red p-4 text-center" whileHover={{ scale: 1.1, rotate: -5 }}>
            <div className="brutal-title text-4xl text-white">42</div>
            <div className="brutal-mono text-white">DESTROYED</div>
          </motion.div>
          <motion.div className="brutal-card brutal-card-yellow p-4 text-center" whileHover={{ scale: 1.1, rotate: 5 }}>
            <div className="brutal-title text-4xl">∞</div>
            <div className="brutal-mono">BUGS</div>
          </motion.div>
          <motion.div className="brutal-card brutal-card-blue p-4 text-center" whileHover={{ scale: 1.1, rotate: -5 }}>
            <div className="brutal-title text-4xl text-white">0</div>
            <div className="brutal-mono text-white">DOCUMENTATION</div>
          </motion.div>
          <motion.div className="brutal-card p-4 text-center" whileHover={{ scale: 1.1, rotate: 5 }}>
            <div className="brutal-title text-4xl text-red-500">666</div>
            <div className="brutal-mono">COMMITS</div>
          </motion.div>
        </div>

        {/* BRUTAL PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                x: index % 2 === 0 ? -1000 : 1000,
                rotate: index % 2 === 0 ? -45 : 45,
              }}
              animate={{ x: 0, rotate: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                damping: 15,
              }}
              className="relative"
            >
              <motion.div
                className={`brutal-card p-6 h-full cursor-pointer ${selectedProject === project.id ? "brutal-card-red" : "bg-white"}`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                whileHover={{
                  scale: 1.05,
                  rotate: Math.random() * 10 - 5,
                  y: -10,
                }}
                whileTap={{ scale: 0.9 }}
              >
                {/* Project Year Badge */}
                <div className="absolute -top-4 -right-4 brutal-button px-4 py-2" style={{ backgroundColor: project.color }}>
                  <span className="brutal-mono text-sm font-black">{project.year}</span>
                </div>

                {/* Project Title */}
                <h3 className="brutal-heading text-3xl mb-4">{project.title}</h3>

                {/* Project Description */}
                <p className="brutal-body text-lg mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="brutal-mono text-sm px-2 py-1 border-2 border-black"
                      style={{
                        backgroundColor: project.color,
                        opacity: 0.8,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Status */}
                <div className="flex justify-between items-center">
                  <span
                    className={`brutal-mono text-sm font-black ${
                      project.status === "COMPLETE"
                        ? "text-green-500"
                        : project.status === "ABANDONED"
                        ? "text-red-500"
                        : project.status === "LOADING..."
                        ? "brutal-blink"
                        : "text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                  <motion.button
                    className="brutal-button brutal-button-yellow px-4 py-2 text-sm"
                    whileHover={{ x: -2, y: -2 }}
                    whileTap={{ x: 2, y: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerDestroy();
                    }}
                  >
                    DESTROY
                  </motion.button>
                </div>

                {/* Selected Project Indicator */}
                {selectedProject === project.id && (
                  <motion.div className="absolute inset-0 pointer-events-none" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <div className="absolute inset-0 border-8 border-yellow-500" />
                    <div className="absolute -inset-2 border-8 border-red-500 brutal-pulse" />
                  </motion.div>
                )}
              </motion.div>

              {/* Random decorative elements */}
              {index % 3 === 0 && (
                <motion.div
                  className="absolute -z-10 top-4 left-4 w-full h-full bg-yellow-500"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* DESTROY ALL BUTTON */}
        <motion.div className="text-center">
          <motion.button
            className="brutal-button brutal-button-red text-2xl px-8 py-4"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={triggerDestroy}
          >
            DESTROY ALL PROJECTS
          </motion.button>
        </motion.div>

        {/* Destruction Effect */}
        {isDestroying && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            <motion.div
              className="absolute inset-0 bg-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: [0, 2, 0], rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="brutal-title text-brutal text-white">DESTROYED!</span>
            </motion.div>
          </div>
        )}

        {/* ASCII Decoration */}
        <pre className="brutal-mono text-xs text-center mt-16 text-gray-500">
          {`
╔═══════════════════════════════════════════════════╗
║  WARNING: THESE PROJECTS MAY CAUSE SEVERE DAMAGE  ║
║           TO YOUR SENSE OF GOOD DESIGN            ║
╚═══════════════════════════════════════════════════╝
`}
        </pre>
      </div>
    </section>
  );
}
