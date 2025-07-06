"use client";
import { useState, useEffect } from "react";

// Inline SVG Icons
const SparkleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 0z" />
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

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const creativeWords = ["Design", "Create", "Innovate", "Transform", "Inspire"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % creativeWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [creativeWords.length]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioItems = [
    { name: "Brand Identity", count: "50+" },
    { name: "Web Design", count: "120+" },
    { name: "Mobile Apps", count: "85+" },
    { name: "Print Design", count: "200+" },
  ];

  return (
    <section className="studio-hero">
      {/* Creative Navigation */}
      <nav className={`studio-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="studio-nav-container">
          <a href="#" className="studio-logo">
            CreativeStudio
          </a>
          <div className="studio-nav-links">
            <a href="#about" className="studio-nav-link">
              About
            </a>
            <a href="#work" className="studio-nav-link">
              Work
            </a>
            <a href="#services" className="studio-nav-link">
              Services
            </a>
            <a href="#team" className="studio-nav-link">
              Team
            </a>
            <a href="#contact" className="studio-nav-link">
              Contact
            </a>
            <button className="studio-btn studio-btn-primary studio-btn-small">Start Project</button>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="studio-hero-bg">
        <div className="studio-hero-shape"></div>
        <div className="studio-hero-shape"></div>
        <div className="studio-hero-shape"></div>
      </div>

      {/* Hero Content */}
      <div className="studio-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8 studio-animate-slideInLeft">
            <div className="space-y-6">
              <div className="studio-badge studio-badge-primary">✨ Award-Winning Creative Agency</div>

              <h1 className="font-display text-6xl lg:text-8xl font-bold leading-tight">
                We{" "}
                <span className="studio-text-gradient-rainbow relative inline-block">
                  {creativeWords[currentWord]}
                  <div className="absolute -top-2 -right-2">
                    <SparkleIcon className="w-8 h-8 text-yellow-400 studio-animate-pulse" />
                  </div>
                </span>
                <br />
                Beautiful
                <br />
                <span className="studio-text-gradient">Experiences</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We're a creative studio that brings brands to life through innovative design, cutting-edge technology, and unforgettable
                user experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="studio-btn studio-btn-primary studio-btn-large">
                View Our Work
                <ArrowRightIcon className="w-5 h-5" />
              </button>
              <button className="studio-btn studio-btn-outline studio-btn-large">
                <PlayIcon className="w-5 h-5" />
                Watch Showreel
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="font-display text-3xl font-bold studio-text-gradient mb-2">{item.count}</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">{item.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Creative Showcase */}
          <div className="relative studio-animate-slideInRight">
            <div className="relative">
              {/* Main Creative Display */}
              <div className="studio-card studio-shadow-colored">
                <div className="studio-card-content">
                  <div className="aspect-[4/3] studio-bg-gradient-rainbow rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Floating Elements */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-full studio-animate-float" />
                    <div
                      className="absolute top-1/2 right-6 w-8 h-8 bg-white/30 rounded-lg studio-animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    />
                    <div
                      className="absolute bottom-6 left-1/3 w-6 h-6 bg-white/25 rounded-full studio-animate-float"
                      style={{ animationDelay: "1s" }}
                    />

                    {/* Center Content */}
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 studio-animate-pulse">
                        <SparkleIcon className="w-10 h-10" />
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-2">Creative Excellence</h3>
                      <p className="text-white/80">Award-winning design solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className="absolute -top-6 -right-6 studio-card bg-white w-32 h-20 flex items-center justify-center studio-animate-float"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-center">
                  <div className="font-display text-lg font-bold studio-text-gradient">150+</div>
                  <div className="text-xs text-gray-600">Happy Clients</div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -left-6 studio-card bg-white w-36 h-24 flex items-center justify-center studio-animate-float"
                style={{ animationDelay: "3s" }}
              >
                <div className="text-center">
                  <div className="font-display text-xl font-bold studio-text-gradient">98%</div>
                  <div className="text-xs text-gray-600">Success Rate</div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-4 studio-card bg-white w-16 h-16 rounded-full flex items-center justify-center studio-animate-pulse">
                <div className="w-8 h-8 studio-bg-gradient rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="studio-animate-float">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Scroll to explore</p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 studio-bg-gradient rounded-full studio-animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 studio-bg-gradient-secondary rounded-full studio-animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 studio-bg-gradient-rainbow rounded-full studio-animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/5 w-5 h-5 studio-bg-gradient-warm rounded-lg studio-animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </section>
  );
}
