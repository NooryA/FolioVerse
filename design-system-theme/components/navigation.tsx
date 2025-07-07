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

const LayersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
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

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      name: "Design Tokens",
      href: "#tokens",
      icon: SparklesIcon,
      description: "Colors, typography, spacing",
    },
    {
      name: "Components",
      href: "#components",
      icon: LayersIcon,
      description: "Reusable UI elements",
    },
    {
      name: "Patterns",
      href: "#patterns",
      icon: LayersIcon,
      description: "Common compositions",
    },
    {
      name: "Guidelines",
      href: "#guidelines",
      icon: LayersIcon,
      description: "Design principles",
    },
    {
      name: "Projects",
      href: "#projects",
      icon: LayersIcon,
      description: "Showcases & examples",
    },
    {
      name: "Contact",
      href: "#contact",
      icon: LayersIcon,
      description: "Get in touch",
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
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-xl border-b border-white/20" : "bg-transparent"
      }`}
    >
      <div className="ds-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <LayersIcon className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-900">
                Design System
              </h1>
              <p className="text-sm text-gray-600 font-medium">Portfolio Studio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-2 mr-8">
              {navItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className="group relative px-4 py-2 text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 rounded-xl hover:bg-purple-50/50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </a>

                  {/* Dropdown Preview */}
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 animate-slide-up">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <item.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="w-full h-px bg-gradient-to-r from-purple-200 to-pink-200 mb-3"></div>
                      <p className="text-xs text-gray-500">Click to explore {item.name.toLowerCase()} in detail</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl font-semibold border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                Download
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"}`}>
                <MenuIcon className="w-6 h-6 text-gray-700" />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"}`}>
                <XIcon className="w-6 h-6 text-gray-700" />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0 pb-0"
          } overflow-hidden`}
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 mt-4">
            <div className="space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsOpen(false)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-800 transition-colors duration-300">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors duration-300 transform -rotate-90" />
                </a>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gradient-to-r from-purple-200 to-pink-200">
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 bg-white/80 backdrop-blur-sm text-gray-800 rounded-xl font-semibold border border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                  Download Kit
                </button>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
