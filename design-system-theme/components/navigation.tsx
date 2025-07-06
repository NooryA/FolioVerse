"use client";

import { useState } from "react";

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

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Tokens", href: "#tokens" },
    { name: "Components", href: "#components" },
    { name: "Patterns", href: "#patterns" },
    { name: "Guidelines", href: "#guidelines" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="ds-bg-white ds-shadow-base sticky top-0 z-50">
      <div className="ds-container">
        <div className="ds-flex ds-justify-between ds-items-center py-4">
          {/* Logo */}
          <div className="ds-flex ds-items-center ds-gap-3">
            <div className="ds-w-10 ds-h-10 ds-bg-primary-600 ds-rounded-lg ds-flex ds-items-center ds-justify-center">
              <LayersIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="ds-text-xl ds-font-bold ds-text-gray-900">Design System</h1>
              <p className="ds-text-sm ds-text-gray-600">Portfolio</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:ds-flex ds-items-center ds-gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="ds-text-gray-600 hover:ds-text-primary-600 ds-font-medium transition-colors">
                {item.name}
              </a>
            ))}
            <button className="ds-btn ds-btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden ds-p-2 ds-rounded-lg hover:ds-bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XIcon className="w-6 h-6 ds-text-gray-600" /> : <MenuIcon className="w-6 h-6 ds-text-gray-600" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="ds-flex ds-flex-col ds-gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="ds-text-gray-600 hover:ds-text-primary-600 ds-font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="ds-btn ds-btn-primary ds-w-full">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
