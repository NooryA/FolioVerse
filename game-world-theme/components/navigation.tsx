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

const MapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
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

const BagIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h4c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h4zm2 0h6V2H9v2z" />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isQuestLogOpen, setIsQuestLogOpen] = useState(false);
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);
  const [isCharacterSheetOpen, setIsCharacterSheetOpen] = useState(false);
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
      description: "Showcase legendary achievements to attract worthy allies",
      progress: 95,
      reward: "New Alliance",
      type: "main",
    },
    {
      id: 2,
      title: "Master the Dark Arts",
      description: "Learn advanced JavaScript sorcery and TypeScript enchantments",
      progress: 87,
      reward: "Wizard Status",
      type: "skill",
    },
    {
      id: 3,
      title: "Build the Ultimate Fortress",
      description: "Create an impregnable full-stack application",
      progress: 73,
      reward: "Fortress Blueprint",
      type: "project",
    },
  ];

  // Inventory items
  const inventoryItems = [
    { id: 1, name: "JavaScript Grimoire", icon: "📜", rarity: "legendary", type: "Knowledge" },
    { id: 2, name: "React Crown", icon: "👑", rarity: "epic", type: "Framework" },
    { id: 3, name: "Node.js Staff", icon: "🪄", rarity: "epic", type: "Backend" },
    { id: 4, name: "TypeScript Shield", icon: "🛡️", rarity: "rare", type: "Protection" },
    { id: 5, name: "Git Sword", icon: "⚔️", rarity: "epic", type: "Version Control" },
    { id: 6, name: "Docker Container", icon: "📦", rarity: "rare", type: "Deployment" },
    { id: 7, name: "AWS Cloud Boots", icon: "☁️", rarity: "legendary", type: "Infrastructure" },
    { id: 8, name: "VS Code Cloak", icon: "🧙‍♂️", rarity: "epic", type: "Editor" },
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

  // Auto-update stats for immersion
  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerStats((prev) => ({
        ...prev,
        health: Math.min(100, prev.health + Math.random() * 2),
        mana: Math.min(100, prev.mana + Math.random() * 3),
        experience: Math.min(100, prev.experience + Math.random() * 0.5),
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

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "border-yellow-500 bg-yellow-500/20";
      case "epic":
        return "border-purple-500 bg-purple-500/20";
      case "rare":
        return "border-blue-500 bg-blue-500/20";
      default:
        return "border-gray-500 bg-gray-500/20";
    }
  };

  return (
    <>
      {/* Main Game HUD */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95 backdrop-blur-lg border-b-2 border-purple-500/30">
        <div className="game-container">
          <div className="flex items-center justify-between py-4">
            {/* Player Character Info */}
            <div className="flex items-center gap-4">
              <div className="character-portrait w-16 h-16">
                <CrownIcon className="w-8 h-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-yellow-500">{playerStats.name}</h3>
                <p className="text-sm text-gray-300">Level {playerStats.level} Developer</p>
              </div>
            </div>

            {/* World Map Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {worldLocations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => scrollToSection(location.id)}
                  className={`group relative px-4 py-2 rounded-lg border-2 transition-all duration-300 ${
                    activeSection === location.id
                      ? "border-yellow-500 bg-yellow-500/20 text-yellow-400"
                      : "border-purple-500/30 text-gray-300 hover:border-purple-500/60 hover:bg-purple-500/10"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <location.icon className="w-5 h-5" />
                    <div className="text-left">
                      <div className="text-sm font-bold">{location.name}</div>
                      <div className="text-xs opacity-75">{location.location}</div>
                    </div>
                  </div>

                  {activeSection === location.id && <div className="absolute inset-0 rounded-lg bg-yellow-500/20 animate-pulse" />}
                </button>
              ))}
            </div>

            {/* Game Menu Icons */}
            <div className="flex items-center gap-3">
              <button onClick={() => setIsQuestLogOpen(true)} className="game-btn p-3 relative" title="Quest Log">
                <ScrollIcon className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">
                  {activeQuests.length}
                </span>
              </button>

              <button onClick={() => setIsInventoryOpen(true)} className="game-btn p-3" title="Inventory">
                <BagIcon className="w-6 h-6" />
              </button>

              <button onClick={() => setIsCharacterSheetOpen(true)} className="game-btn p-3" title="Character Sheet">
                <BookIcon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Player Stats HUD */}
          <div className="flex items-center gap-6 pb-4">
            {/* Health Bar */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-red-400 font-bold">HP</span>
              <div className="game-progress w-32">
                <div className="game-progress-bar health-bar" style={{ width: `${playerStats.health}%` }} />
              </div>
              <span className="text-sm text-white">{Math.round(playerStats.health)}/100</span>
            </div>

            {/* Mana Bar */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-blue-400 font-bold">MP</span>
              <div className="game-progress w-32">
                <div className="game-progress-bar mana-bar" style={{ width: `${playerStats.mana}%` }} />
              </div>
              <span className="text-sm text-white">{Math.round(playerStats.mana)}/100</span>
            </div>

            {/* Experience Bar */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-yellow-400 font-bold">XP</span>
              <div className="game-progress w-40">
                <div className="game-progress-bar experience-bar" style={{ width: `${playerStats.experience}%` }} />
              </div>
              <span className="text-sm text-white">{Math.round(playerStats.experience)}%</span>
            </div>

            {/* Gold */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-2xl">💰</span>
              <span className="text-lg font-bold text-yellow-400">{playerStats.gold.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quest Log Modal */}
      {isQuestLogOpen && (
        <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4">
          <div className="game-window max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
              <h2 className="game-title text-2xl">Quest Log</h2>
              <button onClick={() => setIsQuestLogOpen(false)} className="game-btn p-2">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
              {activeQuests.map((quest) => (
                <div key={quest.id} className="quest-item">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="quest-title">{quest.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        quest.type === "main"
                          ? "bg-red-500/20 text-red-400 border border-red-500/30"
                          : quest.type === "skill"
                          ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-green-500/20 text-green-400 border border-green-500/30"
                      }`}
                    >
                      {quest.type}
                    </span>
                  </div>
                  <p className="quest-description">{quest.description}</p>
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">Progress</span>
                      <span className="text-sm text-white">{quest.progress}%</span>
                    </div>
                    <div className="game-progress">
                      <div className="game-progress-bar" style={{ width: `${quest.progress}%` }} />
                    </div>
                  </div>
                  <p className="quest-reward">🏆 Reward: {quest.reward}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Inventory Modal */}
      {isInventoryOpen && (
        <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4">
          <div className="game-window max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
              <h2 className="game-title text-2xl">Inventory</h2>
              <button onClick={() => setIsInventoryOpen(false)} className="game-btn p-2">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-8 gap-4">
                {inventoryItems.map((item) => (
                  <div
                    key={item.id}
                    className={`inventory-slot ${item.rarity} group cursor-pointer relative`}
                    title={`${item.name} (${item.type})`}
                  >
                    <span className="text-3xl">{item.icon}</span>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-2 bg-black/90 border border-purple-500/50 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <div className="font-bold text-yellow-400">{item.name}</div>
                      <div className="text-gray-300">{item.type}</div>
                      <div
                        className={`text-xs ${
                          item.rarity === "legendary" ? "text-yellow-500" : item.rarity === "epic" ? "text-purple-500" : "text-blue-500"
                        }`}
                      >
                        {item.rarity}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Empty slots */}
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={`empty-${i}`} className="inventory-slot opacity-50" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Character Sheet Modal */}
      {isCharacterSheetOpen && (
        <div className="fixed inset-0 z-60 bg-black/80 flex items-center justify-center p-4">
          <div className="game-window max-w-3xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-purple-500/30">
              <h2 className="game-title text-2xl">Character Sheet</h2>
              <button onClick={() => setIsCharacterSheetOpen(false)} className="game-btn p-2">
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Character Overview */}
              <div className="flex items-start gap-6">
                <div className="character-portrait w-32 h-32">
                  <CrownIcon className="w-16 h-16 text-yellow-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-yellow-500 mb-2">{playerStats.name}</h3>
                  <p className="text-lg text-gray-300 mb-4">Level {playerStats.level} Full-Stack Developer</p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="game-stat">
                      <div className="game-stat-label">Strength</div>
                      <div className="game-stat-value">94</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Intelligence</div>
                      <div className="game-stat-value">97</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Dexterity</div>
                      <div className="game-stat-value">91</div>
                    </div>
                    <div className="game-stat">
                      <div className="game-stat-label">Wisdom</div>
                      <div className="game-stat-value">89</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Master Skills</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "JavaScript Mastery", level: 95 },
                    { name: "React Sorcery", level: 92 },
                    { name: "Node.js Arts", level: 89 },
                    { name: "TypeScript Magic", level: 87 },
                    { name: "Database Alchemy", level: 85 },
                    { name: "Cloud Engineering", level: 83 },
                  ].map((skill, index) => (
                    <div key={index} className="game-stat">
                      <div className="game-stat-label">{skill.name}</div>
                      <div className="game-progress mt-1">
                        <div className="game-progress-bar" style={{ width: `${skill.level}%` }} />
                      </div>
                      <div className="text-sm text-white mt-1">{skill.level}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Game Menu */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="game-window p-4">
          <div className="grid grid-cols-4 gap-2">
            {worldLocations.map((location) => (
              <button
                key={location.id}
                onClick={() => scrollToSection(location.id)}
                className={`game-btn p-3 text-center ${activeSection === location.id ? "game-btn-primary" : ""}`}
              >
                <location.icon className="w-5 h-5 mx-auto mb-1" />
                <div className="text-xs">{location.name}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
