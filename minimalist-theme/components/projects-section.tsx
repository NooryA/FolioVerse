"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight, Calendar, Users, Star } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Apps" },
    { id: "mobile", name: "Mobile" },
    { id: "ui", name: "UI/UX" },
    { id: "tools", name: "Tools" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced filtering, real-time inventory, and seamless checkout experience.",
      category: "web",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "/project1.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      year: "2024",
      team: 4,
      featured: true,
      status: "Completed",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates, drag-and-drop functionality, and team analytics.",
      category: "web",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "WebSocket"],
      image: "/project2.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      year: "2024",
      team: 2,
      featured: true,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Weather Mobile App",
      description: "Beautiful weather app with location-based forecasts, interactive maps, and push notifications.",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "OpenWeather API", "Redux"],
      image: "/project3.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      year: "2023",
      team: 3,
      featured: false,
      status: "Completed",
    },
    {
      id: 4,
      title: "Design System",
      description: "Comprehensive design system with reusable components, documentation, and Figma integration.",
      category: "ui",
      technologies: ["Storybook", "React", "Figma", "TypeScript"],
      image: "/project4.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      year: "2023",
      team: 5,
      featured: true,
      status: "Completed",
    },
    {
      id: 5,
      title: "Code Generator CLI",
      description: "Command-line tool for generating boilerplate code with customizable templates and configurations.",
      category: "tools",
      technologies: ["Node.js", "TypeScript", "Commander.js", "Inquirer"],
      image: "/project5.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      year: "2023",
      team: 1,
      featured: false,
      status: "Completed",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects with dark mode, animations, and optimized performance.",
      category: "web",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
      image: "/project6.jpg",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      year: "2023",
      team: 1,
      featured: false,
      status: "Completed",
    },
  ];

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="minimal-section">
      <div className="minimal-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="minimal-text-center mb-16"
        >
          <h2 className="minimal-heading-2 mb-4">Selected Projects</h2>
          <p className="minimal-body-large max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, mobile apps, and user interface design.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h3 className="minimal-heading-3 mb-8">Featured Work</h3>
          <div className="minimal-grid minimal-grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="minimal-card-subtle minimal-hover-lift"
              >
                <div className="aspect-video bg-minimal-light-gray rounded-lg mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-minimal-accent to-minimal-accent-dark opacity-20" />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-minimal-white rounded-full flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-minimal-accent" />
                    </div>
                  </motion.div>
                </div>

                <div className="minimal-flex minimal-flex-between mb-3">
                  <h4 className="minimal-heading-4">{project.title}</h4>
                  <div className="minimal-flex minimal-flex-gap-small">
                    <div
                      className={`minimal-status-dot ${
                        project.status === "Completed"
                          ? "minimal-status-success"
                          : project.status === "In Progress"
                          ? "minimal-status-warning"
                          : "minimal-status-neutral"
                      }`}
                    />
                    <span className="minimal-body-small">{project.status}</span>
                  </div>
                </div>

                <p className="minimal-body mb-4">{project.description}</p>

                <div className="minimal-flex minimal-flex-gap-small flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="minimal-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="minimal-flex minimal-flex-between">
                  <div className="minimal-flex minimal-flex-gap-small">
                    <Calendar className="w-4 h-4 text-minimal-medium-gray" />
                    <span className="minimal-body-small">{project.year}</span>
                    <Users className="w-4 h-4 text-minimal-medium-gray ml-2" />
                    <span className="minimal-body-small">{project.team} people</span>
                  </div>
                  <div className="minimal-flex minimal-flex-gap-small">
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="minimal-button-ghost p-2"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="minimal-button-ghost p-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <h3 className="minimal-heading-3 mb-8">All Projects</h3>
          <div className="minimal-flex minimal-flex-gap-small flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${selectedCategory === category.id ? "minimal-button" : "minimal-button-outline"}`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="minimal-grid minimal-grid-cols-3 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="minimal-card minimal-hover-lift"
            >
              <div className="aspect-video bg-minimal-light-gray rounded-lg mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-minimal-accent to-minimal-accent-dark opacity-10" />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{
                    scale: hoveredProject === project.id ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 bg-minimal-white rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-minimal-accent" />
                  </div>
                </motion.div>
              </div>

              <h4 className="minimal-heading-4 mb-2">{project.title}</h4>
              <p className="minimal-body mb-4 line-clamp-2">{project.description}</p>

              <div className="minimal-flex minimal-flex-gap-small flex-wrap mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="minimal-tag">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && <span className="minimal-tag">+{project.technologies.length - 3}</span>}
              </div>

              <div className="minimal-flex minimal-flex-between">
                <div className="minimal-flex minimal-flex-gap-small">
                  <Calendar className="w-4 h-4 text-minimal-medium-gray" />
                  <span className="minimal-body-small">{project.year}</span>
                </div>
                <div className="minimal-flex minimal-flex-gap-small">
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="minimal-button-ghost p-1"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="minimal-button-ghost p-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <h3 className="minimal-heading-3 minimal-text-center mb-8">Project Statistics</h3>
          <div className="minimal-grid minimal-grid-cols-4">
            {[
              { number: projects.length, label: "Total Projects" },
              { number: featuredProjects.length, label: "Featured Projects" },
              { number: projects.filter((p) => p.status === "Completed").length, label: "Completed" },
              { number: projects.filter((p) => p.status === "In Progress").length, label: "In Progress" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="minimal-card-flat minimal-text-center"
              >
                <div className="minimal-heading-2 text-minimal-accent mb-2">{stat.number}</div>
                <p className="minimal-body">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="minimal-card-subtle minimal-text-center"
        >
          <h3 className="minimal-heading-3 mb-4">Interested in Working Together?</h3>
          <p className="minimal-body mb-6 max-w-2xl mx-auto">
            These projects represent just a sample of my work. I'd love to discuss how we can bring your ideas to life with clean, efficient
            code.
          </p>
          <motion.a href="#contact" className="minimal-button minimal-hover-lift" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
