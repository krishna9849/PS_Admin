// import { create } from "zustand";

// type UIState = {
//   sidebarOpen: boolean;
//   isMobile: boolean;
//   toggleSidebar: () => void;
//   closeSidebar: () => void;
//   setMobile: (value: boolean) => void;
// };

// export const useUIStore = create<UIState>((set) => ({
//   sidebarOpen: true,
//   isMobile: false,

//   toggleSidebar: () =>
//     set((state) => ({ sidebarOpen: !state.sidebarOpen })),

//   closeSidebar: () => set({ sidebarOpen: false }),

//   setMobile: (value) => set({ isMobile: value }),
  
// }));


import { create } from "zustand";

type UIState = {
  sidebarOpen: boolean;
  isMobile: boolean;
  setMobile: (v: boolean) => void;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  setSidebarOpen: (v: boolean) => void;
};

export const useUIStore = create<UIState>((set) => ({
  sidebarOpen: true, // 🔑 default TRUE
  isMobile: false,

  setMobile: (v) => set({ isMobile: v }),
  toggleSidebar: () =>
    set((s) => ({ sidebarOpen: !s.sidebarOpen })),
  closeSidebar: () => set({ sidebarOpen: false }),
  setSidebarOpen: (v) => set({ sidebarOpen: v }),
}));
