"use client";

import { useState, useEffect } from "react";
import { Home, User, FolderOpen, Mail, Zap, Eye, Skull, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [glitchText, setGlitchText] = useState("CYBERPUNK");
  const [hackingProgress, setHackingProgress] = useState(0);
  const [matrixRain, setMatrixRain] = useState<string[]>([]);

  useEffect(() => {
    // Glitch text effect
    const glitchInterval = setInterval(() => {
      const original = "CYBERPUNK";
      const glitched = original
        .split("")
        .map((char) => (Math.random() > 0.8 ? "█▓▒░"[Math.floor(Math.random() * 4)] : char))
        .join("");
      setGlitchText(glitched);

      setTimeout(() => setGlitchText(original), 150);
    }, 3000);

    // Hacking progress
    const hackInterval = setInterval(() => {
      setHackingProgress((prev) => (prev + Math.random() * 10) % 100);
    }, 1000);

    // Matrix rain
    const matrixInterval = setInterval(() => {
      const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
      setMatrixRain((prev) => [...prev.slice(-20), chars[Math.floor(Math.random() * chars.length)]]);
    }, 200);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(hackInterval);
      clearInterval(matrixInterval);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "MAIN_FRAME", icon: Home, color: "cyan", hackcode: "0x001" },
    { href: "#about", label: "USER_PROFILE", icon: User, color: "green", hackcode: "0x010" },
    { href: "#projects", label: "DATA_VAULT", icon: FolderOpen, color: "purple", hackcode: "0x011" },
    { href: "#contact", label: "NET_LINK", icon: Mail, color: "pink", hackcode: "0x100" },
  ];

  return (
    <>
      {/* Matrix Rain Background */}
      <div className="fixed top-0 left-0 right-0 h-24 z-40 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/50"></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-green-400/30 font-mono text-xs animate-pulse"
            style={{
              left: `${i * 5}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {matrixRain.slice(-10).join("")}
          </div>
        ))}
      </div>

      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-lg border-b-2 border-cyan-400/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Cyberpunk Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-lg border-2 border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/50 relative overflow-hidden">
                  <Skull className="w-8 h-8 text-black z-10" />

                  {/* Glitch Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-400/20 animate-pulse"></div>
                  <div
                    className="absolute inset-0 bg-black/20"
                    style={{
                      clipPath: `polygon(0 ${Math.random() * 100}%, 100% ${Math.random() * 100}%, 100% ${Math.random() * 100}%, 0 ${
                        Math.random() * 100
                      }%)`,
                    }}
                  ></div>
                </div>

                {/* Neon Glow Ring */}
                <div className="absolute inset-0 rounded-lg border-2 border-cyan-400 animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse border border-black"></div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">
                  {glitchText}
                </div>
                <div className="text-sm text-green-400 font-mono">NEURAL_LINK_v2.77.3</div>
              </div>
            </div>

            {/* System Status HUD */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Hack Progress */}
              <div className="bg-black/80 rounded-lg p-3 border border-cyan-400/50">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-cyan-400 text-xs font-mono">HACK_PROGRESS</span>
                </div>
                <div className="w-24 h-2 bg-gray-800 rounded-full overflow-hidden border border-cyan-400/30">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-green-500 to-pink-500 rounded-full transition-all duration-500"
                    style={{ width: `${hackingProgress}%` }}
                  />
                </div>
                <div className="text-green-400 text-xs font-mono mt-1">{hackingProgress.toFixed(0)}%</div>
              </div>

              {/* Neural Activity */}
              <div className="bg-black/80 rounded-lg p-3 border border-purple-400/50">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400 animate-pulse" />
                  <div>
                    <div className="text-purple-400 text-xs font-mono">NEURAL_SYNC</div>
                    <div className="text-pink-400 font-mono text-sm">ACTIVE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Cyberpunk Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              {navItems.map((item, index) => (
                <a key={item.href} href={item.href} className="group relative">
                  <div
                    className={`bg-black/80 rounded-lg p-4 border-2 transition-all duration-300 hover:scale-110 relative overflow-hidden ${
                      item.color === "cyan"
                        ? "border-cyan-400/50 hover:border-cyan-400 hover:shadow-cyan-400/50"
                        : item.color === "green"
                        ? "border-green-400/50 hover:border-green-400 hover:shadow-green-400/50"
                        : item.color === "purple"
                        ? "border-purple-400/50 hover:border-purple-400 hover:shadow-purple-400/50"
                        : "border-pink-400/50 hover:border-pink-400 hover:shadow-pink-400/50"
                    } hover:shadow-lg`}
                  >
                    {/* Glitch Effect Background */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.color === "cyan"
                          ? "bg-cyan-400/10"
                          : item.color === "green"
                          ? "bg-green-400/10"
                          : item.color === "purple"
                          ? "bg-purple-400/10"
                          : "bg-pink-400/10"
                      }`}
                    ></div>

                    {/* Random Glitch Bars */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      <div
                        className={`h-1 ${
                          item.color === "cyan"
                            ? "bg-cyan-400"
                            : item.color === "green"
                            ? "bg-green-400"
                            : item.color === "purple"
                            ? "bg-purple-400"
                            : "bg-pink-400"
                        } absolute top-2 left-0 right-2 animate-pulse`}
                      ></div>
                      <div
                        className={`h-1 ${
                          item.color === "cyan"
                            ? "bg-cyan-400"
                            : item.color === "green"
                            ? "bg-green-400"
                            : item.color === "purple"
                            ? "bg-purple-400"
                            : "bg-pink-400"
                        } absolute bottom-2 left-2 right-0 animate-pulse`}
                      ></div>
                    </div>

                    <div className="relative flex items-center gap-3 z-10">
                      <item.icon
                        className={`w-6 h-6 ${
                          item.color === "cyan"
                            ? "text-cyan-400"
                            : item.color === "green"
                            ? "text-green-400"
                            : item.color === "purple"
                            ? "text-purple-400"
                            : "text-pink-400"
                        } filter drop-shadow-[0_0_8px_currentColor]`}
                      />
                      <div>
                        <div className="text-white font-mono text-sm font-bold">{item.label}</div>
                        <div
                          className={`text-xs font-mono ${
                            item.color === "cyan"
                              ? "text-cyan-400/70"
                              : item.color === "green"
                              ? "text-green-400/70"
                              : item.color === "purple"
                              ? "text-purple-400/70"
                              : "text-pink-400/70"
                          }`}
                        >
                          {item.hackcode}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Hack Code */}
                  <div className="absolute -top-3 -right-2 text-xs font-mono text-green-400 opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-1 rounded border border-green-400/50">
                    {item.hackcode}
                  </div>
                </a>
              ))}
            </div>

            {/* System Time & Status */}
            <div className="hidden md:flex items-center gap-3">
              <div className="bg-black/80 rounded-lg px-3 py-2 border border-green-400/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-mono text-xs">ONLINE</span>
                </div>
              </div>
              <div className="text-cyan-400 font-mono text-sm filter drop-shadow-[0_0_4px_currentColor]">
                {new Date().toLocaleTimeString()}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative bg-black/80 border-2 border-cyan-400/50 rounded-lg p-3 text-cyan-400 hover:border-cyan-400 hover:shadow-cyan-400/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glitch Background */}
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity"></div>

                {isOpen ? <X className="h-6 w-6 z-10 relative" /> : <Menu className="h-6 w-6 z-10 relative" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Cyberpunk Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t-2 border-cyan-400/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile System Status */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black/80 rounded-lg p-3 border border-cyan-400/50">
                  <div className="text-cyan-400 text-xs font-mono mb-1">HACK_PROGRESS</div>
                  <div className="text-green-400 font-mono text-sm">{hackingProgress.toFixed(0)}%</div>
                </div>
                <div className="bg-black/80 rounded-lg p-3 border border-purple-400/50">
                  <div className="text-purple-400 text-xs font-mono mb-1">NEURAL_SYNC</div>
                  <div className="text-pink-400 font-mono text-sm">ACTIVE</div>
                </div>
              </div>

              {navItems.map((item, index) => (
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block group">
                  <div
                    className={`bg-black/80 rounded-lg p-4 border-2 transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                      item.color === "cyan"
                        ? "border-cyan-400/50 hover:border-cyan-400 hover:shadow-cyan-400/50"
                        : item.color === "green"
                        ? "border-green-400/50 hover:border-green-400 hover:shadow-green-400/50"
                        : item.color === "purple"
                        ? "border-purple-400/50 hover:border-purple-400 hover:shadow-purple-400/50"
                        : "border-pink-400/50 hover:border-pink-400 hover:shadow-pink-400/50"
                    } hover:shadow-lg`}
                  >
                    {/* Mobile Glitch Effect */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                        item.color === "cyan"
                          ? "bg-cyan-400/10"
                          : item.color === "green"
                          ? "bg-green-400/10"
                          : item.color === "purple"
                          ? "bg-purple-400/10"
                          : "bg-pink-400/10"
                      }`}
                    ></div>

                    <div className="relative flex items-center gap-4 z-10">
                      <div
                        className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${
                          item.color === "cyan"
                            ? "border-cyan-400 bg-cyan-400/20 text-cyan-400"
                            : item.color === "green"
                            ? "border-green-400 bg-green-400/20 text-green-400"
                            : item.color === "purple"
                            ? "border-purple-400 bg-purple-400/20 text-purple-400"
                            : "border-pink-400 bg-pink-400/20 text-pink-400"
                        } shadow-lg filter drop-shadow-[0_0_8px_currentColor]`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-white font-mono text-lg font-bold">{item.label}</div>
                        <div
                          className={`text-sm font-mono ${
                            item.color === "cyan"
                              ? "text-cyan-400/70"
                              : item.color === "green"
                              ? "text-green-400/70"
                              : item.color === "purple"
                              ? "text-purple-400/70"
                              : "text-pink-400/70"
                          }`}
                        >
                          ACCESS_CODE: {item.hackcode}
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
