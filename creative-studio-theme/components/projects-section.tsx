"use client";
import { useState, useEffect, useRef } from "react";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    { id: "all", name: "All Creations", icon: "🌟", gradient: "from-purple-500 to-pink-500" },
    { id: "branding", name: "Brand Magic", icon: "🎨", gradient: "from-blue-500 to-cyan-500" },
    { id: "web", name: "Web Portals", icon: "🌐", gradient: "from-green-500 to-teal-500" },
    { id: "mobile", name: "Mobile Worlds", icon: "📱", gradient: "from-orange-500 to-red-500" },
  ];

  const projects = [
    {
      id: 1,
      title: "Quantum Coffee",
      subtitle: "Interdimensional Café",
      category: "branding",
      year: "2024",
      description: "A brand that exists across multiple realities, bringing cosmic coffee experiences to every dimension.",
      technologies: ["Reality Design", "Quantum Branding", "Multiverse Identity"],
      likes: 2847,
      isLiked: false,
      color: "#8b5cf6",
      accent: "#ec4899",
    },
    {
      id: 2,
      title: "CyberFlow",
      subtitle: "Neural Banking Interface",
      category: "mobile",
      year: "2024",
      description: "Banking through pure thought - a mobile experience that reads minds and processes intentions.",
      technologies: ["Mind Reading", "Neural Networks", "Cyberpunk UI"],
      likes: 1895,
      isLiked: true,
      color: "#06b6d4",
      accent: "#3b82f6",
    },
    {
      id: 3,
      title: "EcoVerse",
      subtitle: "Sustainable Metaverse",
      category: "web",
      year: "2023",
      description: "An eco-friendly digital universe where every interaction heals the planet.",
      technologies: ["Green Tech", "Eco Algorithms", "Planet Healing"],
      likes: 3124,
      isLiked: false,
      color: "#10b981",
      accent: "#059669",
    },
    {
      id: 4,
      title: "StarMeditation",
      subtitle: "Cosmic Wellness",
      category: "branding",
      year: "2023",
      description: "Meditation experiences that connect consciousness to the cosmic web of the universe.",
      technologies: ["Cosmic Design", "Stellar Branding", "Universal UI"],
      likes: 1567,
      isLiked: false,
      color: "#6366f1",
      accent: "#8b5cf6",
    },
    {
      id: 5,
      title: "DataVerse",
      subtitle: "Reality Analytics",
      category: "web",
      year: "2023",
      description: "Analytics platform that predicts outcomes across infinite parallel universes.",
      technologies: ["Reality Mining", "Dimension Charts", "Parallel Processing"],
      likes: 4235,
      isLiked: true,
      color: "#3b82f6",
      accent: "#06b6d4",
    },
    {
      id: 6,
      title: "GalacticPets",
      subtitle: "Intergalactic Pet Care",
      category: "mobile",
      year: "2023",
      description: "Pet care for species across the galaxy - from Earth cats to Martian crystalline beings.",
      technologies: ["Species Recognition", "Galactic Network", "Alien AI"],
      likes: 2789,
      isLiked: false,
      color: "#ec4899",
      accent: "#f97316",
    },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="min-h-screen py-32 relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            #0a0a0a 0%, 
            #1a1a2e 25%, 
            #16213e 50%, 
            #0f172a 75%, 
            #020617 100%
          )
        `,
      }}
    >
      {/* Floating Constellation Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: 0.2 + Math.random() * 0.3,
              transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 20}px)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Creative Header */}
        <div
          className={`text-center mb-24 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-3xl">🎨</span>
            <span className="text-white/90 font-bold text-lg">Digital Art Gallery</span>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Creative</span>
            <span className="block text-white">Masterpieces</span>
          </h2>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Each project is a unique artwork in our digital gallery, crafted with passion and innovative thinking.
          </p>
        </div>

        {/* Artistic Filter Palette */}
        <div
          className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`group relative px-8 py-6 rounded-3xl font-bold text-lg transition-all duration-500 transform ${
                  activeFilter === category.id ? "scale-110 shadow-2xl" : "hover:scale-105 hover:shadow-xl"
                }`}
                style={{
                  background:
                    activeFilter === category.id ? `linear-gradient(135deg, var(--tw-gradient-stops))` : "rgba(255, 255, 255, 0.05)",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-${
                    activeFilter === category.id ? "100" : "0"
                  } group-hover:opacity-80 transition-opacity duration-300`}
                />
                <span className="relative z-10 flex items-center gap-3 text-white">
                  <span className="text-2xl">{category.icon}</span>
                  {category.name}
                </span>

                {/* Artistic hover effect */}
                <div className="absolute inset-0 rounded-3xl bg-white/10 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Floating Gallery Cards */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
          <div className="relative">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              const offsetY = Math.sin(scrollY * 0.01 + index) * 30;
              const offsetX = isEven ? -20 : 20;

              return (
                <div
                  key={project.id}
                  className="mb-32 last:mb-0"
                  style={{
                    transform: `translateX(${offsetX}px) translateY(${offsetY}px)`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className={`flex items-center gap-16 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Project Card */}
                    <div
                      className="relative group cursor-pointer flex-1 max-w-2xl"
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div
                        className={`relative rounded-3xl overflow-hidden transition-all duration-700 transform ${
                          hoveredProject === project.id ? "scale-105 rotate-2 shadow-2xl" : "hover:scale-[1.02]"
                        }`}
                        style={{
                          background: `linear-gradient(135deg, ${project.color}20, ${project.accent}20)`,
                          boxShadow:
                            hoveredProject === project.id ? `0 25px 50px -12px ${project.color}40` : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
                        }}
                      >
                        {/* Artwork Preview Area */}
                        <div
                          className="h-80 relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}, ${project.accent})`,
                          }}
                        >
                          {/* Floating Elements */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div
                                className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                              >
                                <span className="text-4xl">
                                  {project.category === "branding"
                                    ? "🎨"
                                    : project.category === "web"
                                    ? "🌐"
                                    : project.category === "mobile"
                                    ? "📱"
                                    : "✨"}
                                </span>
                              </div>
                              <h3 className="text-4xl font-black text-white mb-2">{project.title}</h3>
                              <p className="text-xl text-white/80">{project.subtitle}</p>
                            </div>
                          </div>

                          {/* Animated Particles */}
                          {hoveredProject === project.id && (
                            <>
                              {[...Array(8)].map((_, i) => (
                                <div
                                  key={i}
                                  className="absolute w-2 h-2 rounded-full bg-white/40 animate-bounce"
                                  style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${20 + Math.random() * 60}%`,
                                    animationDelay: `${i * 0.1}s`,
                                    animationDuration: `${1 + Math.random()}s`,
                                  }}
                                />
                              ))}
                            </>
                          )}
                        </div>

                        {/* Project Info */}
                        <div className="p-8 bg-white/5 backdrop-blur-sm">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm font-medium">{project.year}</span>
                            <div className="flex items-center gap-2 text-white/70">
                              <span className="text-lg">💖</span>
                              <span className="font-medium">{project.likes}</span>
                            </div>
                          </div>

                          <p className="text-white/80 text-lg leading-relaxed mb-6">{project.description}</p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-3 mb-6">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Actions */}
                          <div className="flex gap-4">
                            <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white font-medium transition-all duration-300 backdrop-blur-sm">
                              View Project
                            </button>
                            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl text-white font-medium transition-all duration-300">
                              Live Demo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Info */}
                    <div className="flex-1 max-w-md">
                      <div className="space-y-6">
                        <div className="text-6xl font-black text-white/10">0{index + 1}</div>
                        <div>
                          <h4 className="text-3xl font-bold text-white mb-4">Creative Process</h4>
                          <div className="space-y-3">
                            {["Concept", "Design", "Develop", "Launch"].map((step, idx) => (
                              <div key={idx} className="flex items-center gap-4">
                                <div
                                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                                  style={{ backgroundColor: project.color }}
                                >
                                  {idx + 1}
                                </div>
                                <span className="text-white/70">{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery Footer */}
        <div
          className={`text-center mt-32 transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          <div className="relative max-w-4xl mx-auto p-12 rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-6">
                Ready to Create Your
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Next Masterpiece?</span>
              </h3>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Let's collaborate on something extraordinary that pushes the boundaries of digital art.
              </p>

              <button className="group relative px-16 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold text-white overflow-hidden hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10 flex items-center gap-3">
                  <span>Start Creating</span>
                  <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🎨</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
