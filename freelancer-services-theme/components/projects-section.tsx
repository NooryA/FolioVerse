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

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8m0 0v2a2 2 0 002 2h4a2 2 0 002-2V6m-8 0H8"
    />
  </svg>
);

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("recent");

  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with payment integration and admin dashboard",
      image: "🛒",
      result: "300% increase in online sales",
      client: "TechStart Inc.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "Web Application",
      description: "Analytics dashboard with real-time data visualization",
      image: "📊",
      result: "50% reduction in data analysis time",
      client: "DataFlow Solutions",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      year: "2024",
    },
    {
      id: 3,
      title: "Restaurant Website",
      category: "Web Development",
      description: "Modern restaurant website with online ordering system",
      image: "🍽️",
      result: "200% increase in online orders",
      client: "Bella Vista Restaurant",
      technologies: ["React", "Gatsby", "Contentful"],
      year: "2023",
    },
    {
      id: 4,
      title: "Creative Portfolio",
      category: "Design & Development",
      description: "Creative portfolio with smooth animations and gallery system",
      image: "🎨",
      result: "150% increase in client inquiries",
      client: "Sarah Design Studio",
      technologies: ["React", "Framer Motion", "Tailwind"],
      year: "2023",
    },
    {
      id: 5,
      title: "Mobile App Landing",
      category: "Landing Page",
      description: "High-converting landing page for mobile app",
      image: "📱",
      result: "85% conversion rate improvement",
      client: "FitTrack App",
      technologies: ["Next.js", "Tailwind", "Analytics"],
      year: "2023",
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Corporate",
      description: "Professional corporate website with CMS integration",
      image: "🏢",
      result: "400% increase in lead generation",
      client: "Global Solutions Ltd",
      technologies: ["WordPress", "PHP", "MySQL"],
      year: "2023",
    },
  ];

  const projectCategories = [
    { id: "recent", label: "Recent Work", count: 6 },
    { id: "featured", label: "Featured", count: 3 },
    { id: "ecommerce", label: "E-commerce", count: 2 },
    { id: "saas", label: "SaaS", count: 1 },
  ];

  const getFilteredProjects = () => {
    if (selectedCategory === "recent") return featuredProjects;
    if (selectedCategory === "featured") return featuredProjects.slice(0, 3);
    if (selectedCategory === "ecommerce") return featuredProjects.filter((p) => p.category === "Web Development");
    if (selectedCategory === "saas") return featuredProjects.filter((p) => p.category === "Web Application");
    return featuredProjects;
  };

  return (
    <section id="projects" className="freelancer-section freelancer-section-lg bg-gray-50">
      <div className="freelancer-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="freelancer-badge freelancer-badge-primary mb-4">
            <BriefcaseIcon className="w-4 h-4" />
            Recent Work
          </div>
          <h2 className="freelancer-heading text-4xl md:text-5xl mb-6">
            Featured <span className="freelancer-text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase different aspects of my skills and the results I deliver for clients.
          </p>
        </div>

        {/* Project Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-sm"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {getFilteredProjects().map((project, index) => (
            <div key={project.id} className="freelancer-card group cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="freelancer-card-content">
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                  <span className="text-4xl">{project.image}</span>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                      <ExternalLinkIcon className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                      <GithubIcon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">{project.category}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4" />
                      {project.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{project.title}</h3>

                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                  {/* Result Highlight */}
                  <div className="p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckIcon className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-700">{project.result}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">+{project.technologies.length - 3} more</span>
                    )}
                  </div>

                  {/* Client and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      Client: <span className="font-medium text-gray-700">{project.client}</span>
                    </div>
                    <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                      View Details
                      <ArrowRightIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Process */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            My Project <span className="freelancer-text-gradient">Process</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals, requirements, and target audience",
                icon: "🔍",
              },
              {
                step: "02",
                title: "Planning",
                description: "Strategic planning and technical architecture design",
                icon: "📋",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with modern technologies",
                icon: "⚡",
              },
              {
                step: "04",
                title: "Launch",
                description: "Testing, deployment, and ongoing support",
                icon: "🚀",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  {step.icon}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">{step.title}</div>
                <div className="text-sm text-indigo-600 font-semibold mb-3">Step {step.step}</div>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="freelancer-card">
            <div className="freelancer-card-content">
              <h3 className="freelancer-card-title mb-6">Project Results</h3>
              <div className="space-y-6">
                {[
                  { metric: "Average ROI", value: "250%", description: "Return on investment for clients" },
                  { metric: "Project Success Rate", value: "98%", description: "Projects delivered on time" },
                  { metric: "Client Retention", value: "85%", description: "Clients who return for more work" },
                  { metric: "Performance Improvement", value: "40%", description: "Average site speed increase" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{stat.value}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{stat.metric}</div>
                      <div className="text-sm text-gray-600">{stat.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="freelancer-card">
            <div className="freelancer-card-content">
              <h3 className="freelancer-card-title mb-6">What You Get</h3>
              <div className="space-y-4">
                {[
                  "Clean, modern design that reflects your brand",
                  "Mobile-responsive and cross-browser compatible",
                  "SEO optimized for better search rankings",
                  "Fast loading times and optimal performance",
                  "Secure and scalable architecture",
                  "Complete documentation and training",
                  "30 days of post-launch support included",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="freelancer-card max-w-2xl mx-auto">
            <div className="freelancer-card-content">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Start Your <span className="freelancer-text-gradient">Project?</span>
              </h3>
              <p className="text-xl text-gray-600 mb-8">
                Let's discuss your goals and create a solution that delivers real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="freelancer-btn freelancer-btn-primary freelancer-btn-large">Get Free Project Quote</button>
                <button className="freelancer-btn freelancer-btn-outline freelancer-btn-large">Schedule Discovery Call</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
