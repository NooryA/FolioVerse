"use client";

import React, { useState, useEffect } from "react";
import { ExternalLink, Github, Code, Database, Smartphone, Globe, Zap, Eye, Star, GitBranch, X, Trophy } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  github: string;
  demo: string;
  features: string[];
  challenges: string[];
  results: string[];
  year: string;
  status: "Completed" | "In Progress" | "Maintained";
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<Set<string>>(new Set());

  const projects: Project[] = [
    {
      id: "cyber-ecommerce",
      title: "CyberCommerce Platform",
      description: "Full-stack e-commerce platform with cyberpunk aesthetics and real-time features",
      longDescription:
        "A cutting-edge e-commerce platform built with Next.js 14, featuring a cyberpunk-inspired design, real-time inventory management, and advanced user analytics. The platform includes a complete admin dashboard, payment integration, and AI-powered product recommendations.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis", "WebSocket"],
      category: "Full Stack",
      github: "https://github.com/username/cyber-ecommerce",
      demo: "https://cyber-ecommerce.demo.com",
      features: [
        "Real-time inventory management",
        "AI-powered recommendations",
        "Advanced analytics dashboard",
        "Payment gateway integration",
        "Multi-vendor support",
        "Mobile-responsive design",
      ],
      challenges: [
        "Implementing real-time inventory sync across multiple vendors",
        "Optimizing database queries for high-traffic scenarios",
        "Creating responsive cyberpunk UI components",
      ],
      results: ["40% increase in conversion rate", "60% reduction in loading times", "99.9% uptime achieved"],
      year: "2023",
      status: "Completed",
    },
    {
      id: "neural-dashboard",
      title: "Neural Analytics Dashboard",
      description: "AI-powered analytics dashboard with real-time data visualization",
      longDescription:
        "An advanced analytics dashboard that uses machine learning to provide insights on user behavior, sales patterns, and business metrics. Built with React and D3.js for interactive visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Python", "TensorFlow", "FastAPI", "Docker"],
      category: "Frontend",
      github: "https://github.com/username/neural-dashboard",
      demo: "https://neural-dashboard.demo.com",
      features: [
        "Real-time data visualization",
        "Machine learning predictions",
        "Interactive charts and graphs",
        "Custom alert system",
        "Export functionality",
        "Team collaboration tools",
      ],
      challenges: [
        "Handling large datasets efficiently",
        "Creating smooth animations for real-time updates",
        "Implementing complex mathematical visualizations",
      ],
      results: ["Reduced analysis time by 70%", "Improved decision-making speed", "Enhanced user engagement"],
      year: "2023",
      status: "Maintained",
    },
    {
      id: "quantum-chat",
      title: "Quantum Chat App",
      description: "Secure messaging app with end-to-end encryption and quantum-resistant algorithms",
      longDescription:
        "A secure messaging application featuring end-to-end encryption, quantum-resistant cryptography, and real-time communication. Built with React Native for cross-platform compatibility.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Node.js", "Socket.io", "MongoDB", "Cryptography"],
      category: "Mobile",
      github: "https://github.com/username/quantum-chat",
      demo: "https://quantum-chat.demo.com",
      features: [
        "End-to-end encryption",
        "Quantum-resistant algorithms",
        "Real-time messaging",
        "File sharing",
        "Voice and video calls",
        "Cross-platform support",
      ],
      challenges: [
        "Implementing quantum-resistant cryptography",
        "Optimizing for mobile performance",
        "Ensuring message delivery reliability",
      ],
      results: ["100% message delivery rate", "Military-grade security", "50k+ active users"],
      year: "2022",
      status: "Completed",
    },
    {
      id: "blockchain-voting",
      title: "Blockchain Voting System",
      description: "Decentralized voting platform using blockchain technology for transparency",
      longDescription:
        "A secure, transparent voting system built on blockchain technology. Features smart contracts for vote validation, immutable vote records, and real-time result tracking.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
      category: "Blockchain",
      github: "https://github.com/username/blockchain-voting",
      demo: "https://blockchain-voting.demo.com",
      features: [
        "Smart contract validation",
        "Immutable vote records",
        "Real-time results",
        "Voter authentication",
        "Audit trail",
        "Mobile-friendly interface",
      ],
      challenges: [
        "Ensuring vote privacy while maintaining transparency",
        "Optimizing gas costs for transactions",
        "Creating intuitive blockchain interactions",
      ],
      results: ["100% vote integrity", "Zero manipulation attempts", "Transparent election process"],
      year: "2022",
      status: "Completed",
    },
    {
      id: "ai-code-assistant",
      title: "AI Code Assistant",
      description: "AI-powered code completion and debugging tool for developers",
      longDescription:
        "An intelligent code assistant that provides real-time code suggestions, bug detection, and optimization recommendations. Uses advanced machine learning models trained on millions of code repositories.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
      technologies: ["Python", "TensorFlow", "OpenAI", "VS Code API", "Docker", "Kubernetes"],
      category: "AI/ML",
      github: "https://github.com/username/ai-code-assistant",
      demo: "https://ai-code-assistant.demo.com",
      features: [
        "Real-time code completion",
        "Bug detection and fixing",
        "Performance optimization",
        "Code refactoring suggestions",
        "Multi-language support",
        "IDE integration",
      ],
      challenges: ["Training models on diverse codebases", "Reducing inference latency", "Handling edge cases in code analysis"],
      results: ["45% faster coding speed", "70% reduction in bugs", "10k+ developer downloads"],
      year: "2023",
      status: "In Progress",
    },
    {
      id: "cyber-portfolio",
      title: "Cyberpunk Portfolio",
      description: "This portfolio website with stunning cyberpunk aesthetics and animations",
      longDescription:
        "A modern portfolio website showcasing cyberpunk aesthetics with smooth animations, interactive elements, and responsive design. Built with Next.js 14 and featuring custom CSS animations and effects.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
      category: "Frontend",
      github: "https://github.com/username/cyber-portfolio",
      demo: "https://cyber-portfolio.demo.com",
      features: [
        "Cyberpunk-inspired design",
        "Smooth animations",
        "Responsive layout",
        "Interactive elements",
        "Performance optimized",
        "SEO friendly",
      ],
      challenges: [
        "Creating complex CSS animations",
        "Optimizing performance with heavy animations",
        "Ensuring cross-browser compatibility",
      ],
      results: ["Perfect Lighthouse scores", "Increased portfolio views by 200%", "Featured in design showcases"],
      year: "2024",
      status: "Completed",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects((prev) => {
              const newSet = new Set(prev);
              newSet.add(entry.target.id);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectElements = document.querySelectorAll("[data-project-card]");
    projectElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [projects]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="projects" className="py-20 bg-cyber-dark/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-secondary/5 via-transparent to-cyber-accent/5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-secondary to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-8xl font-bold font-cyber mb-6 relative">
            <span className="cyber-text block animate-pulse-neon">DIGITAL</span>
            <span className="text-white block relative">
              <span className="absolute inset-0 text-cyber-secondary opacity-70 animate-glitch" data-text="ARSENAL">
                ARSENAL
              </span>
              <span
                className="absolute inset-0 text-cyber-accent opacity-50 animate-glitch"
                data-text="ARSENAL"
                style={{ animationDelay: "0.1s" }}
              >
                ARSENAL
              </span>
              ARSENAL
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-jetbrains">
            <span className="text-cyber-primary">&gt;</span> Explore my digital creations - from cutting-edge web applications to AI-powered
            solutions that push the boundaries of technology.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.id}
              data-project-card
              className={`group relative cyber-border bg-cyber-dark/50 backdrop-blur-sm rounded-lg overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer ${
                visibleProjects.has(project.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => openModal(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60"></div>

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === "Completed"
                      ? "bg-cyber-primary text-cyber-dark"
                      : project.status === "In Progress"
                      ? "bg-cyber-secondary text-white"
                      : "bg-cyber-accent text-white"
                  }`}
                >
                  {project.status}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-cyber-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <Eye size={32} className="text-cyber-dark mx-auto mb-2" />
                    <span className="text-cyber-dark font-bold">View Details</span>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-cyber-accent">{project.year}</span>
                </div>

                <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-cyber-secondary/20 text-cyber-secondary text-xs rounded border border-cyber-secondary/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">+{project.technologies.length - 3} more</span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-400 hover:text-cyber-primary transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-1 text-gray-400 hover:text-cyber-accent transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none cyber-glow"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto cyber-border bg-cyber-dark/95 backdrop-blur-sm rounded-lg">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-cyber-primary/20 hover:bg-cyber-primary/30 rounded-full transition-colors duration-300"
            >
              <X size={24} className="text-cyber-primary" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="md:w-1/2">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-lg" />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl font-bold font-cyber text-white mb-2">{selectedProject.title}</h3>
                  <p className="text-cyber-primary mb-4">
                    {selectedProject.category} • {selectedProject.year}
                  </p>
                  <p className="text-gray-300 mb-6">{selectedProject.longDescription}</p>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-cyber-primary/20 hover:bg-cyber-primary/30 text-cyber-primary px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-cyber-secondary/20 hover:bg-cyber-secondary/30 text-cyber-secondary px-4 py-2 rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-cyber-primary mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-cyber-accent/20 text-cyber-accent rounded-lg border border-cyber-accent/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features, Challenges, Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-cyber-primary mb-3 flex items-center">
                    <Star size={20} className="mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-cyber-primary mr-2">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-cyber-secondary mb-3 flex items-center">
                    <Zap size={20} className="mr-2" />
                    Challenges
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-cyber-secondary mr-2">▶</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-cyber-accent mb-3 flex items-center">
                    <Trophy size={20} className="mr-2" />
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="text-cyber-accent mr-2">▶</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
