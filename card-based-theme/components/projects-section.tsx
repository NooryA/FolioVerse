"use client";

import { useState, useEffect } from "react";
import { Package, Star, Eye, Download, Trophy, Zap, Crown, Sparkles, Gift, Album, Shuffle, RotateCcw } from "lucide-react";

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [openingPack, setOpeningPack] = useState(false);
  const [revealedCards, setRevealedCards] = useState<number[]>([]);
  const [viewMode, setViewMode] = useState<"packs" | "album" | "arena">("packs");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Project Trading Cards with rarity and stats
  const projectCards = [
    {
      id: 1,
      name: "E-Commerce Empire",
      rarity: "Legendary",
      type: "Web Application",
      year: "2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4d3aea6?w=400&h=300&fit=crop",
      description: "A legendary trading platform that revolutionized online shopping",
      stats: {
        performance: 98,
        design: 95,
        innovation: 92,
        impact: 88,
      },
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      pack: "professional",
      marketValue: 8500,
      holographic: true,
      element: "💎",
    },
    {
      id: 2,
      name: "AI Chat Wizard",
      rarity: "Legendary",
      type: "AI Application",
      year: "2024",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      description: "Mystical AI companion that speaks in natural language",
      stats: {
        performance: 94,
        design: 88,
        innovation: 98,
        impact: 91,
      },
      technologies: ["Python", "OpenAI", "React", "FastAPI"],
      pack: "experimental",
      marketValue: 7200,
      holographic: true,
      element: "🧙‍♂️",
    },
    {
      id: 3,
      name: "Banking Fortress",
      rarity: "Epic",
      type: "Mobile App",
      year: "2023",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      description: "Impenetrable mobile banking fortress with biometric shields",
      stats: {
        performance: 90,
        design: 92,
        innovation: 85,
        impact: 94,
      },
      technologies: ["React Native", "Firebase", "Plaid"],
      pack: "professional",
      marketValue: 5800,
      holographic: false,
      element: "🏰",
    },
    {
      id: 4,
      name: "Data Crystal",
      rarity: "Epic",
      type: "Dashboard",
      year: "2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Mystical crystal that reveals hidden data insights",
      stats: {
        performance: 87,
        design: 89,
        innovation: 88,
        impact: 86,
      },
      technologies: ["Vue.js", "D3.js", "Python", "MongoDB"],
      pack: "experimental",
      marketValue: 4200,
      holographic: false,
      element: "🔮",
    },
    {
      id: 5,
      name: "Task Commander",
      rarity: "Rare",
      type: "Web Application",
      year: "2023",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      description: "Strategic command center for managing team missions",
      stats: {
        performance: 85,
        design: 87,
        innovation: 82,
        impact: 89,
      },
      technologies: ["Next.js", "Prisma", "tRPC"],
      pack: "starter",
      marketValue: 3100,
      holographic: false,
      element: "⚔️",
    },
    {
      id: 6,
      name: "Weather Oracle",
      rarity: "Rare",
      type: "Mobile App",
      year: "2023",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
      description: "Ancient oracle that predicts weather across dimensions",
      stats: {
        performance: 83,
        design: 91,
        innovation: 80,
        impact: 85,
      },
      technologies: ["Flutter", "Weather API", "Maps"],
      pack: "starter",
      marketValue: 2800,
      holographic: false,
      element: "⛈️",
    },
  ];

  // Booster Packs
  const boosterPacks = [
    {
      id: "professional",
      name: "Professional Pack",
      description: "Enterprise-grade projects that dominate the business world",
      cardCount: 5,
      guaranteedRare: true,
      price: 2500,
      color: "from-blue-600 to-blue-800",
      icon: <Crown className="w-8 h-8" />,
      element: "💼",
    },
    {
      id: "experimental",
      name: "Experimental Pack",
      description: "Cutting-edge innovations that push technological boundaries",
      cardCount: 4,
      guaranteedRare: true,
      price: 3200,
      color: "from-purple-600 to-pink-700",
      icon: <Zap className="w-8 h-8" />,
      element: "🧪",
    },
    {
      id: "starter",
      name: "Starter Pack",
      description: "Essential projects perfect for building your first collection",
      cardCount: 6,
      guaranteedRare: false,
      price: 1200,
      color: "from-green-600 to-teal-700",
      icon: <Gift className="w-8 h-8" />,
      element: "🌱",
    },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "from-yellow-400 via-orange-500 to-red-600";
      case "Epic":
        return "from-purple-500 via-blue-600 to-cyan-600";
      case "Rare":
        return "from-blue-500 to-purple-600";
      case "Common":
        return "from-gray-400 to-gray-600";
      default:
        return "from-gray-400 to-gray-600";
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case "Legendary":
        return "border-yellow-400";
      case "Epic":
        return "border-purple-500";
      case "Rare":
        return "border-blue-500";
      case "Common":
        return "border-gray-400";
      default:
        return "border-gray-400";
    }
  };

  const openBoosterPack = (packId: string) => {
    setSelectedPack(packId);
    setOpeningPack(true);
    setRevealedCards([]);

    // Simulate pack opening animation
    setTimeout(() => {
      const packCards = projectCards.filter((card) => card.pack === packId);
      packCards.forEach((_, index) => {
        setTimeout(() => {
          setRevealedCards((prev) => [...prev, index]);
        }, index * 500);
      });
    }, 1000);

    setTimeout(() => {
      setOpeningPack(false);
    }, 3000);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Trading Card Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Card Shop Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-6 bg-black/50 backdrop-blur-lg rounded-2xl px-8 py-4 border border-purple-500/50">
            <div className="text-4xl">🎴</div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Project Card Collection
            </h2>
            <div className="text-4xl">✨</div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collect rare project cards, open booster packs, and build your ultimate portfolio deck
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/50 backdrop-blur-lg rounded-2xl p-2 border border-purple-500/30">
            {[
              { id: "packs", label: "📦 Booster Packs", icon: <Package className="w-5 h-5" /> },
              { id: "album", label: "📖 Card Album", icon: <Album className="w-5 h-5" /> },
              { id: "arena", label: "⚔️ Battle Arena", icon: <Trophy className="w-5 h-5" /> },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setViewMode(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  viewMode === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Booster Packs View */}
        {viewMode === "packs" && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">🛍️ Card Shop - Choose Your Booster Pack</h3>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {boosterPacks.map((pack) => (
                <div key={pack.id} className="group relative">
                  <div
                    className={`bg-gradient-to-br ${pack.color} rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500 border-2 border-white/20 hover:border-white/40`}
                  >
                    {/* Pack Icon */}
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {pack.icon}
                      </div>
                      <div className="text-3xl mb-2">{pack.element}</div>
                    </div>

                    {/* Pack Info */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-3">{pack.name}</h3>
                      <p className="text-white/90 mb-6">{pack.description}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                          <span>Cards:</span>
                          <span className="font-bold">{pack.cardCount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guaranteed Rare:</span>
                          <span className="font-bold">{pack.guaranteedRare ? "✅" : "❌"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Market Value:</span>
                          <span className="font-bold">${pack.price.toLocaleString()}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => openBoosterPack(pack.id)}
                        disabled={openingPack}
                        className="w-full bg-white/20 hover:bg-white/30 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {openingPack && selectedPack === pack.id ? "📦 Opening..." : "🎁 Open Pack"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pack Opening Animation */}
            {openingPack && selectedPack && (
              <div className="bg-black/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/50 mb-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    🎉 Opening {boosterPacks.find((p) => p.id === selectedPack)?.name}!
                  </h3>
                  <div className="text-yellow-400 text-6xl animate-pulse">📦</div>
                </div>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {projectCards
                    .filter((card) => card.pack === selectedPack)
                    .map((card, index) => (
                      <div
                        key={card.id}
                        className={`transform transition-all duration-500 ${
                          revealedCards.includes(index) ? "scale-100 opacity-100 rotate-0" : "scale-75 opacity-50 rotate-12"
                        }`}
                      >
                        <div
                          className={`w-full h-64 bg-gradient-to-br ${getRarityColor(card.rarity)} rounded-2xl border-4 ${getRarityBorder(
                            card.rarity
                          )} shadow-2xl relative overflow-hidden ${card.holographic ? "animate-pulse" : ""}`}
                        >
                          {revealedCards.includes(index) ? (
                            <div className="p-4 h-full flex flex-col">
                              <div className="text-center text-white">
                                <div className="text-2xl mb-2">{card.element}</div>
                                <h4 className="font-bold text-sm mb-2">{card.name}</h4>
                                <div className="text-xs opacity-75">{card.rarity}</div>
                              </div>
                            </div>
                          ) : (
                            <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                              <div className="text-white text-4xl">?</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Card Album View */}
        {viewMode === "album" && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white mb-8">📖 Project Card Album</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectCards.map((card) => (
                <div key={card.id} className="group relative transform hover:scale-110 transition-all duration-700 hover:z-10">
                  {/* Epic Game Card */}
                  <div
                    className={`relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-700 ${
                      card.rarity === "Legendary"
                        ? "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600"
                        : card.rarity === "Epic"
                        ? "bg-gradient-to-br from-purple-500 via-pink-500 to-blue-600"
                        : card.rarity === "Rare"
                        ? "bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500"
                        : "bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700"
                    } p-1.5 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]`}
                  >
                    {/* Inner Card Frame */}
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-[20px] overflow-hidden">
                      {/* Subtle Particle Background */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full opacity-30"></div>
                        <div className="absolute top-8 right-6 w-1 h-1 bg-yellow-400 rounded-full opacity-40"></div>
                        <div className="absolute bottom-12 left-8 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30"></div>
                        <div className="absolute bottom-20 right-4 w-1 h-1 bg-green-400 rounded-full opacity-40"></div>
                        <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full opacity-30"></div>
                      </div>

                      {/* Holographic Scanlines */}
                      {card.holographic && (
                        <div className="absolute inset-0 opacity-20 pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-[slide_3s_infinite]"></div>
                        </div>
                      )}

                      {/* Card Header */}
                      <div className="relative p-4 border-b border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                          <div
                            className={`px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg border-2 ${
                              card.rarity === "Legendary"
                                ? "bg-gradient-to-r from-yellow-500 to-orange-600 border-yellow-300 shadow-yellow-500/50"
                                : card.rarity === "Epic"
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-300 shadow-purple-500/50"
                                : card.rarity === "Rare"
                                ? "bg-gradient-to-r from-blue-600 to-cyan-600 border-blue-300 shadow-blue-500/50"
                                : "bg-gradient-to-r from-gray-600 to-gray-700 border-gray-400 shadow-gray-500/50"
                            }`}
                          >
                            {card.rarity === "Legendary"
                              ? "⭐ LEGENDARY ⭐"
                              : card.rarity === "Epic"
                              ? "💎 EPIC 💎"
                              : card.rarity === "Rare"
                              ? "🔷 RARE 🔷"
                              : "⚪ COMMON ⚪"}
                          </div>
                          <div className="text-4xl filter drop-shadow-lg">{card.element}</div>
                        </div>

                        <h3 className="text-white text-xl font-bold text-center mb-1 drop-shadow-lg">{card.name}</h3>
                        <div className="flex justify-center gap-2">
                          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md font-medium backdrop-blur-sm">
                            {card.type}
                          </span>
                          <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-md font-medium backdrop-blur-sm">
                            {card.year}
                          </span>
                        </div>
                      </div>

                      {/* Card Art Section */}
                      <div className="relative h-40 m-4 rounded-2xl overflow-hidden border-2 border-gray-600 shadow-inner">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

                        {/* Power Level Badge */}
                        <div className="absolute top-2 right-2">
                          <div
                            className={`px-3 py-1 rounded-xl text-white font-bold text-sm border-2 ${
                              card.rarity === "Legendary"
                                ? "bg-yellow-600 border-yellow-300 shadow-yellow-500/50"
                                : card.rarity === "Epic"
                                ? "bg-purple-600 border-purple-300 shadow-purple-500/50"
                                : card.rarity === "Rare"
                                ? "bg-blue-600 border-blue-300 shadow-blue-500/50"
                                : "bg-gray-600 border-gray-400 shadow-gray-500/50"
                            } shadow-lg`}
                          >
                            PWR {Object.values(card.stats).reduce((sum: number, stat: number) => sum + stat, 0)}
                          </div>
                        </div>

                        {/* Level Badge */}
                        <div className="absolute bottom-2 left-2">
                          <div className="bg-black/80 text-yellow-400 px-3 py-1 rounded-xl font-bold text-sm border border-yellow-600">
                            LV {Math.floor(card.marketValue / 100)}
                          </div>
                        </div>
                      </div>

                      {/* Ability Description */}
                      <div className="px-4 py-3 border-b border-gray-700">
                        <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-600">
                          <h4 className="text-yellow-400 font-bold text-sm mb-1">✨ Special Ability</h4>
                          <p className="text-gray-300 text-xs leading-relaxed">{card.description}</p>
                        </div>
                      </div>

                      {/* Battle Stats */}
                      <div className="px-4 py-3 space-y-2">
                        <h4 className="text-white font-bold text-center mb-3 text-sm">⚔️ BATTLE STATS ⚔️</h4>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-red-900/70 border border-red-500 rounded-lg p-2 text-center backdrop-blur-sm">
                            <div className="text-red-300 text-xs font-medium">ATK</div>
                            <div className="text-white font-bold text-lg drop-shadow-lg">{card.stats.performance}</div>
                          </div>
                          <div className="bg-blue-900/70 border border-blue-500 rounded-lg p-2 text-center backdrop-blur-sm">
                            <div className="text-blue-300 text-xs font-medium">DEF</div>
                            <div className="text-white font-bold text-lg drop-shadow-lg">{card.stats.design}</div>
                          </div>
                          <div className="bg-yellow-900/70 border border-yellow-500 rounded-lg p-2 text-center backdrop-blur-sm">
                            <div className="text-yellow-300 text-xs font-medium">SPD</div>
                            <div className="text-white font-bold text-lg drop-shadow-lg">{card.stats.innovation}</div>
                          </div>
                          <div className="bg-green-900/70 border border-green-500 rounded-lg p-2 text-center backdrop-blur-sm">
                            <div className="text-green-300 text-xs font-medium">HP</div>
                            <div className="text-white font-bold text-lg drop-shadow-lg">{card.stats.impact}</div>
                          </div>
                        </div>
                      </div>

                      {/* Equipment/Tech Slots */}
                      <div className="px-4 py-2">
                        <h5 className="text-gray-400 text-xs font-medium mb-2 text-center">🔧 EQUIPPED TECH</h5>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {card.technologies.slice(0, 4).map((tech: string, techIndex: number) => (
                            <span
                              key={techIndex}
                              className="bg-gradient-to-r from-gray-700 to-gray-800 text-white text-xs px-2 py-1 rounded-md font-medium border border-gray-600 shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {card.technologies.length > 4 && (
                            <span className="bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-xs px-2 py-1 rounded-md font-medium border border-indigo-500">
                              +{card.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Market Value Footer */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 p-3 border-t border-gray-700">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="text-yellow-400 text-lg">💰</div>
                            <div>
                              <div className="text-yellow-400 font-bold text-sm">${card.marketValue.toLocaleString()}</div>
                              <div className="text-gray-400 text-xs">Market Value</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-bold text-xs">#{card.id.toString().padStart(3, "0")}</div>
                            <div className="text-gray-400 text-xs">Card ID</div>
                          </div>
                        </div>
                      </div>

                      {/* Legendary Glow Effect */}
                      {card.rarity === "Legendary" && (
                        <div className="absolute inset-0 rounded-[20px] border-2 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[0_0_40px_rgba(255,215,0,0.8)]"></div>
                      )}

                      {/* Epic Glow Effect */}
                      {card.rarity === "Epic" && (
                        <div className="absolute inset-0 rounded-[20px] border-2 border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[0_0_40px_rgba(147,51,234,0.8)]"></div>
                      )}

                      {/* Rare Glow Effect */}
                      {card.rarity === "Rare" && (
                        <div className="absolute inset-0 rounded-[20px] border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[0_0_40px_rgba(59,130,246,0.8)]"></div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Battle Arena View */}
        {viewMode === "arena" && (
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-8">⚔️ Project Battle Arena</h3>

            <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-red-500/50">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-white mb-4">🏆 Championship Rankings</h4>
                <p className="text-gray-300">Projects ranked by overall battle power</p>
              </div>

              <div className="space-y-4">
                {projectCards.slice(0, 6).map((card, index) => {
                  const totalPower = Object.values(card.stats).reduce((sum: number, stat: number) => sum + stat, 0);
                  const rank = index + 1;

                  return (
                    <div
                      key={card.id}
                      className={`flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                        rank === 1
                          ? "bg-gradient-to-r from-yellow-600/50 to-orange-600/50 border-2 border-yellow-400"
                          : rank === 2
                          ? "bg-gradient-to-r from-gray-400/50 to-gray-600/50 border-2 border-gray-400"
                          : rank === 3
                          ? "bg-gradient-to-r from-amber-600/50 to-amber-800/50 border-2 border-amber-600"
                          : "bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/30"
                      }`}
                    >
                      {/* Rank */}
                      <div className="text-4xl font-bold text-white">
                        {rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`}
                      </div>

                      {/* Card Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-xl font-bold text-white">{card.name}</h4>
                          <span className="text-2xl">{card.element}</span>
                          <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${getRarityColor(card.rarity)}`}>
                            {card.rarity}
                          </div>
                        </div>

                        {/* Battle Stats */}
                        <div className="grid grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-red-400 font-bold">{card.stats.performance}</div>
                            <div className="text-xs text-gray-400">ATK</div>
                          </div>
                          <div className="text-center">
                            <div className="text-blue-400 font-bold">{card.stats.design}</div>
                            <div className="text-xs text-gray-400">DEF</div>
                          </div>
                          <div className="text-center">
                            <div className="text-yellow-400 font-bold">{card.stats.innovation}</div>
                            <div className="text-xs text-gray-400">SPD</div>
                          </div>
                          <div className="text-center">
                            <div className="text-green-400 font-bold">{card.stats.impact}</div>
                            <div className="text-xs text-gray-400">HP</div>
                          </div>
                        </div>
                      </div>

                      {/* Total Power */}
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400">{totalPower}</div>
                        <div className="text-sm text-gray-400">Total Power</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Collection Stats */}
        <div className="bg-black/50 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white text-center mb-8">📊 Collection Statistics</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">{projectCards.filter((c) => c.rarity === "Legendary").length}</div>
              <div className="text-sm opacity-90">Legendary Cards</div>
              <Crown className="w-6 h-6 mx-auto mt-2" />
            </div>

            <div className="text-center bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">
                ${projectCards.reduce((sum, card) => sum + card.marketValue, 0).toLocaleString()}
              </div>
              <div className="text-sm opacity-90">Total Value</div>
              <Star className="w-6 h-6 mx-auto mt-2" />
            </div>

            <div className="text-center bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">
                {Math.round(
                  projectCards.reduce((sum, card) => sum + Object.values(card.stats).reduce((s, stat) => s + stat, 0), 0) /
                    projectCards.length
                )}
              </div>
              <div className="text-sm opacity-90">Avg Power</div>
              <Zap className="w-6 h-6 mx-auto mt-2" />
            </div>

            <div className="text-center bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl p-6 text-white">
              <div className="text-3xl font-bold mb-2">{projectCards.filter((c) => c.holographic).length}</div>
              <div className="text-sm opacity-90">Holographic</div>
              <Sparkles className="w-6 h-6 mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: 200px 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow-pulse {
          0%,
          100% {
            box-shadow: 0 0 20px currentColor;
          }
          50% {
            box-shadow: 0 0 40px currentColor;
          }
        }
      `}</style>
    </section>
  );
}
