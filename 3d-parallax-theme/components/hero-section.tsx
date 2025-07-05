"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Star, Sparkles } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) return null;

  // Calculate parallax transforms based on scroll
  const parallaxBg = scrollY * 0.5;
  const parallaxContent = scrollY * 0.8;
  const parallaxParticles = scrollY * 0.3;

  // Calculate mouse-based 3D transforms
  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
  const mouseParallaxX = (mouseX - centerX) * 0.01;
  const mouseParallaxY = (mouseY - centerY) * 0.01;

  return (
    <section className="min-h-screen relative overflow-hidden parallax-container">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="gradient-orb orb-primary w-96 h-96 top-20 left-20 floating-element"
          style={{
            transform: `translate(${mouseParallaxX * 30}px, ${mouseParallaxY * 30}px) translateZ(${parallaxBg}px)`,
          }}
        />
        <div
          className="gradient-orb orb-secondary w-64 h-64 top-1/2 right-20 floating-element"
          style={{
            transform: `translate(${mouseParallaxX * -20}px, ${mouseParallaxY * -20}px) translateZ(${parallaxBg * 0.8}px)`,
          }}
        />
        <div
          className="gradient-orb orb-accent w-80 h-80 bottom-20 left-1/3 floating-element"
          style={{
            transform: `translate(${mouseParallaxX * 25}px, ${mouseParallaxY * 25}px) translateZ(${parallaxBg * 1.2}px)`,
          }}
        />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle floating-element"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              background: `hsl(${Math.random() * 360}, 70%, 60%)`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              transform: `translateZ(${Math.random() * 300}px) translateY(${parallaxParticles}px)`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div
          className="text-center max-w-6xl mx-auto"
          style={{
            transform: `translateY(${parallaxContent}px) rotateX(${mouseParallaxY * 2}deg) rotateY(${mouseParallaxX * 2}deg)`,
          }}
        >
          {/* Floating Icons */}
          <div className="absolute -top-20 -left-20 orbiting-element">
            <Star className="w-8 h-8 text-purple-400" />
          </div>
          <div className="absolute -top-16 -right-16 orbiting-element" style={{ animationDelay: "2s" }}>
            <Sparkles className="w-6 h-6 text-pink-400" />
          </div>
          <div className="absolute -bottom-16 -left-16 orbiting-element" style={{ animationDelay: "4s" }}>
            <Star className="w-6 h-6 text-indigo-400" />
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-3d preserve-3d">
            <span className="block text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text">ALEX</span>
            <span className="block text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text">SMITH</span>
          </h1>

          {/* Subtitle */}
          <div className="depth-card mb-12 max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              3D Frontend Developer
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Creating immersive digital experiences with cutting-edge 3D web technologies, React, and modern design principles.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="depth-card text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="depth-card text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="depth-card text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-2">100+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              className="button-3d text-lg px-8 py-4"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View My Work
            </button>
            <button
              className="button-3d text-lg px-8 py-4"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pulsing-element">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400" />
    </section>
  );
}
