"use client";

import React, { useEffect, useState } from "react";
import { User, Code, Palette, Mail, MapPin, Calendar, Coffee, Star, Zap, Heart, Sparkles, ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-bento-light py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-screen max-h-[900px]">
            {/* Main Profile Card - Large */}
            <div className="col-span-2 row-span-2 bg-bento-lighter rounded-2xl p-6 shadow-bento-lg hover:shadow-bento-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-bento-indigo-500 to-bento-purple-500 rounded-full flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-2xl font-display font-bold text-bento-primary mb-2">Your Name</h1>
              <p className="text-bento-secondary text-sm mb-4">Creative Developer</p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-bento-indigo-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-bento-indigo-600 transition-colors"
              >
                Get In Touch
              </button>
            </div>

            {/* Skills Card */}
            <div className="col-span-2 row-span-1 bg-bento-lighter rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-bento-primary">Skills</h3>
                <Code className="w-5 h-5 text-bento-indigo-500" />
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Next.js", "Tailwind"].map((skill) => (
                  <span key={skill} className="bg-bento-indigo-50 text-bento-indigo-700 px-3 py-1 rounded-lg text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Location Card */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-bento-emerald-500 to-bento-emerald-600 rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1 text-white">
              <MapPin className="w-8 h-8 mb-4" />
              <p className="text-sm font-medium opacity-90">Based in</p>
              <p className="text-lg font-display font-semibold">New York</p>
            </div>

            {/* Status Card */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-bento-orange-500 to-bento-orange-600 rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium">Available</p>
              <p className="text-xs opacity-90">for work</p>
            </div>

            {/* Project Stats */}
            <div className="col-span-2 row-span-1 bg-bento-lighter rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-bento-primary">Projects</h3>
                <Star className="w-5 h-5 text-bento-orange-500" />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-display font-bold text-bento-primary">50+</p>
                  <p className="text-xs text-bento-secondary">Completed</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-bento-primary">5</p>
                  <p className="text-xs text-bento-secondary">Years</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold text-bento-primary">∞</p>
                  <p className="text-xs text-bento-secondary">Ideas</p>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className="col-span-2 row-span-1 bg-gradient-to-br from-bento-purple-500 to-bento-pink-500 rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1 text-white">
              <Sparkles className="w-8 h-8 mb-4 opacity-80" />
              <p className="text-sm font-medium leading-relaxed">"Design is not just what it looks like — it's how it works."</p>
            </div>

            {/* Coffee Counter */}
            <div className="col-span-1 row-span-1 bg-gradient-to-br from-bento-blue-500 to-bento-blue-600 rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1 text-white">
              <Coffee className="w-8 h-8 mb-4" />
              <p className="text-2xl font-display font-bold">247</p>
              <p className="text-xs opacity-90">Cups this year</p>
            </div>

            {/* Time Card */}
            <div className="col-span-1 row-span-1 bg-bento-lighter rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1">
              <Calendar className="w-8 h-8 text-bento-indigo-500 mb-4" />
              <p className="text-sm font-medium text-bento-primary">Local Time</p>
              <p className="text-lg font-display font-semibold text-bento-secondary">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
            </div>

            {/* CTA Card */}
            <div className="col-span-2 row-span-1 bg-bento-primary rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-semibold mb-2">Let's work together</h3>
                  <p className="text-sm opacity-90">Ready to bring your ideas to life</p>
                </div>
                <button
                  onClick={() => scrollToSection("work")}
                  className="bg-white text-bento-primary p-3 rounded-xl hover:bg-bento-gray-100 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="col-span-2 row-span-1 bg-bento-lighter rounded-2xl p-6 shadow-bento hover:shadow-bento-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-semibold text-bento-primary">Connect</h3>
                <Heart className="w-5 h-5 text-bento-pink-500" />
              </div>
              <div className="flex space-x-3">
                <button className="bg-bento-gray-100 hover:bg-bento-gray-200 p-3 rounded-xl transition-colors">
                  <span className="text-sm font-medium">Twitter</span>
                </button>
                <button className="bg-bento-gray-100 hover:bg-bento-gray-200 p-3 rounded-xl transition-colors">
                  <span className="text-sm font-medium">GitHub</span>
                </button>
                <button className="bg-bento-gray-100 hover:bg-bento-gray-200 p-3 rounded-xl transition-colors">
                  <span className="text-sm font-medium">LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
