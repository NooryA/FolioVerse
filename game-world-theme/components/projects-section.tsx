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

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedQuest, setSelectedQuest] = useState<string | null>(null);

  // Completed quests data
  const completedQuests = [
    {
      id: "ecommerce-platform",
      title: "The Merchant's Empire",
      subtitle: "E-commerce Platform Adventure",
      category: "main",
      difficulty: "legendary",
      status: "completed",
      completionDate: "2024",
      duration: "8 months",
      icon: "🛍️",
      description:
        "Built a comprehensive e-commerce platform with advanced features including inventory management, payment processing, user authentication, and admin dashboard. Implemented modern design patterns and optimized for performance.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Docker", "Redis"],
      achievements: [
        "Commerce Master - 10K+ transactions processed",
        "Security Guardian - Zero security breaches",
        "Performance Wizard - 2s load time achieved",
        "UX Champion - 95% user satisfaction",
      ],
      loot: {
        xp: 15000,
        gold: 2500,
        items: ["Golden Shopping Cart", "Merchant's Seal", "Payment Gateway Key"],
      },
      party: [
        { name: "Frontend Dev", role: "UI/UX Specialist", avatar: "🎨" },
        { name: "Backend Dev", role: "API Architect", avatar: "⚙️" },
        { name: "DevOps", role: "Cloud Warrior", avatar: "☁️" },
      ],
      stats: {
        linesOfCode: 25000,
        usersServed: 5000,
        transactionsProcessed: 12000,
        uptime: 99.9,
      },
      challenges: [
        "Integrated complex payment gateway systems",
        "Built scalable inventory management system",
        "Implemented real-time order tracking",
        "Created responsive cross-platform design",
      ],
    },
    {
      id: "task-management",
      title: "The Productivity Crusade",
      subtitle: "Task Management System Quest",
      category: "main",
      difficulty: "rare",
      status: "completed",
      completionDate: "2024",
      duration: "4 months",
      icon: "📋",
      description:
        "Developed a sophisticated task management application with team collaboration features, real-time updates, project timelines, and advanced analytics dashboard.",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Socket.io", "JWT", "D3.js"],
      achievements: [
        "Task Master - 50K+ tasks completed",
        "Team Leader - 500+ teams managed",
        "Analytics Guru - Advanced reporting system",
        "Real-time Champion - Live collaboration features",
      ],
      loot: {
        xp: 12000,
        gold: 1800,
        items: ["Productivity Crown", "Team Coordinator Badge", "Analytics Crystal"],
      },
      party: [
        { name: "Project Manager", role: "Quest Coordinator", avatar: "📊" },
        { name: "UX Designer", role: "Interface Crafter", avatar: "🎯" },
        { name: "QA Tester", role: "Bug Hunter", avatar: "🔍" },
      ],
      stats: {
        linesOfCode: 18000,
        usersServed: 2500,
        tasksCompleted: 50000,
        uptime: 99.5,
      },
      challenges: [
        "Built real-time collaboration system",
        "Implemented complex permission system",
        "Created advanced analytics dashboard",
        "Designed intuitive drag-and-drop interface",
      ],
    },
    {
      id: "learning-platform",
      title: "The Knowledge Seeker's Journey",
      subtitle: "Educational Platform Adventure",
      category: "side",
      difficulty: "epic",
      status: "completed",
      completionDate: "2023",
      duration: "6 months",
      icon: "📚",
      description:
        "Created an interactive learning platform with course management, video streaming, progress tracking, and gamification elements to enhance user engagement.",
      technologies: ["React", "Django", "PostgreSQL", "AWS S3", "WebRTC", "Stripe"],
      achievements: [
        "Knowledge Master - 100+ courses created",
        "Student Success - 95% completion rate",
        "Video Streaming Pioneer - HD quality delivery",
        "Gamification Expert - Badge system implementation",
      ],
      loot: {
        xp: 13500,
        gold: 2000,
        items: ["Wisdom Staff", "Learning Compass", "Achievement Badge"],
      },
      party: [
        { name: "Educational Designer", role: "Content Strategist", avatar: "📖" },
        { name: "Video Engineer", role: "Stream Master", avatar: "🎬" },
        { name: "Data Analyst", role: "Progress Tracker", avatar: "📈" },
      ],
      stats: {
        linesOfCode: 22000,
        usersServed: 3500,
        coursesCreated: 120,
        uptime: 99.7,
      },
      challenges: [
        "Implemented adaptive learning algorithms",
        "Built scalable video streaming system",
        "Created comprehensive progress tracking",
        "Designed engaging gamification system",
      ],
    },
    {
      id: "weather-app",
      title: "The Storm Chaser's Tool",
      subtitle: "Weather Prediction Quest",
      category: "side",
      difficulty: "rare",
      status: "completed",
      completionDate: "2023",
      duration: "2 months",
      icon: "🌦️",
      description:
        "Developed a comprehensive weather application with real-time forecasts, interactive maps, severe weather alerts, and detailed meteorological data visualization.",
      technologies: ["React Native", "OpenWeatherMap API", "MapBox", "Chart.js", "Push Notifications"],
      achievements: [
        "Weather Wizard - 99% accuracy predictions",
        "Storm Hunter - Severe weather alert system",
        "Map Master - Interactive weather visualization",
        "Mobile Champion - Cross-platform compatibility",
      ],
      loot: {
        xp: 8000,
        gold: 1200,
        items: ["Weather Crystal", "Storm Detector", "Forecast Scroll"],
      },
      party: [
        { name: "Data Scientist", role: "Weather Analyst", avatar: "🔬" },
        { name: "Mobile Dev", role: "App Creator", avatar: "📱" },
        { name: "UI Designer", role: "Visual Storyteller", avatar: "🎨" },
      ],
      stats: {
        linesOfCode: 12000,
        usersServed: 8000,
        forecastsDelivered: 100000,
        uptime: 99.8,
      },
      challenges: [
        "Integrated multiple weather APIs",
        "Built real-time data synchronization",
        "Created interactive weather maps",
        "Implemented push notification system",
      ],
    },
    {
      id: "fitness-tracker",
      title: "The Wellness Warrior",
      subtitle: "Health & Fitness Quest",
      category: "side",
      difficulty: "epic",
      status: "completed",
      completionDate: "2024",
      duration: "5 months",
      icon: "💪",
      description:
        "Built a comprehensive fitness tracking application with workout planning, nutrition tracking, progress analytics, and social features for motivation.",
      technologies: ["Flutter", "Firebase", "Node.js", "MongoDB", "ML Kit", "Chart.js"],
      achievements: [
        "Fitness Guru - 10K+ workouts logged",
        "Nutrition Master - Meal planning system",
        "Progress Tracker - Advanced analytics",
        "Community Builder - Social features",
      ],
      loot: {
        xp: 11000,
        gold: 1600,
        items: ["Strength Gauntlets", "Nutrition Guide", "Progress Medal"],
      },
      party: [
        { name: "Fitness Coach", role: "Workout Planner", avatar: "🏋️" },
        { name: "Nutritionist", role: "Diet Advisor", avatar: "🥗" },
        { name: "ML Engineer", role: "Data Wizard", avatar: "🧠" },
      ],
      stats: {
        linesOfCode: 20000,
        usersServed: 4000,
        workoutsLogged: 15000,
        uptime: 99.6,
      },
      challenges: [
        "Built machine learning recommendation system",
        "Implemented wearable device integration",
        "Created comprehensive analytics dashboard",
        "Designed motivational social features",
      ],
    },
    {
      id: "crypto-wallet",
      title: "The Digital Treasure Vault",
      subtitle: "Cryptocurrency Wallet Adventure",
      category: "epic",
      difficulty: "legendary",
      status: "completed",
      completionDate: "2024",
      duration: "9 months",
      icon: "₿",
      description:
        "Developed a secure cryptocurrency wallet with multi-chain support, DeFi integration, portfolio tracking, and advanced security features including hardware wallet support.",
      technologies: ["React", "Web3.js", "Solidity", "Node.js", "PostgreSQL", "Redis", "Docker"],
      achievements: [
        "Crypto Master - Multi-chain wallet support",
        "Security Champion - Zero security incidents",
        "DeFi Pioneer - Decentralized finance integration",
        "Portfolio Wizard - Advanced tracking system",
      ],
      loot: {
        xp: 18000,
        gold: 3000,
        items: ["Digital Vault Key", "Blockchain Crown", "DeFi Compass"],
      },
      party: [
        { name: "Blockchain Dev", role: "Smart Contract Wizard", avatar: "⛓️" },
        { name: "Security Expert", role: "Crypto Guardian", avatar: "🔒" },
        { name: "DeFi Specialist", role: "Protocol Master", avatar: "🏛️" },
      ],
      stats: {
        linesOfCode: 35000,
        usersServed: 1500,
        transactionVolume: 5000000,
        uptime: 99.95,
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

  return (
    <section id="projects" className="game-section relative bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/30">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating trophies and achievements */}
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${(i * 23) % 100}%`,
              top: `${(i * 37) % 100}%`,
              animationDelay: `${(i % 20) * 0.5}s`,
              animationDuration: `${8 + (i % 8)}s`,
            }}
          >
            <div className="text-3xl">{["🏆", "⚔️", "🛡️", "👑", "💎", "🎯", "🔥", "⚡"][i % 8]}</div>
          </div>
        ))}
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
              className="group transition-all duration-500 hover:scale-105 relative z-10"
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

                {/* View Quest Log Button */}
                <div className="text-center relative z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedQuest(quest.id);
                      setIsModalOpen(true);
                    }}
                    className="game-btn game-btn-primary w-full hover:bg-purple-600/50 transition-colors duration-200 relative z-30"
                  >
                    View Quest Log
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Rarity Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-r pointer-events-none ${
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

        {/* Quest Details Modal */}
        {isModalOpen && selectedQuest && (
          <div
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border-2 border-purple-500/50 rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const quest = completedQuests.find((q) => q.id === selectedQuest);
                if (!quest) return null;

                return (
                  <>
                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
                      <div className="flex items-center gap-4">
                        <div className="character-portrait w-16 h-16">
                          <span className="text-4xl">{quest.icon}</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{quest.title}</h3>
                          <p className="text-purple-300">{quest.subtitle}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full font-bold ${getRarityColor(quest.difficulty)}`}>
                          {getDifficultyIcon(quest.difficulty)} {quest.difficulty.toUpperCase()}
                        </span>
                      </div>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="p-2 rounded-lg border border-purple-500/30 hover:bg-red-500/20 transition-colors duration-200"
                      >
                        <CloseIcon className="w-6 h-6 text-gray-400 hover:text-red-400" />
                      </button>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 max-h-[70vh] overflow-y-auto">
                      <div className="space-y-8">
                        {/* Quest Description */}
                        <div className="text-center">
                          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">{quest.description}</p>
                          <div className="flex items-center justify-center gap-4 mt-4">
                            <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full font-bold">
                              ✓ COMPLETED {quest.completionDate}
                            </span>
                            <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full font-bold">
                              📅 Duration: {quest.duration}
                            </span>
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                          {/* Achievements & Challenges */}
                          <div>
                            <h4 className="text-2xl font-bold text-yellow-400 mb-4">🏅 Achievements Unlocked</h4>
                            <div className="space-y-3 mb-8">
                              {quest.achievements.map((achievement, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-3 p-3 bg-green-500/20 border border-green-500/30 rounded-lg"
                                >
                                  <TrophyIcon className="w-6 h-6 text-yellow-500 flex-shrink-0" />
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
                                <div
                                  key={index}
                                  className="flex items-center gap-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg"
                                >
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

                        {/* Technology Stack */}
                        <div>
                          <h4 className="text-2xl font-bold text-yellow-400 mb-4 text-center">⚙️ Technologies Mastered</h4>
                          <div className="flex flex-wrap justify-center gap-3">
                            {quest.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 font-medium"
                              >
                                {tech}
                              </span>
                            ))}
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
                    </div>

                    {/* Modal Footer */}
                    <div className="p-6 border-t border-purple-500/30 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
                      <div className="flex items-center justify-between">
                        <div className="grid grid-cols-3 gap-6">
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
                        <button
                          onClick={() => setIsModalOpen(false)}
                          className="px-6 py-2 bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-500/50 rounded-lg text-yellow-400 font-bold transition-colors duration-200"
                        >
                          Continue Adventure
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
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
