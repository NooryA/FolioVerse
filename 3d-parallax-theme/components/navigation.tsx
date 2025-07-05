"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, MessageCircle, Layers, Zap, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home, depth: 1 },
    { href: "#about", label: "About", icon: User, depth: 2 },
    { href: "#projects", label: "Projects", icon: Briefcase, depth: 3 },
    { href: "#contact", label: "Contact", icon: MessageCircle, depth: 4 },
  ];

  return (
    <>
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01 * (i + 1)}px, ${
                (mousePosition.y - window.innerHeight / 2) * 0.01 * (i + 1)
              }px)`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* 3D Logo */}
            <div className="flex items-center gap-4">
              <div
                className="relative group"
                style={{
                  transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${
                    (mousePosition.x - window.innerWidth / 2) * 0.01
                  }deg)`,
                }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl group-hover:shadow-blue-500/50 transition-all duration-500 flex items-center justify-center transform group-hover:scale-110">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Zap className="w-3 h-3 text-black" />
                </div>
              </div>
              <div
                className="relative"
                style={{
                  transform: `translateZ(50px) translateY(${scrollY * 0.1}px)`,
                }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PARALLAX
                </div>
                <div className="text-sm text-gray-300">3D Experience</div>
              </div>
            </div>

            {/* Depth Indicators */}
            <div className="hidden lg:flex items-center gap-8">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-16 bg-gradient-to-b from-blue-500/30 to-transparent rounded-full"
                  style={{
                    transform: `translateZ(${(i + 1) * 20}px) translateY(${scrollY * 0.05 * (i + 1)}px)`,
                    opacity: 0.3 + i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Desktop 3D Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative"
                  style={{
                    transform: `
                      perspective(1000px) 
                      translateZ(${item.depth * 20}px) 
                      translateY(${scrollY * 0.02 * item.depth}px)
                      rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.005}deg)
                      rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.005}deg)
                    `,
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-110 group-hover:bg-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{item.label}</div>
                        <div className="text-gray-300 text-xs">Layer {item.depth}</div>
                      </div>
                    </div>

                    {/* 3D Shadow */}
                    <div
                      className="absolute inset-0 bg-black/20 rounded-xl -z-10 group-hover:bg-black/30 transition-all duration-500"
                      style={{
                        transform: `translate(${item.depth * 2}px, ${item.depth * 2}px) translateZ(-10px)`,
                      }}
                    />

                    {/* Floating Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Floating Time Display */}
            <div
              className="hidden lg:block"
              style={{
                transform: `translateZ(30px) translateY(${scrollY * 0.03}px)`,
              }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-2xl">
                <div className="text-white font-mono text-sm">{new Date().toLocaleTimeString()}</div>
                <div className="text-gray-300 text-xs">Z-Index: {Math.floor(scrollY * 0.1)}</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-3 text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                style={{
                  transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg)`,
                }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile 3D Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block group"
                  style={{
                    transform: `translateZ(${item.depth * 10}px) translateY(${index * 2}px)`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500 group-hover:scale-105 group-hover:bg-white/20 relative">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">{item.label}</div>
                        <div className="text-gray-300 text-sm">Depth Layer {item.depth}</div>
                      </div>
                    </div>

                    {/* Mobile 3D Shadow */}
                    <div
                      className="absolute inset-0 bg-black/20 rounded-xl -z-10 group-hover:bg-black/30 transition-all duration-500"
                      style={{
                        transform: `translate(${item.depth}px, ${item.depth}px)`,
                      }}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
