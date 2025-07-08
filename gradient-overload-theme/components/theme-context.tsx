"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeColors {
  gradients: string[];
  textGradients: string[];
  name: string;
  accent: string;
}

const themes: ThemeColors[] = [
  {
    name: "Sunset Vibes",
    accent: "from-orange-500 to-pink-500",
    gradients: [
      "from-pink-500 via-red-500 to-yellow-500",
      "from-purple-400 via-pink-500 to-red-500",
      "from-orange-400 via-red-500 to-pink-500",
      "from-yellow-400 via-orange-500 to-red-500",
      "from-red-500 via-pink-500 to-purple-500",
      "from-orange-500 via-pink-500 to-purple-600",
      "from-yellow-500 via-red-500 to-pink-500",
      "from-pink-600 via-red-600 to-orange-600",
    ],
    textGradients: [
      "from-pink-600 via-red-600 to-orange-600",
      "from-red-500 via-orange-500 to-yellow-500",
      "from-purple-500 via-pink-500 to-red-500",
      "from-orange-500 via-red-500 to-pink-500",
      "from-yellow-500 via-orange-500 to-red-500",
      "from-pink-500 via-red-500 to-purple-500",
      "from-red-600 via-pink-600 to-purple-600",
      "from-orange-600 via-red-600 to-pink-600",
    ],
  },
  {
    name: "Ocean Dreams",
    accent: "from-blue-500 to-cyan-500",
    gradients: [
      "from-cyan-400 via-blue-500 to-purple-600",
      "from-blue-500 via-cyan-500 to-teal-500",
      "from-indigo-400 via-blue-500 to-cyan-500",
      "from-teal-400 via-cyan-500 to-blue-500",
      "from-blue-600 via-indigo-600 to-purple-600",
      "from-cyan-500 via-blue-600 to-indigo-600",
      "from-teal-500 via-cyan-600 to-blue-600",
      "from-blue-400 via-cyan-400 to-teal-400",
    ],
    textGradients: [
      "from-blue-600 via-cyan-600 to-teal-600",
      "from-indigo-500 via-blue-500 to-cyan-500",
      "from-cyan-500 via-blue-500 to-indigo-500",
      "from-teal-500 via-cyan-500 to-blue-500",
      "from-blue-500 via-indigo-500 to-purple-500",
      "from-cyan-600 via-blue-600 to-indigo-600",
      "from-teal-600 via-cyan-600 to-blue-600",
      "from-blue-500 via-cyan-500 to-teal-500",
    ],
  },
  {
    name: "Forest Magic",
    accent: "from-green-500 to-emerald-500",
    gradients: [
      "from-green-400 via-emerald-500 to-teal-600",
      "from-lime-400 via-green-500 to-emerald-600",
      "from-emerald-400 via-green-500 to-teal-500",
      "from-green-500 via-teal-500 to-cyan-500",
      "from-lime-500 via-green-600 to-emerald-600",
      "from-green-600 via-emerald-600 to-teal-600",
      "from-emerald-500 via-green-600 to-lime-600",
      "from-teal-400 via-green-400 to-lime-400",
    ],
    textGradients: [
      "from-green-600 via-emerald-600 to-teal-600",
      "from-lime-500 via-green-500 to-emerald-500",
      "from-emerald-500 via-green-500 to-teal-500",
      "from-green-500 via-teal-500 to-cyan-500",
      "from-lime-600 via-green-600 to-emerald-600",
      "from-green-700 via-emerald-700 to-teal-700",
      "from-emerald-600 via-green-600 to-lime-600",
      "from-teal-500 via-green-500 to-lime-500",
    ],
  },
  {
    name: "Royal Purple",
    accent: "from-purple-500 to-indigo-500",
    gradients: [
      "from-indigo-400 via-purple-500 to-pink-500",
      "from-purple-500 via-indigo-500 to-blue-500",
      "from-violet-400 via-purple-500 to-indigo-600",
      "from-purple-600 via-violet-600 to-indigo-600",
      "from-indigo-500 via-purple-600 to-violet-600",
      "from-purple-400 via-violet-500 to-indigo-500",
      "from-violet-500 via-purple-600 to-indigo-700",
      "from-indigo-600 via-purple-700 to-violet-700",
    ],
    textGradients: [
      "from-indigo-600 via-purple-600 to-violet-600",
      "from-purple-600 via-indigo-600 to-blue-600",
      "from-violet-500 via-purple-500 to-indigo-500",
      "from-purple-700 via-violet-700 to-indigo-700",
      "from-indigo-500 via-purple-600 to-violet-600",
      "from-purple-500 via-violet-600 to-indigo-600",
      "from-violet-600 via-purple-700 to-indigo-800",
      "from-indigo-700 via-purple-800 to-violet-800",
    ],
  },
  {
    name: "Golden Hour",
    accent: "from-yellow-500 to-amber-500",
    gradients: [
      "from-yellow-400 via-amber-500 to-orange-500",
      "from-amber-400 via-yellow-500 to-orange-600",
      "from-yellow-500 via-orange-500 to-red-500",
      "from-amber-500 via-orange-600 to-red-600",
      "from-yellow-600 via-amber-600 to-orange-700",
      "from-orange-400 via-amber-500 to-yellow-500",
      "from-amber-600 via-yellow-600 to-orange-600",
      "from-yellow-300 via-amber-400 to-orange-400",
    ],
    textGradients: [
      "from-yellow-600 via-amber-600 to-orange-600",
      "from-amber-500 via-yellow-500 to-orange-500",
      "from-yellow-700 via-orange-700 to-red-700",
      "from-amber-600 via-orange-700 to-red-700",
      "from-yellow-800 via-amber-800 to-orange-800",
      "from-orange-500 via-amber-600 to-yellow-600",
      "from-amber-700 via-yellow-700 to-orange-700",
      "from-yellow-500 via-amber-500 to-orange-500",
    ],
  },
  {
    name: "Cosmic Space",
    accent: "from-indigo-500 to-purple-500",
    gradients: [
      "from-indigo-600 via-purple-600 to-pink-600",
      "from-purple-700 via-indigo-700 to-blue-700",
      "from-violet-600 via-purple-700 to-indigo-800",
      "from-indigo-500 via-violet-600 to-purple-700",
      "from-purple-800 via-indigo-800 to-violet-800",
      "from-indigo-700 via-purple-800 to-violet-900",
      "from-violet-700 via-purple-800 to-indigo-900",
      "from-purple-600 via-indigo-700 to-violet-800",
    ],
    textGradients: [
      "from-indigo-700 via-purple-700 to-pink-700",
      "from-purple-800 via-indigo-800 to-blue-800",
      "from-violet-700 via-purple-800 to-indigo-900",
      "from-indigo-600 via-violet-700 to-purple-800",
      "from-purple-900 via-indigo-900 to-violet-900",
      "from-indigo-800 via-purple-900 to-violet-950",
      "from-violet-800 via-purple-900 to-indigo-950",
      "from-purple-700 via-indigo-800 to-violet-900",
    ],
  },
];

interface ThemeContextType {
  currentTheme: ThemeColors;
  themeIndex: number;
  changeTheme: () => void;
  setThemeIndex: (index: number) => void;
  gradientIndex: number;
  setGradientIndex: (index: number) => void;
  allThemes: ThemeColors[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0);
  const [gradientIndex, setGradientIndex] = useState(0);

  const changeTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
    setGradientIndex(0); // Reset gradient index when theme changes
  };

  const currentTheme = themes[themeIndex];

  useEffect(() => {
    // Auto-cycle gradients within current theme
    const interval = setInterval(() => {
      setGradientIndex((prev) => (prev + 1) % currentTheme.gradients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentTheme.gradients.length]);

  const value: ThemeContextType = {
    currentTheme,
    themeIndex,
    changeTheme,
    setThemeIndex,
    gradientIndex,
    setGradientIndex,
    allThemes: themes,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
