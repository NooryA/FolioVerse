"use client";

import { useState, useEffect } from "react";

// Gaming-themed SVG Icons
const GamepadIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

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

const QuestIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M7,7H17V9H7V7M7,11H17V13H7V11M7,15H14V17H7V15Z" />
  </svg>
);

const TrophyIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M5,16L3,5H7L5,16M12,18.5A2.5,2.5 0 0,1 9.5,16A2.5,2.5 0 0,1 12,13.5A2.5,2.5 0 0,1 14.5,16A2.5,2.5 0 0,1 12,18.5M19,16L17,5H21L19,16Z" />
  </svg>
);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    level: 42,
    xp: 8750,
    maxXp: 10000,
    health: 85,
    mana: 92,
    coins: 15420,
  });
  const [achievements, setAchievements] = useState([
    { id: 1, title: "Code Master", desc: "Completed 100+ projects", unlocked: true },
    { id: 2, title: "Bug Slayer", desc: "Fixed 500+ bugs", unlocked: true },
    { id: 3, title: "Team Leader", desc: "Led 10+ successful teams", unlocked: false },
  ]);
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate achievement unlock
    const timer = setTimeout(() => {
      setShowAchievement(true);
      setTimeout(() => setShowAchievement(false), 4000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { name: "Character Profile", href: "#about", icon: <ShieldIcon className="w-5 h-5" /> },
    { name: "Quest Log", href: "#projects", icon: <QuestIcon className="w-5 h-5" /> },
    { name: "Guild Hall", href: "#contact", icon: <TrophyIcon className="w-5 h-5" /> },
    { name: "Inventory", href: "#skills", icon: <SwordIcon className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Main Navigation HUD */}
      <nav className="game-nav">
        <div className="game-nav-container">
          {/* Player Avatar & Stats */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center border-2 border-green-400 shadow-lg">
                <GamepadIcon className="w-6 h-6 text-black" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black text-xs font-bold border-2 border-black">
                {playerStats.level}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="game-heading text-lg">Player.exe</div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-green-400">ONLINE</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="game-nav-link group">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
            <button className="game-btn game-btn-primary">
              <TrophyIcon className="w-4 h-4" />
              Join Raid
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden game-nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-full h-0.5 bg-current transition-all ${isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-0.5"}`}
              ></span>
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span
                className={`w-full h-0.5 bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-0.5"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden game-nav-mobile open">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="game-nav-link flex items-center gap-3" onClick={() => setIsOpen(false)}>
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
            <button className="game-btn game-btn-primary w-full">
              <TrophyIcon className="w-4 h-4" />
              Join Raid
            </button>
          </div>
        )}
      </nav>

      {/* Player HUD */}
      <div className="game-hud">
        <div className="game-hud-item">
          <span>LVL</span>
          <span className="text-yellow-400">{playerStats.level}</span>
        </div>
        <div className="game-hud-item">
          <span>XP</span>
          <span className="text-cyan-400">
            {playerStats.xp}/{playerStats.maxXp}
          </span>
        </div>

        {/* XP Progress Bar */}
        <div className="game-stat-bar">
          <div
            className="game-stat-fill"
            style={{ "--fill-width": `${(playerStats.xp / playerStats.maxXp) * 100}%` } as React.CSSProperties}
          ></div>
        </div>

        {/* Health Bar */}
        <div className="game-hud-item">
          <span>HP</span>
          <span className="text-green-400">{playerStats.health}%</span>
        </div>
        <div className="game-stat-bar">
          <div
            className="game-stat-fill"
            style={
              {
                "--fill-width": `${playerStats.health}%`,
                background: "linear-gradient(90deg, #ff4444, #ff8844)",
              } as React.CSSProperties
            }
          ></div>
        </div>

        {/* Mana Bar */}
        <div className="game-hud-item">
          <span>MP</span>
          <span className="text-blue-400">{playerStats.mana}%</span>
        </div>
        <div className="game-stat-bar">
          <div
            className="game-stat-fill"
            style={
              {
                "--fill-width": `${playerStats.mana}%`,
                background: "linear-gradient(90deg, #0099ff, #00ccff)",
              } as React.CSSProperties
            }
          ></div>
        </div>

        <div className="game-hud-item">
          <span>GOLD</span>
          <span className="text-yellow-400">{playerStats.coins.toLocaleString()}</span>
        </div>

        {/* Game Time */}
        <div className="game-hud-item border-t border-gray-600 pt-2 mt-2">
          <span>TIME</span>
          <span className="text-green-400 text-xs">{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Achievement Notification */}
      {showAchievement && (
        <div className="fixed top-24 right-4 z-50 game-achievement animate-slide-in-right">
          <div className="game-achievement-icon">
            <TrophyIcon className="w-6 h-6" />
          </div>
          <div className="game-achievement-text">
            <div className="game-achievement-title">Achievement Unlocked!</div>
            <div className="game-achievement-desc">Portfolio Master - Created 5+ unique themes</div>
          </div>
        </div>
      )}

      {/* Floating Game Elements */}
      <div className="game-floating-elements">
        {[...Array(15)].map((_, i) => (
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

        {[">", "$", "{", "}", "01", "10"].map((char, i) => (
          <div
            key={char}
            className="game-matrix-char"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {char}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out;
        }
      `}</style>
    </>
  );
}
