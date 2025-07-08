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
      gradient: "from-pink-500 via-red-500 to-orange-500",
      textGradient: "from-pink-400 to-orange-400",
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
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      textGradient: "from-purple-400 to-blue-400",
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
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      textGradient: "from-green-400 to-cyan-400",
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
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      textGradient: "from-yellow-400 to-red-400",
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
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      textGradient: "from-indigo-400 to-pink-400",
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
      gradient: "from-teal-500 via-green-500 to-blue-500",
      textGradient: "from-teal-400 to-blue-400",
      glowClass: "glow-gradient-pink",
      image: "🚀",
      stats: { views: "65k+", likes: "4.1k", stars: "310" },
      features: ["Template Library", "One-click Deploy", "Custom Themes", "SEO Optimized"],
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", gradient: "from-pink-500 via-purple-500 to-indigo-500" },
    { id: "web", label: "Web Apps", gradient: "from-red-500 via-orange-500 to-yellow-500" },
    { id: "dashboard", label: "Dashboards", gradient: "from-blue-500 via-indigo-500 to-purple-500" },
    { id: "ecommerce", label: "E-commerce", gradient: "from-green-500 via-teal-500 to-cyan-500" },
    { id: "design", label: "Design Tools", gradient: "from-purple-500 via-pink-500 to-red-500" },
    { id: "animation", label: "Animation", gradient: "from-orange-500 via-red-500 to-pink-500" },
    { id: "tool", label: "Tools", gradient: "from-cyan-500 via-blue-500 to-indigo-500" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="projects" className="relative py-32 px-4 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="gradient-animated-2 absolute inset-0 opacity-8" />
        <div className="gradient-animated-3 absolute inset-0 opacity-12" />

        {/* Enhanced floating gradient shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute opacity-15 animate-gradient-float ${
              i % 4 === 0 ? "gradient-primary" : i % 4 === 1 ? "gradient-secondary" : i % 4 === 2 ? "gradient-accent" : "gradient-rainbow-1"
            }`}
            style={{
              width: `${60 + Math.random() * 100}px`,
              height: `${60 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: Math.random() > 0.5 ? "50%" : "25%",
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className="w-24 h-24 rounded-full gradient-rainbow-1 p-1 animate-gradient-rotate shadow-lg">
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Layers className="w-12 h-12 text-gradient-1" />
              </div>
            </div>
          </div>

          <h2 className="text-7xl md:text-9xl lg:text-[8rem] font-black mb-8 text-gradient-rainbow animate-gradient-shift leading-none">
            PROJECTS
          </h2>

          <p className="text-3xl md:text-4xl font-bold max-w-5xl mx-auto leading-relaxed">
            <span
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ backgroundSize: "200% 200%", textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              Explore my collection of
            </span>
            <br />
            <span className="text-gradient-2 animate-gradient-pulse font-black"> gradient-powered </span>
            <span
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ backgroundSize: "200% 200%", textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              projects that push the boundaries of web design
            </span>
          </p>
        </div>

        {/* Enhanced Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 border-2 border-white/20 ${
                activeFilter === category.id
                  ? `bg-gradient-to-r ${category.gradient} shadow-lg scale-110`
                  : "glass-gradient hover:scale-105"
              }`}
            >
              <span
                className={
                  activeFilter === category.id
                    ? "text-gray-900 font-black"
                    : `bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`
                }
                style={activeFilter === category.id ? { textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" } : {}}
              >
                {category.label}
              </span>
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`card-gradient hover-scale-gradient h-full border border-white/20 ${
                  hoveredProject === project.id ? project.glowClass : ""
                }`}
              >
                {/* Enhanced Project Image/Icon */}
                <div
                  className={`w-full h-56 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-9xl mb-8 relative overflow-hidden shadow-lg`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 filter drop-shadow-lg">{project.image}</span>

                  {/* Enhanced Hover Icons */}
                  <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all border border-white/30">
                      <Eye className="w-6 h-6 text-gray-900" style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all border border-white/30">
                      <Github className="w-6 h-6 text-gray-900" style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }} />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all border border-white/30">
                      <ExternalLink
                        className="w-6 h-6 text-gray-900"
                        style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                      />
                    </button>
                  </div>
                </div>

                {/* Enhanced Project Info */}
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${project.textGradient} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      <span className="font-bold text-lg bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                        {project.stats.stars}
                      </span>
                    </div>
                  </div>

                  <p
                    className="leading-relaxed text-lg bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                  >
                    {project.description}
                  </p>

                  {/* Enhanced Project Stats */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-6 text-base">
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-cyan-400" />
                        <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                          {project.stats.views}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-pink-400" />
                        <span className="font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                          {project.stats.likes}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Tech Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-4 py-2 text-base font-bold rounded-full border border-white/20 ${
                          tagIndex % 3 === 0
                            ? "bg-gradient-to-r from-pink-500 to-purple-500"
                            : tagIndex % 3 === 1
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                            : "bg-gradient-to-r from-green-500 to-teal-500"
                        }`}
                      >
                        <span className="text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                          {tag}
                        </span>
                      </span>
                    ))}
                  </div>

                  {/* Enhanced Features List */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Sparkles className="w-5 h-5 text-yellow-400" />
                          <span
                            className="text-base bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent font-bold"
                            style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <button
                    className={`w-full btn-gradient bg-gradient-to-r ${project.gradient} font-bold py-4 rounded-full hover-scale-gradient flex items-center justify-center gap-3 group border-2 border-white/20 shadow-lg relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span
                      className="text-lg relative z-10 text-gray-900 font-black"
                      style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}
                    >
                      View Project
                    </span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10 text-gray-900" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Project Stats Summary */}
        <div className="grid md:grid-cols-4 gap-10 mb-20">
          {[
            {
              label: "Total Projects",
              value: "50+",
              gradient: "from-pink-500 to-purple-600",
              textGradient: "from-pink-400 to-purple-400",
              icon: Code,
            },
            {
              label: "Total Views",
              value: "500k+",
              gradient: "from-blue-500 to-cyan-600",
              textGradient: "from-blue-400 to-cyan-400",
              icon: Eye,
            },
            {
              label: "GitHub Stars",
              value: "2.5k+",
              gradient: "from-yellow-500 to-orange-600",
              textGradient: "from-yellow-400 to-orange-400",
              icon: Star,
            },
            {
              label: "Happy Clients",
              value: "100+",
              gradient: "from-green-500 to-teal-600",
              textGradient: "from-green-400 to-teal-400",
              icon: Heart,
            },
          ].map((stat, index) => (
            <div key={index} className="card-gradient hover-scale-gradient text-center border border-white/20">
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${stat.gradient} mx-auto mb-6 flex items-center justify-center shadow-lg border border-white/20`}
              >
                <stat.icon className="w-10 h-10 text-gray-900" style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }} />
              </div>
              <div className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div
                className="font-bold text-xl bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent"
                style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="card-gradient hover-scale-gradient max-w-3xl mx-auto border border-white/20">
            <Palette className="w-20 h-20 mx-auto mb-8 text-gradient-rainbow animate-gradient-bounce" />
            <h3 className="text-5xl font-bold text-gradient-rainbow mb-6">Ready to Create Something Amazing?</h3>
            <p
              className="text-2xl mb-10 leading-relaxed bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold"
              style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
            >
              Let's collaborate on your next gradient-powered project and bring your vision to life with stunning colors!
            </p>
            <button className="btn-gradient gradient-rainbow-1 font-black text-2xl px-16 py-8 rounded-full hover-scale-gradient shadow-gradient-1 border-2 border-white/20 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                Start Your Project
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
