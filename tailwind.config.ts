import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#1A1A1A",
        sand: "#262626",
        ink: "#F5F5F5",
        coral: "#FFA116",
        blush: "#3A3A3A",
      },
      boxShadow: {
        card: "0 0 0 1px rgba(255, 255, 255, 0.03), 0 8px 32px rgba(0, 0, 0, 0.4)",
        "card-hover":
          "0 0 0 1px rgba(255, 161, 22, 0.2), 0 16px 48px rgba(0, 0, 0, 0.5), 0 0 24px rgba(255, 161, 22, 0.06)",
        glow: "0 0 20px rgba(255, 161, 22, 0.15), 0 0 60px rgba(255, 161, 22, 0.05)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      animation: {
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
