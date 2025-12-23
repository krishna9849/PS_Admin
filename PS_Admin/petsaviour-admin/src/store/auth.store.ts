import { create } from "zustand";

export type Role = "admin" | "vendor" | "staff" | "support";

export type User = {
  id: string;
  role: Role;
};

type AuthState = {
  user: User | null;
  token: string | null;
  login: (token: string | null, user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  login: (token, user) => {
    set({ token, user });
  },

  logout: () => {
    set({ token: null, user: null });
  },
}));
