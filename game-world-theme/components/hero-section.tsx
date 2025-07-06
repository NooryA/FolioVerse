"use client";

import { useState, useEffect } from "react";

// Inline SVG Icons
const GamepadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 9h2v2H6zm6 0h2v2h-2zM7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 2h10v16H7V4z" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 2v6h3v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8h3V2H6zm14 2v2c0 1.1-.9 2-2 2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z" />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export default function HeroSection() {
  const [scrolled, setScrolled] = useState(false);
  const [currentGame, setCurrentGame] = useState(0);
  const [playerStats, setPlayerStats] = useState({
    level: 95,
    xp: 15742,
    projects: 42,
    achievements: 28,
  });

  const gameProjects = [
    "RPG Adventure Platform",
    "Strategy Battle System",
    "Puzzle Quest Engine",
    "Racing Game Physics",
    "Survival Crafting World",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGame((prev) => (prev + 1) % gameProjects.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [gameProjects.length]);

  const achievements = [
    { name: "Code Master", description: "Written 100,000+ lines of code", unlocked: true },
    { name: "Bug Hunter", description: "Fixed 500+ critical bugs", unlocked: true },
    { name: "Team Player", description: "Led 10+ successful projects", unlocked: true },
    { name: "Innovation Expert", description: "Implemented cutting-edge features", unlocked: false },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Gaming Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md border-b border-purple-500/30" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <GamepadIcon className="w-8 h-8 text-purple-400" />
              <span className="font-bold text-xl text-white">GameDev.Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-purple-300 hover:text-white transition-colors font-medium">
                Profile
              </a>
              <a href="#projects" className="text-purple-300 hover:text-white transition-colors font-medium">
                Games
              </a>
              <a href="#contact" className="text-purple-300 hover:text-white transition-colors font-medium">
                Quest
              </a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                Start Game
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Pixelated Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Crect x='0' y='0' width='4' height='4'/%3E%3Crect x='8' y='8' width='4' height='4'/%3E%3Crect x='16' y='0' width='4' height='4'/%3E%3Crect x='0' y='16' width='4' height='4'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Player Card */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  GD
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Game Developer</h3>
                  <p className="text-purple-300">
                    Level {playerStats.level} • {playerStats.xp.toLocaleString()} XP
                  </p>
                </div>
              </div>

              {/* XP Bar */}
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/4 animate-pulse"></div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">{playerStats.projects}</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pink-400">{playerStats.achievements}</div>
                  <div className="text-sm text-gray-400">Achievements</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-500/20 border border-purple-400/50 rounded-lg px-4 py-2 inline-block">
                <span className="text-purple-300 font-medium">⚡ Online • Ready for Quest</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
                Building
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  {gameProjects[currentGame]}
                </span>
              </h1>

              <p className="text-xl text-purple-200 leading-relaxed max-w-xl">
                I craft immersive gaming experiences with cutting-edge technology, bringing virtual worlds to life through code and
                creativity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <PlayIcon className="w-6 h-6" />
                Start Adventure
              </button>
              <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center gap-2">
                <CodeIcon className="w-6 h-6" />
                View Source
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="bg-black/30 border border-purple-500/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">5+</div>
                <div className="text-sm text-gray-400">Years</div>
              </div>
              <div className="bg-black/30 border border-pink-500/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-pink-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Games</div>
              </div>
              <div className="bg-black/30 border border-cyan-500/30 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">50K+</div>
                <div className="text-sm text-gray-400">Players</div>
              </div>
            </div>
          </div>

          {/* Right Content - Game UI Mockup */}
          <div className="relative">
            {/* Main Game Screen */}
            <div className="bg-black/60 backdrop-blur-sm border border-purple-500/50 rounded-2xl p-6 mb-6">
              <div className="aspect-video bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900 rounded-xl relative overflow-hidden mb-4">
                {/* Game Scene */}
                <div className="absolute inset-4 flex items-center justify-center">
                  <div className="text-center text-white">
                    <GamepadIcon className="w-16 h-16 mx-auto mb-4 text-purple-400" />
                    <h3 className="text-2xl font-bold mb-2">Epic Adventure RPG</h3>
                    <p className="text-purple-300">Next-gen gaming experience</p>
                  </div>
                </div>

                {/* Game UI Elements */}
                <div className="absolute top-4 left-4 bg-black/50 rounded-lg p-2">
                  <div className="text-white text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>HP: 100/100</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>MP: 85/100</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-black/50 rounded-lg p-2">
                  <div className="text-white text-sm">Score: 12,547</div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 rounded-lg p-3">
                    <div className="text-white text-sm mb-2">Achievement Unlocked!</div>
                    <div className="flex items-center gap-2">
                      <TrophyIcon className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-400 font-bold">Code Master</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Controls */}
              <div className="grid grid-cols-4 gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg font-bold transition-colors">WASD</button>
                <button className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-lg font-bold transition-colors">SPACE</button>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg font-bold transition-colors">ENTER</button>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-lg font-bold transition-colors">ESC</button>
              </div>
            </div>

            {/* Achievements Panel */}
            <div className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <TrophyIcon className="w-6 h-6 text-yellow-400" />
                Latest Achievements
              </h3>
              <div className="space-y-3">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      achievement.unlocked ? "bg-purple-500/20 border border-purple-400/30" : "bg-gray-800/30 border border-gray-600/30"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        achievement.unlocked ? "bg-yellow-500" : "bg-gray-600"
                      }`}
                    >
                      {achievement.unlocked ? <StarIcon className="w-5 h-5 text-white" /> : <span className="text-white text-xs">?</span>}
                    </div>
                    <div>
                      <div className={`font-bold ${achievement.unlocked ? "text-white" : "text-gray-400"}`}>{achievement.name}</div>
                      <div className="text-sm text-gray-400">{achievement.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Game Elements */}
            <div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full opacity-20 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Bottom Game Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-purple-500/30 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="text-white font-bold">Ready Player One</div>
              <div className="text-purple-300">Status: Online</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-white">Next Level: 847 XP</div>
              <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
