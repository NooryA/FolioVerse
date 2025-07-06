"use client";

import React, { useState, useEffect } from "react";
import { Leaf, TreePine, Sun, Moon, Cloud, Droplets, Wind, Flower, Recycle } from "lucide-react";

type Season = "spring" | "summer" | "autumn" | "winter";
type TimeOfDay = "day" | "night";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentSeason, setCurrentSeason] = useState<Season>("spring");
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>("day");

  useEffect(() => {
    setMounted(true);

    // Cycle through seasons every 10 seconds
    const seasonTimer = setInterval(() => {
      setCurrentSeason((prev) => {
        const seasons: Season[] = ["spring", "summer", "autumn", "winter"];
        const currentIndex = seasons.indexOf(prev);
        return seasons[(currentIndex + 1) % seasons.length];
      });
    }, 10000);

    // Cycle between day and night every 15 seconds
    const timeTimer = setInterval(() => {
      setTimeOfDay((prev) => (prev === "day" ? "night" : "day"));
    }, 15000);

    return () => {
      clearInterval(seasonTimer);
      clearInterval(timeTimer);
    };
  }, []);

  if (!mounted) return null;

  const seasonColors = {
    spring: "from-green-300 via-emerald-200 to-lime-100",
    summer: "from-yellow-300 via-orange-200 to-red-100",
    autumn: "from-orange-400 via-red-300 to-yellow-200",
    winter: "from-blue-200 via-indigo-100 to-purple-100",
  };

  const seasonIcons = {
    spring: Flower,
    summer: Sun,
    autumn: Leaf,
    winter: Cloud,
  };

  const FloatingElement: React.FC<{ children: React.ReactNode; delay?: number; amplitude?: number; duration?: number }> = ({
    children,
    delay = 0,
    amplitude = 20,
    duration = 4,
  }) => (
    <div
      className="absolute animate-float"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );

  return (
    <section
      className={`min-h-screen relative overflow-hidden transition-all duration-2000 bg-gradient-to-br ${seasonColors[currentSeason]} ${
        timeOfDay === "night" ? "brightness-75" : "brightness-100"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Leaves */}
        <FloatingElement delay={0}>
          <Leaf className="text-green-600 w-8 h-8 opacity-60 absolute top-20 left-10 animate-spin-slow" />
        </FloatingElement>
        <FloatingElement delay={1} duration={6}>
          <Leaf className="text-emerald-500 w-6 h-6 opacity-50 absolute top-40 right-20 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={2} duration={5}>
          <Leaf className="text-lime-600 w-10 h-10 opacity-40 absolute top-60 left-1/4 animate-bounce-slow" />
        </FloatingElement>

        {/* Floating Flowers */}
        <FloatingElement delay={0.5} duration={7}>
          <Flower className="text-pink-500 w-7 h-7 opacity-60 absolute top-32 right-1/3 animate-pulse" />
        </FloatingElement>
        <FloatingElement delay={1.5} duration={8}>
          <Flower className="text-purple-400 w-5 h-5 opacity-50 absolute top-80 left-1/2 animate-spin-slow" />
        </FloatingElement>

        {/* Trees */}
        <FloatingElement delay={0} duration={10}>
          <TreePine className="text-green-700 w-12 h-12 opacity-30 absolute bottom-20 left-10" />
        </FloatingElement>
        <FloatingElement delay={2} duration={12}>
          <TreePine className="text-emerald-600 w-16 h-16 opacity-25 absolute bottom-32 right-16" />
        </FloatingElement>

        {/* Weather Elements */}
        {timeOfDay === "day" ? (
          <Sun className="text-yellow-400 w-16 h-16 absolute top-10 right-10 animate-spin-slow" />
        ) : (
          <Moon className="text-blue-200 w-16 h-16 absolute top-10 right-10 animate-pulse" />
        )}

        <Cloud className="text-white w-20 h-20 opacity-60 absolute top-16 left-1/3 animate-float" />
        <Droplets className="text-blue-400 w-8 h-8 opacity-50 absolute top-96 right-1/4 animate-bounce" />
        <Wind className="text-gray-400 w-10 h-10 opacity-40 absolute top-72 left-20 animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Seasonal Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in">
            {React.createElement(seasonIcons[currentSeason], {
              className: "w-5 h-5 text-green-700",
            })}
            <span className="text-green-800 font-semibold capitalize">
              {currentSeason} • {timeOfDay === "day" ? "Day" : "Night"}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-green-900 mb-6 animate-grow-in">
            <span className="block">Eco-Friendly</span>
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Developer</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-green-800 mb-8 max-w-2xl mx-auto animate-slide-up opacity-90">
            Creating sustainable digital solutions inspired by nature&apos;s wisdom. Building a greener web, one pixel at a time.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in-up">
            {[
              { icon: Recycle, value: "100%", label: "Green Energy" },
              { icon: TreePine, value: "50+", label: "Trees Planted" },
              { icon: Leaf, value: "25%", label: "Carbon Reduced" },
              { icon: Droplets, value: "1000L", label: "Water Saved" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/40 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="w-8 h-8 text-green-700 mx-auto mb-2" />
                <div className="text-2xl font-bold text-green-900">{stat.value}</div>
                <div className="text-sm text-green-700">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2">
              <Leaf className="w-5 h-5 group-hover:animate-spin" />
              Explore My Work
            </button>
            <button className="group bg-white/30 backdrop-blur-sm hover:bg-white/40 text-green-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 border border-green-300 flex items-center gap-2">
              <TreePine className="w-5 h-5 group-hover:animate-bounce" />
              Plant a Tree Together
            </button>
          </div>

          {/* Environmental Message */}
          <div className="mt-12 bg-green-100/50 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto animate-fade-in border border-green-200">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Recycle className="w-6 h-6 text-green-600 animate-spin-slow" />
              <span className="text-green-800 font-semibold">This website is carbon neutral</span>
            </div>
            <p className="text-green-700 text-sm">
              Powered by renewable energy and optimized for minimal environmental impact. Every page view contributes to reforestation
              efforts.
            </p>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes grow-in {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slide-up {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes fade-in-up {
          0% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-grow-in {
          animation: grow-in 1s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out 0.6s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out both;
        }
      `}</style>
    </section>
  );
}
