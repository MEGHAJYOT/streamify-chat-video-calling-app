import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("MeghaConnect-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("MeghaConnect-theme", theme);
    set({ theme });
  },
}));
