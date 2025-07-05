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
    <section id="home" className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* WARNING BANNER */}
          <div className="bg-red-500 border-4 border-black p-4 flex items-center justify-center space-x-4 shadow-lg">
            <AlertTriangle size={32} className="text-white" />
            <span className="text-white font-black text-lg md:text-2xl uppercase">⚠ UNDER CONSTRUCTION ⚠</span>
            <AlertTriangle size={32} className="text-white" />
          </div>

          {/* MAIN TITLE */}
          <div className="space-y-6">
            <h1 className="font-black text-4xl md:text-6xl lg:text-8xl text-black uppercase tracking-tight leading-none">YOUR NAME</h1>
            <div className="w-32 h-2 bg-red-500 mx-auto"></div>
          </div>

          {/* ROTATING TITLE */}
          <div className="flex items-center justify-center space-x-4">
            <Hash size={32} className="text-black" />
            <h2 className="font-black text-2xl md:text-3xl lg:text-4xl text-black uppercase">
              {words[currentWord]}
              <span className={`ml-2 ${blink ? "opacity-100" : "opacity-0"} transition-opacity`}>█</span>
            </h2>
            <Hash size={32} className="text-black" />
          </div>

          {/* DESCRIPTION BOX */}
          <div className="bg-yellow-400 border-4 border-black p-6 max-w-4xl mx-auto shadow-lg">
            <p className="font-bold text-black text-base md:text-lg leading-tight">
              WARNING: THIS PORTFOLIO CONTAINS EXTREME LEVELS OF CREATIVITY AND TECHNICAL SKILL. PROCEED WITH CAUTION. SIDE EFFECTS MAY
              INCLUDE: INCREASED HIRING INTEREST, SPONTANEOUS PROJECT COLLABORATION, AND GENERAL AMAZEMENT.
            </p>
          </div>

          {/* STATS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-blue-500 border-4 border-black p-4 text-center shadow-lg">
              <div className="font-black text-2xl md:text-3xl text-white">5+</div>
              <div className="font-bold text-white text-sm uppercase">YEARS</div>
            </div>
            <div className="bg-red-500 border-4 border-black p-4 text-center shadow-lg">
              <div className="font-black text-2xl md:text-3xl text-white">50+</div>
              <div className="font-bold text-white text-sm uppercase">PROJECTS</div>
            </div>
            <div className="bg-yellow-400 border-4 border-black p-4 text-center shadow-lg">
              <div className="font-black text-2xl md:text-3xl text-black">∞</div>
              <div className="font-bold text-black text-sm uppercase">COFFEE</div>
            </div>
            <div className="bg-white border-4 border-black p-4 text-center shadow-lg">
              <div className="font-black text-2xl md:text-3xl text-black">100%</div>
              <div className="font-bold text-black text-sm uppercase">EFFORT</div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView()}
              className="bg-red-500 text-white border-4 border-black px-6 py-3 font-black uppercase shadow-lg hover:shadow-xl hover:bg-red-600 transition-all transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <Zap size={20} />
              <span>SEE MY WORK</span>
              <Zap size={20} />
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
              className="bg-yellow-400 text-black border-4 border-black px-6 py-3 font-black uppercase shadow-lg hover:shadow-xl hover:bg-yellow-500 transition-all transform hover:-translate-y-1 flex items-center space-x-2"
            >
              <Square size={20} />
              <span>HIRE ME NOW</span>
              <Square size={20} />
            </button>
          </div>

          {/* SKILLS MARQUEE */}
          <div className="bg-black text-white border-4 border-black p-4 overflow-hidden">
            <div className="whitespace-nowrap animate-pulse">
              <span className="font-mono text-sm md:text-base font-bold">
                REACT.JS • TYPESCRIPT • NODE.JS • PYTHON • FIGMA • PHOTOSHOP • HTML • CSS • JAVASCRIPT • NEXT.JS • TAILWIND
              </span>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="mt-8">
            <div className="bg-red-500 border-4 border-black inline-block px-4 py-2 shadow-lg">
              <div className="font-black text-white text-sm uppercase">SCROLL DOWN FOR MORE</div>
              <div className="text-center mt-2">
                <span className="text-white text-2xl animate-bounce">↓</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
