"use client";

import React, { useState, useEffect } from "react";

// Inline SVG Icons
const FolderIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-5l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
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

const SearchIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: "all", name: "ALL PROJECTS", count: 12 },
    { id: "ai", name: "AI SYSTEMS", count: 5 },
    { id: "quantum", name: "QUANTUM", count: 3 },
    { id: "security", name: "SECURITY", count: 4 },
  ];

  const projects = [
    {
      id: 1,
      title: "NEURAL MATRIX",
      category: "ai",
      status: "ACTIVE",
      progress: 95,
      description: "Advanced neural network for real-time pattern recognition and predictive analysis",
      technologies: ["TensorFlow", "Python", "CUDA"],
      startDate: "2024-01-15",
      endDate: "2024-12-31",
      priority: "HIGH",
      classification: "TOP SECRET",
      performance: { cpu: 87, memory: 62, accuracy: 99.2 },
    },
    {
      id: 2,
      title: "QUANTUM GATE",
      category: "quantum",
      status: "TESTING",
      progress: 78,
      description: "Quantum computing framework for encryption and optimization algorithms",
      technologies: ["Qiskit", "Python", "IBM Q"],
      startDate: "2023-09-20",
      endDate: "2024-06-30",
      priority: "CRITICAL",
      classification: "CLASSIFIED",
      performance: { cpu: 45, memory: 89, accuracy: 94.7 },
    },
    {
      id: 3,
      title: "CYBER SHIELD",
      category: "security",
      status: "DEPLOYED",
      progress: 100,
      description: "Advanced cybersecurity system with AI-powered threat detection",
      technologies: ["React", "Node.js", "ML"],
      startDate: "2023-05-10",
      endDate: "2024-02-15",
      priority: "HIGH",
      classification: "SECRET",
      performance: { cpu: 72, memory: 55, accuracy: 98.9 },
    },
    {
      id: 4,
      title: "DATA NEXUS",
      category: "ai",
      status: "PLANNING",
      progress: 15,
      description: "Distributed AI system for large-scale data processing and analytics",
      technologies: ["Spark", "Scala", "Kubernetes"],
      startDate: "2024-03-01",
      endDate: "2024-11-30",
      priority: "MEDIUM",
      classification: "CONFIDENTIAL",
      performance: { cpu: 23, memory: 34, accuracy: 85.3 },
    },
    {
      id: 5,
      title: "BLOCKCHAIN CORE",
      category: "security",
      status: "ACTIVE",
      progress: 67,
      description: "Quantum-resistant blockchain infrastructure for secure transactions",
      technologies: ["Solidity", "Go", "IPFS"],
      startDate: "2023-11-01",
      endDate: "2024-08-15",
      priority: "HIGH",
      classification: "RESTRICTED",
      performance: { cpu: 56, memory: 78, accuracy: 96.1 },
    },
    {
      id: 6,
      title: "QUANTUM CIPHER",
      category: "quantum",
      status: "RESEARCH",
      progress: 42,
      description: "Next-generation quantum encryption and decryption algorithms",
      technologies: ["Q#", "C++", "Azure"],
      startDate: "2024-02-01",
      endDate: "2024-10-31",
      priority: "CRITICAL",
      classification: "TOP SECRET",
      performance: { cpu: 38, memory: 67, accuracy: 91.4 },
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "text-green-400 bg-green-400/20";
      case "TESTING":
        return "text-yellow-400 bg-yellow-400/20";
      case "DEPLOYED":
        return "text-blue-400 bg-blue-400/20";
      case "PLANNING":
        return "text-purple-400 bg-purple-400/20";
      case "RESEARCH":
        return "text-cyan-400 bg-cyan-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "CRITICAL":
        return "text-red-400";
      case "HIGH":
        return "text-orange-400";
      case "MEDIUM":
        return "text-yellow-400";
      case "LOW":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="projects" className="min-h-screen bg-black py-20 relative overflow-hidden">
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
        <div className="absolute top-40 right-40 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-black/50 backdrop-blur-sm border border-cyan-400/50 rounded-lg px-6 py-3 mb-6">
            <div className="flex items-center gap-2">
              <DatabaseIcon className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-mono text-sm">PROJECT DATABASE</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">MISSION ARCHIVE</span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Classified project database containing advanced research initiatives, AI systems, and quantum computing developments.
          </p>
        </div>

        {/* Control Panel */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-4">
              {/* Search */}
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="SEARCH DATABASE..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-black/50 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none font-mono text-sm"
                />
              </div>

              {/* Classification Filter */}
              <select className="bg-black/50 border border-gray-600 rounded-lg px-4 py-2 text-cyan-400 focus:border-cyan-400 focus:outline-none font-mono text-sm">
                <option>ALL CLEARANCE</option>
                <option>TOP SECRET</option>
                <option>SECRET</option>
                <option>CLASSIFIED</option>
                <option>CONFIDENTIAL</option>
              </select>
            </div>

            <div className="text-cyan-400 font-mono text-sm">{filteredProjects.length} RECORDS FOUND</div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                  activeFilter === category.id
                    ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/50"
                    : "bg-gray-800/50 text-gray-400 border border-gray-600/50 hover:border-gray-500/50"
                }`}
              >
                {category.name} [{category.count}]
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${
                selectedProject === project.id ? "border-cyan-400/70 bg-cyan-400/5" : ""
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                    <CodeIcon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-1 text-xs font-mono rounded ${getStatusColor(project.status)}`}>{project.status}</span>
                      <span className={`text-xs font-mono ${getPriorityColor(project.priority)}`}>{project.priority}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan-400 font-mono">{project.progress}%</div>
                  <div className="text-xs text-gray-400 uppercase">COMPLETE</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              {/* Project Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs font-mono border border-gray-600/50">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expanded Details */}
              {selectedProject === project.id && (
                <div className="border-t border-gray-600/50 pt-4 mt-4 space-y-4">
                  {/* Timeline */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">Start Date</div>
                      <div className="text-cyan-400 font-mono text-sm">{project.startDate}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">End Date</div>
                      <div className="text-cyan-400 font-mono text-sm">{project.endDate}</div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide mb-3">Performance Metrics</div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-cyan-400 font-mono">{project.performance.cpu}%</div>
                        <div className="text-xs text-gray-400">CPU USAGE</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-400 font-mono">{project.performance.memory}%</div>
                        <div className="text-xs text-gray-400">MEMORY</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-400 font-mono">{project.performance.accuracy}%</div>
                        <div className="text-xs text-gray-400">ACCURACY</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-mono text-sm hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2">
                      <ExternalLinkIcon className="w-4 h-4" />
                      ACCESS
                    </button>
                    <button className="flex-1 border border-purple-500 text-purple-400 px-4 py-2 rounded-lg font-mono text-sm hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2">
                      <FolderIcon className="w-4 h-4" />
                      DETAILS
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Statistics */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-black/50 backdrop-blur-sm border border-green-400/30 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckIcon className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 font-mono mb-2">8</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Completed</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-3xl font-bold text-yellow-400 font-mono mb-2">4</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">In Progress</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <DatabaseIcon className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-3xl font-bold text-cyan-400 font-mono mb-2">127</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Total Projects</div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-purple-400/30 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CodeIcon className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-purple-400 font-mono mb-2">98.9%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Floating Data Points */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
