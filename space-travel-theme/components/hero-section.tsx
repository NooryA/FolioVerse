"use client";

import React, { useState, useEffect } from "react";
import { Rocket, Zap, Globe, Star, Navigation, Gauge, Radio, Satellite, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentCoordinate, setCurrentCoordinate] = useState(0);
  const [hyperdriveStatus, setHyperdriveStatus] = useState("READY");
  const [missionProgress, setMissionProgress] = useState(0);

  const coordinates = [
    { name: "EARTH ORBIT", sector: "SOL-001", distance: "0 LY" },
    { name: "MARS STATION", sector: "SOL-004", distance: "1.2 LY" },
    { name: "EUROPA BASE", sector: "SOL-005", distance: "4.2 LY" },
    { name: "PROXIMA B", sector: "CEN-001", distance: "4.2 LY" },
    { name: "KEPLER 452B", sector: "CYG-127", distance: "1,400 LY" },
  ];

  useEffect(() => {
    setMounted(true);

    const coordInterval = setInterval(() => {
      setCurrentCoordinate((prev: number) => (prev + 1) % coordinates.length);
    }, 3000);

    const progressInterval = setInterval(() => {
      setMissionProgress((prev: number) => (prev >= 100 ? 0 : prev + 0.5));
    }, 50);

    return () => {
      clearInterval(coordInterval);
      clearInterval(progressInterval);
    };
  }, [coordinates.length]);

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Star Field */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute top-0 bottom-0 left-0 w-2 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>
        <div className="absolute top-0 bottom-0 right-0 w-2 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent"></div>
      </div>

      {/* Control Panels */}
      <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
        {/* Navigation Panel */}
        <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-4 min-w-64">
          <div className="flex items-center gap-2 mb-3">
            <Navigation className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-mono text-sm">NAV COMPUTER</span>
          </div>
          <div className="space-y-2">
            <div className="text-white text-xs">
              <span className="text-green-400">DESTINATION:</span> {coordinates[currentCoordinate].name}
            </div>
            <div className="text-white text-xs">
              <span className="text-blue-400">SECTOR:</span> {coordinates[currentCoordinate].sector}
            </div>
            <div className="text-white text-xs">
              <span className="text-purple-400">DISTANCE:</span> {coordinates[currentCoordinate].distance}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-4 min-w-64">
          <div className="flex items-center gap-2 mb-3">
            <Gauge className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-mono text-sm">SHIP STATUS</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">HYPERDRIVE:</span>
              <span className="text-green-400">{hyperdriveStatus}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">SHIELDS:</span>
              <span className="text-cyan-400">100%</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-300">LIFE SUPPORT:</span>
              <span className="text-green-400">OPTIMAL</span>
            </div>
          </div>
        </div>

        {/* Communications */}
        <div className="bg-black/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-4 min-w-64">
          <div className="flex items-center gap-2 mb-3">
            <Radio className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-mono text-sm">COMMS</span>
          </div>
          <div className="space-y-1">
            <div className="text-orange-400 text-xs animate-pulse">→ Incoming transmission...</div>
            <div className="text-gray-300 text-xs">STARFLEET COMMAND ONLINE</div>
            <div className="text-green-400 text-xs">ALL SYSTEMS NOMINAL</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {/* Mission Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-lg border border-cyan-400/30 rounded-full px-6 py-3">
              <Satellite className="w-6 h-6 text-cyan-400 animate-spin" />
              <span className="text-cyan-400 font-mono">MISSION: PORTFOLIO EXPLORATION</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent block mb-4">
                CAPTAIN
              </span>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-4xl md:text-5xl font-light">
                ALEX NOVA
              </span>
            </h1>
            <div className="text-2xl text-cyan-400 font-mono">INTERSTELLAR DEVELOPER</div>
          </div>

          {/* Mission Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Navigating the vast cosmos of code, exploring
              <span className="text-cyan-400 font-semibold"> digital frontiers </span>
              and crafting
              <span className="text-purple-400 font-semibold"> stellar experiences </span>
              across the galaxy of technology.
            </p>
          </div>

          {/* Mission Progress */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="bg-black/50 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300 font-mono">MISSION PROGRESS</span>
                <span className="text-cyan-400 font-mono">{Math.floor(missionProgress)}%</span>
              </div>
              <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-100"
                  style={{ width: `${missionProgress}%` }}
                />
              </div>
              <div className="text-sm text-gray-400">Exploring digital galaxies and expanding technological horizons...</div>
            </div>
          </div>

          {/* Fleet Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-lg border border-cyan-400/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Rocket className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">42</div>
              <div className="text-gray-300 text-sm">Projects Launched</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
              <div className="text-gray-300 text-sm">Star Systems</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg border border-green-400/30 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300 text-sm">Light Years Traveled</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg border border-orange-400/30 rounded-2xl p-6 hover:border-orange-400/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">5</div>
              <div className="text-gray-300 text-sm">Years in Service</div>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => {
                setHyperdriveStatus("ENGAGING...");
                setTimeout(() => setHyperdriveStatus("READY"), 2000);
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 flex items-center gap-3"
            >
              <Rocket className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Engage Hyperdrive</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              <Radio className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Open Channel</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-3 font-mono">CONTINUE MISSION</span>
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
              </div>
              <ChevronDown className="w-6 h-6 text-cyan-400 mt-2 animate-bounce" />
            </div>
          </div>

          {/* Floating Space Objects */}
          <div className="absolute top-32 right-16 opacity-60 animate-spin" style={{ animationDuration: "20s" }}>
            <div className="w-8 h-8 border-2 border-cyan-400 rounded-full"></div>
          </div>
          <div className="absolute bottom-40 left-20 opacity-60 animate-pulse">
            <Star className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="absolute top-1/2 left-16 opacity-60 animate-bounce" style={{ animationDelay: "1s" }}>
            <Satellite className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Hyperspace Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {hyperdriveStatus === "ENGAGING..." && (
          <>
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-cyan-400 opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: "2px",
                  height: "200px",
                  transform: "rotate(45deg)",
                  animation: "hyperspace 0.5s ease-out",
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes hyperspace {
          0% {
            transform: rotate(45deg) translateY(100vh) scale(0);
          }
          100% {
            transform: rotate(45deg) translateY(-100vh) scale(1);
          }
        }
      `}</style>
    </section>
  );
}
