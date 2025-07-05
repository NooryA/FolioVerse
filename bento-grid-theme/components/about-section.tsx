"use client";

import { useState, useEffect } from "react";
import { Code, Palette, Zap, Coffee, MapPin, Calendar, Star, Trophy, Users, Target } from "lucide-react";

export function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skills = [
    { name: "React", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Next.js", level: 88, color: "bg-black" },
    { name: "Node.js", level: 85, color: "bg-green-600" },
    { name: "Python", level: 80, color: "bg-yellow-500" },
    { name: "UI/UX", level: 75, color: "bg-purple-500" },
  ];

  const achievements = [
    { title: "CSS Design Awards", year: "2023", icon: <Trophy className="w-6 h-6" /> },
    { title: "100+ Projects", year: "2024", icon: <Target className="w-6 h-6" /> },
    { title: "Team Lead", year: "2023", icon: <Users className="w-6 h-6" /> },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Crafting digital experiences through innovative design and development</p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 gap-4 auto-rows-[120px]">
          {/* Profile Card - Large */}
          <div className="md:col-span-3 lg:col-span-4 md:row-span-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                    alt="Profile"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Alex Johnson</h3>
                  <p className="opacity-80">Full-Stack Developer</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                Passionate developer with 5+ years of experience creating innovative web solutions. I specialize in React, TypeScript, and
                modern web technologies.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Available</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-white/10 rounded-full" />
          </div>

          {/* Quick Stats */}
          <div className="md:col-span-3 lg:col-span-2 md:row-span-1 bg-blue-50 rounded-2xl p-4 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-blue-600">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <Code className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-2 md:row-span-1 bg-green-50 rounded-2xl p-4 border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-green-600">100+</p>
                <p className="text-sm text-gray-600">Projects Done</p>
              </div>
              <Target className="w-8 h-8 text-green-500" />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="md:col-span-3 lg:col-span-2 md:row-span-2 bg-white rounded-2xl p-4 border border-gray-200">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              Skills
            </h4>
            <div className="space-y-3">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${skill.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coffee Counter */}
          <div className="md:col-span-2 lg:col-span-2 md:row-span-1 bg-amber-50 rounded-2xl p-4 border border-amber-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-amber-600">∞</p>
                <p className="text-sm text-gray-600">Cups of Coffee</p>
              </div>
              <Coffee className="w-8 h-8 text-amber-500" />
            </div>
          </div>

          {/* Currently Learning */}
          <div className="md:col-span-4 lg:col-span-3 md:row-span-1 bg-purple-50 rounded-2xl p-4 border border-purple-100">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-purple-500" />
              Currently Learning
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Web3", "AI/ML", "Rust", "GraphQL"].map((tech) => (
                <span key={tech} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="md:col-span-2 lg:col-span-3 md:row-span-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Achievements
            </h4>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-2 bg-white/10 rounded-lg">
                  <div className="text-white/80">{achievement.icon}</div>
                  <div>
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs opacity-80">{achievement.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Passion */}
          <div className="md:col-span-3 lg:col-span-2 md:row-span-1 bg-rose-50 rounded-2xl p-4 border border-rose-100">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Palette className="w-5 h-5 text-rose-500" />
              Passion
            </h4>
            <p className="text-sm text-gray-600">Creating beautiful, functional interfaces that users love</p>
          </div>

          {/* Values */}
          <div className="md:col-span-3 lg:col-span-2 md:row-span-1 bg-teal-50 rounded-2xl p-4 border border-teal-100">
            <h4 className="font-semibold mb-2 text-teal-700">Values</h4>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Quality</span>
              <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs">Innovation</span>
            </div>
          </div>

          {/* Fun Fact */}
          <div className="md:col-span-6 lg:col-span-4 md:row-span-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl p-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold mb-1">Fun Fact</h4>
                <p className="text-sm opacity-90">I can debug code faster with coffee than without it! ☕</p>
              </div>
              <div className="text-4xl">🚀</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
