"use client";

import { useState, useEffect } from "react";

// Epic Quest Icons
const SwordIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.92 5L12 10.07L17.08 5H19V6.92L13.93 12L19 17.08V19H17.08L12 13.93L6.92 19H5V17.08L10.07 12L5 6.92V5H6.92Z" />
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

const CrownIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M5 16L3 5l4.5 4L12 4l4.5 5L21 5l-2 11H5z" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
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

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
    />
  </svg>
);

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedQuest, setSelectedQuest] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Epic Completed Quests (Projects)
  const completedQuests = [
    {
      id: "ecommerce-platform",
      title: "The E-Commerce Empire",
      subtitle: "A Legendary Trading Platform Quest",
      category: "main",
      difficulty: "legendary",
      status: "completed",
      completionDate: "2024",
      duration: "6 months",
      icon: "🏛️",
      description:
        "Built a comprehensive e-commerce platform handling thousands of transactions daily with advanced features like real-time inventory, payment processing, and admin analytics.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      achievements: [
        "Scalability Master - Handled 10K+ concurrent users",
        "Performance Champion - 98 Lighthouse score",
        "Security Guardian - Zero security vulnerabilities",
        "User Experience Sage - 4.9/5 user rating",
      ],
      loot: {
        xp: 15000,
        gold: 2500,
        items: ["Advanced React Crown", "PostgreSQL Sword", "Stripe Payment Shield"],
      },
      party: [
        { name: "Lead Developer", role: "Quest Leader", avatar: "🧙‍♂️" },
        { name: "UI Designer", role: "Visual Enchanter", avatar: "🎨" },
        { name: "Backend Engineer", role: "System Architect", avatar: "🏰" },
      ],
      stats: {
        linesOfCode: 25000,
        componentsBuilt: 85,
        apisCreated: 42,
        testsWritten: 350,
      },
      challenges: [
        "Implemented complex payment flows with multiple providers",
        "Optimized database queries for high-traffic scenarios",
        "Built real-time inventory management system",
        "Created comprehensive admin dashboard",
      ],
    },
    {
      id: "ai-dashboard",
      title: "The AI Analytics Citadel",
      subtitle: "Machine Learning Mastery Quest",
      category: "main",
      difficulty: "epic",
      status: "completed",
      completionDate: "2024",
      duration: "4 months",
      icon: "🤖",
      description:
        "Developed an AI-powered analytics dashboard with machine learning predictions, real-time data visualization, and intelligent insights for business decision making.",
      technologies: ["Python", "TensorFlow", "React", "D3.js", "FastAPI", "MongoDB", "Docker"],
      achievements: [
        "AI Whisperer - 95% prediction accuracy",
        "Data Visualizer - Interactive chart mastery",
        "Real-time Specialist - Live data streaming",
        "ML Model Master - 5 trained models deployed",
      ],
      loot: {
        xp: 12000,
        gold: 2000,
        items: ["Neural Network Staff", "Data Visualization Orb", "Python Spellbook"],
      },
      party: [
        { name: "ML Engineer", role: "Data Wizard", avatar: "🧠" },
        { name: "Frontend Dev", role: "Chart Sculptor", avatar: "📊" },
        { name: "DevOps", role: "Deployment Sage", avatar: "🚀" },
      ],
      stats: {
        linesOfCode: 18000,
        modelsTrained: 5,
        chartsCreated: 23,
        dataPointsProcessed: 1000000,
      },
      challenges: [
        "Integrated multiple ML models for different predictions",
        "Built responsive data visualization components",
        "Implemented real-time data streaming",
        "Optimized model inference performance",
      ],
    },
    {
      id: "mobile-banking",
      title: "The Digital Vault Conquest",
      subtitle: "Secure Banking App Adventure",
      category: "side",
      difficulty: "epic",
      status: "completed",
      completionDate: "2023",
      duration: "5 months",
      icon: "🏦",
      description:
        "Created a secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
      technologies: ["React Native", "Node.js", "Express", "PostgreSQL", "JWT", "WebSockets"],
      achievements: [
        "Security Fortress - Bank-level encryption",
        "Mobile Master - Cross-platform perfection",
        "Real-time Champion - Instant notifications",
        "UX Excellence - 4.8/5 app store rating",
      ],
      loot: {
        xp: 10000,
        gold: 1800,
        items: ["Security Shield Elite", "Mobile Development Crown", "JWT Token Blade"],
      },
      party: [
        { name: "Mobile Dev", role: "App Architect", avatar: "📱" },
        { name: "Security Expert", role: "Encryption Guardian", avatar: "🔐" },
        { name: "UI/UX Designer", role: "Experience Crafter", avatar: "✨" },
      ],
      stats: {
        linesOfCode: 22000,
        screensDesigned: 45,
        securityTests: 120,
        performanceScore: 96,
      },
      challenges: [
        "Implemented biometric authentication system",
        "Built secure transaction processing",
        "Created intuitive financial management UI",
        "Optimized for various device sizes",
      ],
    },
    {
      id: "game-platform",
      title: "The Gaming Realm Portal",
      subtitle: "Multiplayer Platform Epic",
      category: "epic",
      difficulty: "legendary",
      status: "completed",
      completionDate: "2023",
      duration: "8 months",
      icon: "🎮",
      description:
        "Developed a comprehensive gaming platform with multiplayer capabilities, user profiles, leaderboards, and real-time chat functionality.",
      technologies: ["Unity", "C#", "Socket.io", "Redis", "MySQL", "WebGL", "Three.js"],
      achievements: [
        "Game Master - 5 complete games launched",
        "Multiplayer Architect - 1000+ concurrent players",
        "Performance Optimizer - 60fps guaranteed",
        "Community Builder - 10K+ active users",
      ],
      loot: {
        xp: 18000,
        gold: 3000,
        items: ["Unity Master License", "Multiplayer Crown", "Performance Optimization Gem"],
      },
      party: [
        { name: "Game Developer", role: "Realm Creator", avatar: "🎲" },
        { name: "3D Artist", role: "World Builder", avatar: "🎨" },
        { name: "Network Engineer", role: "Connection Master", avatar: "🌐" },
      ],
      stats: {
        linesOfCode: 35000,
        gamesCreated: 5,
        playersServed: 10000,
        uptime: 99.9,
      },
      challenges: [
        "Built scalable multiplayer architecture",
        "Optimized 3D graphics for web browsers",
        "Implemented real-time leaderboards",
        "Created engaging user progression system",
      ],
    },
    {
      id: "blockchain-wallet",
      title: "The Crypto Vault Guardian",
      subtitle: "Blockchain Security Quest",
      category: "side",
      difficulty: "rare",
      status: "completed",
      completionDate: "2024",
      duration: "3 months",
      icon: "⛓️",
      description:
        "Built a secure cryptocurrency wallet with multi-chain support, DeFi integrations, and advanced security features including hardware wallet support.",
      technologies: ["Solidity", "Web3.js", "React", "Ethers.js", "IPFS", "MetaMask"],
      achievements: [
        "Blockchain Specialist - Multi-chain mastery",
        "Security Expert - Hardware wallet integration",
        "DeFi Pioneer - Protocol integrations",
        "Smart Contract Auditor - Zero vulnerabilities",
      ],
      loot: {
        xp: 8000,
        gold: 1500,
        items: ["Blockchain Crown", "Smart Contract Scroll", "Crypto Security Shield"],
      },
      party: [
        { name: "Blockchain Dev", role: "Chain Whisperer", avatar: "⛓️" },
        { name: "Security Auditor", role: "Vulnerability Hunter", avatar: "🔍" },
        { name: "Frontend Dev", role: "Interface Crafter", avatar: "💎" },
      ],
      stats: {
        linesOfCode: 12000,
        smartContracts: 8,
        chainsSupported: 5,
        securityAudits: 15,
      },
      challenges: [
        "Integrated multiple blockchain networks",
        "Implemented hardware wallet connectivity",
        "Built secure transaction signing",
        "Created intuitive DeFi interface",
      ],
    },
    {
      id: "social-platform",
      title: "The Social Kingdom Builder",
      subtitle: "Community Platform Adventure",
      category: "main",
      difficulty: "epic",
      status: "completed",
      completionDate: "2023",
      duration: "7 months",
      icon: "👥",
      description:
        "Created a social media platform with advanced features like content creation tools, community management, live streaming, and AI-powered content recommendations.",
      technologies: ["React", "GraphQL", "Apollo", "Node.js", "MongoDB", "Socket.io", "AWS"],
      achievements: [
        "Community Leader - 50K+ active users",
        "Content Master - 1M+ posts created",
        "Streaming Pioneer - Live video integration",
        "AI Curator - Smart content recommendations",
      ],
      loot: {
        xp: 14000,
        gold: 2200,
        items: ["Community Crown", "GraphQL Staff", "AWS Cloud Boots"],
      },
      party: [
        { name: "Full-stack Dev", role: "Platform Architect", avatar: "🏗️" },
        { name: "AI Engineer", role: "Algorithm Wizard", avatar: "🤖" },
        { name: "DevOps", role: "Infrastructure Guardian", avatar: "☁️" },
      ],
      stats: {
        linesOfCode: 30000,
        usersServed: 50000,
        postsCreated: 1000000,
        uptime: 99.8,
      },
      challenges: [
        "Built scalable real-time messaging system",
        "Implemented AI content recommendation engine",
        "Created live streaming functionality",
        "Designed complex user permission system",
      ],
    },
  ];

  // Quest Categories
  const questCategories = [
    { id: "all", name: "All Quests", icon: "⚔️", count: completedQuests.length },
    { id: "main", name: "Main Quests", icon: "👑", count: completedQuests.filter((q) => q.category === "main").length },
    { id: "side", name: "Side Quests", icon: "🗡️", count: completedQuests.filter((q) => q.category === "side").length },
    { id: "epic", name: "Epic Raids", icon: "🐉", count: completedQuests.filter((q) => q.category === "epic").length },
  ];

  const filteredQuests =
    selectedCategory === "all" ? completedQuests : completedQuests.filter((quest) => quest.category === selectedCategory);

  const getRarityColor = (difficulty: string) => {
    switch (difficulty) {
      case "legendary":
        return "border-yellow-500 bg-yellow-500/20 text-yellow-400 shadow-yellow-500/30";
      case "epic":
        return "border-purple-500 bg-purple-500/20 text-purple-400 shadow-purple-500/30";
      case "rare":
        return "border-blue-500 bg-blue-500/20 text-blue-400 shadow-blue-500/30";
      default:
        return "border-gray-500 bg-gray-500/20 text-gray-400";
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "legendary":
        return "👑";
      case "epic":
        return "⚔️";
      case "rare":
        return "🛡️";
      default:
        return "⭐";
    }
  };

  // Floating quest completion animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="relative min-h-screen py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/30">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating trophies and achievements */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          >
            <div className="text-3xl">{["🏆", "⚔️", "🛡️", "👑", "💎", "🎯", "🔥", "⚡"][Math.floor(Math.random() * 8)]}</div>
          </div>
        ))}

        {/* Quest completion effects */}
        {isAnimating && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-level-up">
            <div className="text-6xl">🎉</div>
            <div className="text-yellow-400 font-bold text-xl mt-2">QUEST COMPLETED!</div>
          </div>
        )}
      </div>

      <div className="game-container relative z-10">
        {/* Hall of Legends Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full mb-8">
            <TrophyIcon className="w-6 h-6 text-yellow-500" />
            <span className="text-yellow-400 font-bold">HALL OF LEGENDS</span>
          </div>

          <h2 className="game-title text-5xl md:text-7xl mb-6">Epic Quest Chronicles</h2>

          <p className="text-xl text-purple-300 max-w-3xl mx-auto mb-8">
            Behold the legendary quests completed in the digital realm. Each project represents an epic adventure with unique challenges
            conquered, powerful technologies mastered, and valuable treasures earned.
          </p>

          {/* Quest Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="game-stat">
              <div className="game-stat-label">Total Quests</div>
              <div className="game-stat-value text-yellow-500">{completedQuests.length}</div>
            </div>
            <div className="game-stat">
              <div className="game-stat-label">XP Earned</div>
              <div className="game-stat-value text-green-500">
                {completedQuests.reduce((total, quest) => total + quest.loot.xp, 0).toLocaleString()}
              </div>
            </div>
            <div className="game-stat">
              <div className="game-stat-label">Gold Earned</div>
              <div className="game-stat-value text-yellow-500">
                {completedQuests.reduce((total, quest) => total + quest.loot.gold, 0).toLocaleString()}
              </div>
            </div>
            <div className="game-stat">
              <div className="game-stat-label">Legendary Items</div>
              <div className="game-stat-value text-purple-500">{completedQuests.filter((q) => q.difficulty === "legendary").length}</div>
            </div>
          </div>
        </div>

        {/* Quest Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {questCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg border-2 transition-all font-bold ${
                selectedCategory === category.id
                  ? "border-yellow-500/50 bg-yellow-500/20 text-yellow-400"
                  : "border-purple-500/30 text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/10"
              }`}
            >
              <span className="text-2xl">{category.icon}</span>
              <div>
                <div className="text-sm">{category.name}</div>
                <div className="text-xs opacity-75">({category.count} quests)</div>
              </div>
            </button>
          ))}
        </div>

        {/* Quest Gallery */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredQuests.map((quest, index) => (
            <div
              key={quest.id}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                selectedQuest === quest.id ? "scale-105 z-10" : ""
              }`}
              onClick={() => setSelectedQuest(selectedQuest === quest.id ? null : quest.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quest Card */}
              <div className={`game-window p-8 h-full relative overflow-hidden border-2 ${getRarityColor(quest.difficulty)}`}>
                {/* Quest Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="character-portrait w-16 h-16">
                      <span className="text-4xl">{quest.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{getDifficultyIcon(quest.difficulty)}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRarityColor(quest.difficulty)}`}>
                          {quest.difficulty.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{quest.title}</h3>
                      <p className="text-purple-300">{quest.subtitle}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-green-400 font-bold text-sm">COMPLETED ✓</div>
                    <div className="text-gray-400 text-xs">{quest.completionDate}</div>
                  </div>
                </div>

                {/* Quest Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">{quest.description}</p>

                {/* Technology Stack */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">⚙️ Technologies Mastered</h4>
                  <div className="flex flex-wrap gap-2">
                    {quest.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quest Rewards */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-yellow-400 mb-3">🏆 Quest Rewards</h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="game-stat">
                      <div className="game-stat-label">XP Gained</div>
                      <div className="game-stat-value text-green-500">{quest.loot.xp.toLocaleString()}</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Gold Earned</div>
                      <div className="game-stat-value text-yellow-500">{quest.loot.gold.toLocaleString()}</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Items Found</div>
                      <div className="game-stat-value text-purple-500">{quest.loot.items.length}</div>
                    </div>
                  </div>
                </div>

                {/* Expand Button */}
                <div className="text-center">
                  <button className="game-btn game-btn-primary w-full">
                    {selectedQuest === quest.id ? "Hide Details" : "View Quest Log"}
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Rarity Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-r ${
                    quest.difficulty === "legendary"
                      ? "from-yellow-500/30 via-orange-500/30 to-red-500/30"
                      : quest.difficulty === "epic"
                      ? "from-purple-500/30 via-pink-500/30 to-purple-500/30"
                      : "from-blue-500/30 via-cyan-500/30 to-blue-500/30"
                  } animate-pulse`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Quest Log Modal */}
        {selectedQuest && (
          <div className="game-window p-8 mb-12">
            {(() => {
              const quest = completedQuests.find((q) => q.id === selectedQuest);
              if (!quest) return null;

              return (
                <div className="space-y-8">
                  {/* Detailed Quest Header */}
                  <div className="text-center">
                    <div className="character-portrait w-24 h-24 mx-auto mb-4">
                      <span className="text-6xl">{quest.icon}</span>
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">{quest.title}</h3>
                    <p className="text-xl text-purple-300 mb-4">{quest.subtitle}</p>
                    <div className="flex items-center justify-center gap-4">
                      <span className={`px-4 py-2 rounded-full font-bold ${getRarityColor(quest.difficulty)}`}>
                        {getDifficultyIcon(quest.difficulty)} {quest.difficulty.toUpperCase()} QUEST
                      </span>
                      <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-bold">
                        ✓ COMPLETED {quest.completionDate}
                      </span>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Achievements & Challenges */}
                    <div>
                      <h4 className="text-2xl font-bold text-yellow-400 mb-4">🏅 Achievements Unlocked</h4>
                      <div className="space-y-3 mb-8">
                        {quest.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                            <TrophyIcon className="w-6 h-6 text-yellow-500" />
                            <span className="text-green-400 font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-2xl font-bold text-yellow-400 mb-4">⚔️ Challenges Conquered</h4>
                      <div className="space-y-3">
                        {quest.challenges.map((challenge, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                            <SwordIcon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-red-300">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Party & Stats */}
                    <div>
                      <h4 className="text-2xl font-bold text-yellow-400 mb-4">👥 Quest Party</h4>
                      <div className="space-y-3 mb-8">
                        {quest.party.map((member, index) => (
                          <div key={index} className="flex items-center gap-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-2xl">{member.avatar}</span>
                            </div>
                            <div>
                              <div className="text-white font-bold">{member.name}</div>
                              <div className="text-blue-300 text-sm">{member.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <h4 className="text-2xl font-bold text-yellow-400 mb-4">📊 Quest Statistics</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(quest.stats).map(([stat, value]) => (
                          <div key={stat} className="game-stat">
                            <div className="game-stat-label capitalize">{stat.replace(/([A-Z])/g, " $1").trim()}</div>
                            <div className="game-stat-value text-cyan-400">{value.toLocaleString()}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Legendary Loot */}
                  <div>
                    <h4 className="text-2xl font-bold text-yellow-400 mb-4 text-center">💎 Legendary Loot Acquired</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {quest.loot.items.map((item, index) => (
                        <div key={index} className="game-panel p-4 text-center">
                          <div className="text-4xl mb-2">⚡</div>
                          <h5 className="font-bold text-purple-400">{item}</h5>
                          <div className="text-xs text-gray-400 mt-2">Legendary Item</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* Hall of Legends Summary */}
        <div className="text-center">
          <div className="game-window max-w-3xl mx-auto p-8">
            <h3 className="text-3xl font-bold text-white mb-4">The Legend Continues...</h3>
            <p className="text-lg text-purple-300 mb-8">
              Each quest completed has forged new skills, unlocked powerful abilities, and brought valuable treasures. The adventure in the
              digital realm never ends, with new challenges and epic quests awaiting on the horizon.
            </p>

            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="game-stat">
                <div className="game-stat-label">Master Rank</div>
                <div className="game-stat-value text-yellow-500">Legendary</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Power Level</div>
                <div className="game-stat-value text-purple-500">9000+</div>
              </div>
              <div className="game-stat">
                <div className="game-stat-label">Guild Status</div>
                <div className="game-stat-value text-cyan-500">Elite</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full">
              <CrownIcon className="w-6 h-6 text-yellow-500" />
              <span className="text-green-400 font-bold">Ready for New Adventures</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
