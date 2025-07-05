"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

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
    <section id="home" className="min-h-screen flex items-center justify-center section-padding">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Greeting */}
          <p className="text-fluid-lg text-minimal-accent mb-6 font-light">Hello, I'm</p>

          {/* Name */}
          <h1 className="text-fluid-4xl minimal-heading text-minimal-primary mb-8 leading-tight">Your Name</h1>

          {/* Title */}
          <h2 className="text-fluid-2xl text-minimal-secondary mb-12 font-light leading-relaxed">
            Product Designer & Frontend Developer
            <br />
            <span className="text-minimal-accent">Creating thoughtful digital experiences</span>
          </h2>

          {/* Description */}
          <p className="text-fluid-lg text-minimal-accent max-w-2xl mx-auto mb-16 leading-relaxed">
            I specialize in crafting user-centered designs and bringing them to life with clean, performant code. Currently focused on
            design systems and accessible web experiences.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button onClick={() => scrollToSection("work")} className="minimal-button group flex items-center space-x-2">
              <span>View My Work</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button onClick={() => scrollToSection("contact")} className="minimal-button-outline flex items-center space-x-2">
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Brief Stats or Info */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center text-center">
            <div className="flex flex-col">
              <span className="text-2xl font-light minimal-heading text-minimal-primary">5+</span>
              <span className="text-sm text-minimal-accent">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light minimal-heading text-minimal-primary">50+</span>
              <span className="text-sm text-minimal-accent">Projects Completed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-light minimal-heading text-minimal-primary">∞</span>
              <span className="text-sm text-minimal-accent">Coffee Consumed</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("about")}
            className="text-minimal-accent hover:text-minimal-primary transition-colors duration-200 flex flex-col items-center space-y-2"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
            <ChevronDown size={16} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
