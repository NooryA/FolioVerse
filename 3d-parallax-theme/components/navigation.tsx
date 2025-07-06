"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, MessageCircle, Layers, Zap, Menu, X, Sparkles, Globe, Code, Cpu } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (typeof window !== "undefined") {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        setMousePosition({
          x: (e.clientX - centerX) * 0.01, // Much more subtle movement
          y: (e.clientY - centerY) * 0.01,
        });
      }
    };

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home, color: "from-cyan-400 to-blue-500" },
    { href: "#about", label: "About", icon: User, color: "from-purple-400 to-pink-500" },
    { href: "#projects", label: "Projects", icon: Briefcase, color: "from-green-400 to-emerald-500" },
    { href: "#contact", label: "Contact", icon: MessageCircle, color: "from-orange-400 to-red-500" },
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Subtle Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              transform: `translate(${mousePosition.x * (i + 1) * 2}px, ${mousePosition.y * (i + 1) * 2}px)`,
              animation: `float 3s ease-in-out infinite ${i * 0.5}s`,
              opacity: 0.6 - i * 0.05,
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 w-full z-50">
        {/* Holographic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-transparent backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Futuristic Logo */}
            <div className="flex items-center gap-4">
              <div
                className="relative group cursor-pointer"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
                }}
              >
                {/* Main Logo Orb */}
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-2xl shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-700 animate-pulse">
                    <div className="absolute inset-2 bg-black/30 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Orbital Rings */}
                  <div
                    className="absolute inset-0 border-2 border-cyan-400/30 rounded-2xl animate-spin"
                    style={{ animationDuration: "8s" }}
                  ></div>
                  <div
                    className="absolute inset-1 border border-purple-400/30 rounded-xl animate-spin"
                    style={{ animationDuration: "6s", animationDirection: "reverse" }}
                  ></div>

                  {/* Corner Sparks */}
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
                </div>
              </div>

              <div className="hidden sm:block">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PARALLAX
                </div>
                <div className="text-xs text-gray-300 font-mono">3D.FUTURE.TECH</div>
              </div>
            </div>

            {/* Floating Navigation Orbs */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative"
                  onMouseEnter={() => setActiveIndex(index)}
                  style={{
                    transform: `perspective(1000px) translateZ(${activeIndex === index ? 20 : 0}px) rotateX(${
                      mousePosition.y
                    }deg) rotateY(${mousePosition.x}deg)`,
                  }}
                >
                  {/* Main Navigation Orb */}
                  <div
                    className={`relative w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110`}
                  >
                    <div className="absolute inset-1 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <item.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    {/* Holographic Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Label */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20">
                      <span className="text-white text-xs font-medium">{item.label}</span>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeIndex === index && <div className="absolute -inset-2 border-2 border-white/30 rounded-3xl animate-pulse"></div>}
                </a>
              ))}
            </div>

            {/* Holographic Status Display */}
            <div className="hidden lg:block">
              <div
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                style={{
                  transform: `translateZ(10px) rotateX(${mousePosition.y * 0.5}deg)`,
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-white font-mono text-sm">
                    <div className="text-green-400">SYSTEM ONLINE</div>
                    <div className="text-gray-400 text-xs">Z: {Math.floor(scrollY * 0.1)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Holographic Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-cyan-500/50"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
                }}
              >
                <div className="absolute inset-1 bg-black/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  {isOpen ? <X className="h-5 w-5 text-white" /> : <Menu className="h-5 w-5 text-white" />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Holographic Panel */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/20">
            <div className="p-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: "slideInFromLeft 0.5s ease-out forwards",
                  }}
                >
                  <div
                    className={`flex items-center gap-4 p-4 bg-gradient-to-r ${item.color} rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105`}
                  >
                    <div className="w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">{item.label}</div>
                      <div className="text-white/70 text-sm">Navigate to {item.label}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
