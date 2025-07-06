"use client";

import { useState, useEffect } from "react";
import { Code, ExternalLink, Github, Palette, Zap, Star, Heart, Eye, Layers, Sparkles, ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Gradient Gallery",
      description: "An interactive gallery showcasing 500+ gradient combinations with real-time preview and CSS generation",
      category: "web",
      tags: ["React", "CSS", "Animation"],
      gradient: "gradient-primary",
      textGradient: "text-gradient-1",
      glowClass: "glow-gradient",
      image: "🎨",
      stats: { views: "50k+", likes: "2.5k", stars: "150" },
      features: ["Interactive Preview", "CSS Export", "Color Picker", "Animation Controls"],
    },
    {
      id: 2,
      title: "Rainbow Dashboard",
      description: "A dynamic dashboard with animated gradient charts, real-time data visualization, and customizable themes",
      category: "dashboard",
      tags: ["Next.js", "TypeScript", "Charts"],
      gradient: "gradient-secondary",
      textGradient: "text-gradient-2",
      glowClass: "glow-gradient-blue",
      image: "📊",
      stats: { views: "35k+", likes: "1.8k", stars: "95" },
      features: ["Real-time Data", "Custom Themes", "Gradient Charts", "Responsive Design"],
    },
    {
      id: 3,
      title: "Colorful Commerce",
      description: "E-commerce platform with gradient product cards, animated checkout flow, and vibrant user experience",
      category: "ecommerce",
      tags: ["React", "Stripe", "Tailwind"],
      gradient: "gradient-accent",
      textGradient: "text-gradient-3",
      glowClass: "glow-gradient-pink",
      image: "🛒",
      stats: { views: "75k+", likes: "3.2k", stars: "220" },
      features: ["Gradient Cards", "Animated Checkout", "Payment Integration", "Mobile Optimized"],
    },
    {
      id: 4,
      title: "Spectrum Studio",
      description: "Design tool for creating gradient backgrounds, generating color palettes, and exporting high-quality assets",
      category: "design",
      tags: ["Canvas", "Design", "Export"],
      gradient: "gradient-rainbow-1",
      textGradient: "text-gradient-1",
      glowClass: "glow-gradient",
      image: "🎭",
      stats: { views: "28k+", likes: "1.5k", stars: "180" },
      features: ["Color Palette Generator", "Asset Export", "Canvas Editor", "Gradient Presets"],
    },
    {
      id: 5,
      title: "Animation Playground",
      description: "Interactive playground for experimenting with CSS animations, gradient transitions, and performance testing",
      category: "animation",
      tags: ["CSS", "Performance", "Testing"],
      gradient: "gradient-rainbow-2",
      textGradient: "text-gradient-2",
      glowClass: "glow-gradient-blue",
      image: "🎪",
      stats: { views: "42k+", likes: "2.1k", stars: "135" },
      features: ["Live Code Editor", "Performance Metrics", "Animation Library", "Export Options"],
    },
    {
      id: 6,
      title: "Portfolio Generator",
      description: "Tool for creating gradient-themed portfolios with customizable templates, animations, and deployment options",
      category: "tool",
      tags: ["Generator", "Templates", "Deploy"],
      gradient: "gradient-animated-1",
      textGradient: "text-gradient-3",
      glowClass: "glow-gradient-pink",
      image: "🚀",
      stats: { views: "65k+", likes: "4.1k", stars: "310" },
      features: ["Template Library", "One-click Deploy", "Custom Themes", "SEO Optimized"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", gradient: "gradient-rainbow-1" },
    { id: "web", label: "Web Apps", gradient: "gradient-primary" },
    { id: "dashboard", label: "Dashboards", gradient: "gradient-secondary" },
    { id: "ecommerce", label: "E-commerce", gradient: "gradient-accent" },
    { id: "design", label: "Design Tools", gradient: "gradient-rainbow-2" },
    { id: "animation", label: "Animation", gradient: "gradient-animated-1" },
    { id: "tool", label: "Tools", gradient: "gradient-animated-2" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="gradient-animated-2 absolute inset-0 opacity-10" />
        <div className="gradient-animated-3 absolute inset-0 opacity-15" />
      </div>

      {/* Floating Gradient Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-20 animate-gradient-float ${
              i % 4 === 0 ? "gradient-primary" : i % 4 === 1 ? "gradient-secondary" : i % 4 === 2 ? "gradient-accent" : "gradient-rainbow-1"
            }`}
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? "50%" : "20%",
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="w-20 h-20 rounded-full gradient-rainbow-1 p-1 animate-gradient-rotate">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Layers className="w-10 h-10 text-gradient-1" />
              </div>
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 text-gradient-rainbow animate-gradient-shift">PROJECTS</h2>

          <p className="text-2xl md:text-3xl font-bold text-white/90 max-w-4xl mx-auto">
            Explore my collection of
            <span className="text-gradient-2 animate-gradient-pulse"> gradient-powered </span>
            projects that push the boundaries of web design and development
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                activeFilter === category.id
                  ? `${category.gradient} text-white shadow-lg scale-105`
                  : "glass-gradient text-white/80 hover:text-white hover:scale-105"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`card-gradient hover-scale-gradient h-full ${hoveredProject === project.id ? project.glowClass : ""}`}>
                {/* Project Image/Icon */}
                <div
                  className={`w-full h-48 rounded-2xl ${project.gradient} flex items-center justify-center text-8xl mb-6 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 filter drop-shadow-lg">{project.image}</span>

                  {/* Hover Icons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className={`text-2xl font-bold ${project.textGradient}`}>{project.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-white/80 font-semibold">{project.stats.stars}</span>
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed">{project.description}</p>

                  {/* Project Stats */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-white/60" />
                        <span className="text-white/80">{project.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-white/60" />
                        <span className="text-white/80">{project.stats.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                          tagIndex % 3 === 0 ? "gradient-primary" : tagIndex % 3 === 1 ? "gradient-secondary" : "gradient-accent"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-400" />
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full btn-gradient ${project.gradient} text-white font-bold py-3 rounded-full hover-scale-gradient flex items-center justify-center gap-2 group`}
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Stats Summary */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Total Projects", value: "50+", gradient: "gradient-primary", icon: Code },
            { label: "Total Views", value: "500k+", gradient: "gradient-secondary", icon: Eye },
            { label: "GitHub Stars", value: "2.5k+", gradient: "gradient-accent", icon: Star },
            { label: "Happy Clients", value: "100+", gradient: "gradient-rainbow-1", icon: Heart },
          ].map((stat, index) => (
            <div key={index} className="card-gradient hover-scale-gradient text-center">
              <div className={`w-16 h-16 rounded-full ${stat.gradient} mx-auto mb-4 flex items-center justify-center`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-white/80 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-gradient hover-scale-gradient max-w-2xl mx-auto">
            <Palette className="w-16 h-16 mx-auto mb-6 text-gradient-rainbow animate-gradient-bounce" />
            <h3 className="text-4xl font-bold text-gradient-rainbow mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-xl text-white/90 mb-8">
              Let's collaborate on your next gradient-powered project and bring your vision to life!
            </p>
            <button className="btn-gradient gradient-rainbow-1 text-white font-bold text-xl px-12 py-6 rounded-full hover-scale-gradient shadow-gradient-1">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
