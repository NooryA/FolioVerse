"use client";

import React, { useState, useEffect } from "react";
import { User, Settings, Heart, Star, Code, Mail, Phone, MapPin } from "lucide-react";

export function HeroSection() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonPress = (buttonId: string) => {
    setActiveButton(buttonId);
    setTimeout(() => setActiveButton(null), 150);
  };

  return (
    <section className="min-h-screen bg-neu-bg dark:bg-neu-darkBg py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Main Profile Card */}
          <div className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu shadow-neu dark:shadow-neu-dark p-8 mb-8 animate-neu-float">
            <div className="text-center">
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-neu-surface dark:bg-neu-darkSurface rounded-full shadow-neu-inset dark:shadow-neu-dark-inset flex items-center justify-center mx-auto">
                  <User className="w-16 h-16 text-neu-accent" />
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neu-success rounded-full shadow-neu-sm dark:shadow-neu-dark-sm flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Name and Title */}
              <h1 className="text-4xl font-display font-semibold text-neu-textDark dark:text-neu-darkText mb-3">Your Name</h1>
              <p className="text-xl text-neu-textLight dark:text-neu-darkTextLight mb-8">Creative Developer & Designer</p>

              {/* Description */}
              <div className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu-sm shadow-neu-inset-sm dark:shadow-neu-dark-inset p-6 mb-8">
                <p className="text-neu-text dark:text-neu-darkTextLight leading-relaxed">
                  I craft beautiful, intuitive user experiences with a focus on clean design and smooth interactions. Specializing in modern
                  web technologies and user-centered design principles.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  className={`bg-neu-surface dark:bg-neu-darkSurface rounded-neu px-6 py-4 text-neu-textDark dark:text-neu-darkText font-medium transition-all duration-150 ${
                    activeButton === "contact"
                      ? "shadow-neu-pressed dark:shadow-neu-dark-pressed"
                      : "shadow-neu dark:shadow-neu-dark hover:shadow-neu-hover dark:hover:shadow-neu-dark-hover"
                  }`}
                  onMouseDown={() => handleButtonPress("contact")}
                >
                  <Mail className="w-5 h-5 inline-block mr-2" />
                  Get In Touch
                </button>

                <button
                  className={`bg-neu-surface dark:bg-neu-darkSurface rounded-neu px-6 py-4 text-neu-textDark dark:text-neu-darkText font-medium transition-all duration-150 ${
                    activeButton === "work"
                      ? "shadow-neu-pressed dark:shadow-neu-dark-pressed"
                      : "shadow-neu dark:shadow-neu-dark hover:shadow-neu-hover dark:hover:shadow-neu-dark-hover"
                  }`}
                  onMouseDown={() => handleButtonPress("work")}
                >
                  <Code className="w-5 h-5 inline-block mr-2" />
                  View Work
                </button>
              </div>
            </div>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Location Card */}
            <div className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu shadow-neu dark:shadow-neu-dark p-6 animate-neu-bounce">
              <div className="text-center">
                <div className="w-12 h-12 bg-neu-surface dark:bg-neu-darkSurface rounded-neu-sm shadow-neu-inset dark:shadow-neu-dark-inset flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-neu-accent" />
                </div>
                <h3 className="font-display font-semibold text-neu-textDark dark:text-neu-darkText mb-2">Location</h3>
                <p className="text-neu-textLight dark:text-neu-darkTextLight">New York, NY</p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu shadow-neu dark:shadow-neu-dark p-6 animate-neu-pulse">
              <div className="text-center">
                <div className="w-12 h-12 bg-neu-surface dark:bg-neu-darkSurface rounded-neu-sm shadow-neu-inset dark:shadow-neu-dark-inset flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-neu-warning" />
                </div>
                <h3 className="font-display font-semibold text-neu-textDark dark:text-neu-darkText mb-2">Experience</h3>
                <p className="text-neu-textLight dark:text-neu-darkTextLight">5+ Years</p>
              </div>
            </div>

            {/* Projects Card */}
            <div className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu shadow-neu dark:shadow-neu-dark p-6 animate-neu-float">
              <div className="text-center">
                <div className="w-12 h-12 bg-neu-surface dark:bg-neu-darkSurface rounded-neu-sm shadow-neu-inset dark:shadow-neu-dark-inset flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-neu-error" />
                </div>
                <h3 className="font-display font-semibold text-neu-textDark dark:text-neu-darkText mb-2">Projects</h3>
                <p className="text-neu-textLight dark:text-neu-darkTextLight">50+ Completed</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu shadow-neu dark:shadow-neu-dark p-8">
            <h2 className="text-2xl font-display font-semibold text-neu-textDark dark:text-neu-darkText mb-6 text-center">
              Skills & Technologies
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React", "TypeScript", "Next.js", "Node.js", "Figma", "Tailwind", "GraphQL", "Python"].map((skill, index) => (
                <div
                  key={skill}
                  className="bg-neu-surface dark:bg-neu-darkSurface rounded-neu-sm shadow-neu-inset-sm dark:shadow-neu-dark-inset p-4 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-neu-text dark:text-neu-darkTextLight font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Control Panel */}
          <div className="mt-8 bg-neu-surface dark:bg-neu-darkSurface rounded-neu shadow-neu dark:shadow-neu-dark p-6">
            <div className="flex justify-center space-x-6">
              {/* Settings Button */}
              <button
                className={`w-16 h-16 bg-neu-surface dark:bg-neu-darkSurface rounded-neu transition-all duration-150 ${
                  activeButton === "settings"
                    ? "shadow-neu-pressed dark:shadow-neu-dark-pressed"
                    : "shadow-neu-sm dark:shadow-neu-dark-sm hover:shadow-neu dark:hover:shadow-neu-dark"
                }`}
                onMouseDown={() => handleButtonPress("settings")}
              >
                <Settings className="w-8 h-8 text-neu-textLight dark:text-neu-darkTextLight mx-auto" />
              </button>

              {/* Phone Button */}
              <button
                className={`w-16 h-16 bg-neu-surface dark:bg-neu-darkSurface rounded-neu transition-all duration-150 ${
                  activeButton === "phone"
                    ? "shadow-neu-pressed dark:shadow-neu-dark-pressed"
                    : "shadow-neu-sm dark:shadow-neu-dark-sm hover:shadow-neu dark:hover:shadow-neu-dark"
                }`}
                onMouseDown={() => handleButtonPress("phone")}
              >
                <Phone className="w-8 h-8 text-neu-accent mx-auto" />
              </button>

              {/* Heart Button */}
              <button
                className={`w-16 h-16 bg-neu-surface dark:bg-neu-darkSurface rounded-neu transition-all duration-150 ${
                  activeButton === "heart"
                    ? "shadow-neu-pressed dark:shadow-neu-dark-pressed"
                    : "shadow-neu-sm dark:shadow-neu-dark-sm hover:shadow-neu dark:hover:shadow-neu-dark"
                }`}
                onMouseDown={() => handleButtonPress("heart")}
              >
                <Heart className="w-8 h-8 text-neu-error mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
