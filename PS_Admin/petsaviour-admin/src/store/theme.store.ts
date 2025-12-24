import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  toggleTheme: () =>
    set({
      theme: get().theme === "light" ? "dark" : "light",
    }),
}));
