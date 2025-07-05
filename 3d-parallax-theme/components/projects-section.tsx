"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -200]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 180, 360]);

  const projects = [
    {
      id: 1,
      title: "3D Product Visualizer",
      description: "Interactive WebGL-powered product showcase with real-time customization",
      tech: ["Three.js", "React", "WebGL", "GLSL"],
      image: "/api/placeholder/600/400",
      layer: 1,
      color: "#6366f1",
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      id: 2,
      title: "Immersive Portfolio",
      description: "Award-winning portfolio with parallax scrolling and 3D animations",
      tech: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
      image: "/api/placeholder/600/400",
      layer: 2,
      color: "#ec4899",
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      id: 3,
      title: "AI-Powered Design Tool",
      description: "Machine learning meets creative design in this innovative web app",
      tech: ["Python", "TensorFlow", "React", "Node.js"],
      image: "/api/placeholder/600/400",
      layer: 3,
      color: "#8b5cf6",
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      id: 4,
      title: "Virtual Reality Experience",
      description: "Browser-based VR experience using WebXR and custom shaders",
      tech: ["A-Frame", "WebXR", "JavaScript", "GLSL"],
      image: "/api/placeholder/600/400",
      layer: 1,
      color: "#10b981",
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      id: 5,
      title: "Real-time Collaboration",
      description: "Multiplayer creative platform with live synchronization",
      tech: ["Socket.io", "Redis", "React", "Canvas API"],
      image: "/api/placeholder/600/400",
      layer: 2,
      color: "#f59e0b",
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      id: 6,
      title: "Generative Art Engine",
      description: "Create unique algorithmic art pieces with custom parameters",
      tech: ["p5.js", "GLSL", "React", "Web Workers"],
      image: "/api/placeholder/600/400",
      layer: 3,
      color: "#ef4444",
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
  ];

  const getLayerTransform = (layer: number) => {
    switch (layer) {
      case 1:
        return y1;
      case 2:
        return y2;
      case 3:
        return y3;
      default:
        return y1;
    }
  };

  return (
    <section ref={containerRef} id="projects" className="relative min-h-screen py-20 px-4 overflow-hidden bg-parallax-dark preserve-3d">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div style={{ rotate }} className="absolute top-1/4 -left-32 w-64 h-64">
          <div className="w-full h-full bg-gradient-to-br from-parallax-primary/20 to-transparent rounded-full blur-3xl" />
        </motion.div>
        <motion.div style={{ rotate: rotate }} className="absolute bottom-1/4 -right-32 w-96 h-96">
          <div className="w-full h-full bg-gradient-to-tl from-parallax-secondary/20 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 50, z: -100 }}
          whileInView={{ opacity: 1, y: 0, z: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative preserve-3d"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-3d mb-4">Featured Projects</h2>
          <p className="text-xl text-parallax-text-secondary max-w-2xl mx-auto">
            Explore my latest work in 3D web development, creative coding, and interactive experiences
          </p>

          {/* Floating decorative elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-10 right-10 w-20 h-20"
          >
            <div className="w-full h-full bg-gradient-to-br from-parallax-accent to-parallax-primary rounded-lg opacity-20 rotating-element" />
          </motion.div>
        </motion.div>

        {/* 3D Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projects.map((project, index) => {
            const yTransform = getLayerTransform(project.layer);

            return (
              <motion.div
                key={project.id}
                style={{ y: yTransform }}
                initial={{ opacity: 0, z: -200, rotateY: -30 }}
                whileInView={{ opacity: 1, z: 0, rotateY: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="relative preserve-3d"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  whileHover={{
                    z: 100,
                    rotateY: 5,
                    rotateX: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="depth-card overflow-hidden group cursor-pointer h-full"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Project Image with Parallax */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br opacity-60 z-10"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${project.color}88, transparent)`,
                      }}
                    />
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{
                        transform: hoveredProject === project.id ? "scale(1.1)" : "scale(1)",
                        transition: "transform 0.6s ease",
                      }}
                    />

                    {/* Hover Overlay with Actions */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 z-20"
                    >
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="button-3d p-3 rounded-full"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="button-3d p-3 rounded-full"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </motion.div>

                    {/* 3D Layer indicator */}
                    <motion.div
                      className="absolute top-2 right-2 w-12 h-12 z-30"
                      animate={{
                        rotateZ: hoveredProject === project.id ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className="w-full h-full rounded-lg flex items-center justify-center font-bold text-white"
                        style={{
                          background: project.color,
                          boxShadow: `0 0 20px ${project.color}66`,
                        }}
                      >
                        {project.layer}D
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-parallax-text-primary">{project.title}</h3>
                    <p className="text-parallax-text-secondary mb-4 text-sm">{project.description}</p>

                    {/* Tech Stack with 3D Pills */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                          whileHover={{ z: 20, scale: 1.1 }}
                          className="px-3 py-1 text-xs rounded-full border border-parallax-primary/30 text-parallax-text-secondary preserve-3d"
                          style={{
                            background: `linear-gradient(135deg, ${project.color}11, transparent)`,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Floating particles on hover */}
                  {hoveredProject === project.id && (
                    <>
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full"
                          style={{
                            background: project.color,
                            left: `${20 + i * 15}%`,
                            top: "50%",
                          }}
                          animate={{
                            y: [0, -100],
                            x: [0, i % 2 === 0 ? 50 : -50],
                            opacity: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, z: 50 }}
            whileTap={{ scale: 0.95 }}
            className="button-3d text-lg flex items-center gap-2 mx-auto"
          >
            View All Projects
            <Play className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
