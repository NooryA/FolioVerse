/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        space: {
          // Deep space backgrounds
          void: "#0a0a0f",
          deep: "#1a1a2e",
          nebula: "#16213e",
          cosmic: "#1e3a8a",

          // Stellar colors
          stardust: "#e5e7eb",
          starlight: "#f3f4f6",
          supernova: "#fbbf24",
          quasar: "#8b5cf6",

          // Planetary colors
          mars: "#dc2626",
          earth: "#059669",
          jupiter: "#f59e0b",
          saturn: "#fbbf24",
          uranus: "#06b6d4",
          neptune: "#3b82f6",

          // Cosmic phenomena
          aurora: "#10b981",
          comet: "#22d3ee",
          galaxy: "#8b5cf6",
          blackhole: "#000000",

          // UI elements
          console: "#1f2937",
          screen: "#065f46",
          button: "#1e40af",
          warning: "#dc2626",
          success: "#059669",

          // Glow effects
          glowBlue: "rgba(59, 130, 246, 0.5)",
          glowPurple: "rgba(139, 92, 246, 0.5)",
          glowGreen: "rgba(16, 185, 129, 0.5)",
          glowOrange: "rgba(245, 158, 11, 0.5)",
        },
      },
      fontFamily: {
        space: ["Orbitron", "monospace"],
        tech: ["Rajdhani", "sans-serif"],
        display: ["Exo 2", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      backgroundImage: {
        "space-gradient": "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 25%, #16213e 50%, #1e3a8a 100%)",
        "nebula-gradient": "linear-gradient(45deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)",
        "planet-gradient": "radial-gradient(circle at 30% 30%, #fbbf24 0%, #dc2626 50%, #7c2d12 100%)",
        starfield:
          "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGRlZnM+CjxyYWRpYWxHcmFkaWVudCBpZD0ic3RhciIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iNTAlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+CjwvcmFkaWFsR3JhZGllbnQ+CjwvZGVmcz4KPGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0idXJsKCNzdGFyKSIgb3BhY2l0eT0iMC44Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9InVybCgjc3RhcikiIG9wYWNpdHk9IjAuNiIvPgo8Y2lyY2xlIGN4PSI1MCIgY3k9IjgwIiByPSIwLjgiIGZpbGw9InVybCgjc3RhcikiIG9wYWNpdHk9IjAuNyIvPgo8Y2lyY2xlIGN4PSIxODAiIGN5PSIxMjAiIHI9IjEuMiIgZmlsbD0idXJsKCNzdGFyKSIgb3BhY2l0eT0iMC45Ii8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMTYwIiByPSIwLjYiIGZpbGw9InVybCgjc3RhcikiIG9wYWNpdHk9IjAuNSIvPgo8Y2lyY2xlIGN4PSIxMjAiIGN5PSIxODAiIHI9IjEiIGZpbGw9InVybCgjc3RhcikiIG9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4=')",
        wormhole: "conic-gradient(from 0deg, #8b5cf6, #3b82f6, #06b6d4, #10b981, #fbbf24, #dc2626, #8b5cf6)",
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-sm": "0 0 10px rgba(139, 92, 246, 0.3)",
        "glow-lg": "0 0 30px rgba(139, 92, 246, 0.7)",
        "glow-blue": "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-green": "0 0 20px rgba(16, 185, 129, 0.5)",
        "glow-orange": "0 0 20px rgba(245, 158, 11, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(139, 92, 246, 0.3)",
        holo: "0 0 30px rgba(139, 92, 246, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.1)",
      },
      animation: {
        "float-space": "float-space 6s ease-in-out infinite",
        orbit: "orbit 10s linear infinite",
        twinkle: "twinkle 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        drift: "drift 20s linear infinite",
        "rotate-slow": "rotate-slow 30s linear infinite",
        wormhole: "wormhole 4s ease-in-out infinite",
        constellation: "constellation 15s linear infinite",
        hyperspeed: "hyperspeed 2s ease-in-out infinite",
      },
      keyframes: {
        "float-space": {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
            filter: "brightness(1)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(180deg)",
            filter: "brightness(1.2)",
          },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(100px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(100px) rotate(-360deg)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.3", transform: "scale(0.8)" },
        },
        "pulse-glow": {
          "0%": {
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            transform: "scale(1)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.8)",
            transform: "scale(1.02)",
          },
        },
        drift: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(calc(100vw + 100px))" },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        wormhole: {
          "0%": {
            transform: "rotate(0deg) scale(1)",
            filter: "hue-rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg) scale(1.1)",
            filter: "hue-rotate(360deg)",
          },
        },
        constellation: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        hyperspeed: {
          "0%": {
            transform: "scaleX(1)",
            filter: "blur(0px)",
          },
          "50%": {
            transform: "scaleX(2)",
            filter: "blur(2px)",
          },
          "100%": {
            transform: "scaleX(1)",
            filter: "blur(0px)",
          },
        },
      },
      backdropBlur: {
        space: "8px",
      },
      borderRadius: {
        space: "16px",
        portal: "50%",
        console: "8px",
      },
      spacing: {
        orbit: "120px",
        constellation: "80px",
      },
    },
  },
  plugins: [],
};
