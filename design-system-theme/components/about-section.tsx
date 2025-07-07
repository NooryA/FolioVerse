"use client";

import React, { useState, useEffect } from "react";

// Inline SVG Icons
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
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

const PuzzleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
    />
  </svg>
);

const CubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("philosophy");
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const designPrinciples = [
    {
      title: "Consistency",
      description: "Unified patterns across all interfaces for seamless experiences",
      icon: "🎯",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Accessibility",
      description: "Inclusive design ensuring usability for everyone",
      icon: "♿",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Scalability",
      description: "System architecture that grows with your needs",
      icon: "📈",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Efficiency",
      description: "Streamlined workflows for maximum productivity",
      icon: "⚡",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const methodology = [
    {
      phase: "Research",
      description: "Deep dive into user needs, behaviors, and business requirements through comprehensive analysis",
      duration: "2 weeks",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      phase: "Audit",
      description: "Systematic evaluation of existing design patterns and comprehensive component inventory",
      duration: "1 week",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      phase: "Design",
      description: "Meticulous token definition and component creation with focus on consistency",
      duration: "4 weeks",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      phase: "Implementation",
      description: "Full development cycle with comprehensive documentation and testing",
      duration: "6 weeks",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
    },
    {
      phase: "Testing",
      description: "Rigorous validation, user testing, and iterative refinement process",
      duration: "2 weeks",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
    },
  ];

  const achievements = [
    { metric: "50+", label: "Projects Delivered", icon: StarIcon },
    { metric: "99%", label: "Client Satisfaction", icon: SparklesIcon },
    { metric: "10x", label: "Faster Development", icon: CubeIcon },
    { metric: "24/7", label: "Support Available", icon: CheckIcon },
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCompletedSteps((prev) => {
        if (prev.length < methodology.length) {
          return [...prev, prev.length];
        }
        return [];
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/30"></div>
        <div className="absolute inset-0 bg-pattern opacity-30"></div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 ds-container">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium mb-8 animate-pulse-slow">
            <UserIcon className="w-4 h-4" />
            Design System Philosophy
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 mb-8 leading-tight">
            Building{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">Systematic Design</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-bounce-in"></div>
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our approach combines <span className="font-bold text-purple-600">strategic thinking</span>,{" "}
            <span className="font-bold text-pink-600">user-centered design</span>, and{" "}
            <span className="font-bold text-blue-600">technical excellence</span> to create scalable, maintainable design solutions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-sm font-semibold text-gray-600">{achievement.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-2 border border-white/20 shadow-xl">
            {[
              { id: "philosophy", label: "Philosophy", icon: LightbulbIcon },
              { id: "process", label: "Process", icon: PuzzleIcon },
              { id: "principles", label: "Principles", icon: SparklesIcon },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "philosophy" && (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 animate-slide-up">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-gray-900 mb-8">Our Design Philosophy</h3>
                <div className="space-y-8">
                  {[
                    {
                      title: "Human-Centered Foundation",
                      content:
                        "Design systems are more than just component libraries—they're the foundation for creating cohesive, scalable digital experiences that put users first.",
                      icon: "🎨",
                    },
                    {
                      title: "Atomic Design Principles",
                      content:
                        "We believe in atomic design principles, where small, reusable components combine to form complex interfaces while ensuring consistency and flexibility.",
                      icon: "⚛️",
                    },
                    {
                      title: "Intentional Decision Making",
                      content:
                        "Every decision in our design system is intentional, documented, and based on real user needs and business objectives for sustainable growth.",
                      icon: "🎯",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <div className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-white/20">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">System Architecture</h4>
                  <p className="text-gray-600">Layered approach to design systems</p>
                </div>
                <div className="p-8">
                  <div className="space-y-4">
                    {[
                      {
                        layer: "Design Tokens",
                        description: "Core design decisions and variables",
                        color: "from-purple-500 to-purple-600",
                        bgColor: "from-purple-100 to-purple-200",
                      },
                      {
                        layer: "Components",
                        description: "Reusable UI building blocks",
                        color: "from-blue-500 to-blue-600",
                        bgColor: "from-blue-100 to-blue-200",
                      },
                      {
                        layer: "Patterns",
                        description: "Common design compositions",
                        color: "from-green-500 to-green-600",
                        bgColor: "from-green-100 to-green-200",
                      },
                      {
                        layer: "Templates",
                        description: "Page-level layout structures",
                        color: "from-orange-500 to-orange-600",
                        bgColor: "from-orange-100 to-orange-200",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-r ${item.bgColor} rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg`}>
                            <span className="text-white font-bold text-lg">{index + 1}</span>
                          </div>
                          <div>
                            <h5 className="font-bold text-gray-900 text-lg">{item.layer}</h5>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "process" && (
            <div className="animate-slide-up">
              <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Design System Development Process</h3>
              <div className="space-y-8">
                {methodology.map((phase, index) => (
                  <div
                    key={index}
                    className={`bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500 transform hover:scale-105 ${
                      completedSteps.includes(index) ? "ring-4 ring-green-200" : ""
                    }`}
                  >
                    <div className={`bg-gradient-to-r ${phase.bgColor} p-8`}>
                      <div className="flex items-center gap-6">
                        <div className={`relative flex-shrink-0`}>
                          <div
                            className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center shadow-lg`}
                          >
                            {completedSteps.includes(index) ? (
                              <CheckIcon className="w-8 h-8 text-white" />
                            ) : (
                              <span className="text-white font-black text-2xl">{index + 1}</span>
                            )}
                          </div>
                          {completedSteps.includes(index) && (
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckIcon className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-3">
                            <h4 className="text-2xl font-bold text-gray-900">{phase.phase}</h4>
                            <span className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-700 border border-white/20">
                              {phase.duration}
                            </span>
                          </div>
                          <p className="text-gray-600 text-lg leading-relaxed">{phase.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "principles" && (
            <div className="animate-slide-up">
              <h3 className="text-4xl font-bold text-gray-900 mb-12 text-center">Core Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {designPrinciples.map((principle, index) => (
                  <div
                    key={index}
                    className="group bg-white/60 backdrop-blur-lg rounded-3xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
                  >
                    <div className={`bg-gradient-to-r ${principle.gradient} p-8 text-center`}>
                      <div className="text-6xl mb-4">{principle.icon}</div>
                      <h4 className="text-2xl font-bold text-white mb-2">{principle.title}</h4>
                    </div>
                    <div className="p-8 text-center">
                      <p className="text-gray-600 text-lg leading-relaxed">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 max-w-4xl mx-auto p-12">
            <div className="mb-8">
              <LightbulbIcon className="w-20 h-20 text-purple-600 mx-auto mb-6" />
              <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Design Process?</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Let's create a scalable, consistent design foundation that will revolutionize your product development.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-2">
                  <CodeIcon className="w-6 h-6" />
                  Start Your Project
                </span>
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-800 rounded-2xl font-semibold text-lg border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
