import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fonds sombres
        night: "#0F172A",
        "night-mid": "#1E293B",
        "night-light": "#334155",
        // Fonds clairs
        beige: "#F5F2EB",
        "beige-dark": "#EAE6DF",
        // Textes
        "text-main": "#334155",
        "text-muted": "#475569",
        "text-light": "#94A3B8",
        // Accent ambre/or
        accent: "#C8A96A",
        "accent-hover": "#B8965E",
        "accent-light": "#F0E6D0",
        // Accent créatif (usage limité)
        "electric": "#3A86FF",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
