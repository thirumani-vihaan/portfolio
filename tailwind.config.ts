import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0B0F19",       // Deep background
        surface: "#111827",    // Panel background
        ink: "#F1F5F9",        // Text
        muted: "#94A3B8",      // Muted text
        cyan: {
          glow: "#00F0FF",
          dim: "rgba(0, 240, 255, 0.15)",
        },
        orange: {
          alert: "#FF462D",
          dim: "rgba(255, 70, 45, 0.15)",
        },
        steel: "#1E293B",      // Borders
      },
      fontFamily: {
        display: ["var(--font-rajdhani)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-rajdhani)", "sans-serif"],
      },
      animation: {
        "glitch-anim": "glitch-anim 0.25s linear infinite alternate-reverse",
        "scanline": "scanline 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "glitch-anim": {
          "0%": { clipPath: "inset(20% 0 80% 0)" },
          "20%": { clipPath: "inset(60% 0 10% 0)" },
          "40%": { clipPath: "inset(40% 0 50% 0)" },
          "60%": { clipPath: "inset(80% 0 5% 0)" },
          "80%": { clipPath: "inset(10% 0 70% 0)" },
          "100%": { clipPath: "inset(30% 0 50% 0)" },
        },
        "scanline": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
