"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, ArrowRight, Star, Heart, Zap } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Glass Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glass-subtle w-32 h-32 rounded-full absolute top-20 left-20 glass-float opacity-30" />
        <div className="glass-subtle w-24 h-24 rounded-full absolute top-40 right-32 glass-float-delayed opacity-20" />
        <div className="glass-subtle w-40 h-40 rounded-full absolute bottom-40 left-32 glass-float opacity-25" />
        <div className="glass-subtle w-28 h-28 rounded-full absolute bottom-20 right-20 glass-float-delayed opacity-30" />
      </div>

      {/* Mouse Follower */}
      <div
        className="absolute w-96 h-96 pointer-events-none opacity-20"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          transition: "all 0.3s ease",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="text-center">
          {/* Main Glass Card */}
          <div
            className={`glass-card max-w-4xl mx-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Floating Icons */}
            <div className="absolute -top-4 -left-4 glass-subtle w-12 h-12 rounded-full flex items-center justify-center glass-float">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 glass-subtle w-12 h-12 rounded-full flex items-center justify-center glass-float-delayed">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 glass-subtle w-12 h-12 rounded-full flex items-center justify-center glass-float">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-subtle w-12 h-12 rounded-full flex items-center justify-center glass-float-delayed">
              <Zap className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Greeting */}
              <div className="space-y-2">
                <p className="text-lg font-light text-white/80">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-display font-bold glass-text-glow">Your Name</h1>
              </div>

              {/* Title with Shimmer Effect */}
              <div className="glass-shimmer">
                <h2 className="text-2xl md:text-3xl font-medium text-white/90 font-display">Creative Developer & Designer</h2>
              </div>

              {/* Description */}
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                I craft beautiful digital experiences that blend stunning design with cutting-edge technology. Specializing in modern web
                applications, interactive interfaces, and user-centered design.
              </p>

              {/* Glass Divider */}
              <div className="glass-divider" />

              {/* Skills Floating Cards */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["React", "TypeScript", "Next.js", "Figma", "Tailwind"].map((skill, index) => (
                  <div
                    key={skill}
                    className="glass-subtle px-4 py-2 rounded-full text-sm text-white/80 glass-float"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button onClick={() => scrollToSection("work")} className="glass-button-primary flex items-center space-x-2 glass-glow">
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button onClick={() => scrollToSection("contact")} className="glass-button-secondary flex items-center space-x-2">
                  <span>Get In Touch</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-12">
            <div className="glass-light text-center p-6 rounded-2xl glass-float">
              <div className="text-2xl font-bold glass-text">5+</div>
              <div className="text-sm text-white/70">Years</div>
            </div>
            <div className="glass-light text-center p-6 rounded-2xl glass-float-delayed">
              <div className="text-2xl font-bold glass-text">50+</div>
              <div className="text-sm text-white/70">Projects</div>
            </div>
            <div className="glass-light text-center p-6 rounded-2xl glass-float">
              <div className="text-2xl font-bold glass-text">∞</div>
              <div className="text-sm text-white/70">Coffee</div>
            </div>
            <div className="glass-light text-center p-6 rounded-2xl glass-float-delayed">
              <div className="text-2xl font-bold glass-text">100%</div>
              <div className="text-sm text-white/70">Passion</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 glass-subtle inline-block px-4 py-2 rounded-full">
            <div className="flex items-center space-x-2 text-white/60">
              <span className="text-sm">Scroll to explore</span>
              <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-2 bg-white/30 rounded-full mt-1 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
