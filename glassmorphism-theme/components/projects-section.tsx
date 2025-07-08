"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Layers, Code, Zap, Star, Users, TrendingUp, Activity } from "lucide-react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      category: "fullstack",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: {
        users: "15K",
        performance: "98%",
        rating: "4.9/5",
      },
    },
    {
      id: 2,
      title: "AI-Powered Dashboard",
      description: "Analytics dashboard with AI insights, real-time data visualization, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      category: "ai",
      tags: ["Python", "TensorFlow", "React", "D3.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: {
        users: "8K",
        performance: "96%",
        rating: "4.8/5",
      },
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
      category: "mobile",
      tags: ["React Native", "Firebase", "Stripe", "Biometrics"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: {
        users: "25K",
        performance: "99%",
        rating: "4.9/5",
      },
    },
    {
      id: 4,
      title: "SaaS Project Management",
      description: "Comprehensive project management tool with team collaboration and time tracking features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      category: "saas",
      tags: ["Vue.js", "Laravel", "MySQL", "WebSocket"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: {
        users: "12K",
        performance: "94%",
        rating: "4.7/5",
      },
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing platform with virtual tours, mortgage calculator, and agent matching.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop",
      category: "web",
      tags: ["Next.js", "Prisma", "PostgreSQL", "MapBox"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: {
        users: "18K",
        performance: "95%",
        rating: "4.6/5",
      },
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "Comprehensive fitness app with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      category: "mobile",
      tags: ["Flutter", "Firebase", "ML Kit", "HealthKit"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: {
        users: "22K",
        performance: "97%",
        rating: "4.8/5",
      },
    },
    {
      id: 7,
      title: "Crypto Trading Platform",
      description: "Advanced cryptocurrency trading platform with real-time charts and portfolio management.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
      category: "fintech",
      tags: ["React", "Node.js", "WebSocket", "Chart.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      stats: {
        users: "35K",
        performance: "99%",
        rating: "4.9/5",
      },
    },
    {
      id: 8,
      title: "Learning Management System",
      description: "Educational platform with course creation, video streaming, and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      category: "education",
      tags: ["React", "Express", "MongoDB", "Video.js"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      stats: {
        users: "45K",
        performance: "96%",
        rating: "4.7/5",
      },
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: Layers },
    { id: "fullstack", label: "Full Stack", icon: Code },
    { id: "ai", label: "AI & ML", icon: Zap },
    { id: "mobile", label: "Mobile", icon: Activity },
    { id: "saas", label: "SaaS", icon: Star },
    { id: "web", label: "Web Apps", icon: Github },
  ];

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  const developmentStats = [
    { label: "Total Projects", value: "50+", icon: "🚀" },
    { label: "Code Quality", value: "98%", icon: "✨" },
    { label: "On-Time Delivery", value: "100%", icon: "⚡" },
    { label: "Client Satisfaction", value: "4.9/5", icon: "⭐" },
  ];

  return (
    <section id="projects" className="py-32 px-4 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Code Symbols */}
        {["<>", "{}", "[]", "/>", "&&", "||"].map((symbol, index) => (
          <motion.div
            key={symbol}
            className="absolute glass-premium opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center text-white/40 font-mono text-xl"
            style={{
              left: `${10 + index * 15}%`,
              top: `${20 + (index % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="glass-premium inline-block px-8 py-3 rounded-full glass-shimmer-premium mb-6">
            <span className="text-sm font-medium text-white/90 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-400" />
              Portfolio
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold glass-text-glow-premium mb-6 font-['Orbitron']">
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`glass-premium px-6 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 ${
                activeCategory === category.id ? "glass-glow-primary border-blue-400/50" : "hover:glass-glow-secondary"
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium text-white/90">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Featured Work</h3>
            <p className="text-white/70 text-lg">Highlights of my best projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.id.toString())}
                onHoverEnd={() => setHoveredProject(null)}
                className="glass-card-premium glass-shimmer-premium hover:glass-glow-primary transition-all duration-500 cursor-pointer group relative overflow-hidden"
              >
                {/* Featured Badge */}
                <div className="absolute top-4 right-4 glass-premium px-3 py-1 rounded-full z-10">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs font-medium text-white/90">Featured</span>
                  </div>
                </div>

                {/* Project Image */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredProject === project.id.toString() && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="glass-button-premium p-3 rounded-full"
                        >
                          <Github className="w-6 h-6" />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          className="glass-button-premium p-3 rounded-full"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold glass-text-glow-premium group-hover:text-blue-400 transition-colors">{project.title}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white flex items-center justify-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.stats.users}
                      </div>
                      <div className="text-xs text-white/60">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white flex items-center justify-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {project.stats.performance}
                      </div>
                      <div className="text-xs text-white/60">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white flex items-center justify-center gap-1">
                        <Star className="w-4 h-4" />
                        {project.stats.rating}
                      </div>
                      <div className="text-xs text-white/60">Rating</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="glass-premium px-3 py-1 rounded-full text-xs text-white/80 glass-shimmer-premium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating particles on hover */}
                <AnimatePresence>
                  {hoveredProject === project.id.toString() && (
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full"
                          initial={{
                            x: Math.random() * 100,
                            y: Math.random() * 100,
                            opacity: 0,
                          }}
                          animate={{
                            x: Math.random() * 300,
                            y: Math.random() * 300,
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">All Projects</h3>
            <p className="text-white/70 text-lg">Comprehensive showcase of my work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id.toString())}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="glass-card-premium glass-shimmer-premium hover:glass-glow-secondary transition-all duration-500 cursor-pointer group relative overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-48 rounded-2xl overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-500">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id.toString() && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                        >
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="glass-button-premium p-3 rounded-full"
                          >
                            <Github className="w-6 h-6" />
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="glass-button-premium p-3 rounded-full"
                          >
                            <ExternalLink className="w-6 h-6" />
                          </motion.a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold glass-text-glow-premium group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="glass-premium px-3 py-1 rounded-full text-xs text-white/80 glass-shimmer-premium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Development Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Development Stats</h3>
            <p className="text-white/70 text-lg">Performance metrics and achievements</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {developmentStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass-card-premium text-center glass-shimmer-premium hover:glass-glow-accent transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold glass-text-premium mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card-premium glass-particles max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold glass-text-glow-premium mb-4 font-['Orbitron']">Ready to Build Something Great?</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="glass-button-premium glass-glow-primary flex items-center space-x-2 mx-auto"
            >
              <span>Start a Project</span>
              <Code className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Ambient Particles */}
      <div className="glass-particles absolute inset-0 pointer-events-none opacity-20"></div>
    </section>
  );
}
