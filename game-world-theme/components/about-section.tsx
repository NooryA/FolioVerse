"use client";

import { useState, useEffect } from "react";

// RPG Character Sheet Icons
const CharacterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2c2.21 0 4 1.79 4 4 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-2.21 1.79-4 4-4zM21 9v2c0 .55-.45 1-1 1s-1-.45-1-1V9s-1.99-.01-2-.01C16.4 10.68 14.34 12 12 12s-4.4-1.32-5-3C4.01 9 4 9 4 9v2c0 .55-.45 1-1 1s-1-.45-1-1V9c0-1.1.9-2 2-2h3.22c.18-.72.46-1.39.82-2H4c-1.1 0-2 .9-2 2v4c0 1.66 1.34 3 3 3 0 2.76 2.24 5 5 5v4h4v-4c2.76 0 5-2.24 5-5 1.66 0 3-1.34 3-3V9c0-1.1-.9-2-2-2h-4.04c.36.61.64 1.28.82 2H20c1.1 0 2 .9 2 2z" />
  </svg>
);

const SkillTreeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h1c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v1c0 4.42-3.58 8-8 8s-8-3.58-8-8v-1H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1zM9 4h6V2H9v2z" />
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const BookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const BagIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h4zm2 0h6V2H9v2z" />
  </svg>
);

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("character");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedEquipment, setSelectedEquipment] = useState<string | null>(null);
  const [characterLevel, setCharacterLevel] = useState(47);
  const [skillPoints, setSkillPoints] = useState(15);

  // Character Stats with progression
  const characterStats = {
    core: {
      level: characterLevel,
      experience: 127850,
      maxExperience: 150000,
      title: "Legendary Full-Stack Archmage",
      class: "Omniscient Developer",
      guild: "Code Crafters Alliance",
    },
    attributes: {
      strength: { value: 95, description: "Raw coding power and problem-solving ability" },
      intelligence: { value: 98, description: "Learning speed and technical comprehension" },
      dexterity: { value: 91, description: "Code execution speed and debugging skills" },
      wisdom: { value: 94, description: "Architecture decisions and best practices" },
      charisma: { value: 89, description: "Team leadership and communication skills" },
      constitution: { value: 92, description: "Endurance for long coding sessions" },
    },
    secondary: {
      criticalStrike: 23,
      innovationRate: 87,
      bugResistance: 94,
      learningSpeed: 96,
      teamSynergy: 88,
    },
  };

  // Skill Trees with dependencies
  const skillTrees = {
    frontend: {
      name: "Frontend Mastery",
      icon: "🎨",
      color: "from-pink-500 to-rose-500",
      skills: [
        {
          id: "react",
          name: "React Mastery",
          level: 10,
          maxLevel: 10,
          unlocked: true,
          description: "Advanced React patterns and optimization",
        },
        {
          id: "nextjs",
          name: "Next.js Sorcery",
          level: 9,
          maxLevel: 10,
          unlocked: true,
          description: "Full-stack React framework mastery",
        },
        {
          id: "typescript",
          name: "TypeScript Magic",
          level: 8,
          maxLevel: 10,
          unlocked: true,
          description: "Type-safe development practices",
        },
        { id: "css", name: "CSS Wizardry", level: 10, maxLevel: 10, unlocked: true, description: "Advanced styling and animations" },
        { id: "responsive", name: "Responsive Design", level: 9, maxLevel: 10, unlocked: true, description: "Multi-device optimization" },
        {
          id: "performance",
          name: "Performance Optimization",
          level: 8,
          maxLevel: 10,
          unlocked: true,
          description: "Speed and efficiency mastery",
        },
      ],
    },
    backend: {
      name: "Backend Engineering",
      icon: "🏰",
      color: "from-blue-500 to-indigo-500",
      skills: [
        {
          id: "nodejs",
          name: "Node.js Architecture",
          level: 9,
          maxLevel: 10,
          unlocked: true,
          description: "Server-side JavaScript mastery",
        },
        { id: "databases", name: "Database Alchemy", level: 8, maxLevel: 10, unlocked: true, description: "SQL and NoSQL optimization" },
        { id: "apis", name: "API Design", level: 10, maxLevel: 10, unlocked: true, description: "RESTful and GraphQL expertise" },
        {
          id: "microservices",
          name: "Microservices",
          level: 7,
          maxLevel: 10,
          unlocked: true,
          description: "Distributed system architecture",
        },
        {
          id: "security",
          name: "Security Fortification",
          level: 8,
          maxLevel: 10,
          unlocked: true,
          description: "Application security practices",
        },
        { id: "scaling", name: "Scalability Engineering", level: 7, maxLevel: 10, unlocked: true, description: "High-performance systems" },
      ],
    },
    devops: {
      name: "DevOps Mastery",
      icon: "⚙️",
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          id: "docker",
          name: "Container Magic",
          level: 8,
          maxLevel: 10,
          unlocked: true,
          description: "Containerization and orchestration",
        },
        { id: "kubernetes", name: "Kubernetes Mastery", level: 6, maxLevel: 10, unlocked: true, description: "Container orchestration" },
        { id: "cicd", name: "CI/CD Pipelines", level: 9, maxLevel: 10, unlocked: true, description: "Automated deployment processes" },
        {
          id: "monitoring",
          name: "System Monitoring",
          level: 7,
          maxLevel: 10,
          unlocked: true,
          description: "Performance and health tracking",
        },
        { id: "cloud", name: "Cloud Architecture", level: 8, maxLevel: 10, unlocked: true, description: "AWS, Azure, GCP mastery" },
        {
          id: "infrastructure",
          name: "Infrastructure as Code",
          level: 6,
          maxLevel: 10,
          unlocked: true,
          description: "Terraform and CloudFormation",
        },
      ],
    },
  };

  // Equipment/Tools with rarity and stats
  const equipment = {
    weapon: {
      name: "Legendary VS Code",
      rarity: "legendary",
      icon: "⚔️",
      stats: { productivity: "+45%", accuracy: "+35%", speed: "+25%" },
      description: "A mythical code editor forged in the flames of Microsoft's workshops",
    },
    armor: {
      name: "TypeScript Shield",
      rarity: "epic",
      icon: "🛡️",
      stats: { bugResistance: "+40%", codeQuality: "+30%" },
      description: "Provides exceptional protection against runtime errors",
    },
    boots: {
      name: "Docker Cloud Boots",
      rarity: "epic",
      icon: "👢",
      stats: { deployment: "+50%", scalability: "+35%" },
      description: "Grants the power to walk across any cloud infrastructure",
    },
    accessory: {
      name: "GitHub Crown",
      rarity: "legendary",
      icon: "👑",
      stats: { collaboration: "+60%", reputation: "+40%" },
      description: "Symbol of open-source mastery and community leadership",
    },
  };

  // Achievements with tiers
  const achievements = [
    { id: "commits", name: "Code Warrior", tier: "legendary", icon: "⚔️", description: "Made 10,000+ commits", progress: 100 },
    { id: "projects", name: "Project Master", tier: "epic", icon: "🏆", description: "Completed 100+ projects", progress: 100 },
    { id: "mentoring", name: "Mentor Supreme", tier: "rare", icon: "🎓", description: "Mentored 50+ developers", progress: 85 },
    { id: "opensource", name: "Open Source Hero", tier: "epic", icon: "🌟", description: "1000+ GitHub stars", progress: 92 },
    { id: "languages", name: "Polyglot Programmer", tier: "rare", icon: "📚", description: "Mastered 10+ languages", progress: 100 },
    { id: "architecture", name: "System Architect", tier: "legendary", icon: "🏗️", description: "Designed 20+ systems", progress: 88 },
  ];

  // Character Lore/Background
  const characterLore = {
    origin: "Born in the digital realm of Silicon Valley, forged through countless coding battles and late-night debugging sessions.",
    journey:
      "From humble beginnings with HTML and CSS, ascended through the ranks by mastering JavaScript, conquering React, and eventually achieving full-stack enlightenment.",
    currentQuest: "Leading epic projects that push the boundaries of web development while mentoring the next generation of code warriors.",
    specialization: "Wielding the ancient arts of both frontend enchantments and backend sorcery with equal mastery.",
    philosophy: "Code with purpose, build with passion, and always leave the codebase better than you found it.",
  };

  const tabs = [
    { id: "character", name: "Character Profile", icon: CharacterIcon },
    { id: "skills", name: "Skill Trees", icon: SkillTreeIcon },
    { id: "equipment", name: "Equipment", icon: BagIcon },
    { id: "achievements", name: "Achievements", icon: TrophyIcon },
    { id: "lore", name: "Character Lore", icon: BookIcon },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "border-yellow-500 bg-yellow-500/20 text-yellow-400";
      case "epic":
        return "border-purple-500 bg-purple-500/20 text-purple-400";
      case "rare":
        return "border-blue-500 bg-blue-500/20 text-blue-400";
      default:
        return "border-gray-500 bg-gray-500/20 text-gray-400";
    }
  };

  const getStatColor = (value: number) => {
    if (value >= 95) return "text-yellow-500";
    if (value >= 90) return "text-green-500";
    if (value >= 85) return "text-blue-500";
    return "text-gray-400";
  };

  // Auto-level progression simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setCharacterLevel((prev) => {
        const newLevel = prev + 1;
        if (newLevel > 50) return 45; // Reset cycle
        return newLevel;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="game-section relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
      {/* Mystical Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating magical orbs */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${(i * 19) % 100}%`,
              top: `${(i * 29) % 100}%`,
              animationDelay: `${(i % 16) * 0.5}s`,
              animationDuration: `${6 + (i % 6)}s`,
            }}
          >
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-glow" />
          </div>
        ))}
      </div>

      <div className="game-container relative z-10">
        {/* Character Sheet Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full mb-8">
            <CharacterIcon className="w-6 h-6 text-purple-400" />
            <span className="text-purple-400 font-bold">CHARACTER SHEET</span>
          </div>

          <h2 className="game-title text-5xl md:text-7xl mb-6">The Archmage Profile</h2>

          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Explore the complete character profile, skill progression, achievements, and legendary equipment of a master developer who has
            conquered the digital realms.
          </p>
        </div>

        {/* Character Sheet Tabs */}
        <div className="game-window p-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 p-2 bg-black/50 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-black"
                    : "bg-gray-700/50 text-gray-300 hover:bg-gray-600/50"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            {/* Character Profile Tab */}
            {activeTab === "character" && (
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Character Portrait & Basic Info */}
                <div className="lg:col-span-1">
                  <div className="text-center mb-8">
                    <div className="character-portrait w-40 h-40 mx-auto mb-6 animate-float">
                      <span className="text-8xl">🧙‍♂️</span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">Code Archmage</h3>
                    <p className="text-xl text-yellow-400 mb-4">{characterStats.core.title}</p>

                    <div className="space-y-2">
                      <div
                        className={`inline-block px-4 py-2 rounded-full text-sm font-bold border-yellow-500/50 bg-yellow-500/20 text-yellow-400`}
                      >
                        Level {characterStats.core.level}
                      </div>
                      <div className="text-purple-300">{characterStats.core.class}</div>
                      <div className="text-sm text-gray-400">{characterStats.core.guild}</div>
                    </div>
                  </div>

                  {/* Experience Progress */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-purple-400">Experience</span>
                      <span className="text-sm text-white">
                        {characterStats.core.experience.toLocaleString()} / {characterStats.core.maxExperience.toLocaleString()}
                      </span>
                    </div>
                    <div className="game-progress h-6">
                      <div
                        className="game-progress-bar experience-bar"
                        style={{ width: `${(characterStats.core.experience / characterStats.core.maxExperience) * 100}%` }}
                      />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-xs text-yellow-400">
                        {((characterStats.core.experience / characterStats.core.maxExperience) * 100).toFixed(1)}% to next level
                      </span>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="game-stat">
                      <div className="game-stat-label">Skill Points</div>
                      <div className="game-stat-value text-green-500">{skillPoints}</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Active Projects</div>
                      <div className="game-stat-value text-blue-500">12</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Mentored</div>
                      <div className="game-stat-value text-purple-500">47</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">GitHub Stars</div>
                      <div className="game-stat-value text-yellow-500">1.2K</div>
                    </div>
                  </div>
                </div>

                {/* Character Attributes */}
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-6">Core Attributes</h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {Object.entries(characterStats.attributes).map(([attr, data]) => (
                      <div key={attr} className="game-stat">
                        <div className="flex items-center justify-between mb-3">
                          <span className="game-stat-label capitalize text-lg">{attr}</span>
                          <span className={`game-stat-value text-2xl ${getStatColor(data.value)}`}>{data.value}</span>
                        </div>
                        <div className="game-progress h-4 mb-2">
                          <div className="game-progress-bar" style={{ width: `${data.value}%` }} />
                        </div>
                        <p className="text-sm text-gray-400">{data.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Secondary Stats */}
                  <h4 className="text-xl font-bold text-white mb-4">Combat Statistics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.entries(characterStats.secondary).map(([stat, value]) => (
                      <div key={stat} className="game-stat">
                        <div className="game-stat-label capitalize">{stat.replace(/([A-Z])/g, " $1").trim()}</div>
                        <div className="game-stat-value text-green-500">{value}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Skill Trees Tab */}
            {activeTab === "skills" && (
              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Mastery Skill Trees</h3>
                  <p className="text-purple-300 mb-4">Explore the advanced skill progressions across different development domains</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <span className="text-green-400 font-bold">Available Skill Points: {skillPoints}</span>
                  </div>
                </div>

                {Object.entries(skillTrees).map(([treeId, tree]) => (
                  <div key={treeId} className="game-panel p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{tree.icon}</span>
                      <h4 className="text-2xl font-bold text-white">{tree.name}</h4>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {tree.skills.map((skill) => (
                        <div
                          key={skill.id}
                          className={`relative p-4 border-2 rounded-lg cursor-pointer transition-all ${
                            skill.unlocked
                              ? "border-green-500/50 bg-green-500/10 hover:border-green-500/70"
                              : "border-gray-600/50 bg-gray-600/10 opacity-50"
                          }`}
                          onMouseEnter={() => setHoveredSkill(skill.id)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-bold text-white">{skill.name}</h5>
                            <span className="text-sm text-green-400">
                              {skill.level}/{skill.maxLevel}
                            </span>
                          </div>

                          <div className="game-progress h-2 mb-3">
                            <div
                              className="game-progress-bar bg-gradient-to-r from-green-500 to-blue-500"
                              style={{ width: `${(skill.level / skill.maxLevel) * 100}%` }}
                            />
                          </div>

                          <p className="text-xs text-gray-400">{skill.description}</p>

                          {/* Skill Tooltip */}
                          {hoveredSkill === skill.id && (
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-black/90 border border-purple-500/50 rounded text-sm whitespace-nowrap z-10">
                              <div className="font-bold text-green-400">{skill.name}</div>
                              <div className="text-gray-300">
                                Level {skill.level}/{skill.maxLevel}
                              </div>
                              <div className="text-yellow-400">
                                {skill.level === skill.maxLevel ? "MASTERED" : `Next: ${skill.level + 1}/${skill.maxLevel}`}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Equipment Tab */}
            {activeTab === "equipment" && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Equipment Slots */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Equipped Gear</h3>

                  <div className="space-y-4">
                    {Object.entries(equipment).map(([slot, item]) => (
                      <div
                        key={slot}
                        className={`game-panel p-4 cursor-pointer transition-all ${
                          selectedEquipment === slot ? "border-yellow-500/50" : "border-purple-500/30"
                        }`}
                        onClick={() => setSelectedEquipment(slot)}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`inventory-slot ${item.rarity} w-16 h-16`}>
                            <span className="text-3xl">{item.icon}</span>
                          </div>

                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-white">{item.name}</h4>
                              <span className={`px-2 py-1 rounded text-xs font-bold ${getRarityColor(item.rarity)}`}>{item.rarity}</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-2">{item.description}</p>

                            <div className="flex gap-2">
                              {Object.entries(item.stats).map(([stat, value]) => (
                                <span key={stat} className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
                                  {stat}: {value}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Details */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Equipment Details</h3>

                  {selectedEquipment ? (
                    <div className="game-panel p-6">
                      {(() => {
                        const item = equipment[selectedEquipment as keyof typeof equipment];
                        return (
                          <>
                            <div className="text-center mb-6">
                              <div className={`inventory-slot ${item.rarity} w-24 h-24 mx-auto mb-4`}>
                                <span className="text-5xl">{item.icon}</span>
                              </div>
                              <h4 className="text-2xl font-bold text-white mb-2">{item.name}</h4>
                              <span className={`px-3 py-1 rounded-full text-sm font-bold ${getRarityColor(item.rarity)}`}>
                                {item.rarity.toUpperCase()}
                              </span>
                            </div>

                            <div className="space-y-4">
                              <div>
                                <h5 className="text-lg font-bold text-yellow-400 mb-2">Description</h5>
                                <p className="text-gray-300">{item.description}</p>
                              </div>

                              <div>
                                <h5 className="text-lg font-bold text-yellow-400 mb-2">Stats Bonus</h5>
                                <div className="grid grid-cols-1 gap-2">
                                  {Object.entries(item.stats).map(([stat, value]) => (
                                    <div key={stat} className="flex justify-between items-center p-2 bg-black/50 rounded">
                                      <span className="capitalize text-gray-300">{stat}</span>
                                      <span className="text-green-400 font-bold">{value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="text-center pt-4">
                                <button className="game-btn game-btn-primary">Upgrade Equipment</button>
                              </div>
                            </div>
                          </>
                        );
                      })()}
                    </div>
                  ) : (
                    <div className="game-panel p-6 text-center">
                      <div className="text-6xl mb-4">⚡</div>
                      <h4 className="text-xl font-bold text-white mb-2">Select Equipment</h4>
                      <p className="text-gray-400">Click on any equipped item to view detailed stats and upgrade options</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Achievements Tab */}
            {activeTab === "achievements" && (
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Hall of Achievements</h3>
                  <p className="text-purple-300">Legendary accomplishments earned through dedication and mastery</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => (
                    <div key={achievement.id} className="game-panel p-6 text-center">
                      <div className="text-4xl mb-4">{achievement.icon}</div>

                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${getRarityColor(achievement.tier)}`}>
                        {achievement.tier.toUpperCase()}
                      </div>

                      <h4 className="text-lg font-bold text-white mb-2">{achievement.name}</h4>
                      <p className="text-sm text-gray-400 mb-4">{achievement.description}</p>

                      <div className="game-progress h-3 mb-2">
                        <div className="game-progress-bar" style={{ width: `${achievement.progress}%` }} />
                      </div>

                      <div className="text-sm">
                        {achievement.progress === 100 ? (
                          <span className="text-yellow-400 font-bold">COMPLETED ✓</span>
                        ) : (
                          <span className="text-blue-400">{achievement.progress}% Complete</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Character Lore Tab */}
            {activeTab === "lore" && (
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">The Legend of the Code Archmage</h3>
                  <p className="text-purple-300">The epic tale of a developer's journey through the digital realms</p>
                </div>

                <div className="space-y-8">
                  <div className="game-panel p-8">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                      <span>🌟</span> Origin Story
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">{characterLore.origin}</p>
                  </div>

                  <div className="game-panel p-8">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                      <span>⚔️</span> The Journey
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">{characterLore.journey}</p>
                  </div>

                  <div className="game-panel p-8">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                      <span>🎯</span> Current Quest
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">{characterLore.currentQuest}</p>
                  </div>

                  <div className="game-panel p-8">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                      <span>✨</span> Specialization
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed">{characterLore.specialization}</p>
                  </div>

                  <div className="game-panel p-8">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                      <span>📜</span> Philosophy
                    </h4>
                    <p className="text-lg text-gray-300 leading-relaxed italic">"{characterLore.philosophy}"</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
