"use client";

import React, { useState, useEffect } from "react";
import { Activity, Cpu, Database, Shield, Zap, Eye, Terminal, Wifi, Signal, Power, TrendingUp, BarChart3 } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [cpuUsage, setCpuUsage] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [networkActivity, setNetworkActivity] = useState(0);
  const [systemStatus, setSystemStatus] = useState("OPTIMAL");
  const [dataStreams, setDataStreams] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);

    // Simulate real-time data
    const interval = setInterval(() => {
      setCpuUsage(Math.random() * 100);
      setMemoryUsage(Math.random() * 100);
      setNetworkActivity(Math.random() * 100);
      setDataStreams((prev) => {
        const newStreams = [...prev, Math.random() * 100].slice(-20);
        return newStreams;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Neon Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Dashboard Container */}
      <div className="relative z-10 min-h-screen p-4">
        {/* Top Status Bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <Power className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono text-sm">SYSTEM ONLINE</span>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-mono text-sm">SECURE</span>
              </div>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-4 py-2">
              <div className="flex items-center gap-2">
                <Signal className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-mono text-sm">CONNECTED</span>
              </div>
            </div>
          </div>
          <div className="text-cyan-400 font-mono text-xl">{new Date().toLocaleTimeString()} UTC</div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Left Panel - Profile */}
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full border-2 border-cyan-400 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    className="w-full h-full object-cover opacity-80 rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse border-2 border-black"></div>
              </div>

              <h1 className="text-3xl font-bold mb-2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">ALEX CYBER</span>
              </h1>
              <div className="text-cyan-400 font-mono mb-4">SYSTEM ARCHITECT</div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">ACCESS LEVEL:</span>
                  <span className="text-green-400">ADMIN</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">CLEARANCE:</span>
                  <span className="text-cyan-400">ULTRA</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">EXPERIENCE:</span>
                  <span className="text-purple-400">5+ YEARS</span>
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
                  <Terminal className="w-5 h-5" />
                  <span>ACCESS TERMINAL</span>
                </button>
                <button className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <Database className="w-5 h-5" />
                  <span>VIEW DATABASE</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - System Metrics */}
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
              <Activity className="w-6 h-6" />
              SYSTEM METRICS
            </h3>

            <div className="space-y-6">
              {/* CPU Usage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-300">CPU USAGE</span>
                  </div>
                  <span className="text-cyan-400 font-mono text-sm">{Math.floor(cpuUsage)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${cpuUsage}%` }}
                  />
                </div>
              </div>

              {/* Memory Usage */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-purple-400" />
                    <span className="text-sm text-gray-300">MEMORY</span>
                  </div>
                  <span className="text-purple-400 font-mono text-sm">{Math.floor(memoryUsage)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                    style={{ width: `${memoryUsage}%` }}
                  />
                </div>
              </div>

              {/* Network Activity */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-gray-300">NETWORK</span>
                  </div>
                  <span className="text-green-400 font-mono text-sm">{Math.floor(networkActivity)}%</span>
                </div>
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-1000"
                    style={{ width: `${networkActivity}%` }}
                  />
                </div>
              </div>

              {/* Data Visualization */}
              <div>
                <h4 className="text-sm text-gray-300 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-cyan-400" />
                  DATA FLOW
                </h4>
                <div className="flex items-end gap-1 h-16">
                  {dataStreams.map((value, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-t from-cyan-500 to-blue-500 flex-1 rounded-sm transition-all duration-300"
                      style={{ height: `${(value / 100) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dashboard Row */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">142%</div>
                <div className="text-xs text-gray-400">PERFORMANCE</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full w-4/5"></div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
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
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">856</div>
                <div className="text-xs text-gray-400">ENERGY UNITS</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 rounded-full w-3/4"></div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-xs text-gray-400">MONITORING</div>
              </div>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 rounded-full w-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Terminal Output */}
        <div className="mt-8 bg-black/80 backdrop-blur-sm border border-green-400/30 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-mono text-sm">SYSTEM TERMINAL</span>
          </div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-green-400">$ system_status --check</div>
            <div className="text-gray-300">✓ All systems operational</div>
            <div className="text-gray-300">✓ Neural networks synchronized</div>
            <div className="text-gray-300">✓ Quantum processors online</div>
            <div className="text-green-400">$ portfolio --display</div>
            <div className="text-cyan-400 animate-pulse">_ Loading portfolio data...</div>
          </div>
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
