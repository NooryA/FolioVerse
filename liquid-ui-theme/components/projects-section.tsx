"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  Folder,
  Star,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Zap,
  Eye,
  Heart,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export function ProjectsSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blobPositions, setBlobPositions] = useState<Array<{ x: number; y: number; size: number }>>([]);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const categories = ["All", "Web Apps", "Mobile", "Design", "Animation"];

  const projects = [
    {
      id: 1,
      title: "FluidDash Analytics",
      description: "A liquid-inspired dashboard with morphing data visualizations and smooth transitions.",
      longDescription:
        "An innovative analytics platform featuring fluid design principles, real-time data morphing, and intuitive user interactions. Built with React, D3.js, and custom CSS animations.",
      category: "Web Apps",
      technologies: ["React", "TypeScript", "D3.js", "Framer Motion"],
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      stats: { views: "12.5K", likes: "1.2K", stars: "340" },
    },
    {
      id: 2,
      title: "LiquidMotion Mobile",
      description: "Mobile app with organic animations and gesture-based liquid interactions.",
      longDescription:
        "A revolutionary mobile experience that responds to touch with liquid-like animations. Features gesture recognition, morphing UI elements, and adaptive design patterns.",
      category: "Mobile",
      technologies: ["React Native", "Reanimated", "Gesture Handler"],
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
      stats: { views: "8.7K", likes: "890", stars: "210" },
    },
    {
      id: 3,
      title: "Morphing Portfolio",
      description: "Creative portfolio site with shape-shifting elements and fluid navigation.",
      longDescription:
        "A personal portfolio that showcases the power of liquid design through morphing elements, fluid transitions, and innovative navigation patterns.",
      category: "Design",
      technologies: ["Next.js", "Three.js", "GSAP", "Tailwind"],
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      stats: { views: "15.2K", likes: "1.8K", stars: "520" },
    },
    {
      id: 4,
      title: "WaveForm Player",
      description: "Music player with liquid waveform visualizations and smooth audio controls.",
      longDescription:
        "An immersive music experience featuring liquid waveform animations, gesture-based controls, and adaptive visualizations that respond to audio frequencies.",
      category: "Web Apps",
      technologies: ["Vue.js", "Web Audio API", "Canvas", "CSS"],
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
      stats: { views: "9.3K", likes: "1.1K", stars: "280" },
    },
    {
      id: 5,
      title: "FluidForm Builder",
      description: "Form builder with morphing input fields and adaptive layouts.",
      longDescription:
        "A dynamic form building tool that features liquid input morphing, adaptive field layouts, and smooth validation animations for enhanced user experience.",
      category: "Web Apps",
      technologies: ["React", "Styled Components", "Formik", "Yup"],
      color: "from-indigo-400 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: false,
      stats: { views: "6.8K", likes: "720", stars: "190" },
    },
    {
      id: 6,
      title: "Liquid Animations Library",
      description: "Open-source library of liquid animations and morphing components.",
      longDescription:
        "A comprehensive animation library providing developers with liquid-inspired components, morphing effects, and smooth transitions for modern web applications.",
      category: "Animation",
      technologies: ["JavaScript", "CSS", "SCSS", "TypeScript"],
      color: "from-teal-400 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      stats: { views: "22.1K", likes: "2.5K", stars: "850" },
    },
  ];

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const generateBlobPositions = () => {
      const positions = [];
      for (let i = 0; i < 6; i++) {
        positions.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 80 + Math.random() * 120,
        });
      }
      setBlobPositions(positions);
    };

    generateBlobPositions();
    document.addEventListener("mousemove", handleMouseMove);

    const blobInterval = setInterval(generateBlobPositions, 8000);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(blobInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(6, 182, 212, 0.03) 0%, transparent 50%), linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`,
      }}
    >
      {/* Liquid Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Morphing Blobs */}
        {blobPositions.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute liquid-morph opacity-10"
            style={{
              left: `${blob.x}%`,
              top: `${blob.y}%`,
              width: `${blob.size}px`,
              height: `${blob.size}px`,
              background: `linear-gradient(${135 + index * 45}deg, 
                rgba(6, 182, 212, 0.3) 0%, 
                rgba(139, 92, 246, 0.3) 50%, 
                rgba(59, 130, 246, 0.3) 100%)`,
              filter: `blur(${20 + index * 5}px)`,
              transform: `translate(-50%, -50%)`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 15 + index * 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <motion.div className="max-w-7xl mx-auto relative z-10" variants={containerVariants} initial="hidden" animate={controls}>
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              className="w-16 h-16 liquid-morph liquid-gradient rounded-full flex items-center justify-center liquid-shadow"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <Folder className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div
              className="h-1 w-24 liquid-morph liquid-gradient rounded-full"
              animate={{ scaleX: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 liquid-text-gradient">Featured Projects</h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore my collection of <span className="liquid-text-gradient font-semibold">liquid-inspired</span> projects that push the
            boundaries of <span className="liquid-text-gradient font-semibold">modern web design</span>.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div className="mb-20" variants={itemVariants}>
          <div className="relative liquid-card liquid-perspective overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="grid lg:grid-cols-2 gap-8 items-center p-8"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Project Image */}
                <div className="relative group">
                  <motion.div
                    className={`aspect-video rounded-2xl bg-gradient-to-br ${featuredProjects[currentSlide]?.bgColor} liquid-shadow overflow-hidden`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`w-24 h-24 liquid-morph bg-gradient-to-r ${featuredProjects[currentSlide]?.color} rounded-full flex items-center justify-center liquid-shadow`}
                      >
                        <Play className="w-12 h-12 text-white ml-1" />
                      </div>
                    </div>

                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Live Demo Button */}
                    <motion.button
                      className="absolute top-4 right-4 w-12 h-12 liquid-glass rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <div>
                    <motion.div
                      className="flex items-center gap-3 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${featuredProjects[currentSlide]?.color} text-white`}
                      >
                        Featured
                      </span>
                      <span className="text-gray-500">{featuredProjects[currentSlide]?.category}</span>
                    </motion.div>

                    <motion.h3
                      className="text-3xl font-bold liquid-text-gradient mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {featuredProjects[currentSlide]?.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-600 leading-relaxed mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {featuredProjects[currentSlide]?.longDescription}
                    </motion.p>
                  </div>

                  {/* Technologies */}
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProjects[currentSlide]?.technologies.map((tech, index) => (
                        <span key={tech} className="px-3 py-1 liquid-glass text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Stats */}
                  <motion.div
                    className="flex items-center gap-6 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    {[
                      { icon: Eye, value: featuredProjects[currentSlide]?.stats.views, label: "Views" },
                      { icon: Heart, value: featuredProjects[currentSlide]?.stats.likes, label: "Likes" },
                      { icon: Star, value: featuredProjects[currentSlide]?.stats.stars, label: "Stars" },
                    ].map((stat, index) => (
                      <div key={stat.label} className="flex items-center gap-2 text-gray-600">
                        <stat.icon className="w-4 h-4" />
                        <span className="font-medium">{stat.value}</span>
                        <span className="text-sm">{stat.label}</span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <motion.button
                      className="liquid-button flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.button>

                    <motion.button
                      className="liquid-glass px-6 py-3 rounded-full flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 liquid-glass rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {featuredProjects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-cyan-500" : "bg-gray-300"}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div className="flex justify-center mb-12" variants={itemVariants}>
          <div className="flex gap-2 liquid-glass p-2 rounded-full">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "liquid-gradient text-white liquid-shadow"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="liquid-card liquid-hover liquid-tilt group cursor-pointer"
                variants={cardVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1.05, rotateY: 10 }}
                onHoverStart={() => setActiveProject(project.id)}
                onHoverEnd={() => setActiveProject(null)}
              >
                {/* Project Image */}
                <div className={`aspect-video rounded-xl bg-gradient-to-br ${project.bgColor} mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-16 h-16 liquid-morph bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center`}
                      animate={{ rotate: activeProject === project.id ? 360 : 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      {project.category === "Mobile" && <Smartphone className="w-8 h-8 text-white" />}
                      {project.category === "Web Apps" && <Globe className="w-8 h-8 text-white" />}
                      {project.category === "Design" && <Palette className="w-8 h-8 text-white" />}
                      {project.category === "Animation" && <Zap className="w-8 h-8 text-white" />}
                    </motion.div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.button>
                    <motion.button
                      className="w-10 h-10 liquid-glass rounded-full flex items-center justify-center text-white"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                      {project.category}
                    </span>
                    {project.featured && (
                      <div className="w-6 h-6 liquid-morph bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-3 liquid-text-gradient group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-2 py-1 liquid-glass text-xs rounded-lg">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.stats.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{project.stats.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      <span>{project.stats.stars}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Button */}
        <motion.div className="text-center mt-16" variants={itemVariants}>
          <motion.button
            className="liquid-button text-lg px-8 py-4 flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code2 className="w-6 h-6" />
            <span>View All Projects</span>
            <ExternalLink className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Interactive Cursor Light */}
      <div
        className="fixed w-40 h-40 rounded-full pointer-events-none z-20 mix-blend-multiply transition-all duration-300 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          filter: "blur(25px)",
        }}
      />
    </section>
  );
}
