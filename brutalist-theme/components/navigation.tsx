"use client";

import { useState } from "react";
import { Square, Triangle, Circle, Hexagon, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "HOME", icon: Square, shape: "square" },
    { href: "#about", label: "ABOUT", icon: Triangle, shape: "triangle" },
    { href: "#projects", label: "PROJECTS", icon: Circle, shape: "circle" },
    { href: "#contact", label: "CONTACT", icon: Hexagon, shape: "hexagon" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black border-b-8 border-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Brutalist Logo */}
          <div className="flex items-center">
            <div className="relative">
              <div className="w-16 h-16 bg-white transform rotate-45 flex items-center justify-center">
                <div className="w-8 h-8 bg-black transform -rotate-45"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-red-500"></div>
            </div>
            <div className="ml-6">
              <div className="text-3xl font-black text-white tracking-wider">BRUTALIST</div>
              <div className="text-sm text-gray-300 font-bold uppercase tracking-widest">CONCRETE DIGITAL</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} className="group relative mx-2">
                <div className="bg-white text-black px-8 py-4 font-black text-lg tracking-wider hover:bg-black hover:text-white transition-all duration-200 transform hover:scale-105 hover:rotate-1">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-6 h-6" />
                    <span>{item.label}</span>
                  </div>

                  {/* Brutal Shadow */}
                  <div className="absolute inset-0 bg-black transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 transform translate-x-1 -translate-y-1"></div>
                </div>
              </a>
            ))}
          </div>

          {/* Industrial Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="bg-red-500 text-white px-4 py-2 font-black text-sm">LIVE</div>
            <div className="bg-white text-black px-4 py-2 font-black text-sm border-4 border-black">{new Date().toLocaleTimeString()}</div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white text-black p-3 font-black hover:bg-black hover:text-white transition-all duration-200"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-black border-t-4 border-white">
          <div className="px-4 py-8 space-y-4">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block group">
                <div className="bg-white text-black p-6 font-black text-xl tracking-wider hover:bg-black hover:text-white transition-all duration-200 transform hover:scale-105 relative">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-8 h-8" />
                    <span>{item.label}</span>
                  </div>

                  {/* Mobile Brutal Shadow */}
                  <div className="absolute inset-0 bg-gray-800 transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-6 h-6 bg-red-500 transform translate-x-1 -translate-y-1"></div>
                </div>
              </a>
            ))}

            {/* Mobile Status */}
            <div className="flex gap-4 mt-8">
              <div className="bg-red-500 text-white px-4 py-2 font-black text-sm">SYSTEM ACTIVE</div>
              <div className="bg-white text-black px-4 py-2 font-black text-sm">READY</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
