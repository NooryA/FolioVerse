"use client";

import React, { useState, useEffect, useRef } from "react";
import { Rocket, Star, Orbit, Sparkles, Navigation, Globe2, Moon, Sun } from "lucide-react";

export function HeroSection() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate random stars
  useEffect(() => {
    const starArray = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setStars(starArray);
  }, []);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;

      document.querySelectorAll(".parallax").forEach((el: any) => {
        const speed = el.dataset.speed || 1;
        el.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen bg-space-void relative overflow-hidden">
      {/* Animated starfield background */}
      <div className="absolute inset-0 bg-space-gradient opacity-80"></div>

      {/* Twinkling stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-space-starlight animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating planets */}
      <div
        className="absolute top-20 right-20 w-32 h-32 bg-planet-gradient rounded-full shadow-glow-orange animate-float-space parallax"
        data-speed="0.5"
      >
        <div className="absolute inset-2 bg-space-mars rounded-full opacity-80"></div>
      </div>

      <div
        className="absolute bottom-20 left-20 w-24 h-24 bg-space-neptune rounded-full shadow-glow-blue animate-orbit parallax"
        data-speed="0.8"
      >
        <div className="absolute inset-1 bg-space-uranus rounded-full opacity-60"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated rocket ship */}
          <div className={`inline-block mb-8 transition-all duration-1000 ${isLaunched ? "translate-y-[-100vh]" : "animate-float-space"}`}>
            <div className="relative">
              <Rocket className="w-20 h-20 text-space-stardust transform rotate-[-45deg]" />
              {isLaunched && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-20 bg-gradient-to-b from-space-jupiter via-space-mars to-transparent animate-pulse"></div>
                </div>
              )}
            </div>
          </div>

          {/* Glowing title */}
          <h1 className="text-6xl md:text-8xl font-space font-bold text-space-stardust mb-4 animate-pulse-glow">
            <span className="bg-nebula-gradient bg-clip-text text-transparent">SPACE EXPLORER</span>
          </h1>

          {/* Subtitle with typewriter effect */}
          <p className="text-2xl md:text-3xl font-tech text-space-comet mb-8 tracking-wider">
            <span className="inline-block animate-hyperspeed">→</span> Developer • Designer • Astronaut{" "}
            <span className="inline-block animate-hyperspeed">←</span>
          </p>

          {/* Mission status */}
          <div className="mb-12 inline-flex items-center gap-4 px-6 py-3 bg-space-console rounded-space border border-space-galaxy shadow-inner-glow">
            <Sparkles className="w-5 h-5 text-space-aurora animate-twinkle" />
            <span className="font-mono text-space-success">STATUS: READY FOR LAUNCH</span>
            <Sparkles className="w-5 h-5 text-space-aurora animate-twinkle" />
          </div>

          {/* Navigation buttons - planetary system */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <button
              onClick={() => setIsLaunched(!isLaunched)}
              className="group relative px-8 py-4 bg-space-button rounded-space font-tech font-bold text-space-stardust shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">LAUNCH PORTFOLIO</span>
              <div className="absolute inset-0 bg-wormhole rounded-space opacity-0 group-hover:opacity-100 animate-wormhole transition-opacity"></div>
            </button>

            <button className="px-8 py-4 border-2 border-space-galaxy text-space-comet rounded-space font-tech font-bold hover:bg-space-galaxy hover:text-space-void transition-all duration-300 hover:shadow-glow-blue">
              <Navigation className="inline-block w-5 h-5 mr-2" />
              EXPLORE PROJECTS
            </button>
          </div>

          {/* Orbital stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, label: "Missions", value: "42", color: "text-space-supernova" },
              { icon: Orbit, label: "Orbits", value: "∞", color: "text-space-galaxy" },
              { icon: Globe2, label: "Planets", value: "7", color: "text-space-earth" },
              { icon: Moon, label: "Moons", value: "23", color: "text-space-comet" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-space-console/50 backdrop-blur-space rounded-space p-6 border border-space-galaxy/30 hover:border-space-galaxy transition-all duration-300 hover:shadow-glow-sm animate-constellation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 animate-rotate-slow`} />
                <p className="text-3xl font-space font-bold text-space-stardust mb-1">{stat.value}</p>
                <p className="text-sm font-tech text-space-textMuted uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Wormhole portal */}
          <div className="mt-16 inline-block">
            <div className="w-40 h-40 mx-auto rounded-full bg-wormhole animate-wormhole shadow-holo relative">
              <div className="absolute inset-4 rounded-full bg-space-void/50 backdrop-blur"></div>
              <div className="absolute inset-8 rounded-full bg-space-quasar/30 animate-pulse"></div>
              <Sun className="absolute inset-0 m-auto w-12 h-12 text-space-supernova animate-rotate-slow" />
            </div>
            <p className="mt-4 text-space-textMuted font-mono text-sm">WORMHOLE TO CONTACT</p>
          </div>
        </div>
      </div>

      {/* Drifting asteroid */}
      <div className="absolute top-1/2 w-8 h-8 bg-space-console rounded-full shadow-glow animate-drift"></div>
    </section>
  );
}
