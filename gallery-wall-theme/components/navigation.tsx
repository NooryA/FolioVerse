"use client";

import { useState, useEffect } from "react";
import { Menu, X, Palette, User, Briefcase, Mail, Home } from "lucide-react";

// Museum-style navigation icon
const MuseumIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleSectionChange = () => {
      const sections = ["home", "about", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleSectionChange);
    handleScroll();
    handleSectionChange();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  const navigationItems = [
    { id: "home", label: "Exhibition", icon: Home },
    { id: "about", label: "Artist Statement", icon: User },
    { id: "projects", label: "Gallery Wall", icon: Palette },
    { id: "contact", label: "Visitor's Book", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`gallery-nav ${scrolled ? "gallery-nav-scrolled" : ""}`}>
      <div className="gallery-nav-container">
        {/* Museum Logo */}
        <div className="gallery-logo">
          <MuseumIcon className="w-8 h-8 inline-block mr-3" />
          <span className="font-bold text-xl">Digital Gallery</span>
          <div className="text-xs text-gallery-text-light mt-1 font-normal">Curated Portfolio Collection</div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gallery-nav-links">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`gallery-nav-link ${activeSection === item.id ? "active" : ""}`}
              >
                <Icon className="w-5 h-5 mb-1" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Hours (Desktop) */}
        <div className="hidden lg:block gallery-hours">
          <div className="text-xs text-gallery-text-light">
            <div className="font-semibold">Gallery Hours</div>
            <div>24/7 Digital Access</div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden gallery-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden gallery-mobile-menu">
          <div className="gallery-mobile-menu-content">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`gallery-mobile-nav-link ${activeSection === item.id ? "active" : ""}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Gallery Info */}
            <div className="gallery-mobile-info">
              <div className="text-center py-4 border-t border-gallery-border">
                <div className="text-sm text-gallery-text-light">
                  <div className="font-semibold mb-1">Digital Gallery</div>
                  <div>Portfolio Collection 2024</div>
                  <div className="text-xs mt-2">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Spotlight Effect */}
      <div className="gallery-nav-spotlight"></div>
    </nav>
  );
}
