"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Layers, Lightbulb, Zap, Star, Heart } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isGalleryView, setIsGalleryView] = useState(true);
  const [sketches, setSketches] = useState<any[]>([]);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern design and seamless user experience",
      longDescription:
        "Built with React, Node.js, and MongoDB. Features include user authentication, payment processing, inventory management, and an admin dashboard. The platform serves over 10,000 active users.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "https://github.com/example/ecommerce",
      demo: "https://demo.example.com",
      category: "Full Stack",
      status: "Completed",
      year: "2024",
      sketch: "💻🛒",
      color: "#3b82f6",
    },
    {
      id: 2,
      title: "Creative Portfolio",
      description: "A stunning portfolio website for a digital artist with interactive galleries",
      longDescription:
        "Custom-built portfolio featuring smooth animations, interactive galleries, and a content management system. Utilizes GSAP for animations and Sanity for content management.",
      technologies: ["Next.js", "GSAP", "Sanity", "Tailwind"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      github: "https://github.com/example/portfolio",
      demo: "https://portfolio.example.com",
      category: "Frontend",
      status: "Completed",
      year: "2024",
      sketch: "🎨✨",
      color: "#ec4899",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team features",
      longDescription:
        "Full-featured task management application with real-time collaboration, file sharing, and progress tracking. Built with modern web technologies and deployed on cloud infrastructure.",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Cloud Functions"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      github: "https://github.com/example/taskmanager",
      demo: "https://tasks.example.com",
      category: "Full Stack",
      status: "In Progress",
      year: "2024",
      sketch: "📋⚡",
      color: "#10b981",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather app with detailed forecasts and location-based features",
      longDescription:
        "Weather dashboard with beautiful visualizations, location-based forecasts, and weather alerts. Integrates with multiple weather APIs for accurate data and includes historical weather data.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      github: "https://github.com/example/weather",
      demo: "https://weather.example.com",
      category: "Frontend",
      status: "Completed",
      year: "2023",
      sketch: "🌤️📊",
      color: "#f59e0b",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time insights",
      longDescription:
        "Comprehensive social media management tool with analytics, scheduling, and engagement tracking. Supports multiple platforms and provides detailed insights for content creators.",
      technologies: ["React", "D3.js", "Express", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      github: "https://github.com/example/social-dashboard",
      demo: "https://social.example.com",
      category: "Full Stack",
      status: "Completed",
      year: "2023",
      sketch: "📱📈",
      color: "#8b5cf6",
    },
    {
      id: 6,
      title: "Recipe Finder",
      description: "A recipe discovery app with AI-powered recommendations and meal planning",
      longDescription:
        "Smart recipe finder with AI-powered recommendations, meal planning, and grocery list generation. Features include dietary restrictions, nutritional information, and cooking timer.",
      technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      github: "https://github.com/example/recipe-finder",
      demo: "https://recipes.example.com",
      category: "Mobile",
      status: "Planned",
      year: "2024",
      sketch: "🍳🤖",
      color: "#ef4444",
    },
  ];

  const ProjectCard = ({ project, index }: { project: any; index: number }) => (
    <motion.div
      className="bg-paper sketch-border p-6 sketch-hover cursor-pointer relative overflow-hidden"
      initial={{ opacity: 0, y: 50, rotate: Math.random() * 6 - 3 }}
      animate={{ opacity: 1, y: 0, rotate: Math.random() * 4 - 2 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      onClick={() => setSelectedProject(project.id)}
    >
      {/* Project Status Badge */}
      <div className="absolute top-2 right-2">
        <div
          className={`sticky-note p-2 text-xs handwritten ${
            project.status === "Completed" ? "bg-green-200" : project.status === "In Progress" ? "bg-yellow-200" : "bg-blue-200"
          }`}
        >
          {project.status}
        </div>
      </div>

      {/* Sketch Icons */}
      <div className="text-4xl mb-4 text-center">{project.sketch}</div>

      {/* Project Image Sketch */}
      <div className="relative h-48 mb-4 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>

        {/* Sketch overlay */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
        >
          <motion.rect
            x="20"
            y="20"
            width="260"
            height="160"
            stroke={project.color}
            strokeWidth="2"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
            initial={{ strokeDashoffset: 1000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 2, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* Project Title */}
      <h3 className="handwritten-bold text-2xl mb-2 scribble-underline">{project.title}</h3>

      {/* Project Description */}
      <p className="handwritten text-lg text-gray-700 mb-4 leading-relaxed">{project.description}</p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 3).map((tech: string, i: number) => (
          <span key={tech} className="bg-gray-100 px-2 py-1 rounded text-sm handwritten">
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="bg-gray-100 px-2 py-1 rounded text-sm handwritten">+{project.technologies.length - 3} more</span>
        )}
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2">
        <motion.button
          className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded handwritten text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Eye className="w-4 h-4" />
          View
        </motion.button>
        <motion.button
          className="flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded handwritten text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github className="w-4 h-4" />
          Code
        </motion.button>
      </div>

      {/* Doodle decorations */}
      <div className="absolute top-4 left-4 text-xl opacity-30">✨</div>
      <div className="absolute bottom-4 right-4 text-xl opacity-30">{index % 2 === 0 ? "🚀" : "💡"}</div>
    </motion.div>
  );

  const ProjectModal = ({ project }: { project: any }) => (
    <motion.div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        className="bg-paper sketch-border p-8 max-w-4xl max-h-[90vh] overflow-y-auto torn-paper"
        initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
        transition={{ type: "spring", bounce: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className="absolute top-4 right-4 text-2xl hover:text-red-500 transition-colors" onClick={() => setSelectedProject(null)}>
          ×
        </button>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">{project.sketch}</div>
            <div>
              <h2 className="handwritten-bold text-4xl scribble-underline">{project.title}</h2>
              <p className="handwritten text-lg text-gray-600">
                {project.category} • {project.year}
              </p>
            </div>
          </div>

          <div className="sticky-note p-4 mb-6">
            <p className="handwritten text-lg leading-relaxed">{project.longDescription}</p>
          </div>
        </div>

        {/* Project Image */}
        <div className="mb-8">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg sketch-border" />
        </div>

        {/* Technologies */}
        <div className="mb-8">
          <h3 className="handwritten-bold text-2xl mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech: string, i: number) => (
              <motion.span
                key={tech}
                className="bg-gray-100 px-4 py-2 rounded-lg handwritten text-lg sketch-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.a
            href={project.demo}
            className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg handwritten text-lg sketch-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </motion.a>
          <motion.a
            href={project.github}
            className="flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg handwritten text-lg sketch-hover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            View Code
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <section id="projects" className="min-h-screen paper-texture notebook-lines margin-line py-16">
      <div className="container mx-auto px-8 ml-24">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="handwritten-bold text-6xl md:text-7xl mb-4 scribble-underline">Project Gallery</h2>
          <p className="handwritten text-xl text-gray-600 mb-8">A collection of my creative coding adventures</p>

          {/* Gallery Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <motion.button
              className={`px-6 py-3 rounded-lg handwritten text-lg sketch-hover ${
                isGalleryView ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setIsGalleryView(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Gallery View
            </motion.button>
            <motion.button
              className={`px-6 py-3 rounded-lg handwritten text-lg sketch-hover ${
                !isGalleryView ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setIsGalleryView(false)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              List View
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {isGalleryView ? (
            <motion.div
              key="gallery"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div key="list" className="space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-paper sketch-border p-8 sketch-hover cursor-pointer"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="flex items-center gap-6">
                    <div className="text-6xl">{project.sketch}</div>
                    <div className="flex-1">
                      <h3 className="handwritten-bold text-3xl mb-2">{project.title}</h3>
                      <p className="handwritten text-lg text-gray-700 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech: string) => (
                          <span key={tech} className="bg-gray-100 px-3 py-1 rounded handwritten">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        className="flex items-center gap-1 bg-blue-100 text-blue-700 px-4 py-2 rounded handwritten"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </motion.button>
                      <motion.button
                        className="flex items-center gap-1 bg-gray-100 text-gray-700 px-4 py-2 rounded handwritten"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Doodles */}
        <div className="fixed top-1/4 right-4 text-3xl opacity-30 animate-pulse">🎨</div>
        <div className="fixed bottom-1/4 left-4 text-3xl opacity-30 animate-pulse">✏️</div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>{selectedProject && <ProjectModal project={projects.find((p) => p.id === selectedProject)!} />}</AnimatePresence>
    </section>
  );
}
