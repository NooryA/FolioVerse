"use client";

import Link from "next/link";
import { useState } from "react";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#projects", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* COMPACT LOGO */}
            <Link href="#home" className="group">
              <div className="bg-white text-black border-4 border-red-500 px-6 py-2 shadow-lg transform group-hover:scale-105 transition-all">
                <div className="font-black text-2xl uppercase">BRUTAL</div>
                <div className="font-black text-lg uppercase text-red-500 -mt-1">FOLIO</div>
              </div>
            </Link>

            {/* READABLE DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="bg-white text-black border-4 border-black px-6 py-3 font-black text-lg uppercase shadow-lg hover:bg-red-500 hover:text-white transition-all transform hover:scale-105"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden bg-red-500 text-white border-4 border-white px-6 py-3 font-black text-lg uppercase shadow-lg hover:bg-white hover:text-red-500 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>

          {/* MOBILE MENU */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block bg-white text-black border-4 border-black px-6 py-4 font-black text-xl uppercase shadow-lg hover:bg-red-500 hover:text-white transition-all mx-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIMPLE BOTTOM ACCENT */}
        <div className="h-2 bg-red-500"></div>
      </nav>

      {/* SMALLER SPACER */}
      <div className="h-20"></div>
    </>
  );
}
