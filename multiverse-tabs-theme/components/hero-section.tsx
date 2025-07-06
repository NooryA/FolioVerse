"use client";

import { useState, useEffect } from "react";
import { Zap, Globe, Atom, Sparkles, Circle, Hexagon, Triangle } from "lucide-react";

export function HeroSection() {
  const [activeUniverse, setActiveUniverse] = useState(0);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setActiveUniverse((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const universes = [
    {
      id: 0,
      name: "Alpha Dimension",
      color: "from-purple-600 to-blue-600",
      description: "Frontend Development Mastery",
      tech: ["React", "Vue.js", "Angular", "Svelte"],
      symbol: Circle,
    },
    {
      id: 1,
      name: "Beta Reality",
      color: "from-green-500 to-teal-500",
      description: "Backend Architecture Excellence",
      tech: ["Node.js", "Python", "Go", "Rust"],
      symbol: Hexagon,
    },
    {
      id: 2,
      name: "Gamma Timeline",
      color: "from-orange-500 to-red-500",
      description: "Full-Stack Innovation",
      tech: ["Next.js", "NestJS", "GraphQL", "PostgreSQL"],
      symbol: Triangle,
    },
    {
      id: 3,
      name: "Delta Cosmos",
      color: "from-pink-500 to-purple-500",
      description: "Emerging Technologies",
      tech: ["AI/ML", "Web3", "AR/VR", "IoT"],
      symbol: Atom,
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute top-60 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping" />
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              MULTIVERSE
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-4">DEVELOPER PORTAL</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Navigate through parallel dimensions of technology. Each universe represents a different aspect of my development expertise.
            </p>
          </div>

          {/* Dimensional Portals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {universes.map((universe, index) => {
              const Symbol = universe.symbol;
              return (
                <div
                  key={universe.id}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    activeUniverse === index ? "scale-110" : "scale-100 hover:scale-105"
                  }`}
                  onClick={() => {
                    setActiveUniverse(index);
                    setIsPortalOpen(true);
                    setTimeout(() => setIsPortalOpen(false), 2000);
                  }}
                >
                  {/* Portal Ring */}
                  <div
                    className={`w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r ${universe.color} p-1 ${
                      activeUniverse === index ? "animate-spin-slow" : ""
                    }`}
                  >
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center relative overflow-hidden">
                      {/* Portal Effect */}
                      {activeUniverse === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse" />
                      )}
                      {isPortalOpen && activeUniverse === index && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 animate-ping" />
                      )}
                      <Symbol className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  <h3 className={`text-lg font-semibold mb-2 ${activeUniverse === index ? "text-white" : "text-gray-400"}`}>
                    {universe.name}
                  </h3>
                  <p className={`text-sm ${activeUniverse === index ? "text-gray-300" : "text-gray-500"}`}>{universe.description}</p>
                </div>
              );
            })}
          </div>

          {/* Active Universe Details */}
          <div className={`bg-gradient-to-r ${universes[activeUniverse].color} p-1 rounded-2xl mb-12 transition-all duration-1000`}>
            <div className="bg-black rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-4 text-white">{universes[activeUniverse].name}</h3>
              <p className="text-xl text-gray-300 mb-6">{universes[activeUniverse].description}</p>

              {/* Tech Stack */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {universes[activeUniverse].tech.map((tech, index) => (
                  <div
                    key={tech}
                    className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center">
                      <Sparkles className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <span className="text-white font-medium">{tech}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quantum Navigation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-3">
              <Zap className="w-5 h-5 group-hover:animate-spin" />
              Enter Portal
            </button>
            <button className="group bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-gray-600 hover:border-gray-400 flex items-center gap-3">
              <Globe className="w-5 h-5 group-hover:animate-pulse" />
              Explore Dimensions
            </button>
          </div>

          {/* Holographic Status */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gray-900/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium">Dimensional Gateway: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
