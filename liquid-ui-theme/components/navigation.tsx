"use client";

import { useState, useEffect } from "react";
import { Home, User, FolderOpen, Mail, Droplets, Waves, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [morphIndex, setMorphIndex] = useState(0);
  const [waveOffset, setWaveOffset] = useState(0);

  useEffect(() => {
    const morphInterval = setInterval(() => {
      setMorphIndex((prev) => (prev + 1) % 4);
    }, 3000);

    const waveInterval = setInterval(() => {
      setWaveOffset((prev) => (prev + 1) % 360);
    }, 100);

    return () => {
      clearInterval(morphInterval);
      clearInterval(waveInterval);
    };
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home, color: "from-blue-400 to-cyan-400" },
    { href: "#about", label: "About", icon: User, color: "from-purple-400 to-pink-400" },
    { href: "#projects", label: "Projects", icon: FolderOpen, color: "from-green-400 to-teal-400" },
    { href: "#contact", label: "Contact", icon: Mail, color: "from-orange-400 to-red-400" },
  ];

  const blobMorphs = [
    "M60-160c30 0 60 5 60 50s-30 50-60 50-60-5-60-50 30-50 60-50Z",
    "M50-180c40 10 50 20 50 60s-10 50-50 50-50-10-50-50 10-50 50-50Z",
    "M70-150c20 15 70 25 70 55s-50 40-70 40-70-10-70-40 50-40 70-40Z",
    "M55-170c35 5 65 15 65 45s-30 45-65 45-65-15-65-45 30-40 65-40Z",
  ];

  return (
    <>
      {/* Liquid Background Waves */}
      <div className="fixed top-0 left-0 right-0 h-24 z-40 overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d={`M0,60 Q300,${20 + Math.sin(waveOffset * 0.02) * 15} 600,60 T1200,60 V0 H0 Z`}
            fill="rgba(59, 130, 246, 0.1)"
            className="animate-pulse"
          />
          <path
            d={`M0,80 Q300,${40 + Math.sin(waveOffset * 0.03) * 10} 600,80 T1200,80 V0 H0 Z`}
            fill="rgba(139, 92, 246, 0.1)"
            className="animate-pulse"
          />
        </svg>
      </div>

      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Liquid Logo */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                  <Droplets className="w-7 h-7 text-white z-10" />

                  {/* Morphing Blob */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120">
                    <path
                      d={blobMorphs[morphIndex]}
                      fill="rgba(255, 255, 255, 0.2)"
                      className="transition-all duration-3000 ease-in-out"
                      transform="translate(60, 60)"
                    />
                  </svg>
                </div>

                {/* Floating Bubbles */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">LiquidUI</div>
                <div className="text-sm text-gray-500">Fluid Experience</div>
              </div>
            </div>

            {/* Desktop Liquid Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a key={item.href} href={item.href} className="group relative">
                  <div className="relative px-6 py-3 overflow-hidden">
                    {/* Morphing Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}
                    ></div>

                    {/* Liquid Blob Shape */}
                    <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <path
                        d="M20,30 Q40,10 60,30 T100,30 Q90,50 60,50 T20,50 Q10,40 20,30 Z"
                        fill="rgba(255, 255, 255, 0.1)"
                        className="animate-pulse"
                      />
                    </svg>

                    <div className="relative flex items-center gap-3 z-10">
                      <item.icon className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300" />
                      <span className="text-gray-700 group-hover:text-white font-medium transition-colors duration-300">{item.label}</span>
                    </div>

                    {/* Liquid Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-white/20 transform scale-0 group-hover:scale-150 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100"></div>
                  </div>

                  {/* Floating Particle */}
                  <div
                    className={`absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-2 transition-all duration-500`}
                  ></div>
                </a>
              ))}
            </div>

            {/* Liquid Status */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <Waves className="w-6 h-6 text-white" />
                </div>

                {/* Ripple Animation */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400 animate-ping"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-400 animate-pulse"></div>
              </div>
              <div className="text-sm">
                <div className="text-gray-700 font-medium">Fluid Mode</div>
                <div className="text-gray-500">{new Date().toLocaleTimeString()}</div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg overflow-hidden"
              >
                {/* Liquid Blob Background */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
                  <path
                    d={`M24,8 Q${32 + Math.sin(waveOffset * 0.05) * 4},16 40,24 Q32,32 24,40 Q16,32 8,24 Q16,16 24,8 Z`}
                    fill="rgba(255, 255, 255, 0.1)"
                    className="transition-all duration-300"
                  />
                </svg>

                {isOpen ? <X className="h-6 w-6 z-10" /> : <Menu className="h-6 w-6 z-10" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Liquid Navigation Panel */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="group relative block">
                  <div className="relative p-4 overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                    {/* Mobile Morphing Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out`}
                    ></div>

                    {/* Liquid Shape */}
                    <svg className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <path
                        d="M10,20 Q30,5 50,20 T90,20 Q85,40 50,45 T10,40 Q5,30 10,20 Z"
                        fill="rgba(255, 255, 255, 0.1)"
                        className="animate-pulse"
                      />
                    </svg>

                    <div className="relative flex items-center gap-4 z-10">
                      <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-gray-700 group-hover:text-white font-semibold text-lg transition-colors duration-300">
                          {item.label}
                        </div>
                        <div className="text-gray-500 group-hover:text-white/70 text-sm transition-colors duration-300">
                          Liquid Navigation
                        </div>
                      </div>
                    </div>

                    {/* Mobile Ripple Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-white/10 transform scale-0 group-hover:scale-110 transition-transform duration-700 ease-out opacity-0 group-hover:opacity-100"></div>
                  </div>

                  {/* Floating Bubbles */}
                  <div
                    className={`absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transform group-hover:translate-y-2 transition-all duration-500`}
                  ></div>
                  <div
                    className={`absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-all duration-700`}
                  ></div>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
