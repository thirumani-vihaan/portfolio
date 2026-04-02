import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#121212",
        slateSoft: "#1E1E1E",
        offWhite: "#E0E0E0",
        mutedGrey: "#A0A0A0",
        steel: "#455A64"
      },
      boxShadow: {
        glass: "0 10px 35px rgba(0, 0, 0, 0.35)"
      },
      backdropBlur: {
        xs: "2px"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
