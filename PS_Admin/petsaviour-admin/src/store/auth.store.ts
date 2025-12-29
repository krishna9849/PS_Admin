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
import { Vendor } from "../services/vendor.service";

export type Role = "admin" | "staff" | "vendor";

// type AuthState = {
//   token: string | null;
//   role: Role | null;
//   vendorId?: string | null;
//   hydrated: boolean;

//   setAuth: (token: string, role: Role, vendorId?: string | null) => void;
//   logout: () => void;
//   hydrate: () => void;
// };

type AuthState = {
  token: string | null;
  role: Role | null;
  vendorId?: string;
  hydrated: boolean;

  setAuth: (
    token: string,
    role: Role,
    vendorId?: string
  ) => void;

  hydrate: () => void;
  logout: () => void;
};



// export const useAuthStore = create<AuthState>((set) => ({
//   token: null,
//   role: null,
//   hydrated: false,
//   vendorId: null,

//   setAuth: (token, role, vendorId) => {
//     localStorage.setItem("ps_token", token);
//     localStorage.setItem("ps_role", role);
//      if(vendorId){
//       localStorage.setItem("ps_vendorId", vendorId);
//     }
//     set({ token, role, vendorId});
//   },

//   hydrate: () => {
//     const token = localStorage.getItem("ps_token");
//     const role = localStorage.getItem("ps_role") as Role | null;
//      const vendorId : string | null = localStorage.getItem("ps_vendorId") 
   
//     set({
//       token,
//       role,
//       hydrated: true,
//       vendorId : vendorId ? vendorId : null
//     });
//   },

//   logout: () => {
//     localStorage.removeItem("ps_token");
//     localStorage.removeItem("ps_role");
//     localStorage.removeItem("ps_vendorId");
//     set({ token: null, role: null ,vendorId: null});
//   },
// }));


export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  role: null,
  vendorId: undefined,
  hydrated: false,

  setAuth: (token, role, vendorId) => {
    console.log("Storing token:", vendorId);
    localStorage.setItem("ps_token", token);
    localStorage.setItem("ps_role", role);
    if (vendorId) {
      localStorage.setItem("ps_vendorId", vendorId);
    }

    set({ token, role, vendorId });
  },

  hydrate: () => {
    set({
      token: localStorage.getItem("ps_token"),
      role: localStorage.getItem("ps_role") as Role,
      vendorId: localStorage.getItem("ps_vendorId") || undefined,
      hydrated: true,
    });
  },

  logout: () => {
    localStorage.clear();
    set({
      token: null,
      role: null,
      vendorId: undefined,
      hydrated: false,
    });
  },
}));
