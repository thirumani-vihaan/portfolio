import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#111216",     // Deep dark base
        deepslate: "#1a1c23",    // Lighter dark base
        stone: "#2d333b",        // Borders/Accents
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
      },
      fontFamily: {
        pixel: ["var(--font-vt323)", "monospace"], // Used sparingly for top-level headers
        sans: ["var(--font-inter)", "system-ui", "sans-serif"], // Everything else
      },
      animation: {
        "float-particle": "float-particle 10s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        "float-particle": {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(-100vh) translateX(50px)", opacity: "0" },
        },
        "pulse-glow": {
          "0%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
