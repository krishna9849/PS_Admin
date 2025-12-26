// // import { create } from "zustand";

// // export type Role = "admin" | "staff" | "vendor";

// // type AuthState = {
// //   token: string | null;
// //   role: Role | null;
// //   hydrated: boolean;
// //   setAuth: (token: string, role: Role) => void;
// //   logout: () => void;
// //   hydrate: () => void;
// // };

// // export const useAuthStore = create<AuthState>((set) => ({
// //   token: null,
// //   role: null,
// //   hydrated: false,

// //   setAuth: (token, role) => {
// //     localStorage.setItem("ps_token", token);
// //     localStorage.setItem("ps_role", role);
// //     set({ token, role });
// //   },
  

// //   hydrate: () => {
// //     const token = localStorage.getItem("ps_token");
// //     const role = localStorage.getItem("ps_role") as Role | null;
// //     set({ token, role, hydrated: true });
// //   },
  
  
// // //   // hydrate: () => {
// // //   // set({
// // //   //   token: "test",
// // //   //   role: "staff", // try admin / staff / vendor
// // //   //   hydrated: true,
// // //   // });


// // // },


// //   logout: () => {
// //     localStorage.removeItem("ps_token");
// //     localStorage.removeItem("ps_role");
// //     set({ token: null, role: null });
// //   },
// // }));




// import { create } from "zustand";

// export type Role = "admin" | "staff" | "vendor";

// type AuthState = {
//   token: string | null;
//   role: Role | null;
//   hydrated: boolean;
//   setAuth: (token: string, role: Role) => void;
//   logout: () => void;
//   hydrate: () => void;
// };

// export const useAuthStore = create<AuthState>((set) => ({
//   token: null,
//   role: null,
//   hydrated: false,

//   // Called after login
//   setAuth: (token, role) => {
//     localStorage.setItem("ps_token", token);
//     localStorage.setItem("ps_role", role);
//     set({ token, role });
//     console.log("token stored as ps_token" ,token)
//   },

//   // Called on app start (AdminLayout)
//   hydrate: () => {
//     if (typeof window === "undefined") return;

//     const token = localStorage.getItem("ps_token");
//     const role = localStorage.getItem("ps_role") as Role | null;
    
//     set({
//       token,
//       role,
//       hydrated: true,
//     });
//     console.log("token stored fetching ps_token" , token)
//   },

//   logout: () => {
//     localStorage.removeItem("ps_token");
//     localStorage.removeItem("ps_role");
//     set({ token: null, role: null });
//   },
// }));




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

  hydrate: () => {
    const token = localStorage.getItem("ps_token");
    const role = localStorage.getItem("ps_role") as Role | null;
    set({
      token,
      role,
      hydrated: true,
    });
  },

  logout: () => {
    localStorage.removeItem("ps_token");
    localStorage.removeItem("ps_role");
    set({ token: null, role: null });
  },
}));
