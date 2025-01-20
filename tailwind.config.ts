import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#FFD700",
        ivory: "#FFFFF0",
        crimson: "#DC143C",
        "electric-blue": "#1E90FF",
        "neon-green": "#39FF14",
        "light-pink": "#FFB6C1",
        "sky-blue": "#87CEEB",
        "blood-red": "#8B0000",
        "retro-purple": "#240046",
        magenta: "#FF00FF",
        "bright-cyan": "#00FFFF",
        charcoal: "#2C2C2C",
        silver: "#C0C0C0",
        "deep-blue": "#2C3E50",
        "dark-green": "#004d00",
      },
    },
  },
  plugins: [],
} satisfies Config;
