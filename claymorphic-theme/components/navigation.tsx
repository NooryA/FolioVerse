"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="clay-nav">
      <div className="clay-nav-logo">Claymorphic</div>

      <div className="clay-nav-links">
        <a href="#home" className="clay-nav-item">
          Home
        </a>
        <a href="#about" className="clay-nav-item">
          About
        </a>
        <a href="#projects" className="clay-nav-item">
          Projects
        </a>
        <a href="#contact" className="clay-nav-item">
          Contact
        </a>
      </div>
    </nav>
  );
}
