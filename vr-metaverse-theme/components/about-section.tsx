"use client";

import { useState, useEffect } from "react";
import { Eye, Zap, Globe, Cpu, Headphones, Gamepad2, Brain, Infinity, Layers, Code, Palette, Rocket } from "lucide-react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("neural");
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const neuralData = [
    { label: "AI Integration", level: 95, color: "from-cyan-400 to-blue-500" },
    { label: "Machine Learning", level: 88, color: "from-purple-400 to-pink-500" },
    { label: "Neural Networks", level: 82, color: "from-green-400 to-cyan-500" },
    { label: "Computer Vision", level: 78, color: "from-orange-400 to-red-500" },
  ];

  const vrSkills = [
    { name: "VR Development", level: 95, icon: <Headphones className="w-6 h-6" />, desc: "Unity, Unreal, WebXR" },
    { name: "AR Experiences", level: 88, icon: <Eye className="w-6 h-6" />, desc: "ARCore, ARKit, 8th Wall" },
    { name: "Metaverse Platforms", level: 90, icon: <Globe className="w-6 h-6" />, desc: "Horizon, VRChat, Spatial" },
    { name: "3D Modeling", level: 85, icon: <Layers className="w-6 h-6" />, desc: "Blender, Maya, Cinema 4D" },
    { name: "Blockchain", level: 80, icon: <Infinity className="w-6 h-6" />, desc: "NFTs, Smart Contracts" },
    { name: "Game Engines", level: 92, icon: <Gamepad2 className="w-6 h-6" />, desc: "Unity, Unreal Engine" },
  ];

  const experiences = [
    {
      period: "2023 - Present",
      role: "Metaverse Architect",
      company: "Virtual Dimensions Inc.",
      achievement: "Leading VR experiences for Fortune 500 companies",
      tech: ["Unity", "WebXR", "Blockchain"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      period: "2021 - 2023",
      role: "AR/VR Developer",
      company: "Reality Labs",
      achievement: "Developed immersive training simulations",
      tech: ["Unreal Engine", "ARCore", "Three.js"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      period: "2020 - 2021",
      role: "XR Specialist",
      company: "Digital Frontiers",
      achievement: "Created award-winning AR marketing campaigns",
      tech: ["8th Wall", "WebGL", "A-Frame"],
      gradient: "from-green-500 to-cyan-600",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center animate-pulse">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neural Profile
            </h2>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center animate-pulse">
              <Cpu className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Pioneering the convergence of digital realities, crafting immersive experiences that bridge the gap between imagination and
            virtual worlds.
          </p>
        </div>

        {/* Profile Card */}
        <div className="mb-16">
          <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                <div className="relative w-64 h-64 mx-auto">
                  {/* Holographic Avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full border-2 border-cyan-400 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Avatar"
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent"></div>
                    {/* Scanning Lines */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
                  </div>

                  {/* Orbital Rings */}
                  <div className="absolute inset-0 border-2 border-purple-400/30 rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 border border-cyan-400/20 rounded-full animate-spin-reverse"></div>

                  {/* Status Indicators */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">Alex Chen</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white text-sm font-medium">
                      Metaverse Architect
                    </div>
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-medium">
                      VR Specialist
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  I architect digital realities where creativity meets cutting-edge technology. With 5+ years in VR/AR development, I've
                  crafted immersive experiences for global brands, bridging the physical and digital realms through innovative XR solutions.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400">50+</div>
                    <div className="text-gray-400 text-sm">VR Projects</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400">10M+</div>
                    <div className="text-gray-400 text-sm">Users Reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Neural Interface Tabs */}
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-2 flex gap-2">
              {["neural", "skills", "timeline"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  {tab === "neural" && "🧠 Neural Data"}
                  {tab === "skills" && "⚡ Skill Matrix"}
                  {tab === "timeline" && "🚀 Timeline"}
                </button>
              ))}
            </div>
          </div>

          {/* Neural Data */}
          {activeTab === "neural" && (
            <div className="grid md:grid-cols-2 gap-8">
              {neuralData.map((data, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white font-semibold">{data.label}</h4>
                    <span className="text-cyan-400 font-bold">{data.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${data.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${data.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills Matrix */}
          {activeTab === "skills" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vrSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold">{skill.name}</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{skill.desc}</p>
                  <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000"
                      style={{
                        width: hoveredSkill === index ? `${skill.level}%` : "0%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Timeline */}
          {activeTab === "timeline" && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="bg-black/50 backdrop-blur-lg border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                        <p className="text-green-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className={`px-3 py-1 bg-gradient-to-r ${exp.gradient} rounded-full text-white text-sm font-medium`}>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.achievement}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {index < experiences.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-px h-8 bg-gradient-to-b from-green-400 to-transparent"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Build the Future Together?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create immersive experiences that push the boundaries of what's possible in virtual and augmented reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
                <div className="flex items-center justify-center gap-2">
                  <Rocket className="w-5 h-5" />
                  <span>Start Project</span>
                </div>
              </button>
              <button className="border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-xl font-medium hover:bg-purple-500 hover:text-white transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>View Demo Reel</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
