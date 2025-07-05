"use client";

import { useState, useEffect } from "react";
import { Terminal, Database, Cpu, Network, Activity, Shield, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [dataFlow, setDataFlow] = useState(0);
  const [systemLoad, setSystemLoad] = useState(75);
  const [connections, setConnections] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlow((prev) => (prev + Math.random() * 20) % 100);
      setSystemLoad((prev) => Math.max(60, Math.min(95, prev + (Math.random() - 0.5) * 10)));
      setConnections((prev) => Math.max(30, Math.min(99, prev + Math.floor((Math.random() - 0.5) * 6))));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "#home", label: "CONSOLE", icon: Terminal, status: "ACTIVE", color: "cyan" },
    { href: "#about", label: "PROFILE", icon: Database, status: "SYNC", color: "purple" },
    { href: "#projects", label: "PROJECTS", icon: Cpu, status: "LOADED", color: "green" },
    { href: "#contact", label: "NETWORK", icon: Network, status: "ONLINE", color: "blue" },
  ];

  return (
    <>
      {/* Cyberpunk Grid */}
      <div className="fixed top-0 left-0 right-0 h-20 z-40 opacity-20">
        <div
          className="w-full h-full bg-gradient-to-r from-purple-900/20 to-cyan-900/20"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Cyberpunk Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg p-0.5">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  CYBER_DASH
                </div>
                <div className="text-xs text-cyan-400/70 font-mono">v3.7.2-NEURAL</div>
              </div>
            </div>

            {/* System Metrics */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Data Flow */}
              <div className="bg-gray-900/80 rounded-lg p-3 border border-cyan-400/30">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  <div>
                    <div className="text-cyan-400 text-xs font-mono">DATA_FLOW</div>
                    <div className="text-green-400 font-mono text-sm">{dataFlow.toFixed(1)}%</div>
                  </div>
                </div>
              </div>

              {/* System Load */}
              <div className="bg-gray-900/80 rounded-lg p-3 border border-purple-400/30">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-purple-400" />
                  <div>
                    <div className="text-purple-400 text-xs font-mono">SYS_LOAD</div>
                    <div className="text-yellow-400 font-mono text-sm">{systemLoad.toFixed(0)}%</div>
                  </div>
                </div>
              </div>

              {/* Connections */}
              <div className="bg-gray-900/80 rounded-lg p-3 border border-green-400/30">
                <div className="flex items-center gap-2">
                  <Network className="w-4 h-4 text-green-400" />
                  <div>
                    <div className="text-green-400 text-xs font-mono">NODES</div>
                    <div className="text-blue-400 font-mono text-sm">{connections}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`group relative px-4 py-3 rounded-lg transition-all duration-300 ${
                      item.color === "cyan"
                        ? "hover:bg-cyan-400/10 border border-cyan-400/30 hover:border-cyan-400/60"
                        : item.color === "purple"
                        ? "hover:bg-purple-400/10 border border-purple-400/30 hover:border-purple-400/60"
                        : item.color === "green"
                        ? "hover:bg-green-400/10 border border-green-400/30 hover:border-green-400/60"
                        : "hover:bg-blue-400/10 border border-blue-400/30 hover:border-blue-400/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className={`w-5 h-5 ${
                          item.color === "cyan"
                            ? "text-cyan-400"
                            : item.color === "purple"
                            ? "text-purple-400"
                            : item.color === "green"
                            ? "text-green-400"
                            : "text-blue-400"
                        }`}
                      />
                      <div>
                        <div className="text-gray-200 font-mono text-sm">{item.label}</div>
                        <div
                          className={`text-xs font-mono ${
                            item.color === "cyan"
                              ? "text-cyan-400/70"
                              : item.color === "purple"
                              ? "text-purple-400/70"
                              : item.color === "green"
                              ? "text-green-400/70"
                              : "text-blue-400/70"
                          }`}
                        >
                          {item.status}
                        </div>
                      </div>
                    </div>

                    {/* Neon Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.color === "cyan"
                          ? "bg-cyan-400/5 shadow-lg shadow-cyan-400/20"
                          : item.color === "purple"
                          ? "bg-purple-400/5 shadow-lg shadow-purple-400/20"
                          : item.color === "green"
                          ? "bg-green-400/5 shadow-lg shadow-green-400/20"
                          : "bg-blue-400/5 shadow-lg shadow-blue-400/20"
                      }`}
                    ></div>
                  </a>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-gray-900/80 rounded-lg px-3 py-2 border border-green-400/30">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs">SECURE</span>
                </div>
              </div>
              <div className="text-cyan-400 font-mono text-sm">{new Date().toLocaleTimeString()}</div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-900/80 border border-cyan-400/50 rounded-lg p-2 text-cyan-400 hover:border-cyan-400 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/30">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile System Status */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-gray-900/80 rounded-lg p-3 border border-cyan-400/30">
                  <div className="text-cyan-400 text-xs font-mono mb-1">FLOW</div>
                  <div className="text-green-400 font-mono text-sm">{dataFlow.toFixed(0)}%</div>
                </div>
                <div className="bg-gray-900/80 rounded-lg p-3 border border-purple-400/30">
                  <div className="text-purple-400 text-xs font-mono mb-1">LOAD</div>
                  <div className="text-yellow-400 font-mono text-sm">{systemLoad.toFixed(0)}%</div>
                </div>
                <div className="bg-gray-900/80 rounded-lg p-3 border border-green-400/30">
                  <div className="text-green-400 text-xs font-mono mb-1">NODES</div>
                  <div className="text-blue-400 font-mono text-sm">{connections}</div>
                </div>
              </div>

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 bg-gray-900/80 rounded-lg p-4 border transition-colors ${
                    item.color === "cyan"
                      ? "border-cyan-400/30 hover:border-cyan-400/60"
                      : item.color === "purple"
                      ? "border-purple-400/30 hover:border-purple-400/60"
                      : item.color === "green"
                      ? "border-green-400/30 hover:border-green-400/60"
                      : "border-blue-400/30 hover:border-blue-400/60"
                  }`}
                >
                  <item.icon
                    className={`w-6 h-6 ${
                      item.color === "cyan"
                        ? "text-cyan-400"
                        : item.color === "purple"
                        ? "text-purple-400"
                        : item.color === "green"
                        ? "text-green-400"
                        : "text-blue-400"
                    }`}
                  />
                  <div>
                    <div className="text-gray-200 font-mono text-sm">{item.label}</div>
                    <div
                      className={`text-xs font-mono ${
                        item.color === "cyan"
                          ? "text-cyan-400/70"
                          : item.color === "purple"
                          ? "text-purple-400/70"
                          : item.color === "green"
                          ? "text-green-400/70"
                          : "text-blue-400/70"
                      }`}
                    >
                      {item.status}
                    </div>
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
