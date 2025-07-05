"use client";

import { useState, useEffect } from "react";
import { Brain, Cpu, Eye, Globe, Power, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [neuralActivity, setNeuralActivity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralActivity(Math.random() * 100);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "#home", label: "HOME", icon: Power, status: "ACTIVE" },
    { href: "#about", label: "NEURAL_PROFILE", icon: Brain, status: "SYNC" },
    { href: "#projects", label: "PROJECT_MATRIX", icon: Cpu, status: "LOADED" },
    { href: "#contact", label: "INTERFACE", icon: Eye, status: "READY" },
  ];

  return (
    <>
      {/* Neural Grid Background */}
      <div className="fixed top-0 left-0 right-0 h-20 z-40 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-lg border-b-2 border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Neural Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center animate-pulse">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  NEURAL_NET
                </div>
                <div className="text-xs text-cyan-400 font-mono">XR_INTERFACE_v2.1</div>
              </div>
            </div>

            {/* Neural Activity Indicator */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-cyan-400 animate-pulse" />
                <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${neuralActivity}%` }}
                  />
                </div>
                <span className="text-cyan-400 font-mono text-xs">{Math.floor(neuralActivity)}%</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group relative px-4 py-3 text-sm font-mono text-gray-300 hover:text-cyan-400 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>{item.label}</span>
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.status === "ACTIVE"
                            ? "bg-green-400"
                            : item.status === "SYNC"
                            ? "bg-cyan-400"
                            : item.status === "LOADED"
                            ? "bg-purple-400"
                            : "bg-blue-400"
                        } animate-pulse`}
                      ></div>
                    </div>

                    {/* Holographic Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-2 bg-black/50 rounded-lg px-3 py-2 border border-green-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-xs">ONLINE</span>
              </div>
              <div className="text-cyan-400 font-mono text-sm">{new Date().toLocaleTimeString()}</div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-black/50 border border-cyan-400/50 rounded-lg p-2 text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-cyan-500/30">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors py-3 border-b border-cyan-500/20"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-mono">{item.label}</span>
                  <div
                    className={`ml-auto w-2 h-2 rounded-full ${
                      item.status === "ACTIVE"
                        ? "bg-green-400"
                        : item.status === "SYNC"
                        ? "bg-cyan-400"
                        : item.status === "LOADED"
                        ? "bg-purple-400"
                        : "bg-blue-400"
                    } animate-pulse`}
                  ></div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
