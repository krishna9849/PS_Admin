import { create } from "zustand";

export type Role = "admin" | "staff" | "vendor";

type AuthState = {
  token: string | null;
  role: Role | null;
  hydrated: boolean;
  setAuth: (token: string, role: Role) => void;
  logout: () => void;
  hydrate: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  hydrated: false,

  setAuth: (token, role) => {
    localStorage.setItem("ps_token", token);
    localStorage.setItem("ps_role", role);
    set({ token, role });
  },
  

  // hydrate: () => {
  //   const token = localStorage.getItem("ps_token");
  //   const role = localStorage.getItem("ps_role") as Role | null;
  //   set({ token, role, hydrated: true });
  // },
  hydrate: () => {
  set({
    token: "test",
    role: "staff", // try admin / staff / vendor
    hydrated: true,
  });
},


  logout: () => {
    localStorage.removeItem("ps_token");
    localStorage.removeItem("ps_role");
    set({ token: null, role: null });
  },
}));
