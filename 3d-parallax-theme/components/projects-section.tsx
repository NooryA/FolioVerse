"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, Zap, Palette, Code, Smartphone, Globe, Database } from "lucide-react";

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const parallaxSpeed = scrollY * 0.2;

  const projects = [
    {
      id: 1,
      title: "3D Product Configurator",
      description: "Interactive 3D product visualization with real-time configuration and WebGL rendering.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Three.js", "React", "WebGL", "TypeScript"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Immersive Portfolio Experience",
      description: "A revolutionary portfolio website featuring parallax scrolling and 3D interactions.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Framer Motion", "CSS3", "JavaScript"],
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "AR Shopping Experience",
      description: "Augmented reality shopping app with 3D product placement and real-time visualization.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "mobile",
      technologies: ["React Native", "ARCore", "Three.js", "Node.js"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Interactive Data Dashboard",
      description: "Real-time data visualization with 3D charts and interactive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["D3.js", "React", "WebGL", "Python"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "VR Museum Experience",
      description: "Virtual reality museum tour with interactive exhibits and spatial audio.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "vr",
      technologies: ["A-Frame", "WebXR", "Three.js", "Spatial Audio"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
    {
      id: 6,
      title: "AI-Powered Design Tool",
      description: "Machine learning-based design assistant with real-time 3D preview.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      category: "ai",
      technologies: ["TensorFlow.js", "React", "Python", "WebGL"],
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <Globe className="w-5 h-5" /> },
    { id: "web", name: "Web Apps", icon: <Code className="w-5 h-5" /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="w-5 h-5" /> },
    { id: "vr", name: "VR/AR", icon: <Zap className="w-5 h-5" /> },
    { id: "ai", name: "AI/ML", icon: <Database className="w-5 h-5" /> },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="gradient-orb orb-secondary w-96 h-96 top-40 left-20 floating-element"
          style={{ transform: `translateY(${parallaxSpeed}px) translateZ(200px)` }}
        />
        <div
          className="gradient-orb orb-accent w-64 h-64 bottom-20 right-20 floating-element"
          style={{ transform: `translateY(${parallaxSpeed * 1.3}px) translateZ(150px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-3d">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">My Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore my portfolio of innovative web experiences, 3D applications, and creative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`button-3d flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="depth-card group relative overflow-hidden"
                  style={{
                    transform: `translateZ(${index * 50}px)`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.demoUrl}
                        className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.codeUrl}
                        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects
            .filter((project) => !project.featured)
            .map((project, index) => (
              <div
                key={project.id}
                className="depth-card group relative overflow-hidden"
                style={{
                  transform: `translateZ(${index * 25}px)`,
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <a href={project.demoUrl} className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href={project.codeUrl} className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="depth-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to bring your ideas to life?</h3>
            <p className="text-gray-300 mb-6">Let's collaborate on your next project and create something amazing together.</p>
            <button
              className="button-3d text-lg px-8 py-4"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
