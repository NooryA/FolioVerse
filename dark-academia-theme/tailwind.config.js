/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        academia: {
          // Deep, rich base colors
          bg: "#1a1612",
          surface: "#2a1f1a",
          paper: "#f5f1e8",
          parchment: "#f9f6f0",

          // Text colors
          text: "#e8e2d5",
          textMuted: "#c4b5a0",
          textDark: "#2d251d",

          // Accent colors inspired by classical themes
          burgundy: "#722f37",
          burgundyLight: "#8b3a42",
          burgundyDark: "#5a252a",

          gold: "#d4af37",
          goldLight: "#f4cf47",
          goldDark: "#b8941f",

          forest: "#2d4a2b",
          forestLight: "#3c5f3a",
          forestDark: "#1f3120",

          navy: "#1e3a5f",
          navyLight: "#2d4d7a",
          navyDark: "#152a47",

          // Muted earth tones
          sage: "#87a96b",
          bronze: "#cd7f32",
          cream: "#f5f5dc",
          sepia: "#704214",

          // Utility colors
          success: "#4a6741",
          warning: "#8b6914",
          error: "#7a2e2e",
          info: "#4a5f7a",

          // Special effects
          shadowWarm: "rgba(100, 60, 20, 0.3)",
          shadowCold: "rgba(20, 20, 40, 0.4)",
          glowGold: "rgba(212, 175, 55, 0.2)",
          glowBurgundy: "rgba(114, 47, 55, 0.3)",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Crimson Text", "Times New Roman", "serif"],
        sans: ["Cormorant Garamond", "Lora", "Georgia", "serif"],
        display: ["Cinzel", "Playfair Display", "serif"],
        body: ["Crimson Text", "Lora", "Georgia", "serif"],
        mono: ["Courier Prime", "Courier New", "monospace"],
        script: ["Dancing Script", "Pacifico", "cursive"],
      },
      backgroundImage: {
        "paper-texture":
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXBlciIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgo8cGF0aCBkPSJNIDAgMTAwIEwgMTAwIDEwMCBMIDEwMCAwIEwgMCAwIFoiIGZpbGw9IiNmOWY2ZjAiLz4KPHBhdGggZD0iTSAxMCA1IEwgOTAgNSIgc3Ryb2tlPSIjZWZlYmRkIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+CjxwYXRoIGQ9Ik0gMTAgMTUgTCA5MCAxNSIgc3Ryb2tlPSIjZWZlYmRkIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4zIi8+Cjwvcatter9uPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ1cmwoI3BhcGVyKSIvPgo8L3N2Zz4=')",
        "book-spine": "linear-gradient(90deg, #704214 0%, #8b6914 50%, #704214 100%)",
        "vintage-gradient": "linear-gradient(135deg, #722f37 0%, #2d4a2b 50%, #1e3a5f 100%)",
        "parchment-gradient": "linear-gradient(135deg, #f9f6f0 0%, #f5f1e8 100%)",
      },
      boxShadow: {
        book: "0 4px 8px rgba(100, 60, 20, 0.3), 0 2px 4px rgba(20, 20, 40, 0.2)",
        page: "0 2px 4px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1)",
        "inset-soft": "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
        "glow-gold": "0 0 20px rgba(212, 175, 55, 0.2)",
        "glow-burgundy": "0 0 20px rgba(114, 47, 55, 0.3)",
        deep: "0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)",
        vintage: "0 4px 8px rgba(100, 60, 20, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },
      borderRadius: {
        vintage: "0.375rem",
        book: "0.25rem",
        page: "0.125rem",
      },
      animation: {
        "candle-flicker": "candle-flicker 3s ease-in-out infinite",
        "page-turn": "page-turn 0.6s ease-in-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        typewriter: "typewriter 3s steps(40) forwards",
        "ink-drop": "ink-drop 2s ease-in-out infinite",
        "book-open": "book-open 1s ease-in-out",
      },
      keyframes: {
        "candle-flicker": {
          "0%, 100%": {
            textShadow: "0 0 5px rgba(212, 175, 55, 0.5), 0 0 10px rgba(212, 175, 55, 0.3)",
            transform: "scale(1)",
          },
          "50%": {
            textShadow: "0 0 8px rgba(212, 175, 55, 0.8), 0 0 15px rgba(212, 175, 55, 0.5)",
            transform: "scale(1.02)",
          },
        },
        "page-turn": {
          "0%": { transform: "perspective(1000px) rotateY(0deg)" },
          "50%": { transform: "perspective(1000px) rotateY(-90deg)" },
          "100%": { transform: "perspective(1000px) rotateY(0deg)" },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        typewriter: {
          "0%": { width: "0ch" },
          "100%": { width: "40ch" },
        },
        "ink-drop": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.7",
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "1",
          },
        },
        "book-open": {
          "0%": {
            transform: "perspective(1000px) rotateX(-90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "perspective(1000px) rotateX(0deg)",
            opacity: "1",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      letterSpacing: {
        widest: "0.25em",
        wider: "0.1em",
      },
      lineHeight: {
        "extra-loose": "2.2",
        loose: "1.8",
      },
    },
  },
  plugins: [],
};
