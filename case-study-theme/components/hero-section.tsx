"use client";

import { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  BarChart3,
  Users,
  TrendingUp,
  Award,
  Calendar,
  MapPin,
  Mail,
  ExternalLink,
  Github,
  Linkedin,
  MousePointer,
} from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
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
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [mounted]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const caseStudies = [
    {
      title: "E-Commerce Platform Redesign",
      subtitle: "Increased conversion rate by 67%",
      description: "Complete UX overhaul resulting in significant revenue growth",
      metrics: [
        { value: "67%", label: "Conversion Rate" },
        { value: "45%", label: "User Engagement" },
        { value: "89%", label: "User Satisfaction" },
      ],
      tags: ["UX Design", "E-Commerce", "Analytics"],
      gradient: "from-blue-600 to-purple-600",
    },
    {
      title: "SaaS Dashboard Optimization",
      subtitle: "Reduced user onboarding time by 50%",
      description: "Streamlined user experience with data-driven insights",
      metrics: [
        { value: "50%", label: "Onboarding Time" },
        { value: "73%", label: "Feature Adoption" },
        { value: "92%", label: "User Retention" },
      ],
      tags: ["SaaS", "Data Visualization", "User Research"],
      gradient: "from-emerald-600 to-teal-600",
    },
    {
      title: "Mobile App Development",
      subtitle: "Achieved 4.8★ rating with 100K+ downloads",
      description: "End-to-end development of award-winning mobile application",
      metrics: [
        { value: "4.8★", label: "App Store Rating" },
        { value: "100K+", label: "Downloads" },
        { value: "95%", label: "User Reviews" },
      ],
      tags: ["Mobile", "React Native", "iOS/Android"],
      gradient: "from-orange-600 to-red-600",
    },
  ];

  const currentStudy = caseStudies[currentSlide];

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="cs-container">
          <div className="flex items-center justify-between h-16">
            <div className={`font-display text-2xl font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}>
              Case<span className="cs-text-gradient">Study</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Studies", "Process", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`font-medium transition-colors ${
                    isScrolled ? "text-gray-700 hover:text-blue-600" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollToSection("contact")}
                className={`cs-btn cs-btn-primary ${isScrolled ? "" : "bg-white/20 hover:bg-white/30"}`}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="cs-container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="cs-animate-slide-in-left">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium">Available for new projects</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Transforming Ideas into
              <span className="block cs-text-gradient">Success Stories</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              I specialize in creating detailed case studies that showcase the journey from problem identification to successful
              implementation. Each project tells a story of innovation, collaboration, and measurable impact.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="cs-metric-value text-white">50+</div>
                <div className="cs-metric-label text-gray-400">Case Studies</div>
              </div>
              <div className="text-center">
                <div className="cs-metric-value text-white">95%</div>
                <div className="cs-metric-label text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="cs-metric-value text-white">3.2M+</div>
                <div className="cs-metric-label text-gray-400">Impact Reached</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => scrollToSection("studies")} className="cs-btn cs-btn-primary group">
                <BarChart3 className="w-5 h-5" />
                View Case Studies
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="cs-btn cs-btn-secondary bg-white/10 border-white/20 text-white hover:bg-white/20"
              >
                <MousePointer className="w-5 h-5" />
                My Process
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-400 font-medium">Connect with me:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Featured Case Study Carousel */}
          <div className="cs-animate-slide-in-right">
            <div className="relative">
              {/* Case Study Card */}
              <div className="cs-card-large p-8 bg-white/10 backdrop-blur-md border-white/20 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-400">Featured Case Study</span>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400" />
                </div>

                <div className={`w-full h-48 rounded-xl mb-6 bg-gradient-to-br ${currentStudy.gradient} flex items-center justify-center`}>
                  <div className="text-6xl font-display font-bold text-white/20">{currentSlide + 1}</div>
                </div>

                <h3 className="text-2xl font-display font-bold mb-2">{currentStudy.title}</h3>
                <p className="text-lg text-green-400 mb-4">{currentStudy.subtitle}</p>
                <p className="text-gray-300 mb-6 leading-relaxed">{currentStudy.description}</p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {currentStudy.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">{metric.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {currentStudy.tags.map((tag, index) => (
                    <span key={index} className="cs-tag bg-white/10 text-white border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Carousel Dots */}
                <div className="flex justify-center space-x-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cs-animate-bounce-in">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
    </section>
  );
}
