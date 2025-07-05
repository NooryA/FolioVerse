"use client";

import { useState, useEffect } from "react";
import { Eye, Play, Code, Gamepad2, Globe, Headphones, Layers, Zap, ExternalLink, Github, Cpu, Brain } from "lucide-react";

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
    {
      id: 1,
      title: "Neural Shopping Mall",
      description: "Immersive VR shopping experience with AI-powered recommendations and haptic feedback integration.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
      category: "vr",
      tech: ["Unity", "C#", "OpenXR", "WebGL"],
      featured: true,
      demoUrl: "#",
      codeUrl: "#",
      stats: { users: "50K+", rating: 4.8, downloads: "100K+" },
      gradient: "from-cyan-500 to-blue-600",
      year: "2024",
    },
    {
      id: 2,
      title: "Metaverse Conference",
      description: "Virtual conference platform supporting 10,000+ concurrent users with spatial audio and real-time collaboration.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      category: "metaverse",
      tech: ["WebXR", "Three.js", "WebRTC", "Node.js"],
      featured: true,
      demoUrl: "#",
      codeUrl: "#",
      stats: { users: "500K+", rating: 4.9, downloads: "2M+" },
      gradient: "from-purple-500 to-pink-600",
      year: "2024",
    },
    {
      id: 3,
      title: "AR Training Simulator",
      description: "Industrial training simulation with gesture recognition and progress tracking for manufacturing companies.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      category: "ar",
      tech: ["ARCore", "Unity", "Machine Learning", "Firebase"],
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      stats: { users: "25K+", rating: 4.7, downloads: "75K+" },
      gradient: "from-green-500 to-cyan-600",
      year: "2023",
    },
    {
      id: 4,
      title: "Virtual Art Gallery",
      description: "NFT-powered virtual gallery with blockchain integration and social features for artists worldwide.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      category: "metaverse",
      tech: ["Blockchain", "Solidity", "Three.js", "IPFS"],
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      stats: { users: "30K+", rating: 4.6, downloads: "120K+" },
      gradient: "from-orange-500 to-red-600",
      year: "2023",
    },
    {
      id: 5,
      title: "Holographic Dashboard",
      description: "Mixed reality data visualization platform for enterprise analytics with gesture-based interactions.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      category: "ar",
      tech: ["HoloLens", "Unity", "Azure", "D3.js"],
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      stats: { users: "15K+", rating: 4.5, downloads: "45K+" },
      gradient: "from-indigo-500 to-purple-600",
      year: "2023",
    },
    {
      id: 6,
      title: "VR Meditation Space",
      description: "Therapeutic VR environment for stress relief and mindfulness with biometric feedback integration.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      category: "vr",
      tech: ["Oculus SDK", "Unity", "Biometrics", "WebGL"],
      featured: false,
      demoUrl: "#",
      codeUrl: "#",
      stats: { users: "40K+", rating: 4.8, downloads: "180K+" },
      gradient: "from-teal-500 to-green-600",
      year: "2022",
    },
  ];

  const categories = [
    { id: "all", name: "All Realities", icon: <Globe className="w-5 h-5" />, count: projects.length },
    {
      id: "vr",
      name: "Virtual Reality",
      icon: <Headphones className="w-5 h-5" />,
      count: projects.filter((p) => p.category === "vr").length,
    },
    { id: "ar", name: "Augmented Reality", icon: <Eye className="w-5 h-5" />, count: projects.filter((p) => p.category === "ar").length },
    {
      id: "metaverse",
      name: "Metaverse",
      icon: <Layers className="w-5 h-5" />,
      count: projects.filter((p) => p.category === "metaverse").length,
    },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "vr":
        return "from-cyan-500 to-blue-500";
      case "ar":
        return "from-green-500 to-cyan-500";
      case "metaverse":
        return "from-purple-500 to-pink-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center animate-pulse">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Project Matrix
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Exploring the boundaries of reality through immersive digital experiences that redefine human-computer interaction.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-300">XR Projects</div>
          </div>
          <div className="bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">10M+</div>
            <div className="text-gray-300">User Sessions</div>
          </div>
          <div className="bg-black/50 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-300">Satisfaction</div>
          </div>
          <div className="bg-black/50 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-6 text-center hover:border-pink-500/50 transition-all duration-300">
            <div className="text-3xl font-bold text-pink-400 mb-2">24</div>
            <div className="text-gray-300">Awards Won</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/20 scale-105"
                  : "bg-black/50 border border-gray-700 text-gray-300 hover:border-cyan-500/50 hover:text-white backdrop-blur-lg"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
              <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{category.count}</span>
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Experiences</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-black/50 backdrop-blur-lg border border-gray-700/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                          project.category
                        )} rounded-full text-white text-sm font-medium uppercase tracking-wide`}
                      >
                        {project.category}
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-cyan-400 text-sm font-medium">
                        {project.year}
                      </div>
                    </div>

                    {/* Hover Actions */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 flex gap-3 transition-all duration-300 ${
                        hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <a
                        href={project.demoUrl}
                        className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-xl font-medium text-center hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        <span>Experience</span>
                      </a>
                      <a
                        href={project.codeUrl}
                        className="flex-1 bg-gray-800/80 text-white px-4 py-2 rounded-xl font-medium text-center hover:bg-gray-700/80 transition-all flex items-center justify-center gap-2"
                      >
                        <Code className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{project.title}</h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-lg text-sm hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-700/50">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400">{project.stats.users}</div>
                        <div className="text-xs text-gray-400">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400">{project.stats.rating}</div>
                        <div className="text-xs text-gray-400">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400">{project.stats.downloads}</div>
                        <div className="text-xs text-gray-400">Downloads</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        {filteredProjects.filter((project) => !project.featured).length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Extended Reality</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects
                .filter((project) => !project.featured)
                .map((project) => (
                  <div
                    key={project.id}
                    className="group bg-black/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                      <div className="absolute top-3 left-3">
                        <div
                          className={`px-2 py-1 bg-gradient-to-r ${getCategoryColor(
                            project.category
                          )} rounded-lg text-white text-xs font-medium`}
                        >
                          {project.category.toUpperCase()}
                        </div>
                      </div>

                      <div className="absolute bottom-3 right-3 flex gap-2">
                        <a href={project.demoUrl} className="bg-cyan-500/90 text-white p-2 rounded-lg hover:bg-cyan-500 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                        <a href={project.codeUrl} className="bg-gray-800/90 text-white p-2 rounded-lg hover:bg-gray-800 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>

                      <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">+{project.tech.length - 3}</span>
                        )}
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-cyan-400">{project.stats.users}</span>
                          <span className="text-purple-400">★ {project.stats.rating}</span>
                        </div>
                        <span className="text-gray-500">{project.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 md:p-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-cyan-400" />
                <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Enter the Future?</h3>
                <Cpu className="w-8 h-8 text-purple-400" />
              </div>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Let's collaborate to build immersive experiences that push the boundaries of reality and create meaningful connections in
                virtual spaces.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                <span>Start New Project</span>
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-xl font-medium hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <Eye className="w-5 h-5" />
                <span>Experience Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
