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
        // Base marque — bleu profond
        deep: "#1B2D4F",
        "deep-mid": "#243A62",
        "deep-light": "#354E78",
        // Fonds lecture
        cream: "#F7F4ED",
        "cream-dark": "#EAE6DC",
        // Corail — action, mouvement
        coral: "#E05A42",
        "coral-hover": "#CC4732",
        "coral-light": "#FDEAE6",
        // Jaune — compréhension, apprentissage
        yellow: "#F4C842",
        "yellow-dark": "#D4A82A",
        "yellow-light": "#FEF6CF",
        // Menthe — progression, performance
        mint: "#38BFA0",
        "mint-light": "#E0F7F2",
        // Bleu clair — transition, changement
        sky: "#4A8FD4",
        "sky-light": "#E3EFFE",
        // Violet — introspection, identité
        violet: "#7B5EA7",
        "violet-light": "#EEE8F7",
        // Textes
        "text-main": "#1B2D4F",
        "text-muted": "#4A5C72",
        "text-light": "#8896A8",
        // Aliases backward compat (token names unchanged)
        night: "#1B2D4F",
        "night-mid": "#243A62",
        "night-light": "#354E78",
        beige: "#F7F4ED",
        "beige-dark": "#EAE6DC",
        accent: "#E05A42",
        "accent-hover": "#CC4732",
        "accent-light": "#FDEAE6",
        electric: "#4A8FD4",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        display: ["'Barlow Condensed'", "Impact", "sans-serif"],
        mono: ["'IBM Plex Mono'", "'JetBrains Mono'", "monospace"],
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
