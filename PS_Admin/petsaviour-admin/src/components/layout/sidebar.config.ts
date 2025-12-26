// // import {
// //   HomeIcon,
// //   BuildingStorefrontIcon,
// //   UsersIcon,
// // } from "@heroicons/react/24/outline";

// // export const sidebarItems = [
// //   {
// //     label: "Dashboard",
// //     href: "/admin/dashboard",
// //     icon: HomeIcon,
// //   },
// //   {
// //     label: "Vendors",
// //     href: "/admin/vendors",
// //     icon: BuildingStorefrontIcon,
// //   },
// //   {
// //     label: "Staff",
// //     href: "/admin/staff",
// //     icon: UsersIcon,
// //   },
// // ];



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


// import { Role } from "../../store/auth.store";

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

//   // {
//   //   label: "Platform Staff",
//   //   path: "/admin/staff",
//   //   roles: ["admin"],
//   // },

//   {
//     label: "Orders",
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




import { Role } from "../../store/auth.store";
import {
  LayoutDashboard,
  Store,
  Scissors,
  Users,
  ClipboardList,
  Wallet,
  BarChart3,
  Settings,
} from "lucide-react";

export type SidebarItem = {
  label: string;
  path: string;
  roles: Role[];
  icon: any;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  // ===== ADMIN =====
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    roles: ["admin"],
    icon: LayoutDashboard,
  },
  {
    label: "Vendors",
    path: "/admin/vendors",
    roles: ["admin"],
    icon: Store,
  },
  {
    label: "Service Catalog",
    path: "/admin/services",
    roles: ["admin"],
    icon: Scissors,
  },
  {
    label: "Platform Staff",
    path: "/admin/staff",
    roles: ["admin"],
    icon: Users,
  },
  {
    label: "Orders",
    path: "/admin/orders",
    roles: ["admin"],
    icon: ClipboardList,
  },
  {
    label: "Payouts",
    path: "/admin/payouts",
    roles: ["admin"],
    icon: Wallet,
  },
  {
    label: "Reports",
    path: "/admin/reports",
    roles: ["admin"],
    icon: BarChart3,
  },
  {
    label: "Settings",
    path: "/admin/settings",
    roles: ["admin"],
    icon: Settings,
  },

  // ===== VENDOR =====
  {
    label: "Dashboard",
    path: "/vendor/dashboard",
    roles: ["vendor"],
    icon: LayoutDashboard,
  },
  {
    label: "My Services",
    path: "/vendor/services",
    roles: ["vendor"],
    icon: Scissors,
  },
  {
    label: "My Staff",
    path: "/vendor/staff",
    roles: ["vendor"],
    icon: Users,
  },

  // ===== STAFF =====
  {
    label: "Dashboard",
    path: "/staff/dashboard",
    roles: ["staff"],
    icon: LayoutDashboard,
  },
  {
    label: "Orders",
    path: "/staff/orders",
    roles: ["staff"],
    icon: ClipboardList,
  },
];
