"use client";

import { useState, useEffect } from "react";

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

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6 2v6h3v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8h3V2H6zm14 2v2c0 1.1-.9 2-2 2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V8H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16z" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const FireIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
  </svg>
);

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("profile");
  const [xpProgress, setXpProgress] = useState(0);

  const playerStats = {
    level: 95,
    xp: 15742,
    maxXp: 16000,
    health: 100,
    mana: 85,
    strength: 92,
    intelligence: 98,
    agility: 88,
    wisdom: 95,
  };

  const skills = [
    {
      name: "Frontend Development",
      level: 95,
      xp: 8500,
      maxXp: 10000,
      icon: CodeIcon,
      color: "purple",
      description: "Master of React, Vue, and Angular",
    },
    {
      name: "Backend Development",
      level: 88,
      xp: 7200,
      maxXp: 8000,
      icon: ShieldIcon,
      color: "blue",
      description: "Node.js, Python, and database wizardry",
    },
    {
      name: "Game Development",
      level: 82,
      xp: 6500,
      maxXp: 8000,
      icon: ZapIcon,
      color: "yellow",
      description: "Unity, Unreal Engine, and WebGL magic",
    },
    {
      name: "UI/UX Design",
      level: 90,
      xp: 7800,
      maxXp: 9000,
      icon: HeartIcon,
      color: "pink",
      description: "Creating beautiful and intuitive experiences",
    },
  ];

  const achievements = [
    {
      title: "Code Master",
      description: "Written over 100,000 lines of code",
      rarity: "Legendary",
      icon: CodeIcon,
      unlocked: true,
      date: "2024",
    },
    {
      title: "Bug Slayer",
      description: "Defeated 1,000+ bugs in combat",
      rarity: "Epic",
      icon: ShieldIcon,
      unlocked: true,
      date: "2023",
    },
    {
      title: "Team Commander",
      description: "Led 10+ successful development quests",
      rarity: "Rare",
      icon: TrophyIcon,
      unlocked: true,
      date: "2023",
    },
    {
      title: "Innovation Pioneer",
      description: "Discovered new technology combinations",
      rarity: "Epic",
      icon: StarIcon,
      unlocked: true,
      date: "2024",
    },
    {
      title: "Performance Optimizer",
      description: "Achieved 99+ performance scores",
      rarity: "Legendary",
      icon: ZapIcon,
      unlocked: true,
      date: "2024",
    },
    {
      title: "Master Builder",
      description: "Constructed 50+ digital realms",
      rarity: "Epic",
      icon: FireIcon,
      unlocked: false,
      date: "2024",
    },
  ];

  const gameStats = [
    { label: "Years Playing", value: "5+", icon: TrophyIcon },
    { label: "Projects Completed", value: "42", icon: StarIcon },
    { label: "Technologies Mastered", value: "25+", icon: ZapIcon },
    { label: "Team Victories", value: "15", icon: ShieldIcon },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setXpProgress((prev) => (prev + 1) % 101);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "text-yellow-400 border-yellow-400";
      case "Epic":
        return "text-purple-400 border-purple-400";
      case "Rare":
        return "text-blue-400 border-blue-400";
      default:
        return "text-gray-400 border-gray-400";
    }
  };

  const getSkillColor = (color: string) => {
    switch (color) {
      case "purple":
        return "from-purple-500 to-purple-600";
      case "blue":
        return "from-blue-500 to-blue-600";
      case "yellow":
        return "from-yellow-500 to-yellow-600";
      case "pink":
        return "from-pink-500 to-pink-600";
      default:
        return "from-purple-500 to-purple-600";
    }
  };

  return (
    <section className="game-section game-bg-pattern bg-gradient-to-b from-indigo-900/50 to-purple-900/50">
      <div className="game-container">
        {/* Section Header */}
        <div className="game-text-center mb-16">
          <div className="game-badge game-badge-online mb-6">
            <UserIcon className="w-5 h-5" />
            Player Profile
          </div>
          <h2 className="game-heading text-5xl md:text-7xl mb-6 game-text-gradient">CHARACTER STATS</h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Dive into my developer journey through the lens of an RPG character. Each skill represents years of grinding and leveling up in
            the world of code.
          </p>
        </div>

        {/* Player Profile Card */}
        <div className="game-card game-card-neon mb-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Character Avatar */}
            <div className="game-text-center">
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-4xl mx-auto border-4 border-purple-400 shadow-lg shadow-purple-500/50">
                  GD
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs font-bold">⚡</span>
                </div>
              </div>
              <h3 className="game-heading text-3xl mb-2 game-text-neon">Game Developer</h3>
              <p className="text-purple-300 mb-4">Level {playerStats.level} • Legendary Class</p>

              {/* XP Bar */}
              <div className="game-progress mb-4">
                <div
                  className="game-progress-bar transition-all duration-1000"
                  style={{ width: `${(playerStats.xp / playerStats.maxXp) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400">
                {playerStats.xp.toLocaleString()} / {playerStats.maxXp.toLocaleString()} XP
              </p>
            </div>

            {/* Character Stats */}
            <div className="space-y-4">
              {[
                { name: "Strength", value: playerStats.strength, color: "red" },
                { name: "Intelligence", value: playerStats.intelligence, color: "blue" },
                { name: "Agility", value: playerStats.agility, color: "green" },
                { name: "Wisdom", value: playerStats.wisdom, color: "purple" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-white font-semibold game-heading">{stat.name}</span>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full transition-all duration-1000`}
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-bold w-8">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: "profile", label: "Player Story", icon: UserIcon },
            { id: "skills", label: "Skill Tree", icon: ZapIcon },
            { id: "achievements", label: "Achievements", icon: TrophyIcon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`game-btn px-6 py-3 flex items-center gap-2 ${activeTab === tab.id ? "game-btn-primary" : "game-btn-secondary"}`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "profile" && (
            <div className="game-grid game-grid-2 mb-12">
              <div className="game-card game-card-pink">
                <h3 className="game-heading text-2xl mb-6 game-text-neon">Origin Story</h3>
                <div className="space-y-4 text-purple-200">
                  <p>
                    My journey began in the mystical realm of code, where I first discovered the ancient art of programming. Starting as a
                    humble novice with basic HTML spells, I gradually unlocked the secrets of JavaScript sorcery and CSS enchantments.
                  </p>
                  <p>
                    Through countless battles with bugs and epic quests to deliver projects, I've evolved from a simple code warrior to a
                    legendary developer capable of wielding multiple programming languages and frameworks.
                  </p>
                  <p>
                    Today, I continue my adventure, exploring new technologies, mentoring fellow adventurers, and building digital worlds
                    that inspire and delight users across the gaming multiverse.
                  </p>
                </div>
              </div>

              <div className="game-card game-card-cyan">
                <h3 className="game-heading text-2xl mb-6 game-text-neon">Current Quest</h3>
                <div className="space-y-6">
                  <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/30">
                    <h4 className="font-bold text-cyan-400 mb-2">⚡ Active Mission</h4>
                    <p className="text-purple-200">Building next-generation web experiences with cutting-edge technologies</p>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4 border border-purple-500/30">
                    <h4 className="font-bold text-purple-400 mb-2">🎯 Current Objective</h4>
                    <p className="text-purple-200">Mastering AI integration and exploring the metaverse development realm</p>
                  </div>

                  <div className="bg-black/40 rounded-lg p-4 border border-pink-500/30">
                    <h4 className="font-bold text-pink-400 mb-2">🌟 Ultimate Goal</h4>
                    <p className="text-purple-200">Creating immersive digital experiences that bridge reality and gaming</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-8 mb-12">
              <h3 className="game-heading text-3xl game-text-center game-text-neon">Skill Tree</h3>
              <div className="game-grid game-grid-2">
                {skills.map((skill, index) => (
                  <div key={index} className="game-card game-hover-glow">
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${getSkillColor(skill.color)} rounded-lg flex items-center justify-center`}
                      >
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="game-heading text-xl text-white mb-1">{skill.name}</h4>
                        <p className="text-purple-300 text-sm">{skill.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">Level {skill.level}</span>
                      <span className="text-purple-300 text-sm">
                        {skill.xp.toLocaleString()} / {skill.maxXp.toLocaleString()} XP
                      </span>
                    </div>

                    <div className="game-progress">
                      <div
                        className={`game-progress-bar bg-gradient-to-r ${getSkillColor(skill.color)}`}
                        style={{ width: `${(skill.xp / skill.maxXp) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "achievements" && (
            <div className="space-y-8 mb-12">
              <h3 className="game-heading text-3xl game-text-center game-text-neon">Hall of Fame</h3>
              <div className="game-grid game-grid-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`game-card transition-all duration-300 ${
                      achievement.unlocked ? "game-hover-scale border-2 " + getRarityColor(achievement.rarity) : "opacity-50 grayscale"
                    }`}
                  >
                    <div className="game-text-center">
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                          achievement.unlocked ? `bg-gradient-to-r ${getSkillColor(achievement.rarity.toLowerCase())}` : "bg-gray-600"
                        }`}
                      >
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>

                      <h4
                        className={`game-heading text-lg mb-2 ${
                          achievement.unlocked ? getRarityColor(achievement.rarity) : "text-gray-400"
                        }`}
                      >
                        {achievement.title}
                      </h4>

                      <p className="text-purple-200 text-sm mb-3">{achievement.description}</p>

                      <div className="flex items-center justify-between">
                        <span className={`text-xs px-2 py-1 rounded border ${getRarityColor(achievement.rarity)}`}>
                          {achievement.rarity}
                        </span>
                        <span className="text-xs text-gray-400">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Game Stats */}
        <div className="game-grid game-grid-2 md:grid-cols-4 mb-12">
          {gameStats.map((stat, index) => (
            <div key={index} className="game-card game-text-center game-hover-float">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="game-heading text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-purple-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="game-text-center">
          <div className="game-card game-card-neon max-w-2xl mx-auto">
            <h3 className="game-heading text-3xl mb-4 game-text-gradient">Ready to Party Up?</h3>
            <p className="text-xl text-purple-200 mb-8">
              Join forces with a legendary developer and let's embark on an epic quest to build something extraordinary!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="game-btn game-btn-primary">
                <ZapIcon className="w-5 h-5" />
                Start Quest
              </button>
              <button className="game-btn game-btn-secondary">
                <TrophyIcon className="w-5 h-5" />
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
