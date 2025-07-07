"use client";

import React, { useState, useEffect } from "react";
import SystemMetrics from "./system-metrics";

// Inline SVG Icons
const ActivityIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const CpuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3v2m6-2v2M9 19v2m6-2v2m5-18v4m0 12v4m-4-16h4m-4 12h4M7 3H3v4m16 0V3h-4m4 16v-4M7 21H3v-4"
    />
  </svg>
);

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const TerminalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const WifiIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    />
  </svg>
);

const SignalIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const PowerIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
    />
  </svg>
);

const TrendingUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const BarChart3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-circuit"></div>
        </div>

        {/* Morphing Geometric Shapes */}
        <div className="absolute inset-0">
          <div className="geometric-shape shape-1"></div>
          <div className="geometric-shape shape-2"></div>
          <div className="geometric-shape shape-3"></div>
        </div>

        {/* Energy Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="energy-grid"></div>
        </div>

        {/* Pulsing Orbs */}
        <div className="absolute inset-0">
          <div className="energy-orb orb-1"></div>
          <div className="energy-orb orb-2"></div>
          <div className="energy-orb orb-3"></div>
          <div className="energy-orb orb-4"></div>
        </div>

        {/* Matrix Code Rain */}
        <div className="absolute inset-0 opacity-10">
          <div className="matrix-rain"></div>
        </div>

        {/* Glitch Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glitch-overlay"></div>
        </div>
      </div>

      {/* Futuristic Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-cyan-400/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-mono text-xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">CYBER.DASH</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-cyan-400 hover:text-white transition-colors font-mono text-sm">
                PROFILE
              </a>
              <a href="#projects" className="text-cyan-400 hover:text-white transition-colors font-mono text-sm">
                PROJECTS
              </a>
              <a href="#contact" className="text-cyan-400 hover:text-white transition-colors font-mono text-sm">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Dashboard Container */}
      <div className="relative z-10 min-h-screen p-4 pt-20">
        {/* Top Status Bar */}
        <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <PowerIcon className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono text-sm">SYSTEM ONLINE</span>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <ShieldIcon className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-mono text-sm">SECURE</span>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <SignalIcon className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-mono text-sm">CONNECTED</span>
              </div>
            </div>
          </div>
          <div className="text-cyan-400 font-mono text-xl">{new Date().toLocaleTimeString()} UTC</div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Left Panel - Enhanced Profile */}
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 relative overflow-hidden">
            {/* Bio-Metric Scanner Lines */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="scanner-line"></div>
              <div className="scanner-line-2"></div>
            </div>

            <div className="text-center mb-6 relative">
              {/* Enhanced Profile Picture */}
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full border-2 border-cyan-400 relative overflow-hidden">
                  {/* Hexagonal Pattern Overlay */}
                  <div className="absolute inset-0 hexagon-pattern opacity-30"></div>

                  {/* Profile Avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/30 to-purple-500/30 rounded-full flex items-center justify-center relative z-10">
                    <span className="text-4xl font-bold text-cyan-400">AC</span>
                  </div>

                  {/* Holographic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-full"></div>

                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 to-purple-400 rotating-border"></div>
                </div>

                {/* Status Indicators */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-black status-indicator"></div>
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-blue-400 rounded-full border border-black pulse-indicator"></div>
              </div>

              {/* Identity Information */}
              <h1 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ALEX CYBER</span>
              </h1>
              <div className="text-cyan-400 font-mono text-lg mb-1">SYSTEM ARCHITECT</div>
              <div className="text-xs text-gray-400 font-mono mb-4">ID: CYB-2024-7749 | NEURAL-LINK: ACTIVE</div>

              {/* Compact Info Grid */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-black/30 rounded px-3 py-2">
                  <div className="text-xs text-gray-400">ACCESS LEVEL</div>
                  <div className="text-green-400 font-bold text-sm">OMEGA-ADMIN</div>
                </div>
                <div className="bg-black/30 rounded px-3 py-2">
                  <div className="text-xs text-gray-400">CLEARANCE</div>
                  <div className="text-cyan-400 font-bold text-sm">ULTRA</div>
                </div>
                <div className="bg-black/30 rounded px-3 py-2">
                  <div className="text-xs text-gray-400">EXPERIENCE</div>
                  <div className="text-purple-400 font-bold text-sm">8+ YEARS</div>
                </div>
                <div className="bg-black/30 rounded px-3 py-2">
                  <div className="text-xs text-gray-400">NEURAL SYNC</div>
                  <div className="text-green-400 font-bold text-sm">99.7%</div>
                </div>
              </div>

              {/* Specializations Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                <span className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full px-3 py-1 text-xs text-cyan-400">
                  QUANTUM AI
                </span>
                <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full px-3 py-1 text-xs text-purple-400">
                  CYBERSECURITY
                </span>
                <span className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-400/30 rounded-full px-3 py-1 text-xs text-green-400">
                  NEURAL NET
                </span>
                <span className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 rounded-full px-3 py-1 text-xs text-orange-400">
                  BLOCKCHAIN
                </span>
              </div>

              {/* Quick Status */}
              <div className="flex justify-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></div>
                  <span className="text-gray-400">NEURAL:</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full pulse-dot"></div>
                  <span className="text-gray-400">QUANTUM:</span>
                  <span className="text-blue-400">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel - Main Display */}
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">DASHBOARD</span>
              </h2>
              <div className="text-cyan-400 font-mono text-lg mb-6">NEURAL NETWORK INTERFACE</div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Advanced cybernetic systems architect specializing in
                <span className="text-cyan-400 font-semibold"> neural networks</span>,
                <span className="text-purple-400 font-semibold"> quantum computing</span>, and
                <span className="text-green-400 font-semibold"> AI integration</span>.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/50 border border-green-400/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400 mb-1">127</div>
                  <div className="text-xs text-gray-400 uppercase">Projects Compiled</div>
                </div>
                <div className="bg-black/50 border border-blue-400/30 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400 mb-1">99.9%</div>
                  <div className="text-xs text-gray-400 uppercase">Uptime Rate</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
                  <TerminalIcon className="w-5 h-5" />
                  <span>ACCESS TERMINAL</span>
                </button>
                <button className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <DatabaseIcon className="w-5 h-5" />
                  <span>VIEW DATABASE</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - System Metrics */}
          <SystemMetrics />
        </div>

        {/* Bottom Dashboard Row */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <TrendingUpIcon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">142%</div>
                <div className="text-xs text-gray-400">PERFORMANCE</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full performance-bar"></div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <ShieldIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">100%</div>
                <div className="text-xs text-gray-400">SECURITY</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full w-full"></div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <ZapIcon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">856</div>
                <div className="text-xs text-gray-400">ENERGY UNITS</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full energy-bar"></div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <EyeIcon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs text-gray-400">MONITORING</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full monitoring-bar"></div>
            </div>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="mt-8 bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <TerminalIcon className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-mono text-sm">SYSTEM TERMINAL</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-green-400">$ system_status --check</div>
            <div className="text-gray-300">✓ All systems operational</div>
            <div className="text-gray-300">✓ Neural networks synchronized</div>
            <div className="text-gray-300">✓ Quantum processors online</div>
            <div className="text-green-400">$ portfolio --display</div>
            <div className="text-cyan-400 typing-effect">_ Loading portfolio data...</div>
          </div>
        </div>
      </div>
    </section>
  );
}
