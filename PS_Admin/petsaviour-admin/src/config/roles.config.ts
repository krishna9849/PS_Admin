// // // src/config/roles.config.ts

// // export type Role = "admin" | "staff" | "vendor";

// // /**
// //  * Routes allowed per role
// //  * This controls SIDEBAR visibility (UI-level authorization)
// //  */
// // export const rolePermissions: Record<Role, string[]> = {
// //   admin: [
// //     "/admin/dashboard",
// //     "/admin/vendors",
// //     "/admin/subscriptions",
// //     "/admin/service-catalog",
// //     "admin/orders",
// //     "admin/payouts",
// //     "admin/reports",
// //     "admin/Settings"

// //     // "/admin/staff",
// //   ],

// //   staff: [
// //     "/staff/dashboard",

// //   ],

// //   vendor: [
// //     "/admin/dashboard",
// //     "/vendor/staff"
// //   ],
// // };



// // import { Role } from "../store/auth.store";

// export type Role = "admin" | "staff" | "vendor";
// export const rolePermissions: Record<Role, string[]> = {
//   admin: [
//     "/admin/dashboard",
//     "/admin/vendors",
//     "/admin/services",
//     "/admin/staff",
//     "/admin/subscriptions",
//     "/admin/orders",
//     "/admin/payouts",
//     "/admin/reports",
//     "/admin/settings",
//   ],

//   vendor: [
//     "/vendor/dashboard",
//     "/vendor/services",
//     "/vendor/staff",
//   ],

//   staff: [
//     "/staff/dashboard",
//   ],
// };



import { Role } from "../store/auth.store";

// export type Role = "admin" | "vendor" | "staff";


export const rolePermissions: Record<Role, string[]> = {
  admin: [
    "/admin/dashboard",
    "/admin/orders",
    "/admin/vendors",
    "/admin/catalog",
    "/admin/vendor-services",
    "/admin/staff",
    "/admin/subscription",
    "/admin/approvals",
    "/admin/users",
    "/admin/reports",
    "/admin/settings",
  ],

  staff: [
    "/admin/dashboard",
    "/admin/orders",
    "/admin/catalog",
    "/admin/vendor-services",
    "/admin/users",
  ],

  vendor: [
    "/admin/dashboard",
    "/admin/orders",
    "/admin/staff",
    "/admin/subscription",
    "/admin/profile",
    "/admin/services",
  ],
};
