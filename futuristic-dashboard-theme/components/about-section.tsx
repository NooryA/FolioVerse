"use client";

import React, { useState, useEffect } from "react";

// Inline SVG Icons
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const BrainIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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

export default function AboutSection() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [systemLoad, setSystemLoad] = useState(0);

  const skills = [
    {
      name: "NEURAL NETWORKS",
      level: 95,
      description: "Advanced AI architecture and deep learning systems",
      icon: <BrainIcon className="w-6 h-6" />,
      color: "cyan",
    },
    {
      name: "QUANTUM COMPUTING",
      level: 88,
      description: "Quantum algorithm development and optimization",
      icon: <CpuIcon className="w-6 h-6" />,
      color: "purple",
    },
    {
      name: "CYBERSECURITY",
      level: 92,
      description: "Advanced encryption and security protocol design",
      icon: <ShieldIcon className="w-6 h-6" />,
      color: "green",
    },
    {
      name: "SYSTEM ARCHITECTURE",
      level: 90,
      description: "Distributed systems and cloud infrastructure",
      icon: <CodeIcon className="w-6 h-6" />,
      color: "blue",
    },
    {
      name: "PERFORMANCE OPTIMIZATION",
      level: 86,
      description: "High-performance computing and algorithmic efficiency",
      icon: <ZapIcon className="w-6 h-6" />,
      color: "yellow",
    },
  ];

  const experiences = [
    {
      year: "2024",
      title: "SENIOR SYSTEMS ARCHITECT",
      company: "CYBERTECH INDUSTRIES",
      description: "Leading development of next-generation AI systems",
      status: "ACTIVE",
    },
    {
      year: "2022",
      title: "QUANTUM DEVELOPER",
      company: "NEXUS CORPORATION",
      description: "Implemented quantum algorithms for cryptography",
      status: "COMPLETED",
    },
    {
      year: "2020",
      title: "AI RESEARCH ENGINEER",
      company: "DIGITAL HORIZON",
      description: "Developed neural network architectures for automation",
      status: "COMPLETED",
    },
    {
      year: "2019",
      title: "CYBERSECURITY SPECIALIST",
      company: "SECURE SYSTEMS LTD",
      description: "Designed advanced security protocols and systems",
      status: "COMPLETED",
    },
  ];

  const stats = [
    { label: "PROJECTS COMPLETED", value: "127", color: "cyan" },
    { label: "SYSTEMS OPTIMIZED", value: "89", color: "green" },
    { label: "UPTIME MAINTAINED", value: "99.9%", color: "blue" },
    { label: "SECURITY BREACHES", value: "0", color: "purple" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
      setSystemLoad(Math.random() * 100);
    }, 3000);

    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="about" className="min-h-screen bg-black py-20 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
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
        <div className="absolute top-40 left-40 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-6 py-3 mb-6">
            <div className="flex items-center gap-2">
              <UserIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">PROFILE ANALYSIS</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">SYSTEM PROFILE</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Advanced cybernetic systems architect with expertise in neural networks, quantum computing, and next-generation AI technologies.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Panel - Bio & Experience */}
          <div className="space-y-8">
            {/* Bio Panel */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <UserIcon className="w-6 h-6" />
                PERSONAL DATA
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Name</div>
                    <div className="text-white font-mono">Alex Cyber</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Classification</div>
                    <div className="text-cyan-400 font-mono">ARCHITECT</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Access Level</div>
                    <div className="text-green-400 font-mono">ULTRA</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">Location</div>
                    <div className="text-purple-400 font-mono">CYBERSPACE</div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide mb-2">Mission Statement</div>
                  <div className="text-gray-300 leading-relaxed">
                    To bridge the gap between human consciousness and digital reality through advanced AI systems and neural network
                    architectures that enhance human potential.
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">EXPERIENCE LOG</h3>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-2 border-cyan-400/30 pl-4 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-cyan-400 font-mono text-sm">{exp.year}</span>
                      <span
                        className={`px-2 py-1 text-xs font-mono rounded ${
                          exp.status === "ACTIVE" ? "bg-green-400/20 text-green-400" : "bg-gray-600/20 text-gray-400"
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>
                    <h4 className="text-white font-bold">{exp.title}</h4>
                    <div className="text-purple-400 text-sm font-mono">{exp.company}</div>
                    <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel - Skills & Stats */}
          <div className="space-y-8">
            {/* Skills Matrix */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                <CodeIcon className="w-6 h-6" />
                SKILL MATRIX
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                      activeSkill === index ? "border-cyan-400/50 bg-cyan-400/5" : "border-gray-700/50 hover:border-gray-600/50"
                    }`}
                    onClick={() => setActiveSkill(index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-lg ${
                            skill.color === "cyan"
                              ? "bg-cyan-500/20 text-cyan-400"
                              : skill.color === "purple"
                              ? "bg-purple-500/20 text-purple-400"
                              : skill.color === "green"
                              ? "bg-green-500/20 text-green-400"
                              : skill.color === "blue"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-yellow-500/20 text-yellow-400"
                          }`}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <div className="font-mono text-sm text-white">{skill.name}</div>
                          <div className="text-xs text-gray-400">{skill.description}</div>
                        </div>
                      </div>
                      <div
                        className={`font-mono text-sm ${
                          skill.color === "cyan"
                            ? "text-cyan-400"
                            : skill.color === "purple"
                            ? "text-purple-400"
                            : skill.color === "green"
                            ? "text-green-400"
                            : skill.color === "blue"
                            ? "text-blue-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {skill.level}%
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          skill.color === "cyan"
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                            : skill.color === "purple"
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : skill.color === "green"
                            ? "bg-gradient-to-r from-green-500 to-cyan-500"
                            : skill.color === "blue"
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                            : "bg-gradient-to-r from-yellow-500 to-orange-500"
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Statistics */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">PERFORMANCE METRICS</h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`text-3xl font-bold mb-2 ${
                        stat.color === "cyan"
                          ? "text-cyan-400"
                          : stat.color === "green"
                          ? "text-green-400"
                          : stat.color === "blue"
                          ? "text-blue-400"
                          : "text-purple-400"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Panel - Current Status */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">CURRENT STATUS</h3>
              <p className="text-gray-300">
                All systems operational. Neural networks synchronized. Ready for new challenges and innovations.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">ONLINE</div>
                <div className="text-xs text-gray-400">SYSTEM STATUS</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">{Math.floor(systemLoad)}%</div>
                <div className="text-xs text-gray-400">SYSTEM LOAD</div>
              </div>
              <div className="w-12 h-12 bg-green-400 rounded-full animate-pulse flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse"
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
