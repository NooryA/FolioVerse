"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, Star, Eye, Calendar, Tag, Code, Smartphone, Globe, Database, Zap } from "lucide-react";

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A complete e-commerce solution with modern UI, payment integration, inventory management, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      featured: true,
      stats: { stars: 156, views: "2.3k", forks: 23 },
      date: "2024",
      status: "Live",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing, context awareness, and multi-language support.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "ai",
      technologies: ["Python", "OpenAI", "FastAPI", "React", "WebSockets"],
      featured: true,
      stats: { stars: 89, views: "1.8k", forks: 12 },
      date: "2024",
      status: "Live",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["React Native", "Firebase", "Plaid API", "Biometrics"],
      featured: false,
      stats: { stars: 67, views: "1.2k", forks: 8 },
      date: "2023",
      status: "Live",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with interactive charts and comprehensive reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Python", "MongoDB", "Docker"],
      featured: false,
      stats: { stars: 45, views: "980", forks: 15 },
      date: "2023",
      status: "Live",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management with team features, deadlines, and progress tracking.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "web",
      technologies: ["Next.js", "Prisma", "tRPC", "Tailwind CSS"],
      featured: false,
      stats: { stars: 34, views: "756", forks: 5 },
      date: "2023",
      status: "Development",
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      id: 6,
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts and weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      category: "mobile",
      technologies: ["Flutter", "Dart", "Weather API", "Google Maps"],
      featured: false,
      stats: { stars: 28, views: "643", forks: 3 },
      date: "2023",
      status: "Live",
      demoUrl: "#",
      codeUrl: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <Globe className="w-4 h-4" />, count: projects.length },
    { id: "web", name: "Web Apps", icon: <Code className="w-4 h-4" />, count: projects.filter((p) => p.category === "web").length },
    {
      id: "mobile",
      name: "Mobile Apps",
      icon: <Smartphone className="w-4 h-4" />,
      count: projects.filter((p) => p.category === "mobile").length,
    },
    { id: "ai", name: "AI/ML", icon: <Zap className="w-4 h-4" />, count: projects.filter((p) => p.category === "ai").length },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "web":
        return <Code className="w-4 h-4" />;
      case "mobile":
        return <Smartphone className="w-4 h-4" />;
      case "ai":
        return <Zap className="w-4 h-4" />;
      default:
        return <Globe className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "web":
        return "bg-blue-500";
      case "mobile":
        return "bg-green-500";
      case "ai":
        return "bg-purple-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            A showcase of my recent work including web applications, mobile apps, and AI-powered solutions
          </p>
        </div>

        {/* Project Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{projects.length}</div>
            <div className="text-sm opacity-90">Total Projects</div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{projects.reduce((sum, p) => sum + p.stats.stars, 0)}</div>
            <div className="text-sm opacity-90">GitHub Stars</div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">{projects.filter((p) => p.status === "Live").length}</div>
            <div className="text-sm opacity-90">Live Projects</div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center">
            <div className="text-3xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Success Rate</div>
          </div>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                activeFilter === category.id ? "bg-gray-900 text-white shadow-lg scale-105" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                  onMouseEnter={() => setHoveredCard(project.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <div
                        className={`${getCategoryColor(
                          project.category
                        )} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center gap-1`}
                      >
                        {getCategoryIcon(project.category)}
                        <span className="capitalize">{project.category}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.status === "Live" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                        }`}
                      >
                        {project.status}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div
                      className={`absolute bottom-4 left-4 right-4 flex gap-3 transition-all duration-300 ${
                        hoveredCard === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <a
                        href={project.demoUrl}
                        className="flex-1 bg-white text-gray-900 px-4 py-2 rounded-xl font-medium text-center hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.codeUrl}
                        className="flex-1 bg-gray-900/80 text-white px-4 py-2 rounded-xl font-medium text-center hover:bg-gray-900 transition-colors flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{project.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

                    <div className="space-y-4">
                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-1 text-gray-500">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">{project.stats.stars}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{project.stats.views}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-500">
                          <Github className="w-4 h-4" />
                          <span className="text-sm">{project.stats.forks} forks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <div
                        className={`${getCategoryColor(
                          project.category
                        )} px-2 py-1 rounded-lg text-white text-xs font-medium flex items-center gap-1`}
                      >
                        {getCategoryIcon(project.category)}
                        <span className="capitalize">{project.category}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3 flex gap-2">
                      <a href={project.demoUrl} className="bg-white/90 text-gray-900 p-2 rounded-lg hover:bg-white transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={project.codeUrl} className="bg-gray-900/80 text-white p-2 rounded-lg hover:bg-gray-900 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900">{project.title}</h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === "Live" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span key={techIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            <span>{project.stats.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{project.stats.views}</span>
                          </div>
                        </div>
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in working together?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors">
              View All Projects
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-medium hover:bg-white hover:text-gray-900 transition-all">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
