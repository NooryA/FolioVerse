"use client";

import React, { useEffect, useState } from "react";
import { AlertTriangle, Zap, Hash, Square } from "lucide-react";

export function HeroSection() {
  return (
    <section id="home" className="bg-gray-200 min-h-screen flex flex-col justify-center items-center px-4 pt-40 pb-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Enhanced BRUTAL WARNING BANNER */}
        <div className="mb-12">
          <div className="bg-red-500 border-8 border-black p-6 flex items-center justify-center space-x-4 shadow-2xl transform hover:scale-105 transition-transform">
            <div className="text-white font-black text-2xl md:text-3xl animate-bounce">⚠</div>
            <span className="text-white font-black text-lg md:text-2xl lg:text-3xl uppercase tracking-wider"> UNDER CONSTRUCTION </span>
            <div className="text-white font-black text-2xl md:text-3xl animate-bounce">⚠</div>
          </div>
        </div>

        {/* Enhanced BRUTAL MAIN TITLE */}
        <div className="mb-16">
          <h1 className="font-black text-6xl md:text-8xl lg:text-9xl text-black uppercase mb-8 leading-none tracking-wider">YOUR NAME</h1>
          <div className="flex justify-center mb-8">
            <div className="w-48 h-3 bg-red-500 border-4 border-black shadow-lg"></div>
          </div>

          {/* Enhanced BRUTAL SUBTITLE */}
          <div className="flex justify-center items-center space-x-6 mb-12">
            <div className="text-4xl md:text-5xl font-black text-black">#</div>
            <div className="bg-yellow-400 text-black border-8 border-black px-8 py-4 shadow-2xl transform hover:rotate-2 transition-transform">
              <span className="font-black text-2xl md:text-3xl uppercase tracking-wider">MAKER</span>
              <div className="w-6 h-6 bg-red-500 border-2 border-black inline-block ml-2"></div>
            </div>
            <div className="text-4xl md:text-5xl font-black text-black">#</div>
          </div>
        </div>

        {/* Enhanced BRUTAL WARNING BOX */}
        <div className="bg-yellow-400 border-8 border-black p-8 shadow-2xl mb-16 transform hover:scale-105 transition-transform">
          <div className="text-black font-black text-xl md:text-2xl uppercase mb-4 leading-tight">
            ⚠ WARNING: THIS PORTFOLIO CONTAINS EXTREME LEVELS OF CREATIVITY AND TECHNICAL SKILL. PROCEED WITH CAUTION. ⚠
          </div>
          <div className="text-black font-bold text-lg md:text-xl leading-relaxed">
            SIDE EFFECTS MAY INCLUDE: INCREASED HIRING INTEREST, SPONTANEOUS PROJECT COLLABORATION, AND GENERAL AMAZEMENT.
          </div>
        </div>

        {/* Enhanced BRUTAL ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
          <a
            href="#projects"
            className="bg-black text-white border-8 border-red-500 px-12 py-6 font-black text-xl md:text-2xl uppercase shadow-2xl hover:bg-red-500 hover:border-black transition-all transform hover:scale-110 hover:rotate-2"
          >
            VIEW WORK
          </a>
          <a
            href="#contact"
            className="bg-white text-black border-8 border-black px-12 py-6 font-black text-xl md:text-2xl uppercase shadow-2xl hover:bg-black hover:text-white transition-all transform hover:scale-110 hover:rotate-2"
          >
            HIRE ME
          </a>
        </div>

        {/* Enhanced BRUTAL STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-red-500 border-8 border-black p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-white mb-2">50+</div>
            <div className="font-mono text-white text-lg md:text-xl font-bold">PROJECTS</div>
          </div>
          <div className="bg-yellow-400 border-8 border-black p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-black mb-2">5</div>
            <div className="font-mono text-black text-lg md:text-xl font-bold">YEARS</div>
          </div>
          <div className="bg-blue-500 border-8 border-black p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-white mb-2">100%</div>
            <div className="font-mono text-white text-lg md:text-xl font-bold">BRUTAL</div>
          </div>
          <div className="bg-white border-8 border-black p-6 text-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all">
            <div className="font-black text-4xl md:text-5xl text-red-500 mb-2">∞</div>
            <div className="font-mono text-black text-lg md:text-xl font-bold">PASSION</div>
          </div>
        </div>

        {/* Enhanced BRUTAL SCROLL INDICATOR */}
        <div className="flex flex-col items-center">
          <div className="bg-black text-white border-8 border-yellow-400 px-8 py-4 font-black text-lg uppercase shadow-2xl animate-bounce">
            SCROLL DOWN
          </div>
          <div className="mt-4 text-4xl font-black text-black animate-bounce">⬇</div>
        </div>
      </div>
    </section>
  );
}
