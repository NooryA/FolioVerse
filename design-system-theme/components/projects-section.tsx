"use client";

import React, { useState, useEffect } from "react";

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

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-4a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
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

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "A comprehensive analytics dashboard built with our design system tokens and components",
      image: "/api/placeholder/600/400",
      category: "Web Application",
      tags: ["React", "TypeScript", "Design Tokens"],
      metrics: { users: "10K+", satisfaction: "98%", efficiency: "40%" },
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-100 to-cyan-100",
      features: ["Real-time Analytics", "Responsive Design", "Accessibility AA"],
      github: "#",
      live: "#",
      case_study: "#",
    },
    {
      title: "E-commerce Platform",
      description: "Modern shopping experience showcasing our component library and consistent design patterns",
      image: "/api/placeholder/600/400",
      category: "E-commerce",
      tags: ["Next.js", "Components", "Patterns"],
      metrics: { users: "25K+", satisfaction: "96%", efficiency: "35%" },
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-100 to-pink-100",
      features: ["Mobile-First", "Payment Integration", "User Experience"],
      github: "#",
      live: "#",
      case_study: "#",
    },
    {
      title: "Design System Documentation",
      description: "Interactive documentation site built using our own design system principles and guidelines",
      image: "/api/placeholder/600/400",
      category: "Documentation",
      tags: ["Documentation", "Interactive", "Guidelines"],
      metrics: { users: "5K+", satisfaction: "99%", efficiency: "60%" },
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-100 to-emerald-100",
      features: ["Live Examples", "Code Snippets", "Best Practices"],
      github: "#",
      live: "#",
      case_study: "#",
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive banking interface demonstrating our accessibility-first approach",
      image: "/api/placeholder/600/400",
      category: "Mobile App",
      tags: ["React Native", "Security", "Accessibility"],
      metrics: { users: "50K+", satisfaction: "97%", efficiency: "45%" },
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-100 to-red-100",
      features: ["Biometric Auth", "Dark Mode", "Offline Support"],
      github: "#",
      live: "#",
      case_study: "#",
    },
    {
      title: "SaaS Admin Panel",
      description: "Scalable admin interface built with modular components and systematic design approach",
      image: "/api/placeholder/600/400",
      category: "SaaS Platform",
      tags: ["Vue.js", "Admin Panel", "Scalability"],
      metrics: { users: "15K+", satisfaction: "95%", efficiency: "50%" },
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-100 to-purple-100",
      features: ["Role Management", "Data Visualization", "API Integration"],
      github: "#",
      live: "#",
      case_study: "#",
    },
    {
      title: "Creative Portfolio",
      description: "Artist portfolio showcasing creative use of our design system for unique brand expression",
      image: "/api/placeholder/600/400",
      category: "Portfolio",
      tags: ["Creative", "Portfolio", "Branding"],
      metrics: { users: "8K+", satisfaction: "100%", efficiency: "30%" },
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-100 to-rose-100",
      features: ["Creative Layouts", "Animation", "Brand Consistency"],
      github: "#",
      live: "#",
      case_study: "#",
    },
  ];

  const categories = ["All", "Web Application", "E-commerce", "Documentation", "Mobile App", "SaaS Platform", "Portfolio"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50/30">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-pattern opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-32 left-16 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 animate-float"></div>
        <div
          className="absolute top-20 right-32 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/3 w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 ds-container">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-8 animate-pulse-slow">
            <LayersIcon className="w-4 h-4" />
            Project Showcases
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 mb-8 leading-tight">
            Design Systems{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">In Action</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-bounce-in"></div>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our <span className="font-bold text-purple-600">systematic approach</span> creates{" "}
            <span className="font-bold text-pink-600">exceptional experiences</span> across diverse digital products.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-2 border border-white/20 shadow-xl">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Project */}
        <div className="mb-24">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${projects[activeProject].gradient} opacity-90`}></div>
                <div className="relative z-10 p-12 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                      <LayersIcon className="w-16 h-16" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Featured Project</h3>
                    <p className="text-lg opacity-90">{projects[activeProject].category}</p>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-12">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${projects[activeProject].gradient} text-white rounded-full text-sm font-semibold`}
                    >
                      {projects[activeProject].category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">{projects[activeProject].title}</h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-6">{projects[activeProject].description}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeProject].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl text-sm font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{projects[activeProject].metrics.users}</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">{projects[activeProject].metrics.satisfaction}</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">+{projects[activeProject].metrics.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <EyeIcon className="w-5 h-5" />
                    View Live
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl font-semibold border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                    <CodeIcon className="w-5 h-5" />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl font-semibold border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                    <ExternalLinkIcon className="w-5 h-5" />
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeProject === index ? "bg-gradient-to-r from-purple-600 to-pink-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Project Image/Placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <LayersIcon className="w-12 h-12 mx-auto mb-2" />
                    <span className="text-sm font-semibold">{project.category}</span>
                  </div>
                </div>

                {/* Overlay Actions */}
                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredCard === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                    <CodeIcon className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300">
                    <ExternalLinkIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-semibold mb-3`}
                  >
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{project.description}</p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{project.metrics.users}</div>
                    <div className="text-xs text-gray-500">Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-pink-600">{project.metrics.satisfaction}</div>
                    <div className="text-xs text-gray-500">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">+{project.metrics.efficiency}</div>
                    <div className="text-xs text-gray-500">Speed</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-white/80 border border-purple-200 text-gray-600 px-2 py-1 rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 max-w-4xl mx-auto p-12">
            <SparklesIcon className="w-20 h-20 text-purple-600 mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Something Amazing?</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's collaborate to create your next <span className="font-bold text-purple-600">groundbreaking project</span> using our
              proven design system.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <HeartIcon className="w-6 h-6" />
                  Start Your Project
                </span>
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold text-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
