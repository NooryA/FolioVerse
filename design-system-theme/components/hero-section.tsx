"use client";

import React, { useState, useEffect } from "react";

// Inline SVG Icons
const PaletteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-4a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Beautiful", "Scalable", "Consistent", "Modern", "Accessible"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Beautiful Creative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Animated Geometric Shapes */}
        <div className="absolute inset-0 opacity-30">
          {/* Large floating circles */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200 to-pink-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-10 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>

          {/* Abstract design system shapes */}
          <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: "1s" }}></div>
          <div
            className="absolute top-1/2 right-1/4 w-6 h-6 bg-purple-400 rounded-full animate-bounce"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"
            style={{ animationDelay: "5s" }}
          ></div>

          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="designPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect width="20" height="20" fill="none" />
                  <circle cx="10" cy="10" r="1" fill="#3b82f6" opacity="0.3" />
                  <rect x="8" y="8" width="4" height="4" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#designPattern)" />
            </svg>
          </div>
        </div>

        {/* Gradient Mesh Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/60"></div>

        {/* Subtle Component Icons Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/6 transform rotate-12">
            <PaletteIcon className="w-16 h-16 text-blue-600" />
          </div>
          <div className="absolute top-1/3 right-1/5 transform -rotate-12">
            <LayersIcon className="w-20 h-20 text-purple-600" />
          </div>
          <div className="absolute bottom-1/4 left-1/4 transform rotate-45">
            <CodeIcon className="w-14 h-14 text-indigo-600" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 transform -rotate-45">
            <SparklesIcon className="w-18 h-18 text-pink-600" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header section */}
        <div className="pt-24 pb-12 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
              <SparklesIcon className="w-4 h-4" />
              Design System Portfolio
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Create{" "}
            <span className="relative inline-block">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 ease-in-out"
                key={currentWordIndex}
              >
                {words[currentWordIndex]}
              </span>
            </span>
            <br />
            Design Systems
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Build cohesive, scalable design foundations that empower teams and create exceptional user experiences across all your digital
            products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl">
              <CodeIcon className="w-5 h-5" />
              Explore Components
              <ArrowRightIcon className="w-4 h-4" />
            </button>
            <button className="border-2 border-gray-300 hover:border-gray-400 bg-white/80 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg">
              <PlayIcon className="w-5 h-5" />
              View Demo
            </button>
          </div>
        </div>

        {/* Feature showcase */}
        <div className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-all duration-200 shadow-md">
                <PaletteIcon className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Design Tokens</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Centralized design decisions that ensure consistency across colors, typography, spacing, and more.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-50 transition-all duration-200 shadow-md">
                <LayersIcon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Component Library</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Reusable UI components built with accessibility, flexibility, and developer experience in mind.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-50 transition-all duration-200 shadow-md">
                <CodeIcon className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Comprehensive guides, examples, and best practices to help teams implement and maintain the system.
              </p>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="pb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Proven Impact Across Teams</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our design systems have helped teams ship faster, maintain consistency, and create better user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-gray-600 text-sm">Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">60%</div>
                <div className="text-gray-600 text-sm">Faster Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-gray-600 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">99%</div>
                <div className="text-gray-600 text-sm">Team Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
