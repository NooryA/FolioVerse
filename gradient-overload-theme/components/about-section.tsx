"use client";

import { useState, useEffect } from "react";
import { User, Code, Palette, Zap, Star, Heart, Award, Target, Clock, Coffee } from "lucide-react";

export function AboutSection() {
  const [activeGradient, setActiveGradient] = useState(0);
  const [mounted, setMounted] = useState(false);

  const gradients = [
    "gradient-primary",
    "gradient-secondary",
    "gradient-accent",
    "gradient-rainbow-1",
    "gradient-rainbow-2",
    "gradient-animated-1",
    "gradient-animated-2",
    "gradient-animated-3",
  ];

  const skills = [
    { name: "React/Next.js", level: 95, gradient: "gradient-primary", icon: Code },
    { name: "TypeScript", level: 90, gradient: "gradient-secondary", icon: Zap },
    { name: "CSS/Tailwind", level: 98, gradient: "gradient-accent", icon: Palette },
    { name: "Node.js", level: 85, gradient: "gradient-rainbow-1", icon: Coffee },
    { name: "Design Systems", level: 92, gradient: "gradient-rainbow-2", icon: Star },
    { name: "Performance", level: 88, gradient: "gradient-animated-1", icon: Target },
  ];

  const experiences = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Innovation Corp",
      description: "Leading gradient-powered UI development",
      gradient: "gradient-primary",
    },
    {
      year: "2023",
      title: "Creative Developer",
      company: "Design Studio Pro",
      description: "Specialized in animated gradient experiences",
      gradient: "gradient-secondary",
    },
    {
      year: "2022",
      title: "Frontend Engineer",
      company: "Startup Inc",
      description: "Built colorful user interfaces",
      gradient: "gradient-accent",
    },
  ];

  const achievements = [
    { count: "50+", label: "Gradient Projects", gradient: "gradient-primary", icon: Palette },
    { count: "100k+", label: "Lines of Colorful Code", gradient: "gradient-secondary", icon: Code },
    { count: "15+", label: "Happy Clients", gradient: "gradient-accent", icon: Heart },
    { count: "3+", label: "Years Experience", gradient: "gradient-rainbow-1", icon: Award },
  ];

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveGradient((prev) => (prev + 1) % gradients.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0">
        <div className="gradient-animated-1 absolute inset-0 opacity-20" />
        <div className="gradient-animated-2 absolute inset-0 opacity-15" />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${gradients[i % gradients.length]} opacity-10 animate-gradient-float`}
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className={`w-20 h-20 rounded-full ${gradients[activeGradient]} p-1 animate-gradient-rotate`}>
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-gradient-1" />
              </div>
            </div>
          </div>

          <h2 className="text-6xl md:text-8xl font-black mb-6 text-gradient-rainbow animate-gradient-shift">ABOUT ME</h2>

          <p className="text-2xl md:text-3xl font-bold text-white/90 max-w-3xl mx-auto">
            I'm a passionate developer who believes in the power of
            <span className="text-gradient-2 animate-gradient-pulse"> gradients </span>
            to create stunning visual experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="card-gradient hover-scale-gradient">
              <h3 className="text-3xl font-bold text-gradient-1 mb-6">My Story</h3>
              <div className="space-y-4 text-white/90 text-lg leading-relaxed">
                <p>
                  Welcome to my gradient-overloaded world! I'm a frontend developer with an obsession for creating visually stunning, highly
                  interactive web experiences that push the boundaries of what's possible with modern CSS and JavaScript.
                </p>
                <p>
                  My journey started with a simple question: "How can I make this more colorful?" That curiosity led me down a rabbit hole
                  of gradient experimentation, animation studies, and performance optimization that I'm still exploring today.
                </p>
                <p>
                  When I'm not coding, you'll find me experimenting with new color combinations, studying the latest in web animation
                  techniques, or contributing to open-source projects that make the web more beautiful.
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="card-gradient hover-scale-gradient">
              <h3 className="text-3xl font-bold text-gradient-2 mb-6">Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Coffee, text: "Coffee addict ☕", gradient: "gradient-primary" },
                  { icon: Star, text: "Night owl 🌙", gradient: "gradient-secondary" },
                  { icon: Heart, text: "Design lover 💝", gradient: "gradient-accent" },
                  { icon: Zap, text: "Speed enthusiast ⚡", gradient: "gradient-rainbow-1" },
                ].map((fact, index) => (
                  <div key={index} className={`${fact.gradient} p-4 rounded-2xl text-white font-semibold flex items-center gap-3`}>
                    <fact.icon className="w-5 h-5" />
                    <span>{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div className="card-gradient hover-scale-gradient">
              <h3 className="text-3xl font-bold text-gradient-3 mb-6">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${skill.gradient} flex items-center justify-center`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-semibold text-lg">{skill.name}</span>
                      </div>
                      <span className="text-white/80 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-gradient hover-scale-gradient text-center">
                  <div className={`w-12 h-12 rounded-full ${achievement.gradient} mx-auto mb-4 flex items-center justify-center`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{achievement.count}</div>
                  <div className="text-white/80 font-semibold">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="card-gradient hover-scale-gradient">
          <h3 className="text-4xl font-bold text-gradient-rainbow text-center mb-12">Experience Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full gradient-rainbow-1 rounded-full"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full ${exp.gradient} animate-gradient-pulse`} />
                  </div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? "pr-12" : "pl-12"}`}>
                    <div className="glass-gradient p-6 rounded-2xl hover-scale-gradient">
                      <div className={`text-2xl font-bold ${exp.gradient} bg-clip-text text-transparent mb-2`}>{exp.year}</div>
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <p className="text-white/80 font-semibold mb-3">{exp.company}</p>
                      <p className="text-white/70">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block">
            <button className="btn-gradient gradient-rainbow-1 text-white font-bold text-xl px-12 py-6 rounded-full hover-scale-gradient shadow-gradient-1">
              Let's Create Something Amazing Together!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
