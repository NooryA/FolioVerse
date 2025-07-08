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
    { name: "React/Next.js", level: 95, gradient: "from-pink-500 via-red-500 to-orange-500", icon: Code },
    { name: "TypeScript", level: 90, gradient: "from-purple-500 via-indigo-500 to-blue-500", icon: Zap },
    { name: "CSS/Tailwind", level: 98, gradient: "from-green-500 via-teal-500 to-cyan-500", icon: Palette },
    { name: "Node.js", level: 85, gradient: "from-yellow-500 via-orange-500 to-red-500", icon: Coffee },
    { name: "Design Systems", level: 92, gradient: "from-indigo-500 via-purple-500 to-pink-500", icon: Star },
    { name: "Performance", level: 88, gradient: "from-teal-500 via-green-500 to-blue-500", icon: Target },
  ];

  const experiences = [
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Tech Innovation Corp",
      description: "Leading gradient-powered UI development with cutting-edge animations and interactions",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
      bgGradient: "from-pink-500/20 via-red-500/20 to-yellow-500/20",
      borderGradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      year: "2023",
      title: "Creative Developer",
      company: "Design Studio Pro",
      description: "Specialized in animated gradient experiences and interactive web installations",
      gradient: "from-purple-500 via-indigo-500 to-blue-500",
      bgGradient: "from-purple-500/20 via-indigo-500/20 to-blue-500/20",
      borderGradient: "from-purple-500 via-indigo-500 to-blue-500",
    },
    {
      year: "2022",
      title: "Frontend Engineer",
      company: "Startup Inc",
      description: "Built colorful user interfaces with modern frameworks and gradient design systems",
      gradient: "from-green-500 via-teal-500 to-cyan-500",
      bgGradient: "from-green-500/20 via-teal-500/20 to-cyan-500/20",
      borderGradient: "from-green-500 via-teal-500 to-cyan-500",
    },
  ];

  const achievements = [
    {
      count: "50+",
      label: "Gradient Projects",
      gradient: "from-pink-500 to-purple-600",
      textGradient: "from-pink-400 to-purple-400",
      icon: Palette,
    },
    {
      count: "100k+",
      label: "Lines of Colorful Code",
      gradient: "from-blue-500 to-cyan-600",
      textGradient: "from-blue-400 to-cyan-400",
      icon: Code,
    },
    { count: "15+", label: "Happy Clients", gradient: "from-red-500 to-pink-600", textGradient: "from-red-400 to-pink-400", icon: Heart },
    {
      count: "3+",
      label: "Years Experience",
      gradient: "from-green-500 to-blue-600",
      textGradient: "from-green-400 to-blue-400",
      icon: Award,
    },
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
    <section id="about" className="relative py-32 px-4 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient overlay */}
        <div className="gradient-animated-1 absolute inset-0 opacity-10" />
        <div className="gradient-animated-2 absolute inset-0 opacity-8" />

        {/* Enhanced floating gradient orbs */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${gradients[i % gradients.length]} opacity-8 animate-gradient-float`}
            style={{
              width: `${80 + Math.random() * 120}px`,
              height: `${80 + Math.random() * 120}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-8">
            <div className={`w-24 h-24 rounded-full ${gradients[activeGradient]} p-1 animate-gradient-rotate shadow-lg`}>
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <User className="w-12 h-12 text-gradient-1" />
              </div>
            </div>
          </div>

          <h2 className="text-7xl md:text-9xl lg:text-[8rem] font-black mb-8 text-gradient-rainbow animate-gradient-shift leading-none">
            ABOUT ME
          </h2>

          <p className="text-3xl md:text-4xl font-bold max-w-4xl mx-auto leading-relaxed">
            <span
              className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ backgroundSize: "200% 200%", textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              I'm a passionate developer who believes in the power of
            </span>
            <br />
            <span className="text-gradient-2 animate-gradient-pulse font-black"> gradients </span>
            <span
              className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent animate-gradient-shift font-black"
              style={{ backgroundSize: "200% 200%", textShadow: "0 2px 4px rgba(255, 255, 255, 0.9)" }}
            >
              to create stunning visual experiences
            </span>
          </p>
        </div>

        {/* Enhanced Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          {/* Left Column - Personal Info */}
          <div className="space-y-10">
            <div className="card-gradient hover-scale-gradient border border-white/20">
              <h3 className="text-4xl font-bold text-gradient-1 mb-8">My Story</h3>
              <div className="space-y-6 text-lg leading-relaxed">
                <p
                  className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 bg-clip-text text-transparent font-bold"
                  style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                >
                  Welcome to my gradient-overloaded world! I'm a frontend developer with an obsession for creating visually stunning, highly
                  interactive web experiences that push the boundaries of what's possible with modern CSS and JavaScript.
                </p>
                <p
                  className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent font-bold"
                  style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                >
                  My journey started with a simple question: "How can I make this more colorful?" That curiosity led me down a rabbit hole
                  of gradient experimentation, animation studies, and performance optimization that I'm still exploring today.
                </p>
                <p
                  className="bg-gradient-to-r from-gray-700 via-gray-900 to-gray-800 bg-clip-text text-transparent font-bold"
                  style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                >
                  When I'm not coding, you'll find me experimenting with new color combinations, studying the latest in web animation
                  techniques, or contributing to open-source projects that make the web more beautiful.
                </p>
              </div>
            </div>

            {/* Enhanced Fun Facts */}
            <div className="card-gradient hover-scale-gradient border border-white/20">
              <h3 className="text-4xl font-bold text-gradient-2 mb-8">Fun Facts</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Coffee, text: "Coffee addict ☕", gradient: "from-amber-500 to-orange-600" },
                  { icon: Star, text: "Night owl 🌙", gradient: "from-indigo-500 to-purple-600" },
                  { icon: Heart, text: "Design lover 💝", gradient: "from-pink-500 to-red-600" },
                  { icon: Zap, text: "Speed enthusiast ⚡", gradient: "from-yellow-500 to-orange-600" },
                ].map((fact, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${fact.gradient} p-6 rounded-2xl font-bold flex items-center gap-4 hover:scale-105 transition-all duration-300 shadow-lg border border-white/20`}
                  >
                    <fact.icon className="w-6 h-6 text-gray-900" style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }} />
                    <span className="text-lg text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                      {fact.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-10">
            <div className="card-gradient hover-scale-gradient border border-white/20">
              <h3 className="text-4xl font-bold text-gradient-3 mb-8">Skills & Expertise</h3>
              <div className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.gradient} flex items-center justify-center shadow-lg border border-white/20`}
                        >
                          <skill.icon
                            className="w-6 h-6 text-gray-900"
                            style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                          />
                        </div>
                        <span className={`font-bold text-xl bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className="font-black text-xl bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent"
                        style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden backdrop-blur-sm border border-white/10">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transition-all duration-1500 ease-out shadow-sm`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Achievement Stats */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-gradient hover-scale-gradient text-center border border-white/20">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.gradient} mx-auto mb-6 flex items-center justify-center shadow-lg border border-white/20`}
                  >
                    <achievement.icon
                      className="w-8 h-8 text-gray-900"
                      style={{ filter: "drop-shadow(0 1px 1px rgba(255, 255, 255, 0.8))" }}
                    />
                  </div>
                  <div className={`text-4xl font-black mb-3 bg-gradient-to-r ${achievement.textGradient} bg-clip-text text-transparent`}>
                    {achievement.count}
                  </div>
                  <div
                    className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent"
                    style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                  >
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COMPLETELY REDESIGNED Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-5xl font-bold text-gradient-rainbow text-center mb-16">Experience Journey</h3>

          <div className="relative max-w-6xl mx-auto">
            {/* Modern Timeline Container */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Card */}
                  <div
                    className={`relative bg-gradient-to-br ${exp.bgGradient} backdrop-blur-sm rounded-3xl p-8 border-2 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl`}
                    style={{
                      borderImage: `linear-gradient(45deg, ${exp.borderGradient
                        .replace("from-", "")
                        .replace("via-", "")
                        .replace("to-", "")
                        .split(" ")
                        .join(", ")}) 1`,
                    }}
                  >
                    {/* Year Badge */}
                    <div
                      className={`absolute -top-6 left-8 bg-gradient-to-r ${exp.gradient} px-6 py-3 rounded-full shadow-lg border-2 border-white/20`}
                    >
                      <span className="text-2xl font-black text-gray-900" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                        {exp.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-6">
                      <h4 className={`text-3xl font-black mb-3 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                        {exp.title}
                      </h4>
                      <p
                        className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent"
                        style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                      >
                        {exp.company}
                      </p>
                      <p
                        className="text-lg bg-gradient-to-r from-gray-800 to-gray-700 bg-clip-text text-transparent leading-relaxed font-bold"
                        style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}
                      >
                        {exp.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-r ${exp.gradient} animate-pulse`} />
                    <div className={`absolute bottom-4 right-4 w-6 h-6 rounded-full bg-gradient-to-r ${exp.gradient} opacity-50`} />

                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
                    />
                  </div>

                  {/* Connecting Line */}
                  {index < experiences.length - 1 && (
                    <div className="flex justify-center my-8">
                      <div className={`w-1 h-16 bg-gradient-to-b ${exp.gradient} rounded-full opacity-50`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="inline-block">
            <button className="btn-gradient gradient-rainbow-1 font-black text-2xl px-16 py-8 rounded-full hover-scale-gradient shadow-gradient-1 border-2 border-white/20 relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 text-gray-900 font-black" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                Let's Create Something Amazing Together!
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
