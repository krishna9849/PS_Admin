"use client";

import { useThemeStore } from "../store/theme.store";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-primary text-white"
    >
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
