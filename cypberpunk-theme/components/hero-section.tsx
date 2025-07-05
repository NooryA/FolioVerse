"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Zap, Code, Terminal, Cpu } from "lucide-react";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const texts = ["Full Stack Developer", "React Specialist", "Next.js Expert", "TypeScript Ninja", "Cyberpunk Coder"];

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (typedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (typedText.length > 0) {
        const timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setIsTyping(true);
      }
    }
  }, [typedText, isTyping, currentTextIndex, texts]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyber-primary/30 rotate-45 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 border-2 border-cyber-secondary/30 rotate-12 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-cyber-accent/30 rotate-90 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-12 h-12 border-2 border-neon-pink/30 rotate-180 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        {/* Cyber Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-primary/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyber-secondary/20 to-transparent"></div>
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-cyber-accent/20 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Glitch Effect Title */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-8xl font-bold font-cyber mb-4 relative">
            <span className="cyber-text block animate-pulse-neon">CYBER</span>
            <span className="text-white block relative">
              <span className="absolute inset-0 text-cyber-secondary opacity-70 animate-glitch" data-text="PORTFOLIO">
                PORTFOLIO
              </span>
              <span
                className="absolute inset-0 text-cyber-accent opacity-50 animate-glitch"
                data-text="PORTFOLIO"
                style={{ animationDelay: "0.1s" }}
              >
                PORTFOLIO
              </span>
              PORTFOLIO
            </span>
          </h1>
        </div>

        {/* Animated Subtitle */}
        <div className="mb-8">
          <div className="text-2xl sm:text-3xl font-mono text-cyber-primary mb-4">
            <span className="text-gray-300">&gt; I am a </span>
            <span className="cyber-text font-bold">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge technology and cyberpunk aesthetics. Specializing in React, Next.js, and creating
            immersive web applications that push the boundaries of what's possible.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="cyber-border p-4 bg-cyber-dark/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyber-primary">5+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="cyber-border p-4 bg-cyber-dark/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyber-secondary">50+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="cyber-border p-4 bg-cyber-dark/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-cyber-accent">100%</div>
            <div className="text-sm text-gray-400">Client Satisfaction</div>
          </div>
          <div className="cyber-border p-4 bg-cyber-dark/50 backdrop-blur-sm">
            <div className="text-2xl font-bold text-neon-green">24/7</div>
            <div className="text-sm text-gray-400">Coding Mode</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection("projects")}
            className="neon-button px-8 py-4 font-bold text-lg flex items-center space-x-2 group"
          >
            <Code size={20} />
            <span>VIEW MY WORK</span>
            <Zap size={20} className="group-hover:animate-pulse" />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 font-bold text-lg border-2 border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10 hover:shadow-lg hover:shadow-cyber-secondary/20 transition-all duration-300 flex items-center space-x-2"
          >
            <Terminal size={20} />
            <span>CONTACT ME</span>
          </button>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex justify-center items-center space-x-8 mb-12 opacity-70">
          <div className="flex items-center space-x-2 text-gray-400">
            <Cpu size={20} />
            <span className="text-sm">React</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Cpu size={20} />
            <span className="text-sm">Next.js</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Cpu size={20} />
            <span className="text-sm">TypeScript</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Cpu size={20} />
            <span className="text-sm">Node.js</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="text-cyber-primary animate-bounce hover:text-cyber-secondary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Cyber Orbs */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-cyber-primary rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-6 h-6 bg-cyber-secondary rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-cyber-accent rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
    </section>
  );
}
