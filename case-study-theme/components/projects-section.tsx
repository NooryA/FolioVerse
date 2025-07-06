"use client";

import { useState } from "react";
import { ExternalLink, Github, BarChart3, Users, Clock, ArrowRight, Filter, Search, TrendingUp, Award, Target, Zap } from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Projects", count: 12 },
    { id: "design", name: "UX Design", count: 5 },
    { id: "development", name: "Development", count: 4 },
    { id: "strategy", name: "Strategy", count: 3 },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      subtitle: "Complete digital transformation for retail giant",
      description:
        "Led a comprehensive redesign of a major e-commerce platform, focusing on user experience optimization and conversion rate improvement. The project resulted in a 67% increase in conversion rate and 45% improvement in user engagement.",
      category: "design",
      duration: "6 months",
      team: "8 people",
      image: "/api/placeholder/400/300",
      tags: ["UX Design", "E-Commerce", "Analytics", "A/B Testing"],
      metrics: [
        { value: "67%", label: "Conversion Rate Increase", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "45%", label: "User Engagement", icon: <Users className="w-4 h-4" /> },
        { value: "89%", label: "User Satisfaction", icon: <Award className="w-4 h-4" /> },
        { value: "2.3M", label: "Revenue Impact", icon: <Target className="w-4 h-4" /> },
      ],
      timeline: [
        { phase: "Research", duration: "2 weeks", description: "User research, competitor analysis, and stakeholder interviews" },
        { phase: "Design", duration: "8 weeks", description: "Wireframing, prototyping, and design system development" },
        { phase: "Testing", duration: "4 weeks", description: "Usability testing, A/B testing, and iteration" },
        { phase: "Launch", duration: "2 weeks", description: "Deployment, monitoring, and optimization" },
      ],
      challenge:
        "The existing platform had a 2.3% conversion rate and high bounce rate due to poor user experience and confusing navigation.",
      solution:
        "Implemented a user-centered design approach with extensive research, created a new design system, and optimized the checkout process.",
      results: "67% increase in conversion rate, 45% improvement in user engagement, and $2.3M additional revenue in the first quarter.",
      technologies: ["Figma", "React", "TypeScript", "Next.js", "TailwindCSS"],
      client: "RetailCorp",
      year: "2023",
    },
    {
      id: 2,
      title: "SaaS Dashboard Optimization",
      subtitle: "Streamlining complex data visualization",
      description:
        "Redesigned a complex SaaS dashboard to improve user onboarding and feature adoption. The project involved extensive user research and iterative design to create an intuitive data visualization experience.",
      category: "design",
      duration: "4 months",
      team: "5 people",
      image: "/api/placeholder/400/300",
      tags: ["SaaS", "Data Visualization", "User Research", "Analytics"],
      metrics: [
        { value: "50%", label: "Onboarding Time Reduction", icon: <Clock className="w-4 h-4" /> },
        { value: "73%", label: "Feature Adoption", icon: <Zap className="w-4 h-4" /> },
        { value: "92%", label: "User Retention", icon: <Users className="w-4 h-4" /> },
        { value: "4.8/5", label: "User Rating", icon: <Award className="w-4 h-4" /> },
      ],
      timeline: [
        { phase: "Analysis", duration: "1 week", description: "Current state analysis and user journey mapping" },
        { phase: "Research", duration: "3 weeks", description: "User interviews, surveys, and usability testing" },
        { phase: "Design", duration: "6 weeks", description: "Information architecture and interface design" },
        { phase: "Implementation", duration: "6 weeks", description: "Development support and quality assurance" },
      ],
      challenge: "Users were struggling with the complex dashboard interface, leading to high churn rates and low feature adoption.",
      solution:
        "Simplified the information architecture, created progressive disclosure patterns, and implemented contextual help systems.",
      results: "50% reduction in onboarding time, 73% increase in feature adoption, and 92% user retention rate.",
      technologies: ["Sketch", "InVision", "D3.js", "Vue.js", "Sass"],
      client: "DataFlow Inc",
      year: "2023",
    },
    {
      id: 3,
      title: "Mobile Banking App",
      subtitle: "Secure and intuitive financial management",
      description:
        "Developed a comprehensive mobile banking application with advanced security features and intuitive user interface. The app achieved 4.8★ rating with over 100K downloads in the first month.",
      category: "development",
      duration: "8 months",
      team: "12 people",
      image: "/api/placeholder/400/300",
      tags: ["Mobile", "React Native", "Security", "FinTech"],
      metrics: [
        { value: "4.8★", label: "App Store Rating", icon: <Award className="w-4 h-4" /> },
        { value: "100K+", label: "Downloads", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "95%", label: "Positive Reviews", icon: <Users className="w-4 h-4" /> },
        { value: "99.9%", label: "Uptime", icon: <Target className="w-4 h-4" /> },
      ],
      timeline: [
        { phase: "Planning", duration: "2 weeks", description: "Requirements gathering and technical architecture" },
        { phase: "Design", duration: "6 weeks", description: "UI/UX design and prototype development" },
        { phase: "Development", duration: "20 weeks", description: "Frontend and backend development" },
        { phase: "Testing", duration: "4 weeks", description: "Security testing and quality assurance" },
      ],
      challenge: "Creating a secure, user-friendly mobile banking experience while meeting strict financial regulations.",
      solution: "Implemented biometric authentication, end-to-end encryption, and intuitive transaction flows.",
      results: "4.8★ rating, 100K+ downloads, and 95% positive user reviews within the first month.",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Stripe"],
      client: "SecureBank",
      year: "2024",
    },
    {
      id: 4,
      title: "Brand Strategy & Identity",
      subtitle: "Complete brand transformation for tech startup",
      description:
        "Developed a comprehensive brand strategy and visual identity for a emerging tech startup. The project included market research, brand positioning, and complete visual system design.",
      category: "strategy",
      duration: "3 months",
      team: "4 people",
      image: "/api/placeholder/400/300",
      tags: ["Brand Strategy", "Identity Design", "Market Research", "Visual Systems"],
      metrics: [
        { value: "300%", label: "Brand Awareness", icon: <TrendingUp className="w-4 h-4" /> },
        { value: "150%", label: "Lead Generation", icon: <Target className="w-4 h-4" /> },
        { value: "85%", label: "Brand Recognition", icon: <Award className="w-4 h-4" /> },
        { value: "25%", label: "Market Share Growth", icon: <BarChart3 className="w-4 h-4" /> },
      ],
      timeline: [
        { phase: "Research", duration: "3 weeks", description: "Market analysis and competitive research" },
        { phase: "Strategy", duration: "2 weeks", description: "Brand positioning and messaging development" },
        { phase: "Design", duration: "4 weeks", description: "Visual identity and brand system creation" },
        { phase: "Implementation", duration: "3 weeks", description: "Brand guideline and asset delivery" },
      ],
      challenge: "The startup needed to differentiate itself in a crowded market and establish credibility with investors.",
      solution: "Created a distinctive brand identity with clear messaging and comprehensive visual system.",
      results: "300% increase in brand awareness, 150% improvement in lead generation, and successful Series A funding.",
      technologies: ["Adobe Creative Suite", "Figma", "Principle", "InDesign"],
      client: "TechVenture",
      year: "2023",
    },
  ];

  const filteredStudies = caseStudies.filter((study) => {
    const matchesCategory = selectedCategory === "all" || study.category === selectedCategory;
    const matchesSearch =
      study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="studies" className="cs-section bg-gray-50">
      <div className="cs-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Featured Case Studies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed analysis of projects that transformed businesses and delivered measurable results. Each case study showcases the
            complete journey from challenge to success.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cs-btn ${selectedCategory === category.id ? "cs-btn-primary" : "cs-btn-secondary"}`}
              >
                <Filter className="w-4 h-4" />
                {category.name}
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredStudies.map((study, index) => (
            <div key={study.id} className={`cs-card p-8 cs-animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-lg text-blue-600 mb-4">{study.subtitle}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {study.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {study.team}
                    </span>
                  </div>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Case Study Preview</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {study.metrics.slice(0, 4).map((metric, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-center mb-2 text-blue-600">{metric.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag, i) => (
                  <span key={i} className="cs-tag cs-tag-primary">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Challenge, Solution, Results */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
                  <p className="text-gray-600 text-sm">{study.results}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div className="text-sm text-gray-500">
                  <span>{study.client}</span> • <span>{study.year}</span>
                </div>
                <div className="flex gap-2">
                  <button className="cs-btn cs-btn-secondary text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No case studies found matching your criteria.</p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">Ready to create your success story?</h3>
          <p className="text-lg text-gray-600 mb-8">Let's discuss how we can achieve similar results for your project.</p>
          <button className="cs-btn cs-btn-primary text-lg group">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
