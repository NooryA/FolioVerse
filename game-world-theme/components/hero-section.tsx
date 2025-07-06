"use client";

import { useState, useEffect } from "react";

// Gaming-themed SVG Icons
const SwordIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.92 5L5 6.92 10.07 12 5 17.08 6.92 19 12 13.93 17.08 19 19 17.08 13.93 12 19 6.92 17.08 5 12 10.07 6.92 5Z" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,12.1 16,12.8 16,13.5V17.5C16,18.3 15.3,19 14.5,19H9.5C8.7,19 8,18.3 8,17.5V13.5C8,12.8 8.6,12.1 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.9 10.5,10V11.5H13.5V10C13.5,8.9 12.8,8.2 12,8.2Z" />
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M5,16L3,5H7L5,16M12,18.5A2.5,2.5 0 0,1 9.5,16A2.5,2.5 0 0,1 12,13.5A2.5,2.5 0 0,1 14.5,16A2.5,2.5 0 0,1 12,18.5M19,16L17,5H21L19,16Z" />
  </svg>
);

const GamepadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 9h2v2H6zm6 0h2v2h-2zM7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm0 2h10v16H7V4z" />
  </svg>
);

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedClass, setSelectedClass] = useState("developer");
  const [xpProgress, setXpProgress] = useState(0);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [currentQuest, setCurrentQuest] = useState(0);

  const characterClasses = [
    {
      id: "developer",
      name: "Full-Stack Developer",
      icon: <GamepadIcon className="w-8 h-8" />,
      stats: { strength: 95, magic: 88, defense: 82, speed: 90 },
      description: "Master of code and digital realms",
      abilities: ["React Mastery", "Node.js Magic", "Database Wizardry", "Cloud Deployment"],
    },
    {
      id: "designer",
      name: "UI/UX Mage",
      icon: <ShieldIcon className="w-8 h-8" />,
      stats: { strength: 75, magic: 98, defense: 70, speed: 85 },
      description: "Weaver of beautiful interfaces",
      abilities: ["Design Systems", "User Research", "Prototyping", "Visual Magic"],
    },
    {
      id: "architect",
      name: "System Architect",
      icon: <SwordIcon className="w-8 h-8" />,
      stats: { strength: 92, magic: 85, defense: 95, speed: 78 },
      description: "Builder of scalable kingdoms",
      abilities: ["System Design", "Performance Optimization", "Security", "Scalability"],
    },
  ];

  const quests = [
    { name: "E-Commerce Platform", difficulty: "Legendary", reward: "5000 XP", status: "completed" },
    { name: "Real-time Chat App", difficulty: "Epic", reward: "3500 XP", status: "completed" },
    { name: "Portfolio Gallery", difficulty: "Rare", reward: "2000 XP", status: "current" },
    { name: "Mobile Game", difficulty: "Epic", reward: "4000 XP", status: "available" },
  ];

  const achievements = [
    { name: "Bug Slayer", desc: "Fixed 1000+ bugs", icon: "🐛", unlocked: true },
    { name: "Code Warrior", desc: "Wrote 100k+ lines", icon: "⚔️", unlocked: true },
    { name: "Team Leader", desc: "Led 10+ projects", icon: "👑", unlocked: true },
    { name: "Innovation Master", desc: "Created 5+ frameworks", icon: "🚀", unlocked: false },
  ];

  const inventory = [
    { name: "JavaScript Blade", type: "weapon", rarity: "legendary" },
    { name: "React Shield", type: "armor", rarity: "epic" },
    { name: "TypeScript Helmet", type: "armor", rarity: "rare" },
    { name: "Node.js Boots", type: "armor", rarity: "epic" },
    { name: "AWS Cloak", type: "accessory", rarity: "legendary" },
    { name: "Git Potion", type: "consumable", rarity: "common" },
  ];

  useEffect(() => {
    setMounted(true);

    // Animate XP progress
    const timer = setTimeout(() => {
      setXpProgress(85);
    }, 1000);

    // Simulate level up
    const levelUpTimer = setTimeout(() => {
      setShowLevelUp(true);
      setTimeout(() => setShowLevelUp(false), 3000);
    }, 3000);

    // Auto-cycle quests
    const questTimer = setInterval(() => {
      setCurrentQuest((prev) => (prev + 1) % quests.length);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(levelUpTimer);
      clearInterval(questTimer);
    };
  }, [quests.length]);

  if (!mounted) return null;

  const selectedCharacter = characterClasses.find((c) => c.id === selectedClass);

  return (
    <section id="home" className="min-h-screen game-section pt-20 relative overflow-hidden">
      {/* Game UI Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-400"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400"></div>
      </div>

      <div className="game-container">
        {/* Character Selection Header */}
        <div className="text-center mb-12">
          <div className="game-badge mb-6 bg-yellow-400 text-black border-yellow-500">
            <TrophyIcon className="w-5 h-5" />
            Level 42 Developer
          </div>
          <h1 className="game-heading game-heading-xl mb-6">
            Welcome to the
            <br />
            <span className="text-yellow-400">Developer's Realm</span>
          </h1>
          <p className="game-text game-text-lg max-w-3xl mx-auto">
            Choose your class, embark on epic coding quests, and build legendary digital experiences. Your adventure in the world of
            software development begins here!
          </p>
        </div>

        {/* Character Selection */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="game-heading game-heading-md mb-8 text-center">Choose Your Character Class</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {characterClasses.map((charClass) => (
                <div
                  key={charClass.id}
                  className={`game-card cursor-pointer transition-all ${
                    selectedClass === charClass.id ? "border-green-400 bg-green-900/20 shadow-green-400/50" : "hover:border-green-400/50"
                  }`}
                  onClick={() => setSelectedClass(charClass.id)}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 text-black">
                      {charClass.icon}
                    </div>
                    <h3 className="game-heading game-heading-sm text-green-400 mb-2">{charClass.name}</h3>
                    <p className="game-text text-sm">{charClass.description}</p>
                  </div>

                  {selectedClass === charClass.id && (
                    <div className="space-y-3">
                      {Object.entries(charClass.stats).map(([stat, value]) => (
                        <div key={stat}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="capitalize text-gray-300">{stat}</span>
                            <span className="text-green-400">{value}%</span>
                          </div>
                          <div className="game-stat-bar">
                            <div className="game-stat-fill" style={{ "--fill-width": `${value}%` } as React.CSSProperties}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Character Abilities */}
            {selectedCharacter && (
              <div className="game-card">
                <h3 className="game-heading game-heading-sm mb-6 text-center text-cyan-400">Special Abilities</h3>
                <div className="grid grid-cols-2 gap-4">
                  {selectedCharacter.abilities.map((ability, index) => (
                    <div key={ability} className="game-achievement">
                      <div className="game-achievement-icon text-cyan-400">{index + 1}</div>
                      <div className="game-achievement-text">
                        <div className="game-achievement-title">{ability}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Character Stats Panel */}
          <div className="space-y-6">
            {/* Player Profile */}
            <div className="game-card">
              <div className="text-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                  alt="Player Avatar"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-400 shadow-lg"
                />
                <h3 className="game-heading game-heading-sm text-green-400">Alex Rodriguez</h3>
                <p className="game-mono text-sm text-cyan-400">@player_dev_42</p>
              </div>

              {/* XP Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-300">Experience</span>
                  <span className="text-yellow-400">8,750 / 10,000 XP</span>
                </div>
                <div className="game-stat-bar">
                  <div
                    className="game-stat-fill bg-gradient-to-r from-yellow-400 to-yellow-600"
                    style={{ "--fill-width": `${xpProgress}%` } as React.CSSProperties}
                  ></div>
                </div>
              </div>

              {/* Player Stats */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Level</span>
                  <span className="text-green-400 font-bold">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Quests Completed</span>
                  <span className="text-cyan-400">127</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Guild Rank</span>
                  <span className="text-purple-400">Senior Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Gold Coins</span>
                  <span className="text-yellow-400">15,420</span>
                </div>
              </div>
            </div>

            {/* Current Quest */}
            <div className="game-card">
              <h3 className="game-heading game-heading-sm mb-4 text-center text-orange-400">Active Quest</h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="w-8 h-8 text-white" />
                </div>
                <h4 className="game-heading text-lg text-orange-400 mb-2">{quests[currentQuest].name}</h4>
                <div className="game-badge mb-3 bg-orange-400 text-black border-orange-500">{quests[currentQuest].difficulty}</div>
                <p className="game-mono text-sm text-green-400">{quests[currentQuest].reward}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Showcase */}
        <div className="mb-12">
          <h2 className="game-heading game-heading-md text-center mb-8 text-purple-400">Achievement Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.name}
                className={`game-card text-center ${
                  achievement.unlocked ? "border-purple-400 bg-purple-900/20" : "opacity-50 border-gray-600"
                }`}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="game-heading text-lg mb-2 text-purple-400">{achievement.name}</h4>
                <p className="game-text text-sm">{achievement.desc}</p>
                {achievement.unlocked && <div className="game-badge mt-4 bg-purple-400 text-black border-purple-500">Unlocked</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Inventory System */}
        <div className="game-card">
          <h2 className="game-heading game-heading-md text-center mb-8 text-cyan-400">Developer's Inventory</h2>
          <div className="game-inventory">
            {inventory.map((item, index) => (
              <div key={item.name} className="game-inventory-slot group">
                <div
                  className={`game-inventory-item ${
                    item.rarity === "legendary"
                      ? "from-yellow-400 to-orange-500"
                      : item.rarity === "epic"
                      ? "from-purple-400 to-pink-500"
                      : item.rarity === "rare"
                      ? "from-blue-400 to-cyan-500"
                      : "from-gray-400 to-gray-600"
                  }`}
                >
                  {item.type === "weapon" ? "⚔️" : item.type === "armor" ? "🛡️" : item.type === "accessory" ? "💎" : "🧪"}
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-black/90 text-white text-xs p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="font-bold">{item.name}</div>
                  <div
                    className={`capitalize ${
                      item.rarity === "legendary"
                        ? "text-yellow-400"
                        : item.rarity === "epic"
                        ? "text-purple-400"
                        : item.rarity === "rare"
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  >
                    {item.rarity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="game-card max-w-2xl mx-auto">
            <h3 className="game-heading game-heading-md mb-4 text-green-400">Ready to Start Your Quest?</h3>
            <p className="game-text mb-8">
              Join me on epic coding adventures, tackle challenging projects, and build legendary software together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="game-btn game-btn-primary">
                <GamepadIcon className="w-5 h-5" />
                Begin Adventure
              </button>
              <button className="game-btn game-btn-secondary">
                <TrophyIcon className="w-5 h-5" />
                View Quests
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Level Up Notification */}
      {showLevelUp && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="game-card text-center animate-bounce bg-yellow-400 text-black border-yellow-500">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="game-heading game-heading-lg">LEVEL UP!</h3>
            <p className="game-mono">You reached Level 43!</p>
          </div>
        </div>
      )}

      {/* Floating Game Elements */}
      <div className="game-floating-elements">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="game-floating-pixel"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
