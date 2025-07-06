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

const LayersIcon = ({ className }: { className?: string }) => (
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

  const projects = [
    {
      id: 1,
      title: "Enterprise SaaS Design System",
      category: "enterprise",
      description: "Complete design system for B2B software platform with 150+ components and comprehensive documentation.",
      technologies: ["React", "Storybook", "Figma", "TypeScript"],
      metrics: { components: "150+", adoption: "95%", efficiency: "60%" },
      image: "🏢",
      status: "Live",
      timeline: "6 months",
    },
    {
      id: 2,
      title: "E-commerce Design Foundation",
      category: "ecommerce",
      description: "Scalable design system for multi-brand e-commerce platform supporting 10+ brands and millions of users.",
      technologies: ["Vue.js", "Design Tokens", "Sass", "Figma"],
      metrics: { components: "200+", adoption: "100%", efficiency: "75%" },
      image: "🛒",
      status: "Live",
      timeline: "8 months",
    },
    {
      id: 3,
      title: "Healthcare App Design System",
      category: "healthcare",
      description: "HIPAA-compliant design system with accessibility-first approach for healthcare applications.",
      technologies: ["React Native", "Web", "Accessibility", "WCAG 2.1"],
      metrics: { components: "80+", adoption: "85%", efficiency: "50%" },
      image: "🏥",
      status: "Live",
      timeline: "4 months",
    },
    {
      id: 4,
      title: "Banking Design Language",
      category: "fintech",
      description: "Secure and trustworthy design system for digital banking with advanced security considerations.",
      technologies: ["Angular", "Security", "Compliance", "Mobile"],
      metrics: { components: "120+", adoption: "90%", efficiency: "65%" },
      image: "🏦",
      status: "In Progress",
      timeline: "5 months",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "enterprise", label: "Enterprise" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "healthcare", label: "Healthcare" },
    { id: "fintech", label: "FinTech" },
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="ds-section ds-bg-white">
      <div className="ds-container">
        {/* Section Header */}
        <div className="ds-text-center ds-mb-16">
          <div className="ds-badge ds-badge-primary ds-mb-6">
            <LayersIcon className="w-4 h-4" />
            Design System Projects
          </div>
          <h2 className="ds-text-5xl ds-font-extrabold ds-text-gray-900 ds-mb-6">
            Real-World <span className="ds-text-primary-600">Implementations</span>
          </h2>
          <p className="ds-text-xl ds-text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of design systems across different industries, each tailored to specific needs while maintaining
            scalability and consistency.
          </p>
        </div>

        {/* Project Filters */}
        <div className="ds-flex ds-justify-center ds-mb-12">
          <div className="ds-flex ds-gap-2 p-1 ds-bg-gray-100 ds-rounded-xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 ds-rounded-lg ds-font-medium transition-all ${
                  activeFilter === category.id ? "ds-bg-primary-600 text-white" : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="ds-grid ds-grid-cols-1 lg:ds-grid-cols-2 ds-gap-8 ds-mb-16">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="ds-card group">
              <div className="ds-card-header">
                <div className="ds-flex ds-items-center ds-justify-between ds-mb-4">
                  <div className="ds-text-4xl">{project.image}</div>
                  <div className="ds-flex ds-gap-2">
                    <span className={`ds-badge ${project.status === "Live" ? "ds-badge-success" : "ds-badge-secondary"}`}>
                      {project.status}
                    </span>
                    <span className="ds-badge ds-badge-secondary">{project.timeline}</span>
                  </div>
                </div>
                <h3 className="ds-text-2xl ds-font-bold ds-text-gray-900 ds-mb-2">{project.title}</h3>
                <p className="ds-text-gray-600">{project.description}</p>
              </div>

              <div className="ds-card-body">
                {/* Technologies */}
                <div className="ds-mb-6">
                  <h4 className="ds-font-semibold ds-text-gray-900 ds-mb-3">Technologies</h4>
                  <div className="ds-flex ds-gap-2 flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="ds-badge ds-badge-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="ds-mb-6">
                  <h4 className="ds-font-semibold ds-text-gray-900 ds-mb-3">Impact Metrics</h4>
                  <div className="ds-grid ds-grid-cols-3 ds-gap-4">
                    <div className="ds-text-center">
                      <div className="ds-text-2xl ds-font-bold ds-text-primary-600">{project.metrics.components}</div>
                      <div className="ds-text-sm ds-text-gray-600">Components</div>
                    </div>
                    <div className="ds-text-center">
                      <div className="ds-text-2xl ds-font-bold ds-text-primary-600">{project.metrics.adoption}</div>
                      <div className="ds-text-sm ds-text-gray-600">Adoption</div>
                    </div>
                    <div className="ds-text-center">
                      <div className="ds-text-2xl ds-font-bold ds-text-primary-600">{project.metrics.efficiency}</div>
                      <div className="ds-text-sm ds-text-gray-600">Efficiency</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ds-card-footer">
                <button className="ds-btn ds-btn-primary ds-w-full group-hover:ds-bg-primary-700">
                  <ExternalLinkIcon className="w-5 h-5" />
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Impact */}
        <div className="ds-grid ds-grid-cols-2 md:ds-grid-cols-4 ds-gap-8 ds-text-center">
          {[
            { value: "500+", label: "Components Built", description: "Across all projects" },
            { value: "92%", label: "Avg. Adoption Rate", description: "Team adoption" },
            { value: "65%", label: "Development Speed", description: "Improvement" },
            { value: "15+", label: "Different Industries", description: "Systems delivered" },
          ].map((stat, index) => (
            <div key={index}>
              <div className="ds-text-4xl ds-font-extrabold ds-text-primary-600 ds-mb-2">{stat.value}</div>
              <div className="ds-font-semibold ds-text-gray-900 ds-mb-1">{stat.label}</div>
              <div className="ds-text-sm ds-text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
