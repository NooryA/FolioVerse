"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <nav className="clay-nav">
      <div className="clay-nav-logo">Claymorphic</div>

      <div className="clay-nav-links">
        <a href="#home" className="clay-nav-item" onClick={(e) => handleNavClick(e, "home")}>
          Home
        </a>
        <a href="#about" className="clay-nav-item" onClick={(e) => handleNavClick(e, "about")}>
          About
        </a>
        <a href="#projects" className="clay-nav-item" onClick={(e) => handleNavClick(e, "projects")}>
          Projects
        </a>
        <a href="#contact" className="clay-nav-item" onClick={(e) => handleNavClick(e, "contact")}>
          Contact
        </a>
      </div>
    </nav>
  );
}
