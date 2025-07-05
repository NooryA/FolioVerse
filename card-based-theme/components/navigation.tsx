"use client";

import { useState } from "react";
import { Home, User, FolderOpen, Mail, Heart, Star, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: Home, color: "blue", likes: 42 },
    { href: "#about", label: "About", icon: User, color: "purple", likes: 38 },
    { href: "#projects", label: "Projects", icon: FolderOpen, color: "green", likes: 56 },
    { href: "#contact", label: "Contact", icon: Mail, color: "orange", likes: 29 },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Card */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center transform group-hover:scale-105">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-sm"></div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">CardStack</div>
              <div className="text-sm text-gray-500">Portfolio Cards</div>
            </div>
          </div>

          {/* Desktop Navigation Cards */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} className="group relative" style={{ zIndex: 10 + index }}>
                <div
                  className={`bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 p-4 ${
                    item.color === "blue"
                      ? "hover:border-blue-200 hover:bg-blue-50"
                      : item.color === "purple"
                      ? "hover:border-purple-200 hover:bg-purple-50"
                      : item.color === "green"
                      ? "hover:border-green-200 hover:bg-green-50"
                      : "hover:border-orange-200 hover:bg-orange-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        item.color === "blue"
                          ? "bg-blue-500 text-white"
                          : item.color === "purple"
                          ? "bg-purple-500 text-white"
                          : item.color === "green"
                          ? "bg-green-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-gray-800 font-semibold text-sm">{item.label}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{item.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Stack Effect */}
                  <div className="absolute inset-0 bg-white rounded-xl shadow-md border border-gray-200 transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
                  <div className="absolute inset-0 bg-gray-50 rounded-xl shadow-sm border border-gray-100 transform translate-x-2 translate-y-2 -z-20 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>

                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Profile Card */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="bg-white rounded-xl shadow-lg p-3 border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-gray-800 font-semibold text-sm">Portfolio</div>
                  <div className="text-gray-500 text-xs">Online</div>
                </div>
              </div>
            </div>
            <div className="text-gray-600 font-medium">{new Date().toLocaleDateString()}</div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-xl shadow-lg p-3 text-gray-700 hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block group">
                <div
                  className={`bg-white rounded-xl shadow-lg border-2 border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-4 relative ${
                    item.color === "blue"
                      ? "hover:border-blue-200 hover:bg-blue-50"
                      : item.color === "purple"
                      ? "hover:border-purple-200 hover:bg-purple-50"
                      : item.color === "green"
                      ? "hover:border-green-200 hover:bg-green-50"
                      : "hover:border-orange-200 hover:bg-orange-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        item.color === "blue"
                          ? "bg-blue-500 text-white"
                          : item.color === "purple"
                          ? "bg-purple-500 text-white"
                          : item.color === "green"
                          ? "bg-green-500 text-white"
                          : "bg-orange-500 text-white"
                      }`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-gray-800 font-semibold text-lg">{item.label}</div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{item.likes} likes</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Card Stack Effect */}
                  <div className="absolute inset-0 bg-white rounded-xl shadow-md border border-gray-200 transform translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>

                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
