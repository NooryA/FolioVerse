"use client";

import { useState, useEffect } from "react";
import { Palette, Sparkles, Zap, ArrowRight, Star, Circle, Heart } from "lucide-react";

export function HeroSection() {
  const [gradientIndex, setGradientIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [mounted, setMounted] = useState(false);

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

  if (!mounted) return null;

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Dynamic Gradient Backgrounds */}
      <div className="absolute inset-0">
        {/* Main background gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[gradientIndex]} transition-all duration-3000 ease-in-out`} />

        {/* Overlay gradients for depth */}
        <div
          className={`absolute inset-0 bg-gradient-to-tr ${
            gradients[(gradientIndex + 1) % gradients.length]
          } opacity-70 transition-all duration-3000 ease-in-out`}
        />

        {/* Mouse-following gradient */}
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-white/20 to-transparent rounded-full blur-3xl transition-all duration-300 ease-out"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/30 to-purple-600/30 rounded-full blur-2xl animate-pulse animation-delay-0" />
        <div className="absolute top-40 right-32 w-80 h-80 bg-gradient-to-r from-yellow-400/30 to-orange-600/30 rounded-full blur-2xl animate-pulse animation-delay-1000" />
        <div className="absolute bottom-32 left-40 w-64 h-64 bg-gradient-to-r from-green-400/30 to-blue-600/30 rounded-full blur-2xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-400/30 to-pink-600/30 rounded-full blur-2xl animate-pulse animation-delay-3000" />
      </div>

      {/* Gradient mesh overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255, 0, 150, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 150, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(150, 0, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 150, 0, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 10% 80%, rgba(0, 150, 255, 0.3) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating gradient elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r ${gradients[i % gradients.length]} opacity-20 animate-float`}
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Gradient Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${gradients[gradientIndex]} rounded-full animate-spin-slow`} />
              <div
                className={`absolute inset-2 bg-gradient-to-r ${
                  gradients[(gradientIndex + 2) % gradients.length]
                } rounded-full animate-spin-reverse`}
              />
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <Palette className={`w-12 h-12 bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent`} />
              </div>
            </div>
          </div>

          {/* Main Heading with gradient animation */}
          <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
            <span
              className={`inline-block bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent animate-gradient-shift transition-all duration-3000`}
            >
              GRADIENT
            </span>
            <br />
            <span
              className={`inline-block bg-gradient-to-r ${
                textGradients[(gradientIndex + 1) % textGradients.length]
              } bg-clip-text text-transparent animate-gradient-shift animation-delay-500 transition-all duration-3000`}
            >
              OVERLOAD
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-bold text-white mb-12 drop-shadow-lg">Where colors collide and creativity explodes</p>

          {/* Gradient Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Sparkles, value: "∞", label: "Color Combinations", gradient: "from-pink-500 to-purple-600" },
              { icon: Zap, value: "100%", label: "Vibrancy Level", gradient: "from-yellow-500 to-orange-600" },
              { icon: Star, value: "24/7", label: "Gradient Magic", gradient: "from-green-500 to-blue-600" },
              { icon: Heart, value: "♾️", label: "Love for Design", gradient: "from-red-500 to-pink-600" },
            ].map((stat, index) => (
              <div key={index} className="group relative" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`bg-gradient-to-r ${stat.gradient} p-1 rounded-3xl group-hover:scale-110 transition-all duration-300`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                      <stat.icon className="w-8 h-8 text-white drop-shadow-lg" />
                    </div>
                    <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">{stat.value}</div>
                    <div className="text-sm font-semibold text-white/90">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Gradient Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              className={`group relative overflow-hidden bg-gradient-to-r ${gradients[gradientIndex]} hover:scale-105 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl flex items-center gap-3`}
              onClick={() => setGradientIndex((prev) => (prev + 1) % gradients.length)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Explore Gradients</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>

            <button
              className={`group relative overflow-hidden bg-gradient-to-r ${
                gradients[(gradientIndex + 3) % gradients.length]
              } hover:scale-105 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl flex items-center gap-3`}
            >
              <Circle className="w-6 h-6 group-hover:animate-spin" />
              <span>Mix Colors</span>
            </button>
          </div>

          {/* Gradient Palette Showcase */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-4xl mx-auto">
            {gradients.map((gradient, index) => (
              <button
                key={index}
                onClick={() => setGradientIndex(index)}
                className={`h-16 rounded-2xl bg-gradient-to-br ${gradient} hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl ${
                  index === gradientIndex ? "ring-4 ring-white ring-opacity-50 scale-110" : ""
                }`}
              />
            ))}
          </div>

          {/* Floating Gradient Text */}
          <div className="absolute top-20 left-20 transform -rotate-12 hidden lg:block">
            <span
              className={`text-4xl font-black bg-gradient-to-r ${
                textGradients[(gradientIndex + 2) % textGradients.length]
              } bg-clip-text text-transparent animate-bounce`}
            >
              WOW!
            </span>
          </div>

          <div className="absolute bottom-32 right-32 transform rotate-12 hidden lg:block">
            <span
              className={`text-3xl font-black bg-gradient-to-r ${
                textGradients[(gradientIndex + 4) % textGradients.length]
              } bg-clip-text text-transparent animate-pulse`}
            >
              AMAZING!
            </span>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
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
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
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
      `}</style>
    </section>
  );
}
