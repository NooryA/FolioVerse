"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, Heart, Calendar, Tag, Filter, Grid, List } from "lucide-react";

// Project data with gallery information
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Renaissance",
    artist: "Alessandro Rivera",
    year: "2024",
    medium: "React, Node.js, MongoDB",
    dimensions: "Full-Stack Application",
    category: "web-app",
    featured: true,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    description:
      "A modern e-commerce platform with seamless user experience and robust backend architecture. Features include real-time inventory management, secure payment processing, and responsive design.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Authentication"],
    likes: 342,
    views: 1205,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    price: "Commission Available",
    details:
      "Built with scalability in mind, this platform handles thousands of concurrent users while maintaining sub-second response times.",
  },
  {
    id: 2,
    title: "Dashboard Symphony",
    artist: "Alessandro Rivera",
    year: "2024",
    medium: "Next.js, TypeScript, Tailwind",
    dimensions: "Admin Dashboard",
    category: "dashboard",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=700&fit=crop",
    description:
      "An intuitive admin dashboard featuring real-time analytics, data visualization, and responsive design. Perfect for managing complex datasets with ease.",
    tags: ["Next.js", "TypeScript", "Chart.js", "Tailwind CSS"],
    likes: 278,
    views: 892,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    price: "Open Source",
    details: "Features comprehensive data visualization tools and real-time updates through WebSocket connections.",
  },
  {
    id: 3,
    title: "Mobile Innovation",
    artist: "Alessandro Rivera",
    year: "2024",
    medium: "React Native, Expo",
    dimensions: "Cross-platform Mobile App",
    category: "mobile",
    featured: true,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=900&fit=crop",
    description:
      "A cross-platform mobile application with native performance and beautiful animations. Seamlessly integrates with cloud services and offline capabilities.",
    tags: ["React Native", "Expo", "AsyncStorage", "Push Notifications"],
    likes: 456,
    views: 1567,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    price: "Portfolio Piece",
    details: "Optimized for both iOS and Android with shared codebase and platform-specific enhancements.",
  },
  {
    id: 4,
    title: "API Architecture",
    artist: "Alessandro Rivera",
    year: "2023",
    medium: "Express.js, PostgreSQL",
    dimensions: "RESTful API",
    category: "backend",
    featured: false,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=600&fit=crop",
    description:
      "A robust RESTful API with comprehensive documentation, rate limiting, and security features. Designed for scalability and maintainability.",
    tags: ["Express.js", "PostgreSQL", "JWT", "Docker", "Swagger"],
    likes: 189,
    views: 743,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    price: "Best Practices",
    details: "Implements industry-standard security practices and comprehensive error handling.",
  },
  {
    id: 5,
    title: "Design System Collection",
    artist: "Alessandro Rivera",
    year: "2023",
    medium: "Storybook, React, CSS",
    dimensions: "Component Library",
    category: "design-system",
    featured: true,
    image: "https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&h=800&fit=crop",
    description:
      "A comprehensive design system with reusable components, consistent styling, and extensive documentation. Accelerates development across multiple projects.",
    tags: ["Storybook", "React", "CSS Variables", "Design Tokens"],
    likes: 321,
    views: 1098,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    price: "Consultation Available",
    details: "Includes automated testing, accessibility compliance, and seamless integration workflows.",
  },
  {
    id: 6,
    title: "Performance Optimization",
    artist: "Alessandro Rivera",
    year: "2023",
    medium: "Webpack, Lighthouse",
    dimensions: "Web Performance",
    category: "optimization",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=750&fit=crop&q=80",
    description:
      "Advanced performance optimization techniques resulting in 90+ Lighthouse scores. Includes lazy loading, code splitting, and image optimization.",
    tags: ["Webpack", "Lighthouse", "PWA", "Service Workers"],
    likes: 267,
    views: 934,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    price: "Speed Consulting",
    details: "Achieved 40% improvement in load times and 60% reduction in bundle size.",
  },
];

const categories = [
  { id: "all", name: "All Works", count: projectsData.length },
  { id: "web-app", name: "Web Applications", count: projectsData.filter((p) => p.category === "web-app").length },
  { id: "dashboard", name: "Dashboards", count: projectsData.filter((p) => p.category === "dashboard").length },
  { id: "mobile", name: "Mobile Apps", count: projectsData.filter((p) => p.category === "mobile").length },
  { id: "backend", name: "Backend", count: projectsData.filter((p) => p.category === "backend").length },
  { id: "design-system", name: "Design Systems", count: projectsData.filter((p) => p.category === "design-system").length },
  { id: "optimization", name: "Optimization", count: projectsData.filter((p) => p.category === "optimization").length },
];

export function ProjectsSection() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter((project) => project.category === activeCategory));
    }
  }, [activeCategory]);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  if (!mounted) return null;

  return (
    <section id="projects" className="gallery-section bg-gallery-bg-warm">
      <div className="gallery-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="gallery-label mb-4">Portfolio Collection</div>
          <h2 className="gallery-heading gallery-heading-lg mb-6">The Gallery Wall</h2>
          <p className="gallery-subtitle">A curated collection of digital masterpieces and technical innovations</p>
        </div>

        {/* Gallery Controls */}
        <div className="gallery-controls mb-12">
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2 mr-4">
              <Filter className="w-4 h-4 text-gallery-text-light" />
              <span className="gallery-label">Filter by Medium:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`gallery-filter ${activeCategory === category.id ? "active" : ""}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <span className="gallery-label">View:</span>
            <button onClick={() => setViewMode("grid")} className={`gallery-filter ${viewMode === "grid" ? "active" : ""}`}>
              <Grid className="w-4 h-4" />
            </button>
            <button onClick={() => setViewMode("list")} className={`gallery-filter ${viewMode === "list" ? "active" : ""}`}>
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={viewMode === "grid" ? "gallery-masonry" : "space-y-6"}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`gallery-item gallery-interactive cursor-pointer ${viewMode === "list" ? "!mb-0" : ""}`}
              onClick={() => openProjectModal(project)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="gallery-frame">
                <img src={project.image} alt={project.title} className="gallery-image" />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{project.medium}</p>
                    <div className="flex justify-center gap-4">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm">{project.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gallery-accent text-gallery-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Quick Stats */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {project.views}
                  </div>
                  <div className="bg-black/70 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-400" />
                    {project.likes}
                  </div>
                </div>
              </div>

              <div className="gallery-caption">
                <h3 className="gallery-title">{project.title}</h3>
                <p className="gallery-artist">by {project.artist}</p>
                <p className="gallery-year">{project.year}</p>

                <div className="mt-3 space-y-2">
                  <div>
                    <span className="gallery-label">Medium:</span>
                    <span className="gallery-text ml-2 text-sm">{project.medium}</span>
                  </div>
                  <div>
                    <span className="gallery-label">Dimensions:</span>
                    <span className="gallery-text ml-2 text-sm">{project.dimensions}</span>
                  </div>
                  <div>
                    <span className="gallery-label">Price:</span>
                    <span className="gallery-text ml-2 text-sm">{project.price}</span>
                  </div>
                </div>

                <p className="gallery-text text-sm mt-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-1 text-xs bg-gallery-highlight text-gallery-primary rounded"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 text-xs bg-gallery-border text-gallery-text-light rounded">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="gallery-card max-w-md mx-auto">
              <h3 className="gallery-title text-lg mb-4">No Artworks Found</h3>
              <p className="gallery-text">No pieces match your current filter. Try selecting a different medium or view all works.</p>
              <button onClick={() => setActiveCategory("all")} className="gallery-btn gallery-btn-primary mt-6">
                View All Works
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg">
            <div className="gallery-card">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="gallery-title text-2xl mb-2">{selectedProject.title}</h2>
                  <p className="gallery-artist text-lg">
                    {selectedProject.artist}, {selectedProject.year}
                  </p>
                </div>
                <button onClick={closeProjectModal} className="text-gallery-text-light hover:text-gallery-primary transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="gallery-frame">
                  <img src={selectedProject.image} alt={selectedProject.title} className="gallery-image" />
                </div>

                <div className="space-y-6">
                  <div className="gallery-exhibition">
                    <h3 className="gallery-title text-lg mb-4">Artwork Details</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="gallery-label">Medium:</span>
                        <span className="gallery-text ml-2">{selectedProject.medium}</span>
                      </div>
                      <div>
                        <span className="gallery-label">Dimensions:</span>
                        <span className="gallery-text ml-2">{selectedProject.dimensions}</span>
                      </div>
                      <div>
                        <span className="gallery-label">Year:</span>
                        <span className="gallery-text ml-2">{selectedProject.year}</span>
                      </div>
                      <div>
                        <span className="gallery-label">Availability:</span>
                        <span className="gallery-text ml-2">{selectedProject.price}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="gallery-title text-lg mb-4">Artist's Statement</h3>
                    <p className="gallery-text">{selectedProject.description}</p>
                    <p className="gallery-text mt-3">{selectedProject.details}</p>
                  </div>

                  <div>
                    <h3 className="gallery-title text-lg mb-4">Technical Medium</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag: string, index: number) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-3 py-1 bg-gallery-highlight text-gallery-primary rounded-full text-sm"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="gallery-btn gallery-btn-primary">
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gallery-btn gallery-btn-secondary"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
