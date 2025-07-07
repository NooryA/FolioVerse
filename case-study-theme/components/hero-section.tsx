"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Play,
  ExternalLink,
  Award,
  Zap,
  Clock,
  CheckCircle,
} from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentCase, setCurrentCase] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % featuredCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [mounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const featuredCases = [
    {
      title: "E-Commerce Transformation",
      company: "RetailCorp",
      challenge: "Low conversion rates and poor user experience",
      solution: "Complete UX redesign with data-driven optimization",
      result: "67% increase in conversion rate",
      revenue: "$2.3M",
      timeline: "6 months",
      category: "UX Design",
      color: "from-blue-600 to-indigo-700",
    },
    {
      title: "SaaS Dashboard Optimization",
      company: "DataFlow Inc",
      challenge: "Complex interface causing user churn",
      solution: "Simplified information architecture and progressive disclosure",
      result: "50% reduction in onboarding time",
      revenue: "$1.8M",
      timeline: "4 months",
      category: "Product Design",
      color: "from-emerald-600 to-teal-700",
    },
    {
      title: "Mobile Banking Innovation",
      company: "SecureBank",
      challenge: "Outdated mobile experience vs competitors",
      solution: "Modern UI with advanced security features",
      result: "4.8★ rating with 100K+ downloads",
      revenue: "$5.2M",
      timeline: "8 months",
      category: "Mobile App",
      color: "from-purple-600 to-pink-700",
    },
  ];

  const metrics = [
    { value: "50+", label: "Case Studies", icon: <BarChart3 className="w-6 h-6" /> },
    { value: "95%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
    { value: "3.2M+", label: "Impact Reached", icon: <TrendingUp className="w-6 h-6" /> },
  ];

  if (!mounted) return null;

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Professional Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className={`flex items-center space-x-2 ${isScrolled ? "text-gray-900" : "text-slate-800"}`}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">CaseStudy</div>
                <div className="text-xs text-gray-500 -mt-1">Professional</div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Studies", "Process", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors relative group ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-semibold">Available for new projects</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Transforming Ideas into
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Success Stories</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                I specialize in creating detailed case studies that showcase the journey from problem identification to successful
                implementation. Each project tells a story of innovation, collaboration, and measurable impact.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-2 text-blue-600 group-hover:scale-110 transition-transform">{metric.icon}</div>
                  <div className="text-3xl font-bold text-slate-900">{metric.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("studies")}
                className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <BarChart3 className="w-5 h-5" />
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="group bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>My Process</span>
              </button>
            </div>
          </div>

          {/* Right Column - Featured Case Study */}
          <div className="relative">
            {/* Main Case Study Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-semibold text-sm">Featured Case Study</span>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 hover:text-blue-600 cursor-pointer transition-colors" />
              </div>

              {/* Visual Preview */}
              <div
                className={`h-48 rounded-xl mb-6 bg-gradient-to-br ${featuredCases[currentCase].color} flex items-center justify-center relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="text-white text-center z-10">
                  <div className="text-4xl font-bold mb-2">+{featuredCases[currentCase].result.split("%")[0]}%</div>
                  <div className="text-lg opacity-90">Performance Boost</div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
              </div>

              {/* Case Study Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{featuredCases[currentCase].title}</h3>
                  <p className="text-blue-600 font-semibold">{featuredCases[currentCase].company}</p>
                </div>

                <div className="text-slate-600">
                  <div className="mb-2">
                    <span className="font-semibold text-slate-800">Challenge:</span> {featuredCases[currentCase].challenge}
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">Result:</span> {featuredCases[currentCase].result}
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{featuredCases[currentCase].revenue}</div>
                    <div className="text-xs text-slate-500">Revenue Impact</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{featuredCases[currentCase].timeline}</div>
                    <div className="text-xs text-slate-500">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-slate-900">{featuredCases[currentCase].category}</div>
                    <div className="text-xs text-slate-500">Category</div>
                  </div>
                </div>
              </div>

              {/* Case Study Navigation */}
              <div className="flex justify-center space-x-2 mt-6 pt-6 border-t border-slate-100">
                {featuredCases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCase(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentCase ? "bg-blue-600 scale-125" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Floating Success Indicators */}
            <div className="absolute -top-6 -left-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection("studies")}
          className="flex flex-col items-center space-y-2 text-slate-600 hover:text-blue-600 transition-colors group"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
    </section>
  );
}
