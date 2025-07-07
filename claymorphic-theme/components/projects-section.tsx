"use client";

import { useState } from "react";

// Inline SVG Icons
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

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const FolderIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      image: "🛍️",
      status: "Live",
      year: "2024",
      links: {
        live: "https://ecommerce-demo.com",
        github: "https://github.com/username/ecommerce",
      },
      stats: { users: "10K+", performance: "95%", uptime: "99.9%" },
    },
    {
      id: 2,
      title: "AI Chat Assistant",
      category: "ai",
      description: "Intelligent chatbot with natural language processing and context awareness for customer support.",
      technologies: ["Python", "OpenAI API", "FastAPI", "React", "Docker"],
      image: "🤖",
      status: "Live",
      year: "2024",
      links: {
        live: "https://chat-assistant-demo.com",
        github: "https://github.com/username/ai-chat",
      },
      stats: { users: "5K+", performance: "92%", accuracy: "88%" },
    },
    {
      id: 3,
      title: "Project Management Tool",
      category: "web",
      description: "Collaborative project management with real-time updates, kanban boards, and team analytics.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "TailwindCSS"],
      image: "📊",
      status: "Live",
      year: "2023",
      links: {
        live: "https://project-tool-demo.com",
        github: "https://github.com/username/project-tool",
      },
      stats: { users: "8K+", performance: "94%", teams: "500+" },
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      category: "mobile",
      description: "React Native fitness tracking app with workout plans, progress monitoring, and social features.",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      image: "💪",
      status: "In Development",
      year: "2024",
      links: {
        github: "https://github.com/username/fitness-app",
      },
      stats: { downloads: "2K+", rating: "4.8★", features: "50+" },
    },
    {
      id: 5,
      title: "Design System Library",
      category: "design",
      description: "Comprehensive design system with 100+ components, documentation, and design tokens.",
      technologies: ["React", "Storybook", "TypeScript", "Figma"],
      image: "🎨",
      status: "Open Source",
      year: "2024",
      links: {
        live: "https://design-system-demo.com",
        github: "https://github.com/username/design-system",
      },
      stats: { components: "100+", downloads: "15K", stars: "250" },
    },
    {
      id: 6,
      title: "Blockchain Explorer",
      category: "web3",
      description: "Cryptocurrency blockchain explorer with transaction tracking and wallet analytics.",
      technologies: ["React", "Web3.js", "Node.js", "Chart.js"],
      image: "⛓️",
      status: "Live",
      year: "2023",
      links: {
        live: "https://blockchain-explorer-demo.com",
        github: "https://github.com/username/blockchain-explorer",
      },
      stats: { transactions: "1M+", networks: "5", users: "12K+" },
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Apps", count: projects.filter((p) => p.category === "web").length },
    { id: "mobile", label: "Mobile", count: projects.filter((p) => p.category === "mobile").length },
    { id: "ai", label: "AI/ML", count: projects.filter((p) => p.category === "ai").length },
    { id: "design", label: "Design", count: projects.filter((p) => p.category === "design").length },
    { id: "web3", label: "Web3", count: projects.filter((p) => p.category === "web3").length },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "clay-status-live";
      case "In Development":
        return "clay-status-dev";
      case "Open Source":
        return "clay-status-open";
      default:
        return "clay-status-default";
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case "all":
        return "✨";
      case "web":
        return "🌐";
      case "mobile":
        return "📱";
      case "ai":
        return "🤖";
      case "design":
        return "🎨";
      case "web3":
        return "⛓️";
      default:
        return "💫";
    }
  };

  const getCategoryDescription = (categoryId: string) => {
    switch (categoryId) {
      case "all":
        return "Explore the complete spectrum of my digital creations across all technologies and platforms.";
      case "web":
        return "Dynamic web applications built with modern frameworks and cutting-edge technologies.";
      case "mobile":
        return "Native and cross-platform mobile experiences that delight users on every device.";
      case "ai":
        return "Intelligent solutions powered by machine learning and artificial intelligence.";
      case "design":
        return "Visual masterpieces that blend aesthetics with functionality and user experience.";
      case "web3":
        return "Decentralized applications exploring the future of blockchain and cryptocurrency.";
      default:
        return "Discover amazing projects that push the boundaries of what's possible.";
    }
  };

  return (
    <section id="projects" className="clay-section clay-section-alt">
      <div className="clay-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="clay-creative-badge mb-8">
            <div className="clay-badge-icon">🚀</div>
            <span>Digital Playground</span>
          </div>
          <h2 className="clay-heading text-6xl md:text-7xl mb-8">
            My Creative <span className="clay-text-gradient">Universe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Welcome to my digital playground where imagination meets innovation. Each project is a unique journey through different
            technologies and creative challenges. Explore the realms of my work...
          </p>
        </div>

        {/* Creative Project Navigation */}
        <div className="clay-creative-nav mb-20">
          <div className="clay-nav-orb-container">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`clay-nav-orb ${activeFilter === category.id ? "active" : ""}`}
                onClick={() => setActiveFilter(category.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="clay-orb-content">
                  <div className="clay-orb-icon">{getCategoryIcon(category.id)}</div>
                  <div className="clay-orb-label">{category.label}</div>
                  <div className="clay-orb-count">{category.count}</div>
                </div>
                <div className="clay-orb-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="clay-projects-grid mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="clay-project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Icon */}
              <div className="clay-project-image">
                <div className="text-6xl">{project.image}</div>
                <div className={`clay-project-status ${getStatusColor(project.status)}`}>{project.status}</div>
              </div>

              {/* Project Info */}
              <div className="clay-project-info">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="clay-project-title">{project.title}</h3>
                  <span className="clay-project-year">{project.year}</span>
                </div>

                <p className="clay-project-description">{project.description}</p>

                {/* Technologies */}
                <div className="clay-project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="clay-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Stats */}
                <div className="clay-project-stats">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="clay-stat">
                      <div className="clay-stat-value">{value}</div>
                      <div className="clay-stat-label">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="clay-project-links">
                  {project.links.live && (
                    <a href={project.links.live} className="clay-project-link">
                      <ExternalLinkIcon className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} className="clay-project-link">
                      <GithubIcon className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              {hoveredProject === project.id && (
                <div className="clay-project-overlay">
                  <button className="clay-btn clay-btn-white">View Details</button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="clay-portfolio-stats">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50+", label: "Projects Completed", icon: "🚀" },
              { value: "25+", label: "Happy Clients", icon: "😊" },
              { value: "5+", label: "Years Experience", icon: "⏰" },
              { value: "100%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <div key={index} className="clay-stat-card">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="clay-stat-number">{stat.value}</div>
                <div className="clay-stat-text">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
