"use client";

import { useState, useEffect } from "react";
import { Gamepad2, Trophy, Map, Users, Heart, Zap, Star, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    health: 85,
    mana: 92,
    xp: 67,
    level: 42,
    score: 15420,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerStats((prev) => ({
        ...prev,
        health: Math.max(50, Math.min(100, prev.health + (Math.random() - 0.5) * 10)),
        mana: Math.max(40, Math.min(100, prev.mana + (Math.random() - 0.5) * 15)),
        xp: Math.max(0, Math.min(100, prev.xp + (Math.random() - 0.5) * 8)),
        score: prev.score + Math.floor(Math.random() * 50),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { href: "#home", label: "HOME BASE", icon: Gamepad2, hotkey: "H", color: "green" },
    { href: "#about", label: "PLAYER INFO", icon: Users, hotkey: "P", color: "blue" },
    { href: "#projects", label: "QUESTS", icon: Trophy, hotkey: "Q", color: "yellow" },
    { href: "#contact", label: "GUILD HALL", icon: Map, hotkey: "G", color: "purple" },
  ];

  return (
    <>
      {/* Retro Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-20">
        <div
          className="w-full h-full"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.1) 2px, rgba(0,255,0,0.1) 4px)",
          }}
        ></div>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b-2 border-green-400/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Player Avatar & Stats */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg border-2 border-green-400 flex items-center justify-center shadow-lg shadow-green-500/50">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-black">
                  <span className="text-black text-xs font-bold">{playerStats.level}</span>
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-green-400 font-mono">GAME_WORLD</div>
                <div className="text-sm text-gray-300 font-mono">SCORE: {playerStats.score.toLocaleString()}</div>
              </div>
            </div>

            {/* Player HUD Stats */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Health Bar */}
              <div className="bg-gray-900/80 rounded-lg p-3 border border-red-400/50">
                <div className="flex items-center gap-2 mb-1">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span className="text-red-400 text-xs font-mono">HP</span>
                </div>
                <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 to-green-500 rounded-full transition-all duration-500"
                    style={{ width: `${playerStats.health}%` }}
                  />
                </div>
                <div className="text-red-400 text-xs font-mono mt-1">{playerStats.health}/100</div>
              </div>

              {/* Mana Bar */}
              <div className="bg-gray-900/80 rounded-lg p-3 border border-blue-400/50">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-blue-400 text-xs font-mono">MP</span>
                </div>
                <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                    style={{ width: `${playerStats.mana}%` }}
                  />
                </div>
                <div className="text-blue-400 text-xs font-mono mt-1">{playerStats.mana}/100</div>
              </div>

              {/* XP Bar */}
              <div className="bg-gray-900/80 rounded-lg p-3 border border-yellow-400/50">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 text-xs font-mono">XP</span>
                </div>
                <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full transition-all duration-500"
                    style={{ width: `${playerStats.xp}%` }}
                  />
                </div>
                <div className="text-yellow-400 text-xs font-mono mt-1">{playerStats.xp}/100</div>
              </div>
            </div>

            {/* Desktop Navigation Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {navItems.map((item, index) => (
                <a key={item.href} href={item.href} className="group relative">
                  <div
                    className={`bg-gray-900/80 rounded-lg p-4 border-2 transition-all duration-300 hover:scale-110 ${
                      item.color === "green"
                        ? "border-green-400/50 hover:border-green-400 hover:bg-green-400/10"
                        : item.color === "blue"
                        ? "border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10"
                        : item.color === "yellow"
                        ? "border-yellow-400/50 hover:border-yellow-400 hover:bg-yellow-400/10"
                        : "border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10"
                    } shadow-lg ${
                      item.color === "green"
                        ? "hover:shadow-green-500/50"
                        : item.color === "blue"
                        ? "hover:shadow-blue-500/50"
                        : item.color === "yellow"
                        ? "hover:shadow-yellow-500/50"
                        : "hover:shadow-purple-500/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className={`w-6 h-6 ${
                          item.color === "green"
                            ? "text-green-400"
                            : item.color === "blue"
                            ? "text-blue-400"
                            : item.color === "yellow"
                            ? "text-yellow-400"
                            : "text-purple-400"
                        }`}
                      />
                      <div>
                        <div className="text-white font-mono text-sm font-bold">{item.label}</div>
                        <div
                          className={`text-xs font-mono ${
                            item.color === "green"
                              ? "text-green-400/70"
                              : item.color === "blue"
                              ? "text-blue-400/70"
                              : item.color === "yellow"
                              ? "text-yellow-400/70"
                              : "text-purple-400/70"
                          }`}
                        >
                          [{item.hotkey}]
                        </div>
                      </div>
                    </div>

                    {/* Button Glow */}
                    <div
                      className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.color === "green"
                          ? "bg-green-400/5 shadow-lg shadow-green-400/30"
                          : item.color === "blue"
                          ? "bg-blue-400/5 shadow-lg shadow-blue-400/30"
                          : item.color === "yellow"
                          ? "bg-yellow-400/5 shadow-lg shadow-yellow-400/30"
                          : "bg-purple-400/5 shadow-lg shadow-purple-400/30"
                      }`}
                    ></div>
                  </div>

                  {/* Hotkey Indicator */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center border-2 border-gray-600">
                    <span className="text-white text-xs font-mono font-bold">{item.hotkey}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Game Status */}
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-gray-900/80 rounded-lg px-3 py-2 border border-green-400/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs">ONLINE</span>
                </div>
              </div>
              <div className="text-green-400 font-mono text-sm">{new Date().toLocaleTimeString()}</div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-gray-900/80 border-2 border-green-400/50 rounded-lg p-3 text-green-400 hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t-2 border-green-400/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Player Stats */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                <div className="bg-gray-900/80 rounded-lg p-3 border border-red-400/50">
                  <div className="text-red-400 text-xs font-mono mb-1">HP</div>
                  <div className="text-white font-mono text-sm">{playerStats.health}%</div>
                </div>
                <div className="bg-gray-900/80 rounded-lg p-3 border border-blue-400/50">
                  <div className="text-blue-400 text-xs font-mono mb-1">MP</div>
                  <div className="text-white font-mono text-sm">{playerStats.mana}%</div>
                </div>
                <div className="bg-gray-900/80 rounded-lg p-3 border border-yellow-400/50">
                  <div className="text-yellow-400 text-xs font-mono mb-1">XP</div>
                  <div className="text-white font-mono text-sm">{playerStats.xp}%</div>
                </div>
              </div>

              {navItems.map((item, index) => (
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
                  <div
                    className={`bg-gray-900/80 rounded-lg p-4 border-2 transition-all duration-300 hover:scale-105 w-full ${
                      item.color === "green"
                        ? "border-green-400/50 hover:border-green-400 hover:bg-green-400/10"
                        : item.color === "blue"
                        ? "border-blue-400/50 hover:border-blue-400 hover:bg-blue-400/10"
                        : item.color === "yellow"
                        ? "border-yellow-400/50 hover:border-yellow-400 hover:bg-yellow-400/10"
                        : "border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10"
                    } shadow-lg relative`}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon
                        className={`w-8 h-8 ${
                          item.color === "green"
                            ? "text-green-400"
                            : item.color === "blue"
                            ? "text-blue-400"
                            : item.color === "yellow"
                            ? "text-yellow-400"
                            : "text-purple-400"
                        }`}
                      />
                      <div>
                        <div className="text-white font-mono text-lg font-bold">{item.label}</div>
                        <div
                          className={`text-sm font-mono ${
                            item.color === "green"
                              ? "text-green-400/70"
                              : item.color === "blue"
                              ? "text-blue-400/70"
                              : item.color === "yellow"
                              ? "text-yellow-400/70"
                              : "text-purple-400/70"
                          }`}
                        >
                          Press [{item.hotkey}]
                        </div>
                      </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
