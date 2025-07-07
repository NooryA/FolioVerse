"use client";

import React, { useState } from "react";

// Simple inline icons
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

const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "dashboard", label: "Dashboards" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "Financial Dashboard",
      description: "Comprehensive design system for a modern financial platform with advanced data visualization and user management.",
      category: "dashboard",
      image: "/api/placeholder/400/300",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      date: "2024",
      status: "Completed",
      features: ["150+ Components", "Dark/Light Mode", "Mobile Responsive", "Accessibility"],
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Complete design system for a scalable e-commerce platform with product management, cart functionality, and payment integration.",
      category: "ecommerce",
      image: "/api/placeholder/400/300",
      tags: ["Vue.js", "Nuxt.js", "Sass", "Stripe"],
      date: "2024",
      status: "Completed",
      features: ["200+ Components", "Multi-language", "PWA Ready", "SEO Optimized"],
    },
    {
      id: 3,
      title: "Healthcare Mobile App",
      description:
        "Patient-centered design system for a healthcare application with appointment scheduling, medical records, and telemedicine features.",
      category: "mobile",
      image: "/api/placeholder/400/300",
      tags: ["React Native", "TypeScript", "Expo", "Firebase"],
      date: "2023",
      status: "Completed",
      features: ["100+ Components", "Cross-platform", "HIPAA Compliant", "Offline Support"],
    },
    {
      id: 4,
      title: "SaaS Web Application",
      description: "Modular design system for a B2B SaaS platform with user management, analytics, and integration capabilities.",
      category: "web",
      image: "/api/placeholder/400/300",
      tags: ["Next.js", "React", "Styled Components", "GraphQL"],
      date: "2023",
      status: "In Progress",
      features: ["120+ Components", "API Integration", "Real-time Updates", "Role-based Access"],
    },
    {
      id: 5,
      title: "Creative Portfolio",
      description:
        "Artistic design system for creative professionals with portfolio showcases, client management, and project collaboration tools.",
      category: "web",
      image: "/api/placeholder/400/300",
      tags: ["Gatsby", "React", "Framer Motion", "Contentful"],
      date: "2023",
      status: "Completed",
      features: ["80+ Components", "Animation Library", "CMS Integration", "Performance Optimized"],
    },
    {
      id: 6,
      title: "Analytics Dashboard",
      description: "Data-driven design system for business intelligence with interactive charts, reports, and customizable dashboards.",
      category: "dashboard",
      image: "/api/placeholder/400/300",
      tags: ["Angular", "TypeScript", "D3.js", "Material UI"],
      date: "2024",
      status: "In Progress",
      features: ["180+ Components", "Custom Charts", "Export Features", "Real-time Data"],
    },
  ];

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of design systems and the impact they've made for businesses and users.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id ? "bg-blue-600 text-white shadow-md" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              {/* Project Image */}
              <div className="relative h-44 bg-gray-100 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <PaletteIcon className="w-14 h-14 text-gray-400" />
                </div>
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center gap-2 text-gray-500">
                    <CalendarIcon className="w-4 h-4" />
                    <span className="text-xs">{project.date}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-3 line-clamp-3 text-sm">{project.description}</p>

                {/* Features */}
                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs font-medium text-gray-700">Key Features</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, index) => (
                      <div key={index} className="text-xs text-gray-600 flex items-center gap-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TagIcon className="w-4 h-4 text-gray-500" />
                    <span className="text-xs font-medium text-gray-700">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                    <CodeIcon className="w-4 h-4" />
                    View Details
                  </button>
                  <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <ExternalLinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-10">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-200">
            View All Projects
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Project Impact</h3>
            <p className="text-lg text-gray-600">Real results from our design system implementations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">65%</div>
              <div className="text-gray-600 text-sm">Development Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Components Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
