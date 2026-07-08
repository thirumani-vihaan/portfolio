import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#1a1c23",     // Deep dark base
        deepslate: "#2d333b",    // Lighter dark base
        stone: "#444c56",        // Borders/Accents
        ink: "#f0f6fc",          // Primary Text
        muted: "#8b949e",        // Secondary Text
        diamond: {
          glow: "#55FFFF",
          base: "#3b82f6",
        },
        emerald: {
          glow: "#55FF55",
          base: "#22c55e",
        },
        redstone: {
          glow: "#FF5555",
          base: "#ef4444",
        },
      },
      fontFamily: {
        pixel: ["var(--font-vt323)", "monospace"], // Only for big headers
        sans: ["var(--font-inter)", "system-ui", "sans-serif"], // For all readable body text
      },
      boxShadow: {
        "mc-block": "inset -4px -4px 0px 0px rgba(0, 0, 0, 0.4), inset 4px 4px 0px 0px rgba(255, 255, 255, 0.1), 0 10px 30px rgba(0, 0, 0, 0.5)",
        "mc-block-hover": "inset -4px -4px 0px 0px rgba(0, 0, 0, 0.5), inset 4px 4px 0px 0px rgba(85, 255, 255, 0.3), 0 10px 40px rgba(85, 255, 255, 0.15)",
        "mc-button": "inset -2px -2px 0px 0px rgba(0, 0, 0, 0.4), inset 2px 2px 0px 0px rgba(255, 255, 255, 0.15)",
        "mc-button-active": "inset 2px 2px 0px 0px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "float-particle": "float-particle 10s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        "float-particle": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(50px)", opacity: "0" },
        },
        "pulse-glow": {
          "0%": { textShadow: "0 0 10px rgba(85, 255, 255, 0.5)" },
          "100%": { textShadow: "0 0 20px rgba(85, 255, 255, 1), 0 0 30px rgba(85, 255, 255, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
