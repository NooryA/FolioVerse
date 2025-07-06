"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const RocketIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DesignIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [currentService, setCurrentService] = useState(0);

  const services = ["Web Development", "UI/UX Design", "Mobile Apps", "Digital Strategy", "Brand Design"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [services.length]);

  const quickServices = [
    {
      icon: <CodeIcon className="w-6 h-6" />,
      title: "Web Development",
      price: "From $2,500",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      icon: <DesignIcon className="w-6 h-6" />,
      title: "UI/UX Design",
      price: "From $1,500",
      features: ["User Research", "Wireframes", "Prototypes"],
    },
    {
      icon: <RocketIcon className="w-6 h-6" />,
      title: "Digital Strategy",
      price: "From $3,000",
      features: ["Market Analysis", "Brand Strategy", "Growth Plan"],
    },
  ];

  return (
    <section className="freelancer-hero">
      {/* Navigation */}
      <nav className={`freelancer-nav ${scrolled ? "shadow-lg" : ""}`}>
        <div className="freelancer-nav-container">
          <a href="#" className="freelancer-nav-logo">
            Alex.Dev
          </a>
          <div className="freelancer-nav-links">
            <a href="#services" className="freelancer-nav-link">
              Services
            </a>
            <a href="#about" className="freelancer-nav-link">
              About
            </a>
            <a href="#portfolio" className="freelancer-nav-link">
              Portfolio
            </a>
            <a href="#contact" className="freelancer-nav-link">
              Contact
            </a>
            <button className="freelancer-btn freelancer-btn-primary freelancer-btn-small">Get Quote</button>
          </div>
        </div>
      </nav>

      <div className="freelancer-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 freelancer-animate-slideInLeft">
            <div className="space-y-6">
              <div className="freelancer-badge freelancer-badge-primary">⚡ Available for New Projects</div>

              <h1 className="freelancer-heading text-5xl lg:text-7xl leading-tight">
                Professional
                <br />
                <span className="freelancer-text-gradient">{services[currentService]}</span>
                <br />
                Services
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                I help businesses and entrepreneurs bring their digital ideas to life with modern, scalable solutions that drive real
                results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="freelancer-btn freelancer-btn-primary freelancer-btn-large">
                View My Work
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="freelancer-btn freelancer-btn-outline freelancer-btn-large">Schedule Call</button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="freelancer-stat-number text-3xl">50+</div>
                <div className="freelancer-stat-label">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="freelancer-stat-number text-3xl">98%</div>
                <div className="freelancer-stat-label">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="freelancer-stat-number text-3xl">5⭐</div>
                <div className="freelancer-stat-label">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Services Showcase */}
          <div className="relative freelancer-animate-slideInRight">
            <div className="space-y-6">
              {quickServices.map((service, index) => (
                <div key={index} className="freelancer-service-card text-left" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-start gap-4">
                    <div className="freelancer-service-icon flex-shrink-0">{service.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="freelancer-service-title text-lg">{service.title}</h3>
                        <div className="freelancer-service-price text-lg">{service.price}</div>
                      </div>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckIcon className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Call to Action Card */}
              <div className="freelancer-card">
                <div className="freelancer-card-content text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">
                  <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
                  <p className="mb-4 text-white/90">Let's discuss your project and create something amazing together.</p>
                  <button className="freelancer-btn bg-white text-gray-900 hover:bg-gray-100">Get Free Consultation</button>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 freelancer-animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 freelancer-animate-bounce"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Testimonial Strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm py-6 border-t border-gray-200">
        <div className="freelancer-container">
          <div className="flex items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9/5 Rating</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <div className="text-gray-700">
              <strong>24 Hour</strong> Response Time
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <div className="text-gray-700">
              <strong>100%</strong> Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
