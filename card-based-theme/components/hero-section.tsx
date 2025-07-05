"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Heart, Star, Sparkles, Code, Trophy } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const heroCards = [
    {
      title: "Creative Developer",
      subtitle: "Building Digital Experiences",
      description: "Passionate about creating beautiful, functional applications",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: Code,
      stats: { projects: 24, likes: 1.2 },
    },
    {
      title: "UI/UX Designer",
      subtitle: "Crafting User Journeys",
      description: "Designing intuitive interfaces that users love",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      icon: Sparkles,
      stats: { projects: 18, likes: 856 },
    },
    {
      title: "Problem Solver",
      subtitle: "Innovative Solutions",
      description: "Turning complex challenges into elegant solutions",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: Trophy,
      stats: { projects: 32, likes: 2.1 },
    },
  ];

  const socialCards = [
    { icon: Github, label: "GitHub", color: "bg-gray-800", count: "42 repos" },
    { icon: Linkedin, label: "LinkedIn", color: "bg-blue-600", count: "500+ connections" },
    { icon: Mail, label: "Email", color: "bg-red-500", count: "Contact me" },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Hero Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Primary Profile Card */}
          <div className="lg:col-span-2 relative group">
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-gray-100 p-8 h-full relative overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-32 translate-x-32 opacity-50"></div>

              {/* Profile Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                        alt="Profile"
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2">Alex Johnson</h1>
                    <p className="text-xl text-gray-600 mb-4">Full-Stack Developer & Designer</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>4.9 rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 fill-red-400 text-red-400" />
                        <span>2.1k likes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  I'm passionate about creating beautiful, functional digital experiences that make a difference. With expertise in modern
                  web technologies and a keen eye for design, I bring ideas to life.
                </p>

                {/* Action Cards */}
                <div className="flex flex-wrap gap-4">
                  <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <span>View Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:border-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <Download className="w-5 h-5" />
                    <span>Download CV</span>
                  </button>
                </div>
              </div>

              {/* Card Stack Effect */}
              <div className="absolute inset-0 bg-white rounded-3xl shadow-lg border border-gray-200 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gray-50 rounded-3xl shadow-md border border-gray-100 transform translate-x-4 translate-y-4 -z-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
            </div>
          </div>

          {/* Rotating Skills Cards */}
          <div className="space-y-6">
            {heroCards.map((card, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeCard === index ? "scale-105 z-10" : "scale-100 hover:scale-102"
                }`}
                onClick={() => setActiveCard(index)}
              >
                <div
                  className={`bg-white rounded-2xl shadow-lg border-2 p-6 ${
                    activeCard === index ? `${card.bgColor} ${card.borderColor} shadow-xl` : "border-gray-100 hover:shadow-xl"
                  } transition-all duration-300 relative overflow-hidden`}
                >
                  {/* Active Indicator */}
                  {activeCard === index && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  )}

                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{card.title}</h3>
                      <p className="text-sm text-gray-500">{card.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{card.description}</p>

                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{card.stats.projects} projects</span>
                    <div className="flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-red-400 text-red-400" />
                      <span>{card.stats.likes}k</span>
                    </div>
                  </div>

                  {/* Card Stack Effect */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-200 transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialCards.map((social, index) => (
            <div key={index} className="group relative cursor-pointer">
              <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 hover:shadow-xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${social.color} rounded-xl flex items-center justify-center shadow-lg`}>
                    <social.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{social.label}</h3>
                    <p className="text-sm text-gray-500">{social.count}</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <span className="text-white text-xs font-bold">•</span>
                </div>

                {/* Card Stack Effect */}
                <div className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-200 transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Stats Cards */}
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Projects", value: "74", color: "bg-blue-500" },
              { label: "Clients", value: "32", color: "bg-green-500" },
              { label: "Awards", value: "8", color: "bg-purple-500" },
              { label: "Experience", value: "5y", color: "bg-orange-500" },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 text-center hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                  <div className={`w-8 h-8 ${stat.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{stat.value}</span>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">{stat.label}</p>

                  {/* Mini Stack Effect */}
                  <div className="absolute inset-0 bg-gray-50 rounded-xl shadow-sm transform translate-x-0.5 translate-y-0.5 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
