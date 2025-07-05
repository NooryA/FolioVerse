"use client";

import { useState, useEffect } from "react";
import { Rocket, Navigation2, Radar, Satellite, Target, Settings, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [fuelLevel, setFuelLevel] = useState(85);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [radarPing, setRadarPing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCoordinates({
        x: Math.random() * 360,
        y: Math.random() * 180,
      });
      setRadarPing((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "#home", label: "BRIDGE", icon: Rocket, coordinates: "α-001" },
    { href: "#about", label: "CREW_LOG", icon: Target, coordinates: "β-247" },
    { href: "#projects", label: "MISSION_DATA", icon: Satellite, coordinates: "γ-539" },
    { href: "#contact", label: "COMMS", icon: Navigation2, coordinates: "δ-812" },
  ];

  return (
    <>
      {/* Starfield Background */}
      <div className="fixed top-0 left-0 right-0 h-24 z-40 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-lg border-b-2 border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Ship Logo & Status */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center border-2 border-blue-300/50">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <div className="text-xl font-bold text-blue-200">STARSHIP</div>
                <div className="text-xs text-blue-400 font-mono">INTERSTELLAR-X1</div>
                <div className="text-xs text-green-400 font-mono">STATUS: OPERATIONAL</div>
              </div>
            </div>

            {/* Control Panels */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Fuel Level */}
              <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30">
                <div className="text-blue-300 text-xs font-mono mb-1">FUEL</div>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full transition-all duration-500"
                      style={{ width: `${fuelLevel}%` }}
                    />
                  </div>
                  <span className="text-blue-300 font-mono text-xs">{fuelLevel}%</span>
                </div>
              </div>

              {/* Coordinates */}
              <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30">
                <div className="text-blue-300 text-xs font-mono mb-1">COORDINATES</div>
                <div className="text-green-400 font-mono text-xs">
                  X: {coordinates.x.toFixed(1)}° Y: {coordinates.y.toFixed(1)}°
                </div>
              </div>

              {/* Radar Display */}
              <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30">
                <div className="text-blue-300 text-xs font-mono mb-1">RADAR</div>
                <div className="relative w-8 h-8 bg-slate-700 rounded-full">
                  <div
                    className="absolute inset-0 border-2 border-green-400 rounded-full"
                    style={{
                      opacity: radarPing === 0 ? 1 : 0.3,
                      transform: `scale(${radarPing === 0 ? 1 : 0.8})`,
                    }}
                  />
                  <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-green-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href} className="group relative">
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:bg-slate-700/50">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-5 h-5 text-blue-300 group-hover:text-blue-100 transition-colors" />
                        <div>
                          <div className="text-blue-200 font-mono text-sm">{item.label}</div>
                          <div className="text-blue-400 font-mono text-xs">{item.coordinates}</div>
                        </div>
                      </div>
                    </div>

                    {/* Activation Light */}
                    <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Ship Time */}
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30">
                <div className="text-blue-300 text-xs font-mono mb-1">SHIP TIME</div>
                <div className="text-green-400 font-mono text-sm">{new Date().toLocaleTimeString()}</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30">
                <Settings className="w-5 h-5 text-blue-300 hover:text-blue-100 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-slate-800/50 border border-blue-400/50 rounded-lg p-2 text-blue-300 hover:border-blue-400 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-blue-400/30">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Ship Status */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30">
                  <div className="text-blue-300 text-xs font-mono mb-1">FUEL</div>
                  <div className="text-green-400 font-mono text-sm">{fuelLevel}%</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 border border-blue-400/30">
                  <div className="text-blue-300 text-xs font-mono mb-1">STATUS</div>
                  <div className="text-green-400 font-mono text-sm">ONLINE</div>
                </div>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 bg-slate-800/50 rounded-lg p-4 border border-blue-400/30 hover:border-blue-400 transition-colors"
                >
                  <item.icon className="w-6 h-6 text-blue-300" />
                  <div>
                    <div className="text-blue-200 font-mono text-sm">{item.label}</div>
                    <div className="text-blue-400 font-mono text-xs">{item.coordinates}</div>
                  </div>
                  <div className="ml-auto w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
