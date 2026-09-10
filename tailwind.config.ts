import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "text-primary": "var(--text-primary)",
        "text-muted": "var(--text-muted)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
        "accent-glow": "var(--accent-glow)",
        gold: "var(--gold)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
        caveat: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        "2xs": "0.75rem",
        xs: "0.875rem",
        sm: "1rem",
        base: "1.125rem",
        lg: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "6rem",
      },
      borderRadius: {
        soft: "16px",
        softer: "24px",
        pill: "9999px",
      },
      boxShadow: {
        dreamy: "0 8px 40px rgba(255, 111, 145, 0.15)",
        "dreamy-lg": "0 20px 60px rgba(255, 111, 145, 0.2)",
        card: "0 4px 24px rgba(58, 46, 48, 0.08)",
        "card-hover": "0 8px 40px rgba(255, 111, 145, 0.18)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        breathe: "breathe 8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        "bounce-soft": "bounce-soft 2s ease-in-out infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "bounce-soft": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(6px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.3)" },
        },
      },
      backdropBlur: {
        xs: "2px",
        sm: "8px",
      },
    },
  },
  plugins: [],
};

export default config;
