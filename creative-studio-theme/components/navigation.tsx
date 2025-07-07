"use client";

import { useState, useEffect } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { id: "hero", label: "Home", icon: "🏠" },
    { id: "about", label: "About", icon: "✨" },
    { id: "work", label: "Work", icon: "🎨" },
    { id: "contact", label: "Contact", icon: "💬" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed Top Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/20 backdrop-blur-md border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                CreativeStudio
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative px-6 py-3 text-white/80 hover:text-white transition-all duration-300 font-medium"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    {item.label}
                  </span>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              ))}

              {/* CTA Button */}
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-bold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                Start Project
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white hover:scale-105 transition-all duration-300">
                <span className="text-xl">☰</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <div className="bg-black/20 backdrop-blur-md rounded-full p-2 border border-white/10">
          <div className="flex space-x-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center hover:scale-110"
              >
                <span className="text-lg">{item.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
