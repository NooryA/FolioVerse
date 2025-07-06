"use client";

import { useState, useEffect, useRef } from "react";
import { Droplets, Waves, Circle, Zap, ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([]);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const newRipple = {
          id: Date.now(),
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          timestamp: Date.now(),
        };
        setRipples((prev) => [...prev, newRipple]);

        // Remove ripple after animation
        setTimeout(() => {
          setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 1000);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!mounted) return null;

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 cursor-none"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main morphing blob */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-300/30 to-blue-400/30 blur-xl animate-blob"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "all 0.3s ease-out",
          }}
        />

        {/* Secondary blobs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-gradient-to-r from-green-300/20 to-cyan-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-6000" />
      </div>

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-4 h-4 bg-cyan-400/50 rounded-full animate-ping" />
          <div className="absolute inset-0 w-8 h-8 bg-cyan-300/30 rounded-full animate-ping animation-delay-200" />
          <div className="absolute inset-0 w-12 h-12 bg-cyan-200/20 rounded-full animate-ping animation-delay-400" />
        </div>
      ))}

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Liquid Icon */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full animate-ping animation-delay-500" />
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                <Droplets className="w-12 h-12 text-cyan-500 animate-bounce" />
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="inline-block animate-wave bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Liquid
            </span>
            <br />
            <span className="inline-block animate-wave animation-delay-200 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Interface
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Fluid designs that flow seamlessly across devices. Experience the future of liquid interfaces.
          </p>

          {/* Morphing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Waves, title: "Fluid Animations", desc: "Smooth transitions that feel natural" },
              { icon: Circle, title: "Morphing Elements", desc: "Components that adapt and transform" },
              { icon: Zap, title: "Interactive Magic", desc: "Touch, hover, and watch elements come alive" },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 p-8 hover:bg-white/30 transition-all duration-500 hover:scale-105 hover:rotate-1"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Liquid background effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 animate-pulse" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-700 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">{feature.desc}</p>
                </div>

                {/* Morphing border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-cyan-300/50 transition-all duration-500" />
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3">
              {/* Liquid ripple effect */}
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500" />
              <span className="relative z-10">Experience the Flow</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group relative overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-gray-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <Sparkles className="w-5 h-5 group-hover:animate-spin" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Liquid Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Fluid Design" },
              { value: "∞", label: "Possibilities" },
              { value: "60fps", label: "Smooth Animation" },
              { value: "0ms", label: "Lag Time" },
            ].map((stat, index) => (
              <div key={index} className="group text-center animate-fade-in-up" style={{ animationDelay: `${1 + index * 0.1}s` }}>
                <div className="relative">
                  <div className="text-3xl font-bold text-cyan-600 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
                </div>
                <div className="text-sm text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-6 h-6 bg-cyan-400/50 rounded-full pointer-events-none z-50 mix-blend-multiply transition-transform duration-150 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Liquid animations CSS */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(-50%, -50%) scale(1.1) rotate(90deg);
          }
          50% {
            transform: translate(-50%, -50%) scale(0.9) rotate(180deg);
          }
          75% {
            transform: translate(-50%, -50%) scale(1.05) rotate(270deg);
          }
        }
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
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
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
}
