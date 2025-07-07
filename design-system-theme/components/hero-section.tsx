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

const BookOpenIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const GridIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
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

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const EyeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

export function HeroSection() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [tokenCategory, setTokenCategory] = useState("colors");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const demos = [
    {
      title: "Design Tokens",
      description: "Systematic design decisions that scale",
      icon: PaletteIcon,
      gradient: "from-purple-500 to-pink-500",
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
    },
    {
      title: "Components",
      description: "Beautiful, reusable UI elements",
      icon: LayersIcon,
      gradient: "from-blue-500 to-cyan-500",
      color: "bg-gradient-to-br from-blue-100 to-cyan-100",
    },
    {
      title: "Patterns",
      description: "Intelligent design compositions",
      icon: GridIcon,
      gradient: "from-green-500 to-emerald-500",
      color: "bg-gradient-to-br from-green-100 to-emerald-100",
    },
    {
      title: "Guidelines",
      description: "Principles that inspire",
      icon: BookOpenIcon,
      gradient: "from-orange-500 to-red-500",
      color: "bg-gradient-to-br from-orange-100 to-red-100",
    },
  ];

  const designTokens = {
    colors: [
      { name: "Primary 500", value: "#0ea5e9", css: "--ds-color-primary-500" },
      { name: "Primary 600", value: "#0284c7", css: "--ds-color-primary-600" },
      { name: "Gray 500", value: "#6b7280", css: "--ds-color-gray-500" },
      { name: "Success 500", value: "#22c55e", css: "--ds-color-success-500" },
      { name: "Purple 500", value: "#8b5cf6", css: "--ds-color-purple-500" },
      { name: "Pink 500", value: "#ec4899", css: "--ds-color-pink-500" },
    ],
    typography: [
      { name: "Font Size XL", value: "1.25rem", css: "--ds-font-size-xl" },
      { name: "Font Weight Bold", value: "700", css: "--ds-font-weight-bold" },
      { name: "Line Height Normal", value: "1.5", css: "--ds-line-height-normal" },
      { name: "Font Family Primary", value: "Inter", css: "--ds-font-family-primary" },
    ],
    spacing: [
      { name: "Space 4", value: "1rem", css: "--ds-space-4" },
      { name: "Space 6", value: "1.5rem", css: "--ds-space-6" },
      { name: "Space 8", value: "2rem", css: "--ds-space-8" },
      { name: "Space 12", value: "3rem", css: "--ds-space-12" },
    ],
    shadows: [
      { name: "Shadow Base", value: "0 1px 3px rgba(0,0,0,0.1)", css: "--ds-shadow-base" },
      { name: "Shadow LG", value: "0 10px 15px rgba(0,0,0,0.1)", css: "--ds-shadow-lg" },
      { name: "Shadow XL", value: "0 20px 25px rgba(0,0,0,0.1)", css: "--ds-shadow-xl" },
      { name: "Shadow 2XL", value: "0 25px 50px rgba(0,0,0,0.25)", css: "--ds-shadow-2xl" },
    ],
  };

  const stats = [
    { value: "200+", label: "Design Tokens", description: "Systematic design variables", icon: PaletteIcon },
    { value: "80+", label: "Components", description: "Reusable UI elements", icon: LayersIcon },
    { value: "99%", label: "Consistency", description: "Across all interfaces", icon: EyeIcon },
    { value: "70%", label: "Faster Development", description: "With design system", icon: ZapIcon },
  ];

  const floatingElements = [
    { emoji: "🎨", delay: 0, duration: 3 },
    { emoji: "⚡", delay: 0.5, duration: 2.5 },
    { emoji: "🚀", delay: 1, duration: 3.5 },
    { emoji: "✨", delay: 1.5, duration: 2.8 },
    { emoji: "🎯", delay: 2, duration: 3.2 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDemo((prev) => (prev + 1) % demos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 bg-pattern opacity-50"></div>

        {/* Floating Elements */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute text-4xl animate-float"
            style={{
              left: `${20 + index * 20}%`,
              top: `${15 + index * 15}%`,
              animationDelay: `${element.delay}s`,
              animationDuration: `${element.duration}s`,
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      {/* Mouse Follower */}
      <div
        className="fixed w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 pointer-events-none transition-all duration-500"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="relative z-10 ds-container py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-8 animate-pulse-slow">
            <LayersIcon className="w-4 h-4" />
            Revolutionary Design System
          </div>

          <h1 className="text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 mb-8 leading-none">
            Design Systems
            <br />
            <span className="text-6xl lg:text-7xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Reimagined</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Experience the future of design with our comprehensive system built for
            <span className="font-bold text-purple-600"> scalability</span>,<span className="font-bold text-pink-600"> beauty</span>, and
            <span className="font-bold text-blue-600"> innovation</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative flex items-center gap-2">
                <BookOpenIcon className="w-6 h-6" />
                Explore Documentation
              </span>
            </button>
            <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold text-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="flex items-center gap-2">
                <CodeIcon className="w-6 h-6" />
                View Components
              </span>
            </button>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 mb-24">
          {/* Left Side - Demo Navigation */}
          <div className="space-y-6">
            <div className="text-center xl:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                System <span className="text-purple-600">Features</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">Explore our comprehensive design system components</p>
            </div>

            <div className="space-y-4">
              {demos.map((demo, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDemo(index)}
                  className={`w-full flex items-center gap-6 p-6 rounded-3xl border-2 transition-all duration-500 group ${
                    activeDemo === index
                      ? `border-purple-300 ${demo.color} shadow-2xl transform scale-105`
                      : "border-gray-200 bg-white/50 backdrop-blur-sm hover:border-purple-200 hover:bg-white/80"
                  }`}
                >
                  <div
                    className={`p-4 rounded-2xl transition-all duration-300 ${
                      activeDemo === index ? `bg-gradient-to-r ${demo.gradient} shadow-lg` : "bg-gray-100 group-hover:bg-gray-200"
                    }`}
                  >
                    <demo.icon className={`w-8 h-8 ${activeDemo === index ? "text-white" : "text-gray-600"}`} />
                  </div>
                  <div className="text-left">
                    <h3 className={`font-bold text-xl mb-2 ${activeDemo === index ? "text-purple-800" : "text-gray-900"}`}>{demo.title}</h3>
                    <p className="text-gray-600 text-base">{demo.description}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Demo Content */}
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-white/20">
              <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <div className={`p-2 rounded-xl bg-gradient-to-r ${demos[activeDemo].gradient}`}>
                  {React.createElement(demos[activeDemo].icon, { className: "w-6 h-6 text-white" })}
                </div>
                {demos[activeDemo].title}
              </h3>
            </div>

            <div className="p-8">
              {activeDemo === 0 && (
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {Object.keys(designTokens).map((category) => (
                      <button
                        key={category}
                        onClick={() => setTokenCategory(category)}
                        className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          tokenCategory === category
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {designTokens[tokenCategory as keyof typeof designTokens].map((token, index) => (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 hover:border-purple-300 transition-all duration-300 group"
                      >
                        {tokenCategory === "colors" && (
                          <div className="w-full h-16 rounded-xl mb-4 shadow-lg" style={{ backgroundColor: token.value }} />
                        )}
                        <h4 className="font-bold text-gray-900 mb-2 text-lg">{token.name}</h4>
                        <p className="text-sm text-gray-600 mb-3 font-medium">{token.value}</p>
                        <code className="text-xs font-mono text-purple-600 bg-purple-50 px-3 py-1 rounded-lg">{token.css}</code>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeDemo === 1 && (
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                    <h4 className="font-bold text-xl mb-6 text-gray-900">Button Components</h4>
                    <div className="flex flex-wrap gap-4">
                      <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                        Primary Button
                      </button>
                      <button className="px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105">
                        Secondary Button
                      </button>
                      <button className="px-6 py-3 bg-transparent text-purple-600 rounded-xl font-semibold border-2 border-purple-600 hover:bg-purple-50 transition-all duration-300">
                        Outline Button
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100">
                    <h4 className="font-bold text-xl mb-6 text-gray-900">Form Components</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 bg-white/90 border-2 border-purple-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 2 && (
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-emerald-100">
                    <h4 className="font-bold text-xl mb-6 text-gray-900">Grid Patterns</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="bg-gradient-to-br from-emerald-100 to-teal-100 p-6 rounded-xl text-center font-semibold text-gray-800 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                          Item {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-emerald-100">
                    <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-emerald-100">
                      <h5 className="font-bold text-lg text-gray-900">Card Pattern</h5>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">
                        Beautiful card content with consistent spacing and typography that scales perfectly.
                      </p>
                      <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                        Action
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeDemo === 3 && (
                <div className="space-y-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100">
                    <h4 className="font-bold text-xl mb-6 text-gray-900">Typography Scale</h4>
                    <div className="space-y-4">
                      <h1 className="text-4xl font-bold text-gray-900">Heading 1</h1>
                      <h2 className="text-3xl font-bold text-gray-800">Heading 2</h2>
                      <h3 className="text-2xl font-bold text-gray-700">Heading 3</h3>
                      <p className="text-lg text-gray-600">Large paragraph text for important content</p>
                      <p className="text-base text-gray-600">Base paragraph text for regular content</p>
                      <p className="text-sm text-gray-500">Small text for secondary information</p>
                    </div>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-orange-100">
                    <h4 className="font-bold text-xl mb-6 text-gray-900">Spacing System</h4>
                    <div className="space-y-4">
                      <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Padding Small (12px)</span>
                      </div>
                      <div className="p-6 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Padding Medium (24px)</span>
                      </div>
                      <div className="p-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">Padding Large (32px)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: SparklesIcon,
              title: "Consistent Experience",
              description: "Unified design language across all touchpoints and platforms for seamless user experience.",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-100 to-pink-100",
            },
            {
              icon: ZapIcon,
              title: "Developer Efficiency",
              description: "Pre-built components and clear guidelines accelerate development and reduce errors.",
              gradient: "from-blue-500 to-cyan-500",
              bgGradient: "from-blue-100 to-cyan-100",
            },
            {
              icon: LayersIcon,
              title: "Scalable Architecture",
              description: "Modular system that grows with your product and adapts to changing requirements.",
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-100 to-emerald-100",
            },
          ].map((benefit, index) => (
            <div key={index} className="group">
              <div
                className={`bg-gradient-to-br ${benefit.bgGradient} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/20`}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-300`}
                >
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
