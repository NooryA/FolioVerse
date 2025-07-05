"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Code, Eye } from "lucide-react";

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", "web", "mobile", "design", "opensource"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with real-time inventory management",
      image: "/api/placeholder/600/400",
      category: "web",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      github: "https://github.com/",
      live: "https://demo.com/",
      color: "rgba(59, 130, 246, 0.3)",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure and intuitive banking solution for iOS and Android",
      image: "/api/placeholder/600/400",
      category: "mobile",
      tech: ["React Native", "Node.js", "MongoDB"],
      github: "https://github.com/",
      live: "https://demo.com/",
      color: "rgba(139, 92, 246, 0.3)",
    },
    {
      id: 3,
      title: "Design System",
      description: "Comprehensive component library with accessibility focus",
      image: "/api/placeholder/600/400",
      category: "design",
      tech: ["Figma", "Storybook", "React"],
      github: "https://github.com/",
      live: "https://demo.com/",
      color: "rgba(236, 72, 153, 0.3)",
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time data visualization with interactive charts",
      image: "/api/placeholder/600/400",
      category: "web",
      tech: ["D3.js", "TypeScript", "GraphQL"],
      github: "https://github.com/",
      live: "https://demo.com/",
      color: "rgba(6, 182, 212, 0.3)",
    },
    {
      id: 5,
      title: "Open Source CLI Tool",
      description: "Developer productivity tool with 10k+ downloads",
      image: "/api/placeholder/600/400",
      category: "opensource",
      tech: ["Node.js", "TypeScript", "Jest"],
      github: "https://github.com/",
      live: "https://demo.com/",
      color: "rgba(34, 197, 94, 0.3)",
    },
    {
      id: 6,
      title: "Social Media App",
      description: "Connect and share with glassmorphic UI design",
      image: "/api/placeholder/600/400",
      category: "mobile",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/",
      live: "https://demo.com/",
      color: "rgba(251, 146, 60, 0.3)",
    },
  ];

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)" }}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139, 92, 246, 0.1), transparent)" }}
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold glass-text-glow mb-4">Featured Projects</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">Explore my latest work showcasing modern design and development</p>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`glass-button capitalize ${selectedCategory === category ? "glass-button-primary" : ""}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="glass-card h-full glass-shimmer overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{
                      filter: hoveredProject === project.id ? "brightness(0.8)" : "brightness(1)",
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Overlay */}
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-button p-3 rounded-full"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-button p-3 rounded-full"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 glass px-3 py-1 text-xs rounded-full" style={{ background: project.color }}>
                    {project.category}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="glass px-3 py-1 text-xs rounded-full text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(45deg, transparent, ${project.color}, transparent)`,
                    opacity: hoveredProject === project.id ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Floating Elements */}
              {hoveredProject === project.id && (
                <>
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full glass"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    style={{ background: project.color }}
                  />
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full glass"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    style={{ background: project.color }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button glass-button-primary text-lg flex items-center gap-2 mx-auto"
          >
            <Eye className="w-5 h-5" />
            View All Projects
          </motion.button>
        </motion.div>

        {/* Code Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-20 glass-card text-center"
        >
          <Code className="w-12 h-12 text-white/80 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-4">Code Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Total Commits", value: "2,453" },
              { label: "Lines of Code", value: "156K+" },
              { label: "GitHub Stars", value: "892" },
              { label: "Contributors", value: "45" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
