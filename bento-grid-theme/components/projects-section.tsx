"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, Play, Star, Zap, Palette, Code, Smartphone, Globe, Database, Eye } from "lucide-react";

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      stats: { views: "2.3k", stars: 156, forks: 23 },
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "AI Chat Interface",
      description: "Modern chat interface with AI integration and real-time messaging.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      category: "ai",
      technologies: ["Next.js", "OpenAI", "WebSockets"],
      featured: true,
      stats: { views: "1.8k", stars: 89, forks: 12 },
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=500&h=300&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase"],
      featured: false,
      stats: { views: "980", stars: 34, forks: 7 },
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      description: "Real-time analytics dashboard with beautiful data visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Python"],
      featured: false,
      stats: { views: "1.2k", stars: 67, forks: 15 },
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "Weather App",
      description: "Beautiful weather application with location-based forecasts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      category: "mobile",
      technologies: ["Flutter", "Weather API"],
      featured: false,
      stats: { views: "756", stars: 28, forks: 5 },
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Creative portfolio website with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
      category: "web",
      technologies: ["React", "Framer Motion"],
      featured: false,
      stats: { views: "643", stars: 19, forks: 3 },
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All", icon: <Globe className="w-4 h-4" /> },
    { id: "web", name: "Web", icon: <Code className="w-4 h-4" /> },
    { id: "mobile", name: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "ai", name: "AI/ML", icon: <Zap className="w-4 h-4" /> },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A collection of projects showcasing my skills in web development, mobile apps, and emerging technologies
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
          {/* Featured Project 1 - Large */}
          {filteredProjects.filter((p) => p.featured)[0] && (
            <div className="md:col-span-2 lg:col-span-3 md:row-span-2 group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full hover:shadow-2xl transition-all duration-300">
                <div className="relative h-1/2 overflow-hidden">
                  <img
                    src={filteredProjects.filter((p) => p.featured)[0].image}
                    alt={filteredProjects.filter((p) => p.featured)[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <a
                        href={filteredProjects.filter((p) => p.featured)[0].demoUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href={filteredProjects.filter((p) => p.featured)[0].codeUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 h-1/2 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {filteredProjects.filter((p) => p.featured)[0].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {filteredProjects.filter((p) => p.featured)[0].description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {filteredProjects
                        .filter((p) => p.featured)[0]
                        .technologies.slice(0, 3)
                        .map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{filteredProjects.filter((p) => p.featured)[0].stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        <span>{filteredProjects.filter((p) => p.featured)[0].stats.stars}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Project Stats Card */}
          <div className="md:col-span-2 lg:col-span-1 md:row-span-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Total Projects</h4>
              <Code className="w-6 h-6 opacity-80" />
            </div>
            <p className="text-3xl font-bold mb-1">{projects.length}</p>
            <p className="text-sm opacity-80">Completed Projects</p>
          </div>

          {/* GitHub Stats */}
          <div className="md:col-span-2 lg:col-span-1 md:row-span-1 bg-gray-900 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">GitHub</h4>
              <Github className="w-6 h-6" />
            </div>
            <p className="text-2xl font-bold mb-1">150+</p>
            <p className="text-sm text-gray-400">Total Stars</p>
          </div>

          {/* Technologies */}
          <div className="md:col-span-2 lg:col-span-1 md:row-span-1 bg-white rounded-2xl p-6 border border-gray-200">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Palette className="w-5 h-5 text-orange-500" />
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1">
              {["React", "Node.js", "Python", "Flutter"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Project 2 */}
          {filteredProjects.filter((p) => p.featured)[1] && (
            <div className="md:col-span-2 lg:col-span-2 md:row-span-2 group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full hover:shadow-2xl transition-all duration-300">
                <div className="relative h-2/3 overflow-hidden">
                  <img
                    src={filteredProjects.filter((p) => p.featured)[1].image}
                    alt={filteredProjects.filter((p) => p.featured)[1].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <a
                        href={filteredProjects.filter((p) => p.featured)[1].demoUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                      <a
                        href={filteredProjects.filter((p) => p.featured)[1].codeUrl}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4 h-1/3">
                  <h3 className="font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {filteredProjects.filter((p) => p.featured)[1].title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{filteredProjects.filter((p) => p.featured)[1].description}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{filteredProjects.filter((p) => p.featured)[1].stats.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{filteredProjects.filter((p) => p.featured)[1].stats.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Projects */}
          {filteredProjects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div key={project.id} className="md:col-span-2 lg:col-span-1 md:row-span-1 group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-full hover:shadow-xl transition-all duration-300">
                  <div className="relative h-24 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-sm group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <a href={project.demoUrl} className="p-1.5 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href={project.codeUrl} className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          <Github className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Want to see more projects?</h3>
            <p className="mb-6 opacity-90">Check out my GitHub profile for more open-source contributions and personal projects.</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
