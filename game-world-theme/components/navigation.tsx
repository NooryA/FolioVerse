"use client";

import { useState, useEffect } from "react";

// Game Icons
const SwordIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.92 5L12 10.07L17.08 5H19V6.92L13.93 12L19 17.08V19H17.08L12 13.93L6.92 19H5V17.08L10.07 12L5 6.92V5H6.92Z" />
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

const TavernIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 2l1.5 4h5L16 2h1l-1.5 4h2.5c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2.5L7 2h1zm3 16c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ScrollIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isQuestLogOpen, setIsQuestLogOpen] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    level: 47,
    health: 85,
    mana: 92,
    experience: 78,
    gold: 15847,
    name: "Code Warrior",
  });

  // Navigation items that feel like game locations
  const worldLocations = [
    { id: "hero", name: "Character Hall", icon: CrownIcon, location: "The Origins" },
    { id: "about", name: "Character Sheet", icon: BookIcon, location: "Personal Codex" },
    { id: "projects", name: "Hall of Legends", icon: ShieldIcon, location: "Achievement Gallery" },
    { id: "contact", name: "Guild Tavern", icon: TavernIcon, location: "The Gathering Place" },
  ];

  // Active quests for the quest log
  const activeQuests = [
    {
      id: 1,
      title: "The Portfolio Quest",
      description: "Showcase legendary achievements to attract worthy allies and demonstrate mastery of the coding arts.",
      progress: 95,
      reward: "New Alliance",
      type: "main",
      difficulty: "Legendary",
      location: "Digital Realm",
      timeRemaining: "2 days",
    },
    {
      id: 2,
      title: "Master the Dark Arts",
      description: "Learn advanced JavaScript sorcery and TypeScript enchantments to unlock powerful development abilities.",
      progress: 87,
      reward: "Wizard Status",
      type: "skill",
      difficulty: "Epic",
      location: "Code Academy",
      timeRemaining: "1 week",
    },
    {
      id: 3,
      title: "Build the Ultimate Fortress",
      description: "Create an impregnable full-stack application with modern architecture and defensive measures.",
      progress: 73,
      reward: "Fortress Blueprint",
      type: "project",
      difficulty: "Epic",
      location: "Development Labs",
      timeRemaining: "3 weeks",
    },
    {
      id: 4,
      title: "Networking Guild Challenge",
      description: "Connect with fellow developers and expand your professional network across the realm.",
      progress: 45,
      reward: "Guild Membership",
      type: "social",
      difficulty: "Rare",
      location: "Social Hubs",
      timeRemaining: "Ongoing",
    },
  ];

  // Scroll detection for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-update stats for immersion (client-side only)
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerStats((prev) => ({
        ...prev,
        health: Math.min(100, prev.health + 1.5),
        mana: Math.min(100, prev.mana + 2),
        experience: Math.min(100, prev.experience + 0.3),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Clean Fixed Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95 backdrop-blur-lg border-b border-purple-500/30">
        <div className="container mx-auto px-4">
          {/* Single Row - Main Navigation */}
          <div className="flex items-center justify-between py-2">
            {/* Left: Character Info */}
            <div className="flex items-center gap-3">
              <div className="character-portrait w-10 h-10 flex items-center justify-center">
                <CrownIcon className="w-5 h-5 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-yellow-500">{playerStats.name}</h3>
                <div className="flex items-center gap-3 text-xs">
                  <span className="text-gray-300">Level {playerStats.level}</span>
                  <div className="hidden md:flex items-center gap-2">
                    <span className="text-red-400">HP {Math.round(playerStats.health)}</span>
                    <span className="text-blue-400">MP {Math.round(playerStats.mana)}</span>
                    <span className="text-yellow-400">XP {Math.round(playerStats.experience)}%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Navigation Buttons */}
            <div className="flex items-center gap-2">
              {worldLocations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => scrollToSection(location.id)}
                  className={`px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                    activeSection === location.id
                      ? "border-yellow-500 bg-yellow-500/20 text-yellow-400"
                      : "border-purple-500/30 text-gray-300 hover:border-purple-500/50"
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    <location.icon className="w-4 h-4" />
                    <span className="text-sm font-medium hidden lg:block">{location.name}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right: Actions & Gold */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  console.log("Quest Log clicked!");
                  setIsQuestLogOpen(true);
                }}
                className="p-2 rounded-lg border border-purple-500/30 hover:bg-purple-500/20 transition-colors relative"
                title="Quest Log"
              >
                <ScrollIcon className="w-4 h-4 text-purple-400" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold text-white">
                  {activeQuests.length}
                </span>
                {isQuestLogOpen && <span className="absolute -bottom-8 left-0 text-xs text-green-400 whitespace-nowrap">MODAL OPEN</span>}
              </button>

              <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-lg border border-yellow-500/30">
                <span className="text-sm">💰</span>
                <span className="text-sm font-bold text-yellow-400">{playerStats.gold.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quest Log Modal */}
      {isQuestLogOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setIsQuestLogOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 border-2 border-purple-500/50 rounded-lg shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
              <div className="flex items-center gap-3">
                <ScrollIcon className="w-6 h-6 text-purple-400" />
                <h2 className="game-title text-2xl">Active Quests</h2>
                <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-bold">{activeQuests.length}</span>
              </div>
              <button onClick={() => setIsQuestLogOpen(false)} className="game-btn p-2 hover:bg-red-500/20 transition-colors duration-200">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6 max-h-96 overflow-y-auto">
              {activeQuests.map((quest) => (
                <div
                  key={quest.id}
                  className="quest-item border-2 border-purple-500/30 rounded-lg p-4 bg-gradient-to-r from-gray-900/50 to-purple-900/20"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="quest-title text-xl font-bold text-yellow-400">{quest.title}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold border ${
                            quest.type === "main"
                              ? "bg-red-500/20 text-red-400 border-red-500/30"
                              : quest.type === "skill"
                              ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                              : quest.type === "project"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : "bg-purple-500/20 text-purple-400 border-purple-500/30"
                          }`}
                        >
                          {quest.type.toUpperCase()}
                        </span>
                        <span
                          className={`px-2 py-1 rounded text-xs font-bold ${
                            quest.difficulty === "Legendary"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : quest.difficulty === "Epic"
                              ? "bg-purple-500/20 text-purple-400"
                              : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {quest.difficulty}
                        </span>
                      </div>

                      <p className="quest-description text-gray-300 mb-3 leading-relaxed">{quest.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-3 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">📍 Location:</span>
                          <span className="text-white">{quest.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400">⏰ Time:</span>
                          <span className="text-white">{quest.timeRemaining}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-400 font-medium">Quest Progress</span>
                        <span className="text-sm text-white font-bold">{quest.progress}%</span>
                      </div>
                      <div className="game-progress h-3 rounded-full">
                        <div
                          className={`game-progress-bar h-full rounded-full transition-all duration-500 ${
                            quest.progress >= 90
                              ? "bg-green-500"
                              : quest.progress >= 70
                              ? "bg-yellow-500"
                              : quest.progress >= 50
                              ? "bg-orange-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${quest.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-400">🏆 Reward:</span>
                        <span className="text-yellow-400 font-bold">{quest.reward}</span>
                      </div>

                      <button className="px-4 py-2 bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/50 rounded-lg text-white font-medium transition-colors duration-200">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-purple-500/30 bg-gradient-to-r from-gray-900/50 to-purple-900/20">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="font-medium">{activeQuests.filter((q) => q.progress >= 90).length}</span> quests near completion
                </div>
                <button
                  onClick={() => setIsQuestLogOpen(false)}
                  className="px-6 py-2 bg-yellow-600/30 hover:bg-yellow-600/50 border border-yellow-500/50 rounded-lg text-yellow-400 font-bold transition-colors duration-200"
                >
                  Continue Adventure
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
