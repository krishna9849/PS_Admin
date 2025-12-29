// // import { Role } from "../store/auth.store";

// // export type SidebarItem = {
// //   label: string;
// //   path: string;
// //   roles: Role[];
// // };

// // export const SIDEBAR_ITEMS: SidebarItem[] = [
// //   // Dashboard (everyone)
// //   {
// //     label: "Dashboard",
// //     path: "/admin/dashboard",
// //     roles: ["admin", "vendor", "staff"],
// //   },

// //   // Orders & Operations
// //   {
// //     label: "Orders",
// //     path: "/admin/orders",
// //     roles: ["admin", "vendor", "staff"],
// //   },

// //   // Vendor Management (Admin only)
// //   {
// //     label: "Vendors",
// //     path: "/admin/vendors",
// //     roles: ["admin"],
// //   },

// //   // Staff Management (Admin + Vendor)
// //   {
// //     label: "Staff",
// //     path: "/admin/staff",
// //     roles: ["admin", "vendor"],
// //   },

// //   // Services (Vendor only – admin may access later via vendor view)
// //   {
// //     label: "Services",
// //     path: "/admin/services",
// //     roles: ["vendor"],
// //   },

// //   // Subscriptions & Payments
// //   {
// //     label: "Subscription",
// //     path: "/admin/subscription",
// //     roles: ["admin", "vendor"],
// //   },

// //   // Platform Settings (Admin only)
// //   {
// //     label: "Settings",
// //     path: "/admin/settings",
// //     roles: ["admin"],
// //   },
// // ];


// import { Role } from "../store/auth.store";

// export type SidebarItem = {
//   label: string;
//   path: string;
//   roles: Role[];
// };

// export const SIDEBAR_ITEMS: SidebarItem[] = [
//   /* ======================
//      GLOBAL ADMIN
//      ====================== */

//   {
//     label: "Dashboard",
//     path: "/admin/dashboard",
//     roles: ["admin"],
//   },

//   {
//     label: "Vendors",
//     path: "/admin/vendors",
//     roles: ["admin"],
//   },

//   {
//     label: "Service Catalog",
//     path: "/admin/services",
//     roles: ["admin"],
//   },

//   {
//     label: "Platform Staff",
//     path: "/admin/staff",
//     roles: ["admin"],
//   },

//   {
//     label: "Orders / Bookings",
//     path: "/admin/orders",
//     roles: ["admin"],
//   },

//   {
//     label: "Payouts",
//     path: "/admin/payouts",
//     roles: ["admin"],
//   },

//   {
//     label: "Reports",
//     path: "/admin/reports",
//     roles: ["admin"],
//   },

//   {
//     label: "Settings",
//     path: "/admin/settings",
//     roles: ["admin"],
//   },

//   /* ======================
//      VENDOR (SEPARATE APP / LAYOUT)
//      ====================== */

//   {
//     label: "Vendor Dashboard",
//     path: "/vendor/dashboard",
//     roles: ["vendor"],
//   },

//   {
//     label: "My Services",
//     path: "/vendor/services",
//     roles: ["vendor"],
//   },

//   {
//     label: "My Staff",
//     path: "/vendor/staff",
//     roles: ["vendor"],
//   },

//   {
//     label: "Subscription",
//     path: "/vendor/subscription",
//     roles: ["vendor"],
//   },
// ];




import { Role } from "../store/auth.store";

export type SidebarItem = {
  label: string;
  path: string;
  roles: Role[];
  requiresSubscription?: boolean;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  /* ---------- COMMON ---------- */
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    roles: ["admin", "vendor", "staff"],
  },

  /* ---------- ADMIN ---------- */
  {
    label: "Vendors",
    path: "/admin/vendors",
    roles: ["admin"],
  },
  {
    label: "Subscription Plans",
    path: "/admin/subscriptions",
    roles: ["admin"],
  },
  {
    label: "Catalog",
    path: "/admin/catalog",
    roles: ["admin"],
  },

  /* ---------- VENDOR ---------- */
  {
    label: "Subscription",
    path: "/admin/subscription",
    roles: ["vendor"],
  },
  {
    label: "My Services",
    path: "/admin/services",
    roles: ["vendor"],
    requiresSubscription: true,
  },
  {
    label: "Staff",
    path: "/vendor/staff",
    roles: ["vendor"],
    requiresSubscription: true,
  },

  /* ---------- STAFF ---------- */
  {
    label: "Services",
    path: "/admin/services",
    roles: ["staff"],
    requiresSubscription: true,
  },

  /*---------------APPROVALS---------------*/
  {
  label: "Approvals",
  path: "/admin/approvals",
  roles: ["admin"]
}

];
