// // src/config/roles.config.ts

// export type Role = "admin" | "staff" | "vendor";

// /**
//  * Routes allowed per role
//  * This controls SIDEBAR visibility (UI-level authorization)
//  */
// export const rolePermissions: Record<Role, string[]> = {
//   admin: [
//     "/admin/dashboard",
//     "/admin/vendors",
//     "/admin/subscriptions",
//     "/admin/service-catalog",
//     "admin/orders",
//     "admin/payouts",
//     "admin/reports",
//     "admin/Settings"

//     // "/admin/staff",
//   ],

//   staff: [
//     "/staff/dashboard",

//   ],

//   vendor: [
//     "/admin/dashboard",
//     "/vendor/staff"
//   ],
// };



import { Role } from "../store/auth.store";


export const rolePermissions: Record<Role, string[]> = {
  admin: [
    "/admin/dashboard",
    "/admin/vendors",
    "/admin/services",
    "/admin/staff",
    "/admin/subscriptions",
    "/admin/orders",
    "/admin/payouts",
    "/admin/reports",
    "/admin/settings",
  ],

  vendor: [
    "/vendor/dashboard",
    "/vendor/services",
    "/vendor/staff",
  ],

  staff: [
    "/staff/dashboard",
  ],
};
