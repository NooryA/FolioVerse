"use client";

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
    setTimeout(() => setIsDestroying(false), 2000);
  };

  return (
    <section id="projects" className="bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced BRUTAL TITLE */}
        <div className="text-center mb-16">
          <h2 className="font-black text-6xl md:text-8xl lg:text-9xl text-white uppercase mb-8 leading-none">PROJECTS</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="w-24 h-6 bg-yellow-400 border-4 border-white"></div>
            <div className="w-24 h-6 bg-red-500 border-4 border-white"></div>
            <div className="w-24 h-6 bg-blue-500 border-4 border-white"></div>
          </div>
        </div>

        {/* FIXED PROJECT STATS with proper contrast */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-red-500 border-8 border-white p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-white">42</div>
            <div className="font-mono text-black bg-white px-2 py-1 text-lg md:text-xl font-black border-4 border-black">DESTROYED</div>
          </div>
          <div className="bg-yellow-400 border-8 border-black p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-black">∞</div>
            <div className="font-mono text-white bg-black px-2 py-1 text-lg md:text-xl font-black border-4 border-white">BUGS</div>
          </div>
          <div className="bg-blue-500 border-8 border-white p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-white">0</div>
            <div className="font-mono text-black bg-white px-2 py-1 text-lg md:text-xl font-black border-4 border-black">DOCS</div>
          </div>
          <div className="bg-white border-8 border-black p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-red-500">666</div>
            <div className="font-mono text-white bg-black px-2 py-1 text-lg md:text-xl font-black border-4 border-white">COMMITS</div>
          </div>
        </div>

        {/* Enhanced BRUTAL PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={project.id} className="relative">
              <div
                className={`bg-white border-8 border-black p-6 h-full cursor-pointer shadow-2xl transform transition-all hover:scale-105 hover:rotate-2 ${
                  selectedProject === project.id ? "bg-red-500 text-white" : "text-black"
                }`}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                {/* Project Year Badge */}
                <div
                  className="absolute -top-4 -right-4 border-8 border-black px-4 py-2 text-lg font-black"
                  style={{ backgroundColor: project.color }}
                >
                  <span className="font-mono font-black text-white" style={{ textShadow: "2px 2px 0px black" }}>
                    {project.year}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-black text-2xl md:text-3xl mb-4 uppercase leading-tight pr-12">{project.title}</h3>

                {/* Project Description */}
                <p className="font-bold text-lg md:text-xl mb-6 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-sm px-3 py-2 border-4 border-black font-black text-white"
                      style={{
                        backgroundColor: project.color,
                        textShadow: "1px 1px 0px black",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Status and Button */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <span
                    className={`font-mono text-lg md:text-xl font-black uppercase ${
                      project.status === "COMPLETE"
                        ? "text-green-500"
                        : project.status === "ABANDONED"
                        ? "text-red-500"
                        : selectedProject === project.id
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {project.status}
                  </span>
                  <button
                    className="bg-black text-white border-8 border-red-500 px-6 py-3 font-black text-lg uppercase shadow-lg hover:bg-red-500 hover:border-black transition-all transform hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      triggerDestroy();
                    }}
                  >
                    DESTROY
                  </button>
                </div>

                {/* Selected Project Indicator */}
                {selectedProject === project.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 border-8 border-yellow-400 animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced DESTROY ALL BUTTON with CRAZY ANIMATION */}
        <div className="text-center mb-16">
          <button
            onClick={triggerDestroy}
            className="bg-red-500 text-white border-8 border-white px-12 py-6 font-black text-2xl md:text-3xl uppercase shadow-2xl hover:bg-white hover:text-red-500 hover:border-red-500 transition-all transform hover:scale-110 hover:rotate-2"
          >
            DESTROY ALL PROJECTS
          </button>
        </div>

        {/* CRAZY DESTROY ANIMATION */}
        {isDestroying && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            {/* Screen shake and flashing background */}
            <div className="absolute inset-0 bg-red-500 animate-ping opacity-75"></div>
            <div className="absolute inset-0 bg-yellow-400 animate-pulse opacity-50"></div>
            <div className="absolute inset-0 bg-black animate-bounce opacity-30"></div>

            {/* Explosion text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-bounce">
                <div
                  className="font-black text-8xl md:text-9xl text-white mb-4 animate-pulse"
                  style={{ textShadow: "4px 4px 0px black, 8px 8px 0px red" }}
                >
                  💥 BOOM! 💥
                </div>
                <div className="font-black text-4xl md:text-6xl text-yellow-400 animate-spin" style={{ textShadow: "2px 2px 0px black" }}>
                  DESTROYED!
                </div>
              </div>
            </div>

            {/* Random flying elements */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-red-500 border-4 border-black animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-yellow-400 border-4 border-black animate-bounce"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-blue-500 border-4 border-black animate-spin"></div>
            <div className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-green-500 border-4 border-black animate-pulse"></div>

            {/* Screen glitch effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-ping"></div>
          </div>
        )}

        {/* Enhanced ASCII Decoration */}
        <div className="text-center bg-white text-black p-8 border-8 border-red-500 shadow-2xl">
          <pre className="font-mono text-sm md:text-base font-black overflow-x-auto">
            {`
╔═══════════════════════════════════════════════════╗
║  ⚠ WARNING: THESE PROJECTS MAY CAUSE SEVERE DAMAGE ⚠ ║
║           TO YOUR SENSE OF GOOD DESIGN            ║
║                PROCEED WITH CAUTION               ║
╚═══════════════════════════════════════════════════╝
`}
          </pre>
        </div>
      </div>
    </section>
  );
}
