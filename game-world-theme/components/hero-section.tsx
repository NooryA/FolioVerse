"use client";

import { useState, useEffect } from "react";

// Character Class Icons
const WizardIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l2 8h8l-6.5 4.5L17.5 23L12 18.5L6.5 23l2-8.5L2 10h8L12 2z" />
  </svg>
);

const WarriorIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 2l1.5 4h5L16 2h1l-1.5 4h2.5c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2.5L7 2h1z" />
  </svg>
);

const ArcherIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 16L3 5l4.5 4L12 4l4.5 5L21 5l-2 11H5z" />
  </svg>
);

const StatsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function HeroSection() {
  const [selectedClass, setSelectedClass] = useState("fullstack");
  const [isAnimating, setIsAnimating] = useState(false);
  const [playerLevel, setPlayerLevel] = useState(47);
  const [showSkills, setShowSkills] = useState(false);

  // Character Classes (Development Paths)
  const characterClasses = [
    {
      id: "fullstack",
      name: "The Full-Stack Archmage",
      title: "Master of All Realms",
      description: "A legendary developer who commands both frontend enchantments and backend sorcery with equal mastery.",
      avatar: "🧙‍♂️",
      rarity: "Mythical",
      primaryStat: "Versatility",
      stats: {
        strength: 95,
        intelligence: 98,
        dexterity: 91,
        wisdom: 94,
        charisma: 89,
      },
      abilities: ["React Mastery", "Node.js Sorcery", "Database Alchemy", "Cloud Architecture", "DevOps Wizardry"],
      specializations: ["Frontend Magic", "Backend Mastery", "Database Engineering", "System Architecture", "Performance Optimization"],
      experience: "8+ Years of Epic Quests",
      achievements: 127,
      completedProjects: 89,
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: "frontend",
      name: "The UI Enchanter",
      title: "Weaver of Digital Beauty",
      description:
        "A master craftsman who breathes life into pixels and creates mesmerizing user experiences that captivate all who witness them.",
      avatar: "🎨",
      rarity: "Legendary",
      primaryStat: "Creativity",
      stats: {
        strength: 87,
        intelligence: 95,
        dexterity: 98,
        wisdom: 89,
        charisma: 96,
      },
      abilities: ["React Artistry", "CSS Sorcery", "Animation Magic", "Design Systems", "UX Mastery"],
      specializations: ["Component Architecture", "Visual Design", "User Experience", "Animation Systems", "Responsive Design"],
      experience: "6+ Years of Creative Mastery",
      achievements: 93,
      completedProjects: 67,
      background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    },
    {
      id: "backend",
      name: "The System Architect",
      title: "Guardian of Digital Fortresses",
      description: "A powerful engineer who builds unbreakable systems and commands vast server armies with strategic brilliance.",
      avatar: "🏰",
      rarity: "Legendary",
      primaryStat: "Logic",
      stats: {
        strength: 97,
        intelligence: 96,
        dexterity: 85,
        wisdom: 98,
        charisma: 82,
      },
      abilities: ["API Mastery", "Database Optimization", "Security Fortification", "Scalability Engineering", "Performance Tuning"],
      specializations: ["System Design", "Database Engineering", "Cloud Infrastructure", "Security Systems", "Performance Optimization"],
      experience: "7+ Years of Infrastructure Mastery",
      achievements: 108,
      completedProjects: 74,
      background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
  ];

  const currentClass = characterClasses.find((c) => c.id === selectedClass) || characterClasses[0];

  // Level up animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerLevel((prev) => {
        const newLevel = prev + 1;
        if (newLevel > 50) return 45; // Reset cycle
        if (newLevel === 50) {
          setIsAnimating(true);
          setTimeout(() => setIsAnimating(false), 1000);
        }
        return newLevel;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClassSelect = (classId: string) => {
    setSelectedClass(classId);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Mythical":
        return "text-red-500 animate-pulse";
      case "Legendary":
        return "text-yellow-500 animate-pulse";
      case "Epic":
        return "text-purple-500";
      default:
        return "text-blue-500";
    }
  };

  const getStatColor = (value: number) => {
    if (value >= 95) return "text-yellow-500";
    if (value >= 90) return "text-green-500";
    if (value >= 85) return "text-blue-500";
    return "text-gray-400";
  };

  return (
    <section
      id="hero"
      className="game-section relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/40"
    >
      {/* Mystical Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Magical Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-30"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
              animationDelay: `${(i % 10) * 0.5}s`,
              animationDuration: `${3 + (i % 4)}s`,
            }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-sparkle" />
          </div>
        ))}

        {/* Mystical Runes */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-purple-400/20 font-bold text-2xl animate-float"
            style={{
              left: `${(i * 31) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 16) * 0.5}s`,
              animationDuration: `${6 + (i % 6)}s`,
            }}
          >
            {["⚡", "🔮", "✨", "🌟", "💫", "🔥", "❄️", "🌪️"][i % 8]}
          </div>
        ))}
      </div>

      <div className="game-container relative z-10 py-20">
        {/* Character Creation Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-8">
            <CrownIcon className="w-6 h-6 text-yellow-500" />
            <span className="text-purple-400 font-bold">CHARACTER CREATION</span>
          </div>

          <h1 className="game-title text-6xl md:text-8xl mb-6">Choose Your Path</h1>

          <p className="text-xl text-purple-300 max-w-3xl mx-auto mb-8">
            Select your legendary developer class and embark on an epic journey through the digital realm. Each path offers unique powers
            and mastery over different aspects of the coding universe.
          </p>

          {/* Player Level Display */}
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/50 border border-yellow-500/30 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`character-portrait w-16 h-16 ${isAnimating ? "animate-level-up" : ""}`}>
                <span className="text-3xl">{currentClass.avatar}</span>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-yellow-500">Level {playerLevel}</div>
                <div className="text-sm text-gray-300">Legendary Developer</div>
              </div>
            </div>

            <div className="h-8 w-px bg-purple-500/30" />

            <div className="text-center">
              <div className="text-lg font-bold text-white">{currentClass.achievements}</div>
              <div className="text-xs text-gray-400">Achievements</div>
            </div>

            <div className="text-center">
              <div className="text-lg font-bold text-white">{currentClass.completedProjects}</div>
              <div className="text-xs text-gray-400">Projects</div>
            </div>
          </div>
        </div>

        {/* Character Class Selection */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {characterClasses.map((charClass, index) => (
            <div
              key={charClass.id}
              className={`group relative cursor-pointer transition-all duration-500 ${
                selectedClass === charClass.id ? "scale-105 z-10" : "hover:scale-102"
              }`}
              onClick={() => handleClassSelect(charClass.id)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Character Card */}
              <div
                className={`game-window p-8 h-full relative overflow-hidden ${
                  selectedClass === charClass.id
                    ? "border-yellow-500/50 shadow-2xl shadow-yellow-500/30"
                    : "border-purple-500/30 hover:border-purple-500/50"
                }`}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 opacity-10" style={{ background: charClass.background }} />

                {/* Selected Glow Effect */}
                {selectedClass === charClass.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-blue-500/10 animate-pulse" />
                )}

                <div className="relative z-10">
                  {/* Character Portrait */}
                  <div className="text-center mb-6">
                    <div
                      className={`character-portrait w-24 h-24 mx-auto mb-4 ${selectedClass === charClass.id ? "animate-gold-glint" : ""}`}
                    >
                      <span className="text-5xl">{charClass.avatar}</span>
                    </div>

                    <div
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${
                        charClass.rarity === "Mythical"
                          ? "border-red-500/50 bg-red-500/20 text-red-500"
                          : "border-yellow-500/50 bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {charClass.rarity}
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{charClass.name}</h3>
                    <p className="text-lg text-yellow-400 mb-3">{charClass.title}</p>
                    <p className="text-sm text-gray-300 leading-relaxed">{charClass.description}</p>
                  </div>

                  {/* Primary Stat */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/50 border border-purple-500/30 rounded-lg">
                      <StatsIcon className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-gray-400">Primary:</span>
                      <span className="text-white font-bold">{charClass.primaryStat}</span>
                    </div>
                  </div>

                  {/* Quick Stats Preview */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="game-stat">
                      <div className="game-stat-label">Experience</div>
                      <div className="game-stat-value text-sm">{charClass.experience}</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Specialization</div>
                      <div className="game-stat-value text-sm">{charClass.specializations[0]}</div>
                    </div>
                  </div>

                  {/* Select Button */}
                  <button
                    className={`w-full py-3 rounded-lg font-bold transition-all ${
                      selectedClass === charClass.id
                        ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                        : "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-400 hover:to-blue-400"
                    }`}
                  >
                    {selectedClass === charClass.id ? "SELECTED" : "SELECT CLASS"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Character Details */}
        <div className="game-window p-8 mb-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Character Overview */}
            <div className="lg:col-span-1">
              <div className="text-center mb-6">
                <div className="character-portrait w-32 h-32 mx-auto mb-4 animate-float">
                  <span className="text-6xl">{currentClass.avatar}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{currentClass.name}</h2>
                <p className="text-xl text-yellow-400 mb-4">{currentClass.title}</p>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${getRarityColor(currentClass.rarity)}`}>
                  {currentClass.rarity} Class
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button onClick={() => setShowSkills(!showSkills)} className="w-full game-btn game-btn-primary py-3">
                  <StatsIcon className="w-5 h-5" />
                  {showSkills ? "Hide Skills" : "View Skills"}
                </button>

                <button className="w-full game-btn game-btn-gold py-3">
                  <PlayIcon className="w-5 h-5" />
                  Begin Adventure
                </button>
              </div>
            </div>

            {/* Character Stats */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Core Attributes</h3>
              <div className="space-y-4">
                {Object.entries(currentClass.stats).map(([stat, value]) => (
                  <div key={stat} className="game-stat">
                    <div className="flex items-center justify-between mb-2">
                      <span className="game-stat-label capitalize">{stat}</span>
                      <span className={`game-stat-value ${getStatColor(value)}`}>{value}</span>
                    </div>
                    <div className="game-progress">
                      <div className="game-progress-bar" style={{ width: `${value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Abilities & Skills */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Mastered Abilities</h3>
              <div className="space-y-3">
                {currentClass.abilities.map((ability, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-black/50 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{index + 1}</span>
                    </div>
                    <span className="text-white font-medium">{ability}</span>
                  </div>
                ))}
              </div>

              {/* Specializations */}
              {showSkills && (
                <div className="mt-6 animate-level-up">
                  <h4 className="text-lg font-bold text-yellow-400 mb-4">Specializations</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {currentClass.specializations.map((spec, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded text-yellow-300 text-sm font-medium"
                      >
                        🏆 {spec}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Character Creation Summary */}
        <div className="text-center">
          <div className="game-window max-w-2xl mx-auto p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Legend?</h3>
            <p className="text-lg text-purple-300 mb-8">
              You have chosen the path of <span className="text-yellow-400 font-bold">{currentClass.name}</span>. Your journey through the
              digital realm begins now, armed with {currentClass.primaryStat.toLowerCase()}
              and the power to shape the future of technology.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="game-stat">
                <div className="game-stat-label">Class Mastery</div>
                <div className="game-stat-value text-yellow-500">{currentClass.rarity}</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Power Level</div>
                <div className="game-stat-value text-yellow-500">9000+</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Legend Status</div>
                <div className="game-stat-value text-yellow-500">Active</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-green-400 font-bold">Character Ready - Adventure Awaits!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
