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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const TagIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  </svg>
);

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "web",
      description: "Full-stack e-commerce solution with modern design, payment integration, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "3 months",
      year: "2024",
      stats: { views: "2.5k", likes: "150", stars: "45" },
      features: ["Payment Processing", "Admin Dashboard", "Mobile Responsive", "SEO Optimized"],
      testimonial: "Alex delivered beyond expectations. The platform increased our sales by 40%.",
      client: "TechStart Inc.",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "saas",
      description: "Analytics dashboard for SaaS companies with real-time data visualization and user management.",
      image: "📊",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Charts.js"],
      duration: "2 months",
      year: "2024",
      stats: { views: "1.8k", likes: "120", stars: "38" },
      features: ["Real-time Analytics", "User Management", "API Integration", "Dark Mode"],
      testimonial: "The dashboard transformed how we understand our customers.",
      client: "DataFlow Solutions",
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "web",
      description: "Modern restaurant website with online ordering, reservation system, and CMS integration.",
      image: "🍽️",
      technologies: ["React", "Gatsby", "Contentful", "Stripe"],
      duration: "1.5 months",
      year: "2023",
      stats: { views: "3.2k", likes: "200", stars: "62" },
      features: ["Online Ordering", "Reservation System", "Menu Management", "Location Integration"],
      testimonial: "Our online orders increased by 200% after the new website launch.",
      client: "Bella Vista Restaurant",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "design",
      description: "Creative portfolio website for a graphic designer with smooth animations and gallery system.",
      image: "🎨",
      technologies: ["React", "Framer Motion", "Tailwind", "Sanity"],
      duration: "3 weeks",
      year: "2023",
      stats: { views: "1.5k", likes: "95", stars: "28" },
      features: ["Smooth Animations", "Gallery System", "Contact Forms", "Blog Integration"],
      testimonial: "The website perfectly represents my brand and attracts quality clients.",
      client: "Sarah Design Studio",
    },
    {
      id: 5,
      title: "Mobile App Landing",
      category: "mobile",
      description: "High-converting landing page for a mobile app with app store integration and analytics.",
      image: "📱",
      technologies: ["Next.js", "Tailwind", "Framer Motion", "Analytics"],
      duration: "2 weeks",
      year: "2023",
      stats: { views: "4.1k", likes: "280", stars: "75" },
      features: ["App Store Links", "Download Tracking", "Performance Optimized", "A/B Testing"],
      testimonial: "The landing page doubled our app downloads in the first month.",
      client: "FitTrack App",
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "corporate",
      description: "Professional corporate website with CMS, multi-language support, and SEO optimization.",
      image: "🏢",
      technologies: ["WordPress", "PHP", "MySQL", "SEO Tools"],
      duration: "2 months",
      year: "2023",
      stats: { views: "2.8k", likes: "165", stars: "52" },
      features: ["Multi-language", "CMS Integration", "SEO Optimized", "Contact Forms"],
      testimonial: "Our online presence is now professional and generates quality leads.",
      client: "Global Solutions Ltd",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "web", label: "Web Apps", count: projects.filter((p) => p.category === "web").length },
    { id: "saas", label: "SaaS", count: projects.filter((p) => p.category === "saas").length },
    { id: "mobile", label: "Mobile", count: projects.filter((p) => p.category === "mobile").length },
    { id: "design", label: "Design", count: projects.filter((p) => p.category === "design").length },
    { id: "corporate", label: "Corporate", count: projects.filter((p) => p.category === "corporate").length },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="freelancer-section freelancer-section-lg bg-gray-50">
      <div className="freelancer-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="freelancer-badge freelancer-badge-primary mb-4">
            <EyeIcon className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="freelancer-heading text-4xl md:text-5xl mb-6">
            Recent <span className="freelancer-text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at some of my recent work. Each project represents a unique challenge and showcases different aspects of my skills.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="freelancer-portfolio-grid mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="freelancer-portfolio-item"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="freelancer-portfolio-image">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>

                {/* Hover Overlay */}
                <div className="freelancer-portfolio-overlay">
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                      <ExternalLinkIcon className="w-6 h-6 text-white" />
                    </button>
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                      <GithubIcon className="w-6 h-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Stats */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold">{project.stats.stars}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="freelancer-portfolio-content">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="freelancer-portfolio-title">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <div className="freelancer-portfolio-category mb-3">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)} • {project.duration}
                </div>

                <p className="freelancer-portfolio-description mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Client Testimonial */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-600 italic mb-2">"{project.testimonial}"</p>
                  <div className="text-xs text-gray-500">- {project.client}</div>
                </div>

                {/* Project Stats */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <EyeIcon className="w-4 h-4" />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4" />
                      <span>{project.stats.likes}</span>
                    </div>
                  </div>
                  <button className="freelancer-btn freelancer-btn-primary freelancer-btn-small">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { label: "Projects Completed", value: "150+", description: "Successful deliveries" },
            { label: "Client Satisfaction", value: "98%", description: "Happy clients" },
            { label: "Average Timeline", value: "6 weeks", description: "From start to finish" },
            { label: "Technologies Used", value: "25+", description: "Modern tech stack" },
          ].map((stat, index) => (
            <div key={index} className="freelancer-card text-center">
              <div className="freelancer-card-content">
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="freelancer-card max-w-2xl mx-auto">
            <div className="freelancer-card-content">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your <span className="freelancer-text-gradient">Next Project?</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8">Let's discuss your requirements and create something amazing together.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="freelancer-btn freelancer-btn-primary freelancer-btn-large">Get Project Quote</button>
                <button className="freelancer-btn freelancer-btn-outline freelancer-btn-large">Schedule a Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
