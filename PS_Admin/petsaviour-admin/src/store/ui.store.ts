import { create } from "zustand";

type UIState = {
  sidebarOpen: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  setMobile: (value: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true,
  isMobile: false,

  toggleSidebar: () =>
    set((state) => ({ sidebarOpen: !state.sidebarOpen })),

  closeSidebar: () => set({ sidebarOpen: false }),

  setMobile: (value) => set({ isMobile: value }),
  
}));
