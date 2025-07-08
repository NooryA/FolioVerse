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
    "from-cyan-400 via-teal-500 to-blue-600",
    "from-orange-400 via-red-500 to-pink-500",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const gradientInterval = setInterval(() => {
      setActiveGradient((prev) => (prev + 1) % gradients.length);
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(gradientInterval);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home", gradient: "from-pink-600 via-rose-600 to-red-600" },
    { name: "About", href: "#about", gradient: "from-purple-600 via-violet-600 to-indigo-600" },
    { name: "Projects", href: "#projects", gradient: "from-blue-600 via-cyan-600 to-teal-600" },
    { name: "Contact", href: "#contact", gradient: "from-green-600 via-emerald-600 to-cyan-600" },
  ];

  const scrollToSection = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
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
          <div className="flex items-center justify-between px-8 py-4">
            {/* Compact Logo */}
            <div className="group cursor-pointer">
              <div
                className={`bg-gradient-to-r ${gradients[activeGradient]} bg-clip-text text-transparent font-black text-2xl transition-all duration-1000 group-hover:scale-110`}
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradient-shift 3s ease infinite",
                  filter: "drop-shadow(0 0 8px rgba(255, 107, 107, 0.4))",
                }}
              >
                GF
              </div>
            </div>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.href, e)}
                  className="relative group px-6 py-3 rounded-full transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-full`}
                  />

                  {/* Dark Text for Better Readability */}
                  <span
                    className="relative z-10 font-bold text-lg text-gray-800 transition-all duration-300 group-hover:text-gray-900"
                    style={{
                      textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button (Placeholder to maintain balance) */}
            <div className="hidden md:block w-12"></div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 rounded-full overflow-hidden transition-all duration-300 hover:scale-110"
              onClick={() => setIsOpen(!isOpen)}
              style={{
                background: `linear-gradient(45deg, ${gradients[activeGradient]
                  .replace("from-", "")
                  .replace("via-", "")
                  .replace("to-", "")
                  .split(" ")
                  .join(", ")})`,
                backgroundSize: "200% 200%",
                animation: "gradient-shift 3s ease infinite",
              }}
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full" />
              {isOpen ? (
                <XIcon className="w-6 h-6 text-gray-900 relative z-10" />
              ) : (
                <MenuIcon className="w-6 h-6 text-gray-900 relative z-10" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* REDESIGNED Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Menu Content */}
        <div
          className={`absolute top-24 left-1/2 transform -translate-x-1/2 w-80 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl transition-all duration-500 ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
        >
          <div className="p-8">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(item.href, e)}
                  className="block relative group py-4 px-6 rounded-2xl transition-all duration-300"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-all duration-300 rounded-2xl`}
                  />
                  <span
                    className="relative z-10 text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300"
                    style={{
                      textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {item.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

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
