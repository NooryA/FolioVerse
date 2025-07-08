"use client";

import { useState, useEffect, useMemo } from "react";
import { Github, ExternalLink, Star, Eye, Filter, X } from "lucide-react";
import { useTheme } from "./theme-context";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { currentTheme, gradientIndex, themeIndex } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use theme colors from context
  const gradients = currentTheme.gradients;
  const textGradients = currentTheme.textGradients;

  // Generate stable random values for floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      gradient: gradients[i % gradients.length],
      width: 8 + Math.random() * 16,
      height: 8 + Math.random() * 16,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 12,
      animationDuration: 10 + Math.random() * 20,
    }));
  }, [gradients, themeIndex]); // Re-generate when theme changes

  const projects = [
    {
      id: 1,
      title: "Gradient Gallery",
      description: "A stunning showcase of gradient artistry with interactive elements",
      image: "/api/placeholder/400/300",
      gradient: gradients[0],
      tags: ["React", "CSS", "Animation"],
      category: "web",
      featured: true,
      stats: { stars: 156, views: 2800 },
      github: "https://github.com/username/gradient-gallery",
      demo: "https://gradient-gallery.demo.com",
    },
    {
      id: 2,
      title: "Color Harmony",
      description: "An exploration of color theory through dynamic gradients",
      image: "/api/placeholder/400/300",
      gradient: gradients[1],
      tags: ["JavaScript", "Canvas", "WebGL"],
      category: "web",
      featured: false,
      stats: { stars: 89, views: 1600 },
      github: "https://github.com/username/color-harmony",
      demo: "https://color-harmony.demo.com",
    },
    {
      id: 3,
      title: "Rainbow Dashboard",
      description: "A vibrant data visualization with gradient-powered insights",
      image: "/api/placeholder/400/300",
      gradient: gradients[2],
      tags: ["Vue.js", "D3.js", "Data Viz"],
      category: "web",
      featured: true,
      stats: { stars: 203, views: 3400 },
      github: "https://github.com/username/rainbow-dashboard",
      demo: "https://rainbow-dashboard.demo.com",
    },
    {
      id: 4,
      title: "Spectrum UI",
      description: "A component library that celebrates the beauty of color gradients",
      image: "/api/placeholder/400/300",
      gradient: gradients[3],
      tags: ["React", "Storybook", "Design System"],
      category: "design",
      featured: false,
      stats: { stars: 78, views: 1200 },
      github: "https://github.com/username/spectrum-ui",
      demo: "https://spectrum-ui.demo.com",
    },
    {
      id: 5,
      title: "Gradient Playground",
      description: "Interactive tool for creating and experimenting with gradients",
      image: "/api/placeholder/400/300",
      gradient: gradients[4],
      tags: ["TypeScript", "Canvas", "Tools"],
      category: "web",
      featured: true,
      stats: { stars: 145, views: 2100 },
      github: "https://github.com/username/gradient-playground",
      demo: "https://gradient-playground.demo.com",
    },
    {
      id: 6,
      title: "Chromatic Dreams",
      description: "A digital art project exploring the emotional impact of color",
      image: "/api/placeholder/400/300",
      gradient: gradients[5],
      tags: ["WebGL", "Shaders", "Art"],
      category: "design",
      featured: false,
      stats: { stars: 67, views: 980 },
      github: "https://github.com/username/chromatic-dreams",
      demo: "https://chromatic-dreams.demo.com",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", gradient: "from-gray-500 to-gray-700" },
    { id: "web", name: "Web Apps", gradient: "from-blue-500 to-cyan-500" },
    { id: "mobile", name: "Mobile", gradient: "from-green-500 to-teal-500" },
    { id: "design", name: "Design", gradient: "from-purple-500 to-pink-500" },
  ];

  const filteredProjects = projects.filter((project) => activeFilter === "all" || project.category === activeFilter);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Enhanced Background with Gradient Layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div
          className={`absolute top-10 left-10 w-96 h-96 bg-gradient-to-r ${gradients[0]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-0`}
        />
        <div
          className={`absolute top-32 right-16 w-64 h-64 bg-gradient-to-r ${gradients[1]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-3000`}
        />
        <div
          className={`absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r ${gradients[2]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-6000`}
        />
        <div
          className={`absolute bottom-32 right-32 w-72 h-72 bg-gradient-to-r ${gradients[3]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-9000`}
        />
      </div>

      {/* Enhanced floating gradient elements with stable values */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full bg-gradient-to-r ${element.gradient} opacity-8 animate-gradient-float`}
            style={{
              width: `${element.width}px`,
              height: `${element.height}px`,
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            <span className={`bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent animate-gradient-shift`}>
              My Projects
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            <span
              className={`font-semibold bg-gradient-to-r ${
                textGradients[(gradientIndex + 1) % textGradients.length]
              } bg-clip-text text-transparent font-black animate-gradient-shift`}
              style={{ backgroundSize: "200% 200%" }}
            >
              Explore a collection of projects where gradients tell stories and colors breathe life into digital experiences.
            </span>
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`group relative overflow-hidden px-8 py-4 rounded-full font-bold text-lg transition-all duration-500 border-2 border-white/20 ${
                activeFilter === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white scale-110 shadow-2xl`
                  : "bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-105"
              }`}
            >
              <span
                className={`relative z-10 ${activeFilter === category.id ? "text-gray-900 font-black" : "text-gray-800"}`}
                style={{
                  textShadow: activeFilter === category.id ? "0 1px 2px rgba(255, 255, 255, 0.8)" : "0 1px 2px rgba(255, 255, 255, 0.6)",
                }}
              >
                {category.name}
              </span>
              {activeFilter !== category.id && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative ${project.featured ? "md:col-span-2 xl:col-span-1" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-lg">
                      ⭐ Featured
                    </div>
                  )}

                  {/* Project Stats */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-bold text-white">{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-bold text-white">{project.stats.views}</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-700 mb-6 leading-relaxed font-medium"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800 border border-white/20"
                        style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-3 rounded-full transition-all duration-300 group/link border border-white/20"
                    >
                      <Github className="w-5 h-5 text-gray-800 group-hover/link:scale-110 transition-transform" />
                      <span className="font-bold text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                        Code
                      </span>
                    </a>
                    <a
                      href={project.demo}
                      className={`flex items-center gap-3 bg-gradient-to-r ${project.gradient} hover:scale-105 px-4 py-3 rounded-full transition-all duration-300 group/link border border-white/20 shadow-lg`}
                    >
                      <ExternalLink className="w-5 h-5 text-gray-900 group-hover/link:scale-110 transition-transform" />
                      <span className="font-bold text-gray-900" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                        Live Demo
                      </span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Enhanced glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-lg">
            <h3
              className={`text-3xl font-bold mb-6 bg-gradient-to-r ${
                textGradients[(gradientIndex + 3) % textGradients.length]
              } bg-clip-text text-transparent font-black animate-gradient-shift`}
              style={{ backgroundSize: "200% 200%" }}
            >
              Interested in Working Together?
            </h3>
            <p
              className={`text-xl mb-8 bg-gradient-to-r ${
                textGradients[(gradientIndex + 4) % textGradients.length]
              } bg-clip-text text-transparent font-medium`}
            >
              I'm always excited to collaborate on new projects and bring creative ideas to life!
            </p>
            <button
              className={`bg-gradient-to-r ${gradients[gradientIndex]} hover:scale-110 px-12 py-6 rounded-full font-bold text-xl transition-all duration-500 shadow-lg hover:shadow-2xl border-2 border-white/20`}
            >
              <span className="text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                Let's Create Something Amazing
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-25px) rotate(120deg);
          }
          66% {
            transform: translateY(12px) rotate(240deg);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
          background-size: 200% 200%;
        }

        .animate-gradient-float {
          animation: gradient-float 15s ease-in-out infinite;
        }

        .animation-delay-0 {
          animation-delay: 0s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }

        .animation-delay-9000 {
          animation-delay: 9s;
        }
      `}</style>
    </section>
  );
}
