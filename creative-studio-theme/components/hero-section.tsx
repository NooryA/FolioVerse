"use client";
import { useState, useEffect, useRef } from "react";

export default function HeroSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; speed: number }>>([]);
  const [currentText, setCurrentText] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const morphingTexts = [
    { verb: "Create", noun: "Magic" },
    { verb: "Build", noun: "Dreams" },
    { verb: "Craft", noun: "Stories" },
    { verb: "Design", noun: "Futures" },
    { verb: "Inspire", noun: "Worlds" },
  ];

  const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#ffd93d", "#9b59b6", "#2ecc71"];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsLoaded(true);

    // Initialize particles
    const newParticles = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.3 + 0.1,
      });
    }
    setParticles(newParticles);

    // Text morphing animation
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % morphingTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          x: particle.x + Math.sin(Date.now() * 0.0005 + particle.id) * particle.speed,
          y: particle.y + Math.cos(Date.now() * 0.0005 + particle.id) * particle.speed,
        }))
      );
    };

    const interval = setInterval(animateParticles, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          linear-gradient(135deg, 
            #0f0f23 0%, 
            #1a1a2e 15%, 
            #16213e 30%, 
            #0f3460 45%, 
            #533483 60%, 
            #7209b7 75%, 
            #a855f7 90%, 
            #ec4899 100%
          ),
          radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 40%),
          radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.2) 0%, transparent 40%),
          radial-gradient(circle at 50% 100%, rgba(6, 182, 212, 0.2) 0%, transparent 40%)
        `,
      }}
    >
      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: 0.4,
              transform: `translate(-50%, -50%)`,
              transition: "all 0.3s ease-out",
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-32 h-32 border-2 border-white/10 rounded-full animate-spin"
          style={{
            top: "20%",
            left: "10%",
            animationDuration: "20s",
          }}
        />
        <div
          className="absolute w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg animate-pulse"
          style={{
            top: "60%",
            right: "15%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-16 h-16 border-2 border-pink-500/30 rotate-45 animate-bounce"
          style={{
            bottom: "30%",
            left: "20%",
            animationDuration: "3s",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 h-screen flex items-center justify-center text-white">
        <div className="text-center max-w-6xl mx-auto px-6">
          {/* Morphing Headline - Always Two Lines */}
          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
            <h1 className="text-7xl md:text-9xl font-black mb-8 relative leading-tight">
              <div className="block mb-4">
                We{" "}
                <span
                  className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse"
                  style={{
                    backgroundImage: `linear-gradient(45deg, ${colors[currentText % colors.length]}, ${
                      colors[(currentText + 1) % colors.length]
                    })`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "textGlow 2s ease-in-out infinite alternate",
                  }}
                >
                  {morphingTexts[currentText].verb}
                </span>
              </div>
              <div className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {morphingTexts[currentText].noun}
                </span>
              </div>

              {/* Floating decorative elements around text */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-ping" />
            </h1>
          </div>

          {/* Subheading with typewriter effect */}
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
            <p className="text-2xl md:text-4xl font-light mb-12 text-gray-300 leading-relaxed">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
                {" "}
                Extraordinary Experiences
              </span>
            </p>
          </div>

          {/* Interactive CTA Buttons */}
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
              <button
                onClick={() => scrollToSection("work")}
                className="group relative px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-xl font-bold overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <span className="relative z-10">Explore Our Universe</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="group relative px-12 py-4 border-2 border-white/30 rounded-full text-xl font-bold backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/50"
              >
                <span className="relative z-10">Watch Our Story</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              </button>
            </div>
          </div>

          {/* Floating Stats Cards */}
          <div className={`transition-all duration-1000 delay-900 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { number: "200+", label: "Projects Launched" },
                { number: "50+", label: "Happy Clients" },
                { number: "15+", label: "Awards Won" },
                { number: "100%", label: "Creative Passion" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-pink-400 group-hover:to-cyan-400 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-2 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/5 w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Additional CSS for custom animations */}
      <style jsx>{`
        @keyframes textGlow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
          }
          50% {
            text-shadow: 0 0 40px rgba(168, 85, 247, 0.8), 0 0 60px rgba(168, 85, 247, 0.5);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes morphBackground {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
