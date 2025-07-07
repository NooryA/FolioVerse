"use client";

import { useState, useEffect } from "react";
import { Home, User, FolderOpen, Mail, Sparkles, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: Home, color: "blue" },
    { href: "#about", label: "About", icon: User, color: "purple" },
    { href: "#projects", label: "Projects", icon: FolderOpen, color: "green" },
    { href: "#contact", label: "Contact", icon: Mail, color: "orange" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Clean Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-800">Portfolio</div>
              <div className="text-xs text-gray-500">Card Collection</div>
            </div>
          </div>

          {/* Clean Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group relative">
                <div
                  className={`px-5 py-2.5 rounded-xl font-medium text-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105 ${
                    item.color === "blue"
                      ? "hover:bg-blue-500 hover:shadow-blue-200"
                      : item.color === "purple"
                      ? "hover:bg-purple-500 hover:shadow-purple-200"
                      : item.color === "green"
                      ? "hover:bg-green-500 hover:shadow-green-200"
                      : "hover:bg-orange-500 hover:shadow-orange-200"
                  } hover:shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Profile Card */}
          <div className="hidden lg:flex items-center">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl px-4 py-2 shadow-sm">
              <div className="text-sm font-medium text-gray-700">{mounted ? new Date().toLocaleDateString() : ""}</div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-100 rounded-xl p-2.5 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Clean Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block">
                <div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-gray-700 hover:text-white transition-all duration-300 ${
                    item.color === "blue"
                      ? "hover:bg-blue-500"
                      : item.color === "purple"
                      ? "hover:bg-purple-500"
                      : item.color === "green"
                      ? "hover:bg-green-500"
                      : "hover:bg-orange-500"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      item.color === "blue"
                        ? "bg-blue-100 text-blue-600"
                        : item.color === "purple"
                        ? "bg-purple-100 text-purple-600"
                        : item.color === "green"
                        ? "bg-green-100 text-green-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span>{item.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
