"use client";

import { useState } from "react";
import {
  ExternalLink,
  BarChart3,
  Users,
  Clock,
  ArrowRight,
  Filter,
  Search,
  TrendingUp,
  Award,
  Target,
  Zap,
  CheckCircle,
  Eye,
  Download,
  Calendar,
} from "lucide-react";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or detailed

  const categories = [
    { id: "all", name: "All Studies", count: 8, color: "bg-slate-100 text-slate-700" },
    { id: "design", name: "UX Design", count: 3, color: "bg-blue-100 text-blue-700" },
    { id: "development", name: "Development", count: 3, color: "bg-green-100 text-green-700" },
    { id: "strategy", name: "Strategy", count: 2, color: "bg-purple-100 text-purple-700" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      subtitle: "Complete digital overhaul for retail leader",
      company: "RetailCorp",
      description:
        "Led a comprehensive redesign of a major e-commerce platform, focusing on user experience optimization and conversion rate improvement through data-driven design decisions.",
      category: "design",
      duration: "6 months",
      team: "8 specialists",
      budget: "$250K",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["UX Design", "E-Commerce", "A/B Testing", "Analytics"],
      metrics: [
        { value: "67%", label: "Conversion Increase", icon: <TrendingUp className="w-4 h-4" />, change: "+45%" },
        { value: "45%", label: "User Engagement", icon: <Users className="w-4 h-4" />, change: "+30%" },
        { value: "89%", label: "Satisfaction Score", icon: <Award className="w-4 h-4" />, change: "+25%" },
        { value: "$2.3M", label: "Revenue Impact", icon: <Target className="w-4 h-4" />, change: "+180%" },
      ],
      challenges: [
        "Poor user experience causing 73% cart abandonment",
        "Confusing navigation reducing product discovery",
        "Mobile experience significantly lagging competitors",
      ],
      solutions: [
        "Implemented user-centered design methodology",
        "Created comprehensive design system",
        "Optimized checkout flow with progressive disclosure",
        "Developed mobile-first responsive framework",
      ],
      results: [
        "67% increase in conversion rate within 3 months",
        "$2.3M additional revenue in Q1 post-launch",
        "45% improvement in user engagement metrics",
        "89% user satisfaction score (industry high)",
      ],
      technologies: ["Figma", "React", "TypeScript", "Next.js", "TailwindCSS", "Analytics"],
      client: "RetailCorp",
      year: "2024",
      status: "completed",
      featured: true,
    },
    {
      id: 2,
      title: "SaaS Dashboard Optimization",
      subtitle: "Streamlining complex data visualization",
      company: "DataFlow Inc",
      description:
        "Redesigned a complex SaaS dashboard to improve user onboarding and feature adoption through simplified information architecture and intuitive data visualization.",
      category: "design",
      duration: "4 months",
      team: "5 specialists",
      budget: "$180K",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["SaaS", "Data Viz", "User Research", "Information Architecture"],
      metrics: [
        { value: "50%", label: "Onboarding Reduction", icon: <Clock className="w-4 h-4" />, change: "-50%" },
        { value: "73%", label: "Feature Adoption", icon: <Zap className="w-4 h-4" />, change: "+45%" },
        { value: "92%", label: "User Retention", icon: <Users className="w-4 h-4" />, change: "+20%" },
        { value: "4.8/5", label: "User Rating", icon: <Award className="w-4 h-4" />, change: "+0.9" },
      ],
      challenges: [
        "Complex interface overwhelming new users",
        "Low feature discovery and adoption rates",
        "High churn rate in first 30 days",
      ],
      solutions: [
        "Simplified information architecture",
        "Progressive disclosure patterns",
        "Contextual onboarding flows",
        "Interactive feature discovery",
      ],
      results: [
        "50% reduction in time-to-value for new users",
        "73% increase in feature adoption",
        "92% user retention rate",
        "Achieved highest user satisfaction in company history",
      ],
      technologies: ["Sketch", "Principle", "D3.js", "Vue.js", "Sass", "Mixpanel"],
      client: "DataFlow Inc",
      year: "2024",
      status: "completed",
      featured: false,
    },
    {
      id: 3,
      title: "Mobile Banking Innovation",
      subtitle: "Next-generation financial experience",
      company: "SecureBank",
      description:
        "Developed a comprehensive mobile banking application with advanced security features and intuitive interface, achieving exceptional user adoption and satisfaction.",
      category: "development",
      duration: "8 months",
      team: "12 specialists",
      budget: "$500K",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Mobile", "React Native", "Security", "FinTech", "Banking"],
      metrics: [
        { value: "4.8★", label: "App Store Rating", icon: <Award className="w-4 h-4" />, change: "+1.2" },
        { value: "100K+", label: "Downloads (Month 1)", icon: <TrendingUp className="w-4 h-4" />, change: "New" },
        { value: "95%", label: "Positive Reviews", icon: <Users className="w-4 h-4" />, change: "+25%" },
        { value: "99.9%", label: "Uptime", icon: <Target className="w-4 h-4" />, change: "+2%" },
      ],
      challenges: ["Outdated legacy banking systems", "Complex security requirements", "Competitive market with high expectations"],
      solutions: [
        "Modern React Native architecture",
        "Biometric authentication integration",
        "Real-time transaction monitoring",
        "Intuitive financial management tools",
      ],
      results: [
        "100K+ downloads in first month",
        "4.8/5 star rating across app stores",
        "95% positive user reviews",
        "Industry-leading security certification",
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Stripe", "Biometrics"],
      client: "SecureBank",
      year: "2024",
      status: "completed",
      featured: true,
    },
    {
      id: 4,
      title: "Brand Strategy & Identity System",
      subtitle: "Complete brand transformation",
      company: "TechVenture",
      description:
        "Developed comprehensive brand strategy and visual identity for emerging tech startup, including market positioning, visual system, and go-to-market strategy.",
      category: "strategy",
      duration: "3 months",
      team: "4 specialists",
      budget: "$120K",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      tags: ["Brand Strategy", "Identity Design", "Market Research", "Positioning"],
      metrics: [
        { value: "300%", label: "Brand Awareness", icon: <TrendingUp className="w-4 h-4" />, change: "+275%" },
        { value: "150%", label: "Lead Generation", icon: <Target className="w-4 h-4" />, change: "+120%" },
        { value: "85%", label: "Brand Recognition", icon: <Award className="w-4 h-4" />, change: "+65%" },
        { value: "$2.5M", label: "Series A Funding", icon: <Zap className="w-4 h-4" />, change: "New" },
      ],
      challenges: ["No brand recognition in crowded market", "Unclear value proposition messaging", "Need for investor credibility"],
      solutions: [
        "Comprehensive market research and analysis",
        "Distinctive visual identity system",
        "Clear brand messaging framework",
        "Investor-focused brand positioning",
      ],
      results: [
        "300% increase in brand awareness",
        "Successful $2.5M Series A funding round",
        "150% improvement in qualified leads",
        "Industry recognition and awards",
      ],
      technologies: ["Adobe Creative Suite", "Figma", "Principle", "Brand Guidelines"],
      client: "TechVenture",
      year: "2023",
      status: "completed",
      featured: false,
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

  const featuredStudies = caseStudies.filter((study) => study.featured);

  return (
    <section id="studies" className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
            <BarChart3 className="w-5 h-5" />
            <span className="font-semibold">Featured Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Proven Results Through
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Strategic Design</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Detailed analysis of projects that transformed businesses and delivered measurable results. Each case study showcases the
            complete journey from challenge to success.
          </p>
        </div>

        {/* Featured Studies Showcase */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Award className="w-6 h-6 text-blue-600 mr-2" />
            Featured Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Featured</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">{study.metrics[0].value}</div>
                    <div className="text-sm opacity-90">{study.metrics[0].label}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 font-semibold text-sm">{study.company}</span>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{study.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{study.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.slice(0, 4).map((metric, i) => (
                      <div key={i} className="text-center p-4 bg-slate-50 rounded-lg">
                        <div className="flex justify-center mb-2 text-blue-600">{metric.icon}</div>
                        <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                        <div className="text-xs text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                    {study.tags.length > 3 && (
                      <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                        +{study.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                    <div className="text-sm text-slate-500">
                      <span>{study.client}</span> • <span>{study.year}</span>
                    </div>
                    <button className="group bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === category.id ? "bg-blue-600 text-white shadow-lg" : `${category.color} hover:scale-105`
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            />
          </div>
        </div>

        {/* All Case Studies Grid */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <BarChart3 className="w-6 h-6 text-blue-600 mr-2" />
            All Case Studies
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStudies.map((study, index) => (
              <div
                key={study.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Header */}
                <div className="p-6 border-b border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-600 font-semibold text-sm">{study.company}</span>
                    <div className="flex items-center text-slate-500 text-sm space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {study.year}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{study.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{study.description}</p>
                </div>

                {/* Metrics */}
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {study.metrics.slice(0, 4).map((metric, i) => (
                      <div key={i} className="text-center p-3 bg-slate-50 rounded-lg">
                        <div className="flex justify-center mb-1 text-blue-600">{metric.icon}</div>
                        <div className="text-lg font-bold text-slate-900">{metric.value}</div>
                        <div className="text-xs text-slate-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.tags.map((tag, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">
                      {study.team} • {study.budget}
                    </div>
                    <button className="group bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-100 hover:text-blue-700 transition-all flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Measurable Impact Across All Projects</h3>
            <p className="text-blue-100 text-lg">Every case study represents real business transformation with quantified results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">$12.8M+</div>
              <div className="text-blue-100">Total Revenue Impact</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">156%</div>
              <div className="text-blue-100">Average Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-blue-100">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">18</div>
              <div className="text-blue-100">Industry Awards</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to Create Your Success Story?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can achieve similar transformative results for your project. Every great case study starts with a
            conversation.
          </p>
          <button className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
