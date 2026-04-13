import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FAF8F4",
          muted: "#F3F0E8",
        },
        ink: {
          DEFAULT: "#2E2E2C",
          muted: "#5C5A56",
          faint: "#8A8780",
        },
        accent: {
          DEFAULT: "#2F4A42",
          hover: "#243835",
          soft: "#E8EFEC",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      spacing: {
        section: "4.25rem",
      },
      maxWidth: {
        content: "68rem",
      },
      borderRadius: {
        card: "0.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(46, 46, 44, 0.04), 0 4px 14px rgba(46, 46, 44, 0.04)",
        "card-hover":
          "0 1px 3px rgba(46, 46, 44, 0.06), 0 6px 18px rgba(46, 46, 44, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
