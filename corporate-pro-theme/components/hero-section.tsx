"use client";
import { useState, useEffect } from "react";

// Inline SVG Icons
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1m-6-8h1m4 0h1m-6-4h1m4 0h1m-6-4h1m4 0h1M5 21l14-14"
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Strategic Leadership",
      subtitle: "Fortune 500 Executive",
      description:
        "Driving organizational transformation and delivering measurable business results through strategic vision and operational excellence.",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Business Innovation",
      subtitle: "Digital Transformation",
      description: "Leading enterprise-wide digital initiatives that modernize operations and accelerate growth in competitive markets.",
      image: "/api/placeholder/800/600",
    },
    {
      title: "Global Impact",
      subtitle: "International Markets",
      description:
        "Expanding business presence across international markets with culturally adaptive strategies and sustainable growth models.",
      image: "/api/placeholder/800/600",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const achievements = [
    { number: "15+", label: "Years Experience", description: "Executive Leadership" },
    { number: "$2.8B", label: "Revenue Generated", description: "Portfolio Value" },
    { number: "150+", label: "Team Members", description: "Global Workforce" },
    { number: "98%", label: "Client Satisfaction", description: "Success Rate" },
  ];

  const services = [
    "Strategic Planning & Execution",
    "Digital Transformation",
    "Market Expansion",
    "Operational Excellence",
    "Team Leadership & Development",
    "Stakeholder Management",
  ];

  return (
    <section className="corp-hero min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <nav className={`corp-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="corp-nav-container">
          <a href="#" className="corp-logo">
            ExecutivePro
          </a>
          <div className="corp-nav-links">
            <a href="#about" className="corp-nav-link">
              About
            </a>
            <a href="#services" className="corp-nav-link">
              Services
            </a>
            <a href="#experience" className="corp-nav-link">
              Experience
            </a>
            <a href="#contact" className="corp-nav-link">
              Contact
            </a>
            <button className="corp-btn corp-btn-primary corp-btn-small">Schedule Meeting</button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="corp-container relative z-10">
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="corp-badge corp-badge-primary">{slides[currentSlide].subtitle}</div>
                <h1 className="font-heading text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  {slides[currentSlide].title.split(" ")[0]}{" "}
                  <span className="corp-text-gradient">{slides[currentSlide].title.split(" ")[1]}</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">{slides[currentSlide].description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="corp-btn corp-btn-primary corp-btn-large">
                  View Portfolio
                  <ChevronDownIcon className="w-5 h-5" />
                </button>
                <button className="corp-btn corp-btn-secondary corp-btn-large">
                  <PlayIcon className="w-5 h-5" />
                  Watch Story
                </button>
              </div>

              {/* Key Services */}
              <div className="space-y-3">
                <h3 className="font-heading text-sm font-semibold text-gray-500 uppercase tracking-wide">Core Competencies</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckIcon className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Executive Photo */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">JP</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 font-heading">John Patterson</h3>
                      <p className="text-gray-600">Chief Executive Officer</p>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">A+</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="corp-container">
          <div className="corp-stats">
            {achievements.map((stat, index) => (
              <div key={index} className="corp-stat-item corp-animate-fade-in">
                <div className="corp-stat-number">{stat.number}</div>
                <div className="corp-stat-label">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-blue-600" : "bg-gray-300"}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDownIcon className="w-6 h-6 text-gray-400" />
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-50" />
      </div>
    </section>
  );
}
