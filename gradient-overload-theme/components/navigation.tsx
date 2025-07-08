"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./theme-context";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { currentTheme, gradientIndex } = useTheme();

  // Use theme colors from context
  const gradients = currentTheme.gradients;
  const textGradients = currentTheme.textGradients;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* STREAMLINED NAVBAR DESIGN */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 max-w-2xl w-full mx-auto px-6 ${
          scrolled ? "top-4" : "top-6"
        }`}
      >
        {/* Glassmorphic Navigation Container */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 shadow-2xl overflow-hidden">
          {/* Desktop Navigation - Centered Layout */}
          <div className="hidden md:flex items-center justify-center px-8 py-4">
            {/* Center: Navigation Items */}
            <div className="flex items-center justify-center space-x-8">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.href, e)}
                  className="relative group px-6 py-3 rounded-full transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      gradients[index % gradients.length]
                    } opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-full`}
                  />

                  {/* Beautiful Gradient Text */}
                  <span
                    className={`relative z-10 font-bold text-lg bg-gradient-to-r ${
                      textGradients[index % textGradients.length]
                    } bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105`}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-center px-8 py-4">
            {/* Centered Navigation Items */}
            <div className="flex items-center justify-center space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.href, e)}
                  className="relative group px-4 py-2 rounded-full transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      gradients[index % gradients.length]
                    } opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-full`}
                  />

                  {/* Beautiful Gradient Text */}
                  <span
                    className={`relative z-10 font-bold text-sm bg-gradient-to-r ${
                      textGradients[index % textGradients.length]
                    } bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105`}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </>
  );
}
