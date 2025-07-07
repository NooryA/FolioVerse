/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#0a0a0f",
          darker: "#050507",
          primary: "#00ff9f",
          secondary: "#ff0080",
          accent: "#0080ff",
          neon: "#00ff9f",
          pink: "#ff0080",
          blue: "#0080ff",
          purple: "#8000ff",
          matrix: "#00ff9f",
          text: "#e4e4e7",
          textDim: "#71717a",
          grid: "#1a1a2e",
        },
        neon: {
          green: "#00ff9f",
          blue: "#0080ff",
          pink: "#ff0080",
          yellow: "#ffff00",
          orange: "#ff9a00",
          red: "#ff073a",
          purple: "#8000ff",
          cyan: "#00ffff",
        },
      },
      fontFamily: {
        cyber: ["Orbitron", "monospace"],
        orbitron: ["Orbitron", "monospace"],
        jetbrains: ["JetBrains Mono", "monospace"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Orbitron", "monospace"],
      },
      backgroundImage: {
        "cyber-grid": `linear-gradient(rgba(0, 255, 159, 0.1) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(0, 255, 159, 0.1) 1px, transparent 1px)`,
        "matrix-rain": `linear-gradient(0deg, transparent 24%, rgba(0, 255, 159, 0.05) 25%, rgba(0, 255, 159, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 159, 0.05) 75%, rgba(0, 255, 159, 0.05) 76%, transparent 77%, transparent)`,
        scanlines: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)`,
        "gradient-shift": "linear-gradient(270deg, #00ff9f, #ff0080, #0080ff, #8000ff, #00ff9f)",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 255, 159, 0.8), 0 0 20px rgba(0, 255, 159, 0.6), 0 0 30px rgba(0, 255, 159, 0.4)",
        neonPink: "0 0 10px rgba(255, 0, 128, 0.8), 0 0 20px rgba(255, 0, 128, 0.6), 0 0 30px rgba(255, 0, 128, 0.4)",
        neonBlue: "0 0 10px rgba(0, 128, 255, 0.8), 0 0 20px rgba(0, 128, 255, 0.6), 0 0 30px rgba(0, 128, 255, 0.4)",
        neonPurple: "0 0 10px rgba(128, 0, 255, 0.8), 0 0 20px rgba(128, 0, 255, 0.6), 0 0 30px rgba(128, 0, 255, 0.4)",
        glow: "0 0 20px rgba(0, 255, 159, 0.5)",
        "inner-glow": "inset 0 0 20px rgba(0, 255, 159, 0.2)",
        "cyber-glow": "0 0 20px rgba(0, 255, 159, 0.5), 0 0 40px rgba(0, 255, 159, 0.3), 0 0 60px rgba(0, 255, 159, 0.1)",
      },
      animation: {
        glitch: "glitch 0.5s infinite",
        "glitch-2": "glitch-2 0.5s infinite",
        "matrix-fall": "matrix-fall 10s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-neon": "pulse-neon 2s ease-in-out infinite",
        flicker: "flicker 3s infinite",
        "grid-flow": "grid-flow 20s linear infinite",
        scan: "scan 8s linear infinite",
        blink: "blink 1s infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "text-glow": "text-glow 2s ease-in-out infinite alternate",
        "pulse-border": "pulse-border 2s infinite",
        "holographic-shift": "holographic-shift 3s ease-in-out infinite",
        "nav-scan": "nav-scan 3s linear infinite",
        "signal-pulse": "signal-pulse 1.5s infinite",
        "data-stream": "data-stream var(--duration) linear infinite",
        "mobile-item-slide": "mobile-item-slide 0.5s ease-out",
        "scan-line": "scan-line 2s linear infinite",
        typing: "typing 3s steps(30, end)",
      },
      keyframes: {
        glitch: {
          "0%, 100%": {
            transform: "translate(0)",
            filter: "hue-rotate(0deg)",
          },
          "20%": {
            transform: "translate(-2px, 2px)",
            filter: "hue-rotate(90deg)",
          },
          "40%": {
            transform: "translate(-2px, -2px)",
            filter: "hue-rotate(180deg)",
          },
          "60%": {
            transform: "translate(2px, 2px)",
            filter: "hue-rotate(270deg)",
          },
          "80%": {
            transform: "translate(2px, -2px)",
            filter: "hue-rotate(360deg)",
          },
        },
        "glitch-2": {
          "0%, 100%": {
            clipPath: "inset(0 0 0 0)",
          },
          "25%": {
            clipPath: "inset(20% 0 30% 0)",
          },
          "50%": {
            clipPath: "inset(50% 0 20% 0)",
          },
          "75%": {
            clipPath: "inset(10% 0 60% 0)",
          },
        },
        "matrix-fall": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        "pulse-neon": {
          "0%, 100%": {
            opacity: 1,
            textShadow: "0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor",
          },
          "50%": {
            opacity: 0.8,
            textShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
          },
        },
        flicker: {
          "0%, 100%": { opacity: 1 },
          "10%": { opacity: 0.8 },
          "20%": { opacity: 1 },
          "30%": { opacity: 0.9 },
          "40%": { opacity: 1 },
          "50%": { opacity: 0.7 },
          "60%": { opacity: 1 },
          "70%": { opacity: 0.95 },
          "80%": { opacity: 1 },
          "90%": { opacity: 0.85 },
        },
        "grid-flow": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(50px, 50px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        blink: {
          "0%, 50%, 100%": { opacity: 1 },
          "25%, 75%": { opacity: 0 },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "text-glow": {
          "0%": {
            filter: "drop-shadow(0 0 10px #00ff9f)",
          },
          "100%": {
            filter: "drop-shadow(0 0 20px #ff0080)",
          },
        },
        "pulse-border": {
          "0%": {
            boxShadow: "0 0 0 0 rgba(0, 255, 159, 0.4)",
          },
          "70%": {
            boxShadow: "0 0 0 10px rgba(0, 255, 159, 0)",
          },
          "100%": {
            boxShadow: "0 0 0 0 rgba(0, 255, 159, 0)",
          },
        },
        "holographic-shift": {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
        "nav-scan": {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(100%)",
          },
        },
        "signal-pulse": {
          "0%, 100%": {
            opacity: 0.3,
          },
          "50%": {
            opacity: 1,
          },
        },
        "data-stream": {
          "0%": {
            transform: "translateX(-10px) translateY(-10px)",
            opacity: 0,
          },
          "10%": {
            opacity: 1,
          },
          "90%": {
            opacity: 1,
          },
          "100%": {
            transform: "translateX(100vw) translateY(100vh)",
            opacity: 0,
          },
        },
        "mobile-item-slide": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "scan-line": {
          "0%": {
            transform: "translateY(-100%)",
          },
          "100%": {
            transform: "translateY(100vh)",
          },
        },
        typing: {
          from: {
            width: "0",
          },
          to: {
            width: "100%",
          },
        },
      },
      backgroundSize: {
        grid: "50px 50px",
        rain: "50px 100px",
        gradient: "400% 400%",
      },
    },
  },
  plugins: [],
};
