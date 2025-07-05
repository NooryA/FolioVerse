"use client";

import { useState, useEffect } from "react";
import { Play, Download, Zap, Eye, Gamepad2, Globe, Cpu, Brain, Headphones, ChevronDown } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentDimension, setCurrentDimension] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const dimensions = ["VIRTUAL REALITY", "AUGMENTED REALITY", "MIXED REALITY", "METAVERSE", "DIGITAL TWIN"];

  useEffect(() => {
    setMounted(true);

    // Simulate loading sequence
    setTimeout(() => setIsLoading(false), 2000);

    const interval = setInterval(() => {
      setCurrentDimension((prev) => (prev + 1) % dimensions.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Neural Grid Overlay */}
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

      {/* Loading Sequence */}
      {isLoading && (
        <div className="absolute inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-20 h-20 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-cyan-400 font-mono">INITIALIZING NEURAL INTERFACE...</p>
            </div>
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-pulse" style={{ width: "100%" }}></div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* System Status */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-lg border border-green-500/30 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-mono text-sm">NEURAL LINK ESTABLISHED</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block mb-4">
                ALEX CHEN
              </span>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent text-3xl md:text-4xl lg:text-5xl font-light">
                XR ARCHITECT
              </span>
            </h1>
          </div>

          {/* Dynamic Dimension Display */}
          <div className="mb-12">
            <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Brain className="w-8 h-8 text-cyan-400 animate-pulse" />
                <span className="text-gray-300 font-mono">CURRENT DIMENSION:</span>
                <Cpu className="w-8 h-8 text-purple-400 animate-pulse" />
              </div>
              <div className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {dimensions[currentDimension]}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
              Crafting immersive digital realities where imagination meets technology. Pioneering experiences that transcend the boundaries
              between
              <span className="text-cyan-400 font-semibold"> virtual </span>
              and
              <span className="text-purple-400 font-semibold"> physical </span>
              worlds.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Headphones className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">VR Experiences</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg border border-purple-500/30 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300 text-sm">AR Applications</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Globe className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">10M+</div>
              <div className="text-gray-300 text-sm">Users Reached</div>
            </div>
            <div className="bg-black/50 backdrop-blur-lg border border-pink-500/30 rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300">
              <div className="flex items-center justify-center mb-3">
                <Gamepad2 className="w-8 h-8 text-pink-400" />
              </div>
              <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm">Years XR</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 flex items-center gap-3"
            >
              <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Experience Portfolio</span>
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center gap-3"
            >
              <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Initialize Contact</span>
            </button>
          </div>

          {/* Specialization Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="bg-black/30 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Virtual Reality</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Immersive VR experiences using Unity, Unreal Engine, and WebXR. From training simulations to entertainment platforms.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Augmented Reality</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                AR applications for mobile and enterprise using ARCore, ARKit, and HoloLens. Bridging digital and physical worlds.
              </p>
            </div>

            <div className="bg-black/30 backdrop-blur-lg border border-green-500/20 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Metaverse Platforms</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Scalable virtual worlds with blockchain integration, NFTs, and social features for global communities.
              </p>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 opacity-60">
            <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
          </div>
          <div className="absolute top-40 right-32 opacity-60">
            <div className="w-6 h-6 border-2 border-purple-400 rounded-full animate-spin"></div>
          </div>
          <div className="absolute bottom-40 left-16 opacity-60">
            <div className="w-8 h-8 border-2 border-green-400 rotate-45 animate-pulse"></div>
          </div>
          <div className="absolute bottom-32 right-20 opacity-60">
            <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm mb-3 font-mono">EXPLORE DIMENSIONS</span>
              <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
              </div>
              <ChevronDown className="w-6 h-6 text-cyan-400 mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
}
