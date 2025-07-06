"use client";
import { useState } from "react";

// Inline SVG Icons
const EyeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "All Work", count: 12 },
    { id: "branding", name: "Branding", count: 5 },
    { id: "web", name: "Web Design", count: 4 },
    { id: "mobile", name: "Mobile Apps", count: 3 },
  ];

  const projects = [
    {
      id: 1,
      title: "Zenith Coffee Co.",
      subtitle: "Brand Identity & Package Design",
      category: "branding",
      year: "2024",
      description: "Complete brand identity for artisanal coffee roaster, including logo design, packaging, and digital presence.",
      technologies: ["Illustrator", "Photoshop", "After Effects"],
      likes: 247,
      isLiked: false,
      featured: true,
      gradient: "studio-bg-gradient",
    },
    {
      id: 2,
      title: "FinanceFlow",
      subtitle: "Mobile Banking App",
      category: "mobile",
      year: "2024",
      description: "User-friendly mobile banking experience with intuitive navigation and robust security features.",
      technologies: ["React Native", "Figma", "Principle"],
      likes: 189,
      isLiked: true,
      featured: false,
      gradient: "studio-bg-gradient-secondary",
    },
    {
      id: 3,
      title: "EcoVibe",
      subtitle: "Sustainable Fashion Platform",
      category: "web",
      year: "2023",
      description: "E-commerce platform for sustainable fashion brands with focus on transparency and ethics.",
      technologies: ["Next.js", "Shopify", "Three.js"],
      likes: 312,
      isLiked: false,
      featured: true,
      gradient: "studio-bg-gradient-warm",
    },
    {
      id: 4,
      title: "Luna Wellness",
      subtitle: "Meditation & Mindfulness Brand",
      category: "branding",
      year: "2023",
      description: "Holistic brand identity for wellness company focused on mental health and meditation practices.",
      technologies: ["Illustrator", "Cinema 4D", "Figma"],
      likes: 156,
      isLiked: false,
      featured: false,
      gradient: "studio-bg-gradient-cool",
    },
    {
      id: 5,
      title: "TechHub Dashboard",
      subtitle: "SaaS Analytics Platform",
      category: "web",
      year: "2023",
      description: "Complex data visualization dashboard for tech startups to track growth metrics and KPIs.",
      technologies: ["React", "D3.js", "Node.js"],
      likes: 423,
      isLiked: true,
      featured: true,
      gradient: "studio-bg-gradient-rainbow",
    },
    {
      id: 6,
      title: "PetPal",
      subtitle: "Pet Care Management App",
      category: "mobile",
      year: "2023",
      description: "Comprehensive pet care app helping owners track health, schedule appointments, and connect with vets.",
      technologies: ["Flutter", "Firebase", "Sketch"],
      likes: 278,
      isLiked: false,
      featured: false,
      gradient: "studio-bg-gradient",
    },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="work" className="studio-section-lg bg-white">
      <div className="studio-container">
        {/* Section Header */}
        <div className="text-center mb-16 studio-animate-fadeInUp">
          <div className="studio-badge studio-badge-primary mb-4">🎨 Our Creative Work</div>
          <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
            Projects That <span className="studio-text-gradient">Inspire</span>
            <br />& <span className="studio-text-gradient-rainbow">Transform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every project is a journey of discovery, creativity, and innovation. Here's a selection of our recent work that we're proud to
            share.
          </p>
        </div>

        {/* Featured Projects Carousel */}
        <div className="mb-20">
          <h3 className="font-display text-3xl font-bold mb-8 studio-text-gradient">Featured Work</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <div
                key={project.id}
                className="studio-portfolio-item aspect-[4/3] cursor-pointer group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`w-full h-full ${project.gradient} rounded-2xl relative overflow-hidden`}>
                  {/* Project Image Placeholder */}
                  <div className="absolute inset-4 bg-white/10 rounded-xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CodeIcon className="w-8 h-8" />
                      </div>
                      <div className="font-display text-xl font-bold">{project.title}</div>
                      <div className="text-white/80 text-sm">{project.year}</div>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="studio-portfolio-overlay">
                    <div className="text-center">
                      <h4 className="font-display text-2xl font-bold mb-2">{project.title}</h4>
                      <p className="text-lg mb-4">{project.subtitle}</p>
                      <p className="text-white/90 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-center gap-4">
                        <button className="studio-btn studio-btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                          <EyeIcon className="w-4 h-4" />
                          View Project
                        </button>
                        <button className="studio-btn studio-btn-outline text-white border-white hover:bg-white hover:text-gray-900">
                          <ExternalLinkIcon className="w-4 h-4" />
                          Live Site
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Like Button */}
                  <div className="absolute top-4 right-4 z-20">
                    <button
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                        project.isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      <HeartIcon className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Likes Count */}
                  <div className="absolute bottom-4 left-4 text-white/80 text-sm">❤️ {project.likes}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="studio-card p-2 inline-flex gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeFilter === category.id ? "studio-bg-gradient text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {category.name}
                <span className={`ml-2 text-xs ${activeFilter === category.id ? "text-white/80" : "text-gray-400"}`}>{category.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="studio-portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="studio-portfolio-item cursor-pointer group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-full h-full ${project.gradient} rounded-2xl relative overflow-hidden`}>
                {/* Project Image Placeholder */}
                <div className="absolute inset-4 bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CodeIcon className="w-6 h-6" />
                    </div>
                    <div className="font-display text-lg font-bold">{project.title}</div>
                    <div className="text-white/80 text-xs">{project.year}</div>
                  </div>
                </div>

                {/* Overlay */}
                <div className="studio-portfolio-overlay">
                  <div className="text-center">
                    <h4 className="font-display text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-lg mb-3">{project.subtitle}</p>
                    <p className="text-white/90 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center gap-3">
                      <button className="studio-btn studio-btn-outline studio-btn-small text-white border-white hover:bg-white hover:text-gray-900">
                        <EyeIcon className="w-4 h-4" />
                        View
                      </button>
                      <button className="studio-btn studio-btn-outline studio-btn-small text-white border-white hover:bg-white hover:text-gray-900">
                        <ExternalLinkIcon className="w-4 h-4" />
                        Live
                      </button>
                    </div>
                  </div>
                </div>

                {/* Like Button */}
                <div className="absolute top-3 right-3 z-20">
                  <button
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      project.isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
                    }`}
                  >
                    <HeartIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* Likes Count */}
                <div className="absolute bottom-3 left-3 text-white/80 text-xs">❤️ {project.likes}</div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="studio-badge studio-badge-outline text-white border-white text-xs">
                    {categories.find((cat) => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="studio-btn studio-btn-outline studio-btn-large">
            Load More Projects
            <ExternalLinkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="studio-card p-8 studio-bg-gradient">
            <div className="text-white">
              <h3 className="font-display text-3xl font-bold mb-6">Ready to Create Something Amazing?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's bring your vision to life with innovative design and cutting-edge technology.
              </p>
              <button className="studio-btn studio-btn-outline text-white border-white hover:bg-white hover:text-gray-900 studio-btn-large">
                Start Your Project
                <ExternalLinkIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
