import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF7A00",
        primaryDark: "#FF8A1F",

        background: {
          light: "#F9FAFB",
          dark: "#0F1115",
        },

        surface: {
          light: "#FFFFFF",
          dark: "#161A22",
        },

        text: {
          light: "#111827",
          dark: "#E5E7EB",
          muted: "#9CA3AF",
        },
      },
    },
  },
  plugins: [],
};

export default config;
