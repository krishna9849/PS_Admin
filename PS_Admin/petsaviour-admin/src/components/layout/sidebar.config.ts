// // // // import {
// // // //   HomeIcon,
// // // //   BuildingStorefrontIcon,
// // // //   UsersIcon,
// // // // } from "@heroicons/react/24/outline";

// // // // export const sidebarItems = [
// // // //   {
// // // //     label: "Dashboard",
// // // //     href: "/admin/dashboard",
// // // //     icon: HomeIcon,
// // // //   },
// // // //   {
// // // //     label: "Vendors",
// // // //     href: "/admin/vendors",
// // // //     icon: BuildingStorefrontIcon,
// // // //   },
// // // //   {
// // // //     label: "Staff",
// // // //     href: "/admin/staff",
// // // //     icon: UsersIcon,
// // // //   },
// // // // ];



// // // // import { Role } from "../store/auth.store";

// // // // export type SidebarItem = {
// // // //   label: string;
// // // //   path: string;
// // // //   roles: Role[];
// // // // };

// // // // export const SIDEBAR_ITEMS: SidebarItem[] = [
// // // //   // Dashboard (everyone)
// // // //   {
// // // //     label: "Dashboard",
// // // //     path: "/admin/dashboard",
// // // //     roles: ["admin", "vendor", "staff"],
// // // //   },

// // // //   // Orders & Operations
// // // //   {
// // // //     label: "Orders",
// // // //     path: "/admin/orders",
// // // //     roles: ["admin", "vendor", "staff"],
// // // //   },

// // // //   // Vendor Management (Admin only)
// // // //   {
// // // //     label: "Vendors",
// // // //     path: "/admin/vendors",
// // // //     roles: ["admin"],
// // // //   },

// // // //   // Staff Management (Admin + Vendor)
// // // //   {
// // // //     label: "Staff",
// // // //     path: "/admin/staff",
// // // //     roles: ["admin", "vendor"],
// // // //   },

// // // //   // Services (Vendor only – admin may access later via vendor view)
// // // //   {
// // // //     label: "Services",
// // // //     path: "/admin/services",
// // // //     roles: ["vendor"],
// // // //   },

// // // //   // Subscriptions & Payments
// // // //   {
// // // //     label: "Subscription",
// // // //     path: "/admin/subscription",
// // // //     roles: ["admin", "vendor"],
// // // //   },

// // // //   // Platform Settings (Admin only)
// // // //   {
// // // //     label: "Settings",
// // // //     path: "/admin/settings",
// // // //     roles: ["admin"],
// // // //   },
// // // // ];


// // // import { Role } from "../../store/auth.store";

// // // export type SidebarItem = {
// // //   label: string;
// // //   path: string;
// // //   roles: Role[];
// // // };

// // // export const SIDEBAR_ITEMS: SidebarItem[] = [
// // //   /* ======================
// // //      GLOBAL ADMIN
// // //      ====================== */

// // //   {
// // //     label: "Dashboard",
// // //     path: "/admin/dashboard",
// // //     roles: ["admin"],
// // //   },

// // //   {
// // //     label: "Vendors",
// // //     path: "/admin/vendors",
// // //     roles: ["admin"],
// // //   },

// // //   {
// // //     label: "Service Catalog",
// // //     path: "/admin/services",
// // //     roles: ["admin"],
// // //   },

// // //   // {
// // //   //   label: "Platform Staff",
// // //   //   path: "/admin/staff",
// // //   //   roles: ["admin"],
// // //   // },

// // //   {
// // //     label: "Orders",
// // //     path: "/admin/orders",
// // //     roles: ["admin"],
// // //   },

// // //   {
// // //     label: "Payouts",
// // //     path: "/admin/payouts",
// // //     roles: ["admin"],
// // //   },

// // //   {
// // //     label: "Reports",
// // //     path: "/admin/reports",
// // //     roles: ["admin"],
// // //   },

// // //   {
// // //     label: "Settings",
// // //     path: "/admin/settings",
// // //     roles: ["admin"],
// // //   },

// // //   /* ======================
// // //      VENDOR (SEPARATE APP / LAYOUT)
// // //      ====================== */

// // //   {
// // //     label: "Vendor Dashboard",
// // //     path: "/vendor/dashboard",
// // //     roles: ["vendor"],
// // //   },

// // //   {
// // //     label: "My Services",
// // //     path: "/vendor/services",
// // //     roles: ["vendor"],
// // //   },

// // //   {
// // //     label: "My Staff",
// // //     path: "/vendor/staff",
// // //     roles: ["vendor"],
// // //   },

// // //   {
// // //     label: "Subscription",
// // //     path: "/vendor/subscription",
// // //     roles: ["vendor"],
// // //   },
// // // ];




// // import { Role } from "../../store/auth.store";
// // import {
// //   LayoutDashboard,
// //   Store,
// //   Scissors,
// //   Users,
// //   ClipboardList,
// //   Wallet,
// //   BarChart3,
// //   Settings,
// // } from "lucide-react";

// // export type SidebarItem = {
// //   label: string;
// //   path: string;
// //   roles: Role[];
// //   icon: any;
// // };

// // export const SIDEBAR_ITEMS: SidebarItem[] = [
// //   // ===== ADMIN =====
// //   {
// //     label: "Dashboard",
// //     path: "/admin/dashboard",
// //     roles: ["admin"],
// //     icon: LayoutDashboard,
// //   },
// //   {
// //     label: "Vendors",
// //     path: "/admin/vendors",
// //     roles: ["admin"],
// //     icon: Store,
// //   },
// //   {
// //     label: "Service Catalog",
// //     path: "/admin/services",
// //     roles: ["admin"],
// //     icon: Scissors,
// //   },
// //   {
// //     label: "Platform Staff",
// //     path: "/admin/staff",
// //     roles: ["admin"],
// //     icon: Users,
// //   },
// //   {
// //     label: "Orders",
// //     path: "/admin/orders",
// //     roles: ["admin"],
// //     icon: ClipboardList,
// //   },
// //   {
// //     label: "Payouts",
// //     path: "/admin/payouts",
// //     roles: ["admin"],
// //     icon: Wallet,
// //   },
// //   {
// //     label: "Reports",
// //     path: "/admin/reports",
// //     roles: ["admin"],
// //     icon: BarChart3,
// //   },
// //   {
// //     label: "Settings",
// //     path: "/admin/settings",
// //     roles: ["admin"],
// //     icon: Settings,
// //   },

// //   // ===== VENDOR =====
// //   {
// //     label: "Dashboard",
// //     path: "/vendor/dashboard",
// //     roles: ["vendor"],
// //     icon: LayoutDashboard,
// //   },
// //   {
// //     label: "My Services",
// //     path: "/vendor/services",
// //     roles: ["vendor"],
// //     icon: Scissors,
// //   },
// //   {
// //     label: "My Staff",
// //     path: "/vendor/staff",
// //     roles: ["vendor"],
// //     icon: Users,
// //   },

// //   // ===== STAFF =====
// //   {
// //     label: "Dashboard",
// //     path: "/staff/dashboard",
// //     roles: ["staff"],
// //     icon: LayoutDashboard,
// //   },
// //   {
// //     label: "Orders",
// //     path: "/staff/orders",
// //     roles: ["staff"],
// //     icon: ClipboardList,
// //   },
// // ];



// import { Role } from "../../store/auth.store";
// import {
//   HomeIcon,
//   ClipboardDocumentListIcon,
//   BuildingStorefrontIcon,
//   Squares2X2Icon,
//   WrenchScrewdriverIcon,
//   UsersIcon,
//   CreditCardIcon,
//   CheckBadgeIcon,
//   UserGroupIcon,
//   ChartBarIcon,
//   Cog6ToothIcon,
// } from "@heroicons/react/24/outline";

// export type SidebarItem = {
//   label: string;
//   path: string;
//   icon: any;
//   roles: Role[];
//   requiresSubscription?: boolean;
// };

// export const SIDEBAR_ITEMS: SidebarItem[] = [
//   {
//     label: "Dashboard",
//     path: "/admin/dashboard",
//     icon: HomeIcon,
//     roles: ["admin", "vendor", "staff"],
//   },
//   {
//     label: "Orders",
//     path: "/admin/orders",
//     icon: ClipboardDocumentListIcon,
//     roles: ["admin", "vendor", "staff"],
//   },

//   /* -------- PLATFORM MANAGEMENT -------- */
//   {
//     label: "Vendors",
//     path: "/admin/vendors",
//     icon: BuildingStorefrontIcon,
//     roles: ["admin"],
//   },
//   {
//     label: "Catalog",
//     path: "/admin/catalog",
//     icon: Squares2X2Icon,
//     roles: ["admin", "staff"],
//   },
//   {
//     label: "Vendor Services",
//     path: "/admin/vendor-services",
//     icon: WrenchScrewdriverIcon,
//     roles: ["admin", "staff"],
//   },

//   /* -------- BUSINESS OPERATIONS -------- */
//   {
//     label: "Staff",
//     path: "/admin/staff",
//     icon: UsersIcon,
//     roles: ["admin", "vendor"],
//   },
//   {
//     label: "Subscription",
//     path: "/admin/subscription",
//     icon: CreditCardIcon,
//     roles: ["admin", "vendor"],
//   },

//   /* -------- GOVERNANCE -------- */
//   {
//     label: "Approvals",
//     path: "/admin/approvals",
//     icon: CheckBadgeIcon,
//     roles: ["admin"],
//   },

//   /* -------- SUPPORT -------- */
//   {
//     label: "Users",
//     path: "/admin/users",
//     icon: UserGroupIcon,
//     roles: ["admin", "staff"],
//   },

//   /* -------- INSIGHTS -------- */
//   {
//     label: "Reports",
//     path: "/admin/reports",
//     icon: ChartBarIcon,
//     roles: ["admin"],
//   },

//   /* -------- SYSTEM -------- */
//   {
//     label: "Settings",
//     path: "/admin/settings",
//     icon: Cog6ToothIcon,
//     roles: ["admin"],
//   },
// ];




import { Role } from "../../store/auth.store";
import {
  HomeIcon,
  UsersIcon,
  CreditCardIcon,
  Squares2X2Icon,
  WrenchScrewdriverIcon,
  ClipboardDocumentListIcon,
  BuildingStorefrontIcon,  
  CheckBadgeIcon,
  UserGroupIcon,
  ChartBarIcon,
  Cog6ToothIcon,

} from "@heroicons/react/24/outline";

export type SidebarItem = {
  label: string;
  path: string;
  roles: Role[];
  requiresSubscription?: boolean;
  icon: React.ElementType;
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  /* ---------- COMMON ---------- */
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    roles: ["admin", "vendor", "staff"],
    icon: HomeIcon,
  },

  /* ---------- ADMIN ---------- */
  {
    label: "Vendors",
    path: "/admin/vendors",
    roles: ["admin"],
    icon: UsersIcon,
  },
  {
    label: "Subscription Plans",
    path: "/admin/subscriptions",
    roles: ["admin"],
    icon: CreditCardIcon,
  },
  {
    label: "Catalog",
    path: "/admin/catalog",
    roles: ["admin"],
    icon: Squares2X2Icon,
  },

  /* ---------- VENDOR ---------- */
  {
    label: "Subscription",
    path: "/admin/subscription",
    roles: ["vendor"],
    icon: CreditCardIcon,
  },
  {
    label: "My Services",
    path: "/admin/services",
    roles: ["vendor"],
    requiresSubscription: true,
    icon: WrenchScrewdriverIcon,
  },
  {
    label: "Staff",
    path: "/vendor/staff",
    roles: ["vendor"],
    requiresSubscription: false,
    icon: UsersIcon,
  },

  /* ---------- STAFF ---------- */
  {
    label: "Services",
    path: "/admin/services",
    roles: ["staff"],
    requiresSubscription: true,
    icon: WrenchScrewdriverIcon,
  },

   /*---------------APPROVALS---------------*/
   {
    label: "Approvals",
    path: "/admin/approvals",
    roles: ["admin"],
    icon: CheckBadgeIcon,
  },
];
