"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "HOME", accent: "bg-red-500", corner: "bg-yellow-400" },
    { href: "#about", label: "ABOUT", accent: "bg-yellow-400", corner: "bg-blue-500" },
    { href: "#projects", label: "PROJECTS", accent: "bg-blue-500", corner: "bg-green-500" },
    { href: "#contact", label: "CONTACT", accent: "bg-green-500", corner: "bg-red-500" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-2xl">
        {/* CREATIVE TOP PATTERN */}
        <div className="flex h-2">
          <div className="w-1/4 bg-red-500"></div>
          <div className="w-1/4 bg-yellow-400"></div>
          <div className="w-1/4 bg-blue-500"></div>
          <div className="w-1/4 bg-green-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* CREATIVE LOGO WITH GEOMETRIC ELEMENTS */}
            <Link href="#home" className="group relative">
              <div className="bg-white text-black border-4 border-red-500 px-6 py-2 shadow-lg transform group-hover:scale-105 group-hover:rotate-1 transition-all">
                <div className="font-black text-2xl uppercase tracking-wider">BRUTAL</div>
                <div className="font-black text-lg uppercase text-red-500 -mt-1 tracking-wider">FOLIO</div>

                {/* Creative corner elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 border-2 border-black transform rotate-45 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 border-2 border-black animate-bounce"></div>
              </div>
            </Link>

            {/* CREATIVE DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center space-x-3">
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href} className="relative group">
                  <div className="bg-white text-black border-4 border-black px-6 py-3 font-black text-lg uppercase shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-105 hover:rotate-1">
                    {item.label}

                    {/* Creative accent stripe */}
                    <div className={`absolute -top-1 left-0 right-0 h-2 ${item.accent} border-l-2 border-r-2 border-black`}></div>

                    {/* Creative corner triangle */}
                    <div
                      className={`absolute -top-2 -right-2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent ${item.corner.replace(
                        "bg-",
                        "border-b-"
                      )} transform group-hover:scale-110 transition-transform`}
                    ></div>

                    {/* Creative side accent */}
                    <div className={`absolute -left-1 top-0 bottom-0 w-2 ${item.accent} border-t-2 border-b-2 border-black`}></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* CREATIVE MOBILE MENU BUTTON */}
            <button className="md:hidden relative group" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <div className="bg-red-500 text-white border-4 border-white px-6 py-3 font-black text-lg uppercase shadow-lg hover:bg-white hover:text-red-500 transition-all transform hover:scale-105">
                {isMobileMenuOpen ? "CLOSE" : "MENU"}

                {/* Creative button decorations */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 border-2 border-black transform rotate-45 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-500 border-2 border-black animate-bounce"></div>
              </div>
            </button>
          </div>

          {/* CREATIVE MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {/* Creative mobile separator */}
              <div className="flex h-3 mb-4">
                <div className="flex-1 bg-red-500 border-2 border-black"></div>
                <div className="flex-1 bg-yellow-400 border-2 border-black"></div>
                <div className="flex-1 bg-blue-500 border-2 border-black"></div>
                <div className="flex-1 bg-green-500 border-2 border-black"></div>
              </div>

              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <Link key={item.href} href={item.href} className="block relative group" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="bg-white text-black border-4 border-black px-6 py-4 font-black text-xl uppercase shadow-lg hover:bg-red-500 hover:text-white transition-all transform hover:scale-105 mx-2">
                      {item.label}

                      {/* Mobile creative accents */}
                      <div className={`absolute -top-1 left-0 right-0 h-2 ${item.accent} border-l-2 border-r-2 border-black`}></div>
                      <div className={`absolute -right-2 top-2 w-4 h-4 ${item.corner} border-2 border-black transform rotate-45`}></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CREATIVE BOTTOM DESIGN */}
        <div className="relative">
          <div className="h-3 bg-red-500 border-t-2 border-black"></div>

          {/* Creative geometric pattern */}
          <div className="absolute top-0 left-0 right-0 flex justify-center space-x-4">
            <div className="w-6 h-6 bg-yellow-400 border-2 border-black transform rotate-45 -mt-1"></div>
            <div className="w-4 h-4 bg-blue-500 border-2 border-black transform rotate-45 mt-0"></div>
            <div className="w-5 h-5 bg-green-500 border-2 border-black transform rotate-45 -mt-1"></div>
            <div className="w-3 h-3 bg-red-500 border-2 border-black transform rotate-45 mt-1"></div>
          </div>
        </div>
      </nav>

      {/* SPACER */}
      <div className="h-24"></div>
    </>
  );
}
