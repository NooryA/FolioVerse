/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        parallax: {
          primary: "#6366f1",
          secondary: "#ec4899",
          accent: "#8b5cf6",
          dark: "#0a0a0f",
          darker: "#050508",
          light: "#1a1a2e",
          surface: "rgba(26, 26, 46, 0.5)",
          text: {
            primary: "#ffffff",
            secondary: "#a1a1aa",
            muted: "#71717a",
          },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "rotate-3d": "rotate3d 20s linear infinite",
        "pulse-3d": "pulse3d 2s ease-in-out infinite",
        orbit: "orbit 15s linear infinite",
        "particle-float": "particle-float 10s linear infinite",
        "depth-shift": "depthShift 4s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) translateZ(0) rotateX(0) rotateY(0)" },
          "25%": { transform: "translateY(-20px) translateZ(50px) rotateX(5deg) rotateY(5deg)" },
          "50%": { transform: "translateY(-10px) translateZ(100px) rotateX(-5deg) rotateY(-5deg)" },
          "75%": { transform: "translateY(-30px) translateZ(50px) rotateX(5deg) rotateY(-5deg)" },
        },
        rotate3d: {
          "0%": { transform: "rotateX(0) rotateY(0) rotateZ(0)" },
          "100%": { transform: "rotateX(360deg) rotateY(360deg) rotateZ(360deg)" },
        },
        pulse3d: {
          "0%, 100%": { transform: "scale3d(1, 1, 1)", opacity: "0.8" },
          "50%": { transform: "scale3d(1.1, 1.1, 1.1)", opacity: "1" },
        },
        orbit: {
          "0%": { transform: "rotateY(0) translateX(200px) rotateY(0)" },
          "100%": { transform: "rotateY(360deg) translateX(200px) rotateY(-360deg)" },
        },
        "particle-float": {
          "0%": { transform: "translateY(100vh) translateZ(0) scale(0)" },
          "10%": { transform: "translateY(90vh) translateZ(50px) scale(1)" },
          "100%": { transform: "translateY(-10vh) translateZ(300px) scale(0.5)" },
        },
        depthShift: {
          "0%, 100%": { transform: "translateZ(0px)" },
          "50%": { transform: "translateZ(100px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99, 102, 241, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.8)" },
        },
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      perspective: {
        none: "none",
        500: "500px",
        1000: "1000px",
        1500: "1500px",
        2000: "2000px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
