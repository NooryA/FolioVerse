"use client";

import { useState, useEffect } from "react";
import {
  Heart,
  Star,
  Zap,
  Sparkles,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Download,
  Share,
  MessageCircle,
  User,
  Palette,
  Code,
  Coffee,
  Moon,
  Sun,
} from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = [
    { name: "Design", icon: <Palette className="w-5 h-5" />, level: 95 },
    { name: "Development", icon: <Code className="w-5 h-5" />, level: 88 },
    { name: "Strategy", icon: <Zap className="w-5 h-5" />, level: 92 },
  ];

  const socialStats = [
    { label: "Followers", value: "12.5K", icon: <Heart className="w-4 h-4" /> },
    { label: "Projects", value: "150+", icon: <Star className="w-4 h-4" /> },
    { label: "Clients", value: "50+", icon: <User className="w-4 h-4" /> },
  ];

  const interactiveCards = [
    {
      title: "Creative Design",
      description: "Crafting beautiful and functional user experiences",
      color: "clay-card-primary",
      icon: <Palette className="w-8 h-8" />,
    },
    {
      title: "Smart Development",
      description: "Building robust applications with modern technologies",
      color: "clay-card-secondary",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Strategic Thinking",
      description: "Solving complex problems with innovative solutions",
      color: "clay-card-success",
      icon: <Zap className="w-8 h-8" />,
    },
  ];

  if (!mounted) return null;

  return (
    <section id="home" className="clay-section min-h-screen relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="clay-blob w-64 h-64 absolute top-20 left-10 clay-float"></div>
        <div className="clay-blob-secondary w-48 h-48 absolute top-40 right-20 clay-float-delayed"></div>
        <div className="clay-blob-success w-32 h-32 absolute bottom-20 left-1/4 clay-float-slow"></div>
        <div className="clay-blob w-40 h-40 absolute bottom-40 right-10 clay-float"></div>
      </div>

      {/* Navigation */}
      <nav className="clay-nav">
        <div className="font-clay text-2xl font-bold clay-text-gradient">ClayFolio</div>
        <div className="flex items-center gap-4">
          {["About", "Work", "Skills", "Contact"].map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="clay-nav-item">
              {item}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="clay-btn p-2">
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      <div className="clay-container pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="flex items-center gap-4">
              <div className="clay-badge-success clay-animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-2 inline-block"></div>
                Available for work
              </div>
              <div className="clay-badge">
                <Coffee className="w-3 h-3 mr-1 inline-block" />
                Fueled by coffee
              </div>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-6xl lg:text-7xl font-clay font-bold mb-6 leading-tight">
                Crafting
                <span className="clay-text-gradient block">Digital Magic</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                I'm a passionate designer and developer who transforms ideas into beautiful, interactive experiences that people love to
                use.
              </p>
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h3 className="font-clay text-lg font-semibold text-gray-700">What I Do Best</h3>
              {skills.map((skill, index) => (
                <div key={index} className="clay-card p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-600">{skill.icon}</div>
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="clay-progress">
                    <div className="clay-progress-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection("work")} className="clay-btn-primary group">
                <Sparkles className="w-5 h-5" />
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollToSection("contact")} className="clay-btn-secondary">
                <MessageCircle className="w-5 h-5" />
                Let's Chat
              </button>
            </div>

            {/* Social Stats */}
            <div className="flex gap-6">
              {socialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="clay-card p-4 mb-2">
                    <div className="flex items-center justify-center text-gray-600 mb-1">{stat.icon}</div>
                    <div className="font-clay font-bold text-lg text-gray-700">{stat.value}</div>
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive Elements */}
          <div className="space-y-8">
            {/* Main Profile Card */}
            <div className="clay-card text-center clay-float">
              <div className="clay-avatar-lg mx-auto mb-6">
                <User className="w-8 h-8" />
              </div>
              <h3 className="font-clay text-2xl font-bold text-gray-700 mb-2">Alex Creator</h3>
              <p className="text-gray-600 mb-6">Digital Designer & Developer</p>

              {/* Music Player UI */}
              <div className="clay-card-accent p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-left">
                    <div className="font-semibold">Creative Vibes</div>
                    <div className="text-sm opacity-80">Lo-fi Workspace Mix</div>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => setIsPlaying(!isPlaying)} className="clay-btn p-2 bg-white/20">
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <button className="clay-btn p-2 bg-white/20">
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="clay-progress">
                  <div className="clay-progress-bar" style={{ width: "60%" }}></div>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button className="clay-btn p-3">
                  <Download className="w-4 h-4" />
                </button>
                <button className="clay-btn p-3">
                  <Share className="w-4 h-4" />
                </button>
                <button className="clay-btn p-3">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Cards Carousel */}
            <div className="space-y-4">
              {interactiveCards.map((card, index) => (
                <div
                  key={index}
                  className={`${card.color} cursor-pointer transition-all duration-500 ${
                    activeCard === index ? "transform scale-105 opacity-100" : "opacity-75 hover:opacity-90"
                  }`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="opacity-80">{card.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-clay font-bold text-lg mb-1">{card.title}</h4>
                      <p className="text-sm opacity-90">{card.description}</p>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${activeCard === index ? "translate-x-1" : ""}`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Toggle */}
            <div className="clay-card">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-clay font-semibold text-gray-700">Available for Projects</h4>
                  <p className="text-sm text-gray-500">Currently accepting new work</p>
                </div>
                <div className="clay-toggle active">
                  <div className="clay-toggle-slider"></div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="flex justify-center gap-4">
              <div className="clay-badge-primary clay-animate-bounce" style={{ animationDelay: "0s" }}>
                ✨ Creative
              </div>
              <div className="clay-badge-success clay-animate-bounce" style={{ animationDelay: "0.5s" }}>
                🚀 Fast
              </div>
              <div className="clay-badge clay-animate-bounce" style={{ animationDelay: "1s" }}>
                💡 Innovative
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action Area */}
        <div className="mt-20 text-center">
          <div className="clay-card-secondary inline-block p-8">
            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <h3 className="font-clay text-2xl font-bold mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-md mx-auto">Let's collaborate and bring your wildest digital dreams to life!</p>
            <button onClick={() => scrollToSection("contact")} className="clay-btn-accent group">
              <Heart className="w-5 h-5" />
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Elements */}
      <div className="fixed bottom-8 right-8 space-y-4 z-50">
        <button className="clay-btn-primary p-4 rounded-full clay-float">
          <MessageCircle className="w-6 h-6" />
        </button>
        <button className="clay-btn-accent p-4 rounded-full clay-float-delayed">
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
