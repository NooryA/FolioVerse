"use client";

import { useState } from "react";
import { Home, User, FolderOpen, Mail, Grid3x3, Calendar, Clock, Sparkles, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", icon: Home, size: "large", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { href: "#about", label: "About", icon: User, size: "medium", color: "bg-green-100 text-green-800 border-green-200" },
    { href: "#projects", label: "Projects", icon: FolderOpen, size: "large", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { href: "#contact", label: "Contact", icon: Mail, size: "medium", color: "bg-orange-100 text-orange-800 border-orange-200" },
  ];

  const utilityItems = [
    { icon: Calendar, label: "Schedule", color: "bg-pink-100 text-pink-800 border-pink-200" },
    { icon: Clock, label: "Time", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    { icon: Sparkles, label: "Magic", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Bento Box */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-lg border border-gray-200 p-2">
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <Grid3x3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">BentoGrid</div>
              <div className="text-sm text-gray-500">Organized Design</div>
            </div>
          </div>

          {/* Desktop Bento Navigation */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-200">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative rounded-xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    item.size === "large" ? "col-span-2 p-4" : "col-span-1 p-3"
                  } ${item.color}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{item.label}</div>
                      <div className="text-xs opacity-70">{item.size === "large" ? "Featured" : "Standard"}</div>
                    </div>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Utility Bento Boxes */}
          <div className="hidden lg:flex items-center gap-3">
            {utilityItems.map((item, index) => (
              <div
                key={index}
                className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${item.color}`}
              >
                <item.icon className="w-5 h-5" />
              </div>
            ))}
            <div className="ml-4 text-sm text-gray-600">{new Date().toLocaleDateString()}</div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Bento Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
          <div className="px-4 py-6">
            <div className="grid grid-cols-2 gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`group relative rounded-xl border-2 p-4 transition-all duration-300 hover:scale-105 ${
                    index === 0 || index === 2 ? "col-span-2" : "col-span-1"
                  } ${item.color}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-sm opacity-70">{index === 0 || index === 2 ? "Featured Section" : "Quick Access"}</div>
                    </div>
                  </div>

                  {/* Mobile Hover Glow */}
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              ))}
            </div>

            {/* Mobile Utility Grid */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {utilityItems.map((item, index) => (
                <div
                  key={index}
                  className={`h-16 rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 ${item.color}`}
                >
                  <item.icon className="w-5 h-5 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
