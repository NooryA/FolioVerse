/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        neu: {
          bg: "#e0e5ec",
          surface: "#e0e5ec",
          text: "#4a5568",
          textLight: "#718096",
          textDark: "#2d3748",
          accent: "#667eea",
          accentLight: "#764ba2",
          success: "#48bb78",
          warning: "#ed8936",
          error: "#f56565",
          shadowDark: "#a3b1c6",
          shadowLight: "#ffffff",
          // Dark mode colors
          darkBg: "#2d3748",
          darkSurface: "#2d3748",
          darkText: "#e2e8f0",
          darkTextLight: "#a0aec0",
          darkShadowDark: "#1a202c",
          darkShadowLight: "#4a5568",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        neu: "20px",
        "neu-sm": "10px",
        "neu-lg": "30px",
        "neu-xl": "40px",
      },
      boxShadow: {
        // Raised (convex) neumorphic shadows
        neu: "9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff",
        "neu-sm": "5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff",
        "neu-lg": "15px 15px 30px #a3b1c6, -15px -15px 30px #ffffff",
        "neu-xl": "20px 20px 40px #a3b1c6, -20px -20px 40px #ffffff",

        // Inset (concave) neumorphic shadows
        "neu-inset": "inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff",
        "neu-inset-sm": "inset 5px 5px 10px #a3b1c6, inset -5px -5px 10px #ffffff",
        "neu-inset-lg": "inset 15px 15px 30px #a3b1c6, inset -15px -15px 30px #ffffff",

        // Dark mode shadows
        "neu-dark": "9px 9px 16px #1a202c, -9px -9px 16px #4a5568",
        "neu-dark-sm": "5px 5px 10px #1a202c, -5px -5px 10px #4a5568",
        "neu-dark-lg": "15px 15px 30px #1a202c, -15px -15px 30px #4a5568",
        "neu-dark-inset": "inset 9px 9px 16px #1a202c, inset -9px -9px 16px #4a5568",

        // Hover states (slightly different)
        "neu-hover": "12px 12px 20px #a3b1c6, -12px -12px 20px #ffffff",
        "neu-dark-hover": "12px 12px 20px #1a202c, -12px -12px 20px #4a5568",

        // Pressed states
        "neu-pressed": "inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff",
        "neu-dark-pressed": "inset 6px 6px 12px #1a202c, inset -6px -6px 12px #4a5568",
      },
      animation: {
        "neu-float": "neu-float 6s ease-in-out infinite",
        "neu-pulse": "neu-pulse 3s ease-in-out infinite",
        "neu-bounce": "neu-bounce 2s ease-in-out infinite",
        "neu-press": "neu-press 0.15s ease-out",
      },
      keyframes: {
        "neu-float": {
          "0%, 100%": {
            transform: "translateY(0px)",
            boxShadow: "9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff",
          },
          "50%": {
            transform: "translateY(-10px)",
            boxShadow: "15px 15px 30px #a3b1c6, -15px -15px 30px #ffffff",
          },
        },
        "neu-pulse": {
          "0%, 100%": {
            boxShadow: "9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff",
          },
          "50%": {
            boxShadow: "15px 15px 30px #a3b1c6, -15px -15px 30px #ffffff",
          },
        },
        "neu-bounce": {
          "0%, 100%": {
            transform: "translateY(0px)",
            boxShadow: "9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff",
          },
          "50%": {
            transform: "translateY(-5px)",
            boxShadow: "12px 12px 20px #a3b1c6, -12px -12px 20px #ffffff",
          },
        },
        "neu-press": {
          "0%": {
            boxShadow: "9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow: "inset 6px 6px 12px #a3b1c6, inset -6px -6px 12px #ffffff",
            transform: "scale(0.98)",
          },
          "100%": {
            boxShadow: "9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
