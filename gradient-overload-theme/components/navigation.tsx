"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const MenuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeGradient, setActiveGradient] = useState(0);

  const gradients = [
    "from-pink-500 via-red-500 to-yellow-500",
    "from-purple-400 via-pink-400 to-red-400",
    "from-green-400 via-blue-500 to-purple-600",
    "from-yellow-400 via-red-500 to-pink-500",
    "from-blue-600 via-purple-600 to-indigo-700",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const gradientInterval = setInterval(() => {
      setActiveGradient((prev) => (prev + 1) % gradients.length);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(gradientInterval);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home", gradient: "from-pink-500 to-rose-500" },
    { name: "About", href: "#about", gradient: "from-purple-500 to-indigo-500" },
    { name: "Projects", href: "#projects", gradient: "from-blue-500 to-cyan-500" },
    { name: "Contact", href: "#contact", gradient: "from-green-500 to-emerald-500" },
  ];

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/20 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="gradient-nav-logo group cursor-pointer">
              <div
                className={`bg-gradient-to-r ${gradients[activeGradient]} bg-clip-text text-transparent font-bold text-2xl transition-all duration-500 group-hover:scale-110`}
              >
                GradientFolio
              </div>
              <div className="gradient-glow-effect"></div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="gradient-nav-item group relative"
                  style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
                >
                  <span className="relative z-10 px-6 py-3 font-medium text-white/90 transition-all duration-300 group-hover:text-white">
                    {item.name}
                  </span>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full bg-gradient-to-r ${item.gradient} blur-sm transform group-hover:scale-110`}
                  ></div>
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full bg-gradient-to-r ${item.gradient} transform group-hover:scale-105`}
                  ></div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="gradient-cta-btn group">
                <div className="gradient-cta-bg"></div>
                <div className="gradient-cta-content">
                  <SparklesIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>Get Started</span>
                </div>
                <div className="gradient-cta-glow"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden gradient-mobile-btn" onClick={() => setIsOpen(!isOpen)}>
              <div className="gradient-mobile-bg"></div>
              {isOpen ? <XIcon className="w-6 h-6 text-white relative z-10" /> : <MenuIcon className="w-6 h-6 text-white relative z-10" />}
            </button>
          </div>
        </div>

        {/* Animated Border */}
        <div className={`gradient-nav-border ${scrolled ? "opacity-100" : "opacity-0"}`}>
          <div className="gradient-nav-border-inner"></div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`gradient-mobile-menu ${isOpen ? "gradient-mobile-menu-open" : ""}`}>
        <div className="gradient-mobile-bg-effect"></div>
        <div className="gradient-mobile-content">
          <div className="space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="gradient-mobile-item group"
                onClick={() => setIsOpen(false)}
                style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className={`gradient-mobile-item-bg bg-gradient-to-r ${item.gradient}`}></div>
                <span className="gradient-mobile-item-text">{item.name}</span>
                <div className="gradient-mobile-item-glow"></div>
              </a>
            ))}
          </div>

          <div className="gradient-mobile-cta">
            <button className="gradient-mobile-cta-btn">
              <div className="gradient-mobile-cta-bg"></div>
              <span>Start Your Project</span>
              <SparklesIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="gradient-mobile-backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
}
