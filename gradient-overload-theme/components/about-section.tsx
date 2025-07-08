"use client";

import { useState, useEffect, useMemo } from "react";
import { Code, Heart, Sparkles, Trophy, Calendar, MapPin, Zap } from "lucide-react";
import { useTheme } from "./theme-context";

export function AboutSection() {
  const { currentTheme, gradientIndex, themeIndex } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Use theme colors from context
  const gradients = currentTheme.gradients;
  const textGradients = currentTheme.textGradients;

  // Generate stable random values for floating elements
  const floatingElements = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      gradient: gradients[i % gradients.length],
      width: 10 + Math.random() * 20,
      height: 10 + Math.random() * 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 10,
      animationDuration: 8 + Math.random() * 16,
    }));
  }, [gradients, themeIndex]); // Re-generate when theme changes

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const skills = [
    { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "TypeScript", level: 90, color: "from-blue-600 to-purple-600" },
    { name: "Design Systems", level: 85, color: "from-purple-500 to-pink-500" },
    { name: "Gradient Magic", level: 100, color: "from-pink-500 to-yellow-500" },
    { name: "Node.js", level: 88, color: "from-green-500 to-teal-500" },
    { name: "Next.js", level: 92, color: "from-gray-700 to-gray-900" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Senior Gradient Designer",
      company: "ColorCorp",
      description: "Leading the gradient revolution with stunning visual experiences",
      icon: Trophy,
      color: "from-yellow-500 to-orange-500",
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "TechFlow",
      description: "Building modern web applications with cutting-edge technology",
      icon: Code,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "UI/UX Designer",
      company: "DesignHub",
      description: "Creating beautiful interfaces that users love to interact with",
      icon: Heart,
      color: "from-blue-500 to-cyan-500",
    },
    {
      year: "2021",
      title: "Frontend Developer",
      company: "WebStudio",
      description: "Crafting responsive websites with attention to detail",
      icon: Sparkles,
      color: "from-green-500 to-blue-500",
    },
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Enhanced Background with Gradient Layers */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div
          className={`absolute top-20 left-20 w-64 h-64 bg-gradient-to-r ${gradients[0]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-0`}
        />
        <div
          className={`absolute top-40 right-40 w-48 h-48 bg-gradient-to-r ${gradients[1]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-2000`}
        />
        <div
          className={`absolute bottom-32 left-32 w-56 h-56 bg-gradient-to-r ${gradients[2]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-4000`}
        />
        <div
          className={`absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r ${gradients[3]}/20 rounded-full blur-3xl animate-gradient-float animation-delay-6000`}
        />
      </div>

      {/* Enhanced floating gradient elements with stable values */}
      <div className="absolute inset-0 pointer-events-none z-1">
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className={`absolute rounded-full bg-gradient-to-r ${element.gradient} opacity-10 animate-gradient-float`}
            style={{
              width: `${element.width}px`,
              height: `${element.height}px`,
              left: `${element.left}%`,
              top: `${element.top}%`,
              animationDelay: `${element.animationDelay}s`,
              animationDuration: `${element.animationDuration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-8">
            <span className={`bg-gradient-to-r ${textGradients[gradientIndex]} bg-clip-text text-transparent animate-gradient-shift`}>
              About Me
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            <span
              className={`font-semibold bg-gradient-to-r ${
                textGradients[(gradientIndex + 1) % textGradients.length]
              } bg-clip-text text-transparent font-black animate-gradient-shift`}
              style={{ backgroundSize: "200% 200%" }}
            >
              I'm a passionate developer and designer who believes in the power of gradients to transform digital experiences. With years of
              experience in modern web development, I create stunning interfaces that blend creativity with functionality.
            </span>
          </p>
        </div>

        {/* Enhanced Skills Section */}
        <div className="mb-20">
          <h3
            className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r ${
              textGradients[(gradientIndex + 2) % textGradients.length]
            } bg-clip-text text-transparent font-black animate-gradient-shift`}
            style={{ backgroundSize: "200% 200%" }}
          >
            Skills & Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                      {skill.name}
                    </h4>
                    <span className="text-sm font-semibold text-gray-700" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 mb-4">
                    <div
                      className={`h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{
                        width: `${skill.level}%`,
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </div>
                  <div className="text-sm text-gray-700 font-medium" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                    {skill.level === 100 ? "Mastered" : skill.level >= 90 ? "Advanced" : "Intermediate"}
                  </div>
                </div>
                {/* Enhanced glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl -z-10`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Timeline Section */}
        <div className="mb-20">
          <h3
            className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r ${
              textGradients[(gradientIndex + 3) % textGradients.length]
            } bg-clip-text text-transparent font-black animate-gradient-shift`}
            style={{ backgroundSize: "200% 200%" }}
          >
            Professional Journey
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="group relative">
                <div className="flex items-start gap-6">
                  {/* Year Badge */}
                  <div
                    className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.year}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-2xl">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                          {item.title}
                        </h4>
                        <p className="text-lg font-semibold text-gray-700" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                          {item.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-400 opacity-30"></div>
                )}

                {/* Enhanced glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl -z-10`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Personal Info */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                    Based in
                  </p>
                  <p className="text-gray-700 font-medium" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                    San Francisco, CA
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                    Available for
                  </p>
                  <p className="text-gray-700 font-medium" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.6)" }}>
                    New Projects
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <Zap className="w-8 h-8 text-yellow-500" />
              <p className="text-xl font-bold text-gray-800" style={{ textShadow: "0 1px 2px rgba(255, 255, 255, 0.8)" }}>
                Let's create something amazing together!
              </p>
              <Zap className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 4s ease infinite;
          background-size: 200% 200%;
        }

        .animate-gradient-float {
          animation: gradient-float 12s ease-in-out infinite;
        }

        .animation-delay-0 {
          animation-delay: 0s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
}
