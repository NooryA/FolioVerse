"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, Zap, Hash, Square } from "lucide-react";

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [blink, setBlink] = useState(true);

  const words = ["DEVELOPER", "DESIGNER", "CREATOR", "BUILDER", "MAKER"];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);

    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(wordInterval);
      clearInterval(blinkInterval);
    };
  }, [words.length]);

  return (
    <section id="home" className="brutal-section min-h-screen flex items-center justify-center bg-brutal-secondary">
      <div className="brutal-container">
        <div className="text-center space-y-8">
          {/* WARNING BANNER */}
          <div className="brutal-card-red flex items-center justify-center space-x-4 mb-8">
            <AlertTriangle size={32} />
            <span className="brutal-heading text-2xl">UNDER CONSTRUCTION</span>
            <AlertTriangle size={32} />
          </div>

          {/* MAIN TITLE */}
          <div className="space-y-4">
            <h1 className="brutal-title text-6xl md:text-8xl lg:text-9xl text-brutal-primary">YOUR NAME</h1>
            <div className="brutal-divider-red"></div>
          </div>

          {/* ROTATING TITLE */}
          <div className="flex items-center justify-center space-x-4">
            <Hash size={40} className="text-brutal-primary" />
            <h2 className="brutal-heading text-3xl md:text-4xl text-brutal-primary">
              {words[currentWord]}
              <span className={`ml-2 ${blink ? "opacity-100" : "opacity-0"}`}>█</span>
            </h2>
            <Hash size={40} className="text-brutal-primary" />
          </div>

          {/* DESCRIPTION BOX */}
          <div className="brutal-card-yellow max-w-2xl mx-auto">
            <p className="brutal-body text-lg">
              WARNING: THIS PORTFOLIO CONTAINS EXTREME LEVELS OF CREATIVITY AND TECHNICAL SKILL. PROCEED WITH CAUTION. SIDE EFFECTS MAY
              INCLUDE: INCREASED HIRING INTEREST, SPONTANEOUS PROJECT COLLABORATION, AND GENERAL AMAZEMENT.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="brutal-grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="brutal-card-blue text-center">
              <div className="brutal-heading text-3xl">5+</div>
              <div className="brutal-body text-sm">YEARS</div>
            </div>
            <div className="brutal-card-red text-center">
              <div className="brutal-heading text-3xl">50+</div>
              <div className="brutal-body text-sm">PROJECTS</div>
            </div>
            <div className="brutal-card-yellow text-center">
              <div className="brutal-heading text-3xl">∞</div>
              <div className="brutal-body text-sm">COFFEE</div>
            </div>
            <div className="brutal-card text-center">
              <div className="brutal-heading text-3xl">100%</div>
              <div className="brutal-body text-sm">EFFORT</div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView()}
              className="brutal-button-red flex items-center space-x-2"
            >
              <Zap size={20} />
              <span>SEE MY WORK</span>
              <Zap size={20} />
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
              className="brutal-button-yellow flex items-center space-x-2"
            >
              <Square size={20} />
              <span>HIRE ME NOW</span>
              <Square size={20} />
            </button>
          </div>

          {/* SKILLS MARQUEE */}
          <div className="brutal-card bg-brutal-primary text-brutal-secondary overflow-hidden">
            <div className="flex space-x-8 animate-pulse">
              <span className="brutal-mono text-lg whitespace-nowrap">
                REACT.JS • TYPESCRIPT • NODE.JS • PYTHON • FIGMA • PHOTOSHOP • HTML • CSS • JAVASCRIPT • NEXT.JS • TAILWIND
              </span>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="mt-16">
            <div className="brutal-card-red inline-block">
              <div className="brutal-heading text-sm">SCROLL DOWN FOR MORE</div>
              <div className="text-center mt-2">
                <span className="brutal-blink text-2xl">↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
