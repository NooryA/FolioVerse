"use client";

import { useState, useEffect } from "react";
import { Palette, Sparkles, Zap, ArrowRight, Star, Circle, Heart } from "lucide-react";

export function HeroSection() {
  const [gradientIndex, setGradientIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [mounted, setMounted] = useState(false);
  const [isColorMixing, setIsColorMixing] = useState(false);

  const gradients = [
    "from-pink-500 via-red-500 to-yellow-500",
    "from-purple-400 via-pink-500 to-red-500",
    "from-green-400 via-blue-500 to-purple-600",
    "from-yellow-400 via-red-500 to-pink-500",
    "from-indigo-400 via-purple-500 to-pink-500",
    "from-green-500 via-teal-500 to-blue-500",
    "from-orange-400 via-pink-500 to-purple-600",
    "from-cyan-400 via-blue-500 to-purple-600",
  ];

  const textGradients = [
    "from-pink-600 via-purple-600 to-indigo-600",
    "from-red-500 via-yellow-500 to-pink-500",
    "from-green-500 via-blue-500 to-purple-500",
    "from-yellow-500 via-orange-500 to-red-500",
    "from-indigo-500 via-purple-500 to-pink-500",
    "from-teal-500 via-green-500 to-blue-500",
    "from-orange-500 via-red-500 to-pink-500",
    "from-blue-500 via-indigo-500 to-purple-500",
  ];

  useEffect(() => {
    setMounted(true);

    // Auto-cycle gradients
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 3000);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMixColors = () => {
    setIsColorMixing(true);
    // Rapidly cycle through gradients for mixing effect
    const mixInterval = setInterval(() => {
      setGradientIndex((prev) => Math.floor(Math.random() * gradients.length));
    }, 100);

    // Stop mixing after 2 seconds
    setTimeout(() => {
      clearInterval(mixInterval);
      setIsColorMixing(false);
      setGradientIndex(Math.floor(Math.random() * gradients.length));
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <section id="home" className="min-h-screen relative overflow-hidden pt-32">
      {/* Enhanced gradient background layers */}
      <div className="absolute inset-0 z-0">
        {/* Mouse-following gradient with enhanced effect */}
        <div
          className="absolute w-[500px] h-[500px] bg-gradient-radial from-white/10 via-white/5 to-transparent rounded-full blur-3xl transition-all duration-500 ease-out"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Enhanced animated gradient orbs with better positioning */}
        <div className="absolute top-32 left-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-purple-600/20 rounded-full blur-3xl animate-gradient-float animation-delay-0" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-yellow-400/20 to-orange-600/20 rounded-full blur-3xl animate-gradient-float animation-delay-1000" />
        <div className="absolute bottom-40 left-32 w-72 h-72 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-gradient-float animation-delay-2000" />
        <div className="absolute bottom-52 right-32 w-88 h-88 bg-gradient-to-r from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-gradient-float animation-delay-3000" />

        {/* Additional atmospheric orbs */}
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/15 to-blue-600/15 rounded-full blur-2xl animate-gradient-float animation-delay-4000" />
        <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-r from-red-400/15 to-pink-600/15 rounded-full blur-2xl animate-gradient-float animation-delay-5000" />
      </div>

      {/* Enhanced gradient mesh overlay */}
      <div
        className="absolute inset-0 opacity-20 z-1"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 15%, rgba(255, 0, 150, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 85% 15%, rgba(0, 255, 150, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(150, 0, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 85% 85%, rgba(255, 150, 0, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 15% 85%, rgba(0, 150, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 20%, rgba(255, 100, 200, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 30% 80%, rgba(100, 255, 200, 0.3) 0%, transparent 50%)
          `,
          backgroundSize: "100% 100%",
          filter: "blur(1px)",
        }}
      />

      {/* Enhanced floating gradient elements */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${gradients[i % gradients.length]} opacity-15 animate-gradient-float`}
            style={{
              width: `${15 + Math.random() * 30}px`,
              height: `${15 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${6 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Gradient Icon */}
          <div className="relative mb-12">
            <div className="w-40 h-40 mx-auto relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${gradients[gradientIndex]} rounded-full animate-spin-slow shadow-lg`} />
              <div
                className={`absolute inset-2 bg-gradient-to-r ${
                  gradients[(gradientIndex + 2) % gradients.length]
                } rounded-full animate-spin-reverse shadow-lg`}
              />
              <div className="absolute inset-4 bg-gradient-to-r from-white to-gray-100 rounded-full flex items-center justify-center shadow-inner">
                <Palette className={`w-16 h-16 bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent`} />
              </div>
              {/* Enhanced glow effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${gradients[gradientIndex]} rounded-full blur-xl opacity-50 animate-gradient-pulse`}
              />
            </div>
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black mb-12 leading-none">
            <span
              className={`inline-block bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent animate-gradient-shift transition-all duration-3000 drop-shadow-lg`}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 20px rgba(255, 107, 107, 0.3))",
              }}
            >
              GRADIENT
            </span>
            <br />
            <span
              className={`inline-block bg-gradient-to-r ${
                textGradients[(gradientIndex + 1) % textGradients.length]
              } bg-clip-text text-transparent animate-gradient-shift animation-delay-500 transition-all duration-3000 drop-shadow-lg`}
              style={{
                backgroundSize: "200% 200%",
                filter: "drop-shadow(0 0 20px rgba(78, 205, 196, 0.3))",
              }}
            >
              OVERLOAD
            </span>
          </h1>

          {/* Enhanced Subtitle with Better Text Colors */}
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 drop-shadow-lg">
            <span
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ backgroundSize: "200% 200%", textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              Where colors collide and creativity
            </span>
            <br />
            <span
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              {" "}
              explodes with pure magic
            </span>
          </p>

          {/* Enhanced Gradient Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Sparkles, value: "∞", label: "Color Combinations", gradient: "from-pink-500 to-purple-600" },
              { icon: Zap, value: "100%", label: "Vibrancy Level", gradient: "from-yellow-500 to-orange-600" },
              { icon: Star, value: "24/7", label: "Gradient Magic", gradient: "from-green-500 to-blue-600" },
              { icon: Heart, value: "♾️", label: "Love for Design", gradient: "from-red-500 to-pink-600" },
            ].map((stat, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                <div
                  className={`bg-gradient-to-r ${stat.gradient} p-1 rounded-3xl group-hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20">
                    <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                      <stat.icon className={`w-10 h-10 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} />
                    </div>
                    <div className={`text-4xl font-black mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-semibold text-gray-800">{stat.label}</div>
                  </div>
                </div>
                {/* Enhanced glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl -z-10`}
                />
              </div>
            ))}
          </div>

          {/* Enhanced Interactive Gradient Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-24">
            <button
              className={`group relative overflow-hidden bg-gradient-to-r ${gradients[gradientIndex]} hover:scale-110 px-12 py-6 rounded-full font-bold text-xl transition-all duration-500 hover:shadow-2xl flex items-center gap-4 border-2 border-white/20`}
              onClick={() => setGradientIndex((prev) => (prev + 1) % gradients.length)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                Explore Gradients
              </span>
              <ArrowRight className="w-7 h-7 relative z-10 group-hover:translate-x-3 transition-transform duration-500 text-gray-900" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            </button>

            <button
              className={`group relative overflow-hidden bg-gradient-to-r ${
                gradients[(gradientIndex + 3) % gradients.length]
              } hover:scale-110 px-12 py-6 rounded-full font-bold text-xl transition-all duration-500 hover:shadow-2xl flex items-center gap-4 border-2 border-white/20 ${
                isColorMixing ? "animate-pulse" : ""
              }`}
              onClick={handleMixColors}
              disabled={isColorMixing}
            >
              <Circle
                className={`w-7 h-7 transition-transform duration-500 ${
                  isColorMixing ? "animate-spin" : "group-hover:animate-spin"
                } text-gray-900`}
              />
              <span className="text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                {isColorMixing ? "Mixing Colors..." : "Mix Colors"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </div>

          {/* Enhanced Gradient Palette Showcase with Better Spacing */}
          <div className="mb-32">
            <h3
              className="text-3xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-8 font-black"
              style={{ textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              Interactive Gradient Palette
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-5xl mx-auto">
              {gradients.map((gradient, index) => (
                <button
                  key={index}
                  onClick={() => setGradientIndex(index)}
                  className={`h-20 rounded-3xl bg-gradient-to-br ${gradient} hover:scale-125 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl border-2 border-white/20 ${
                    index === gradientIndex ? "ring-4 ring-white ring-opacity-70 scale-125 shadow-2xl" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Floating Gradient Text */}
          <div className="absolute top-32 left-20 transform -rotate-12 hidden lg:block">
            <span
              className={`text-6xl font-black bg-gradient-to-r ${
                textGradients[(gradientIndex + 2) % textGradients.length]
              } bg-clip-text text-transparent animate-gradient-bounce`}
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 107, 107, 0.5))",
              }}
            >
              WOW!
            </span>
          </div>

          <div className="absolute bottom-40 right-32 transform rotate-12 hidden lg:block">
            <span
              className={`text-5xl font-black bg-gradient-to-r ${
                textGradients[(gradientIndex + 4) % textGradients.length]
              } bg-clip-text text-transparent animate-gradient-pulse`}
              style={{
                filter: "drop-shadow(0 0 10px rgba(78, 205, 196, 0.5))",
              }}
            >
              AMAZING!
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) rotate(120deg);
          }
          66% {
            transform: translateY(15px) rotate(240deg);
          }
        }

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

        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
          background-size: 200% 200%;
        }

        .animate-gradient-float {
          animation: gradient-float 8s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }

        .animation-delay-0 {
          animation-delay: 0s;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-5000 {
          animation-delay: 5s;
        }
      `}</style>
    </section>
  );
}
