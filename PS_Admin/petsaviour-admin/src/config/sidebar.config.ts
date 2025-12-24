import { Role } from "../store/auth.store";

export type SidebarItem = {
  label: string;
  path: string;
  roles: Role[];
};

export const SIDEBAR_ITEMS: SidebarItem[] = [
  // Dashboard (everyone)
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    roles: ["admin", "vendor", "staff"],
  },

  // Orders & Operations
  {
    label: "Orders",
    path: "/admin/orders",
    roles: ["admin", "vendor", "staff"],
  },

  // Vendor Management (Admin only)
  {
    label: "Vendors",
    path: "/admin/vendors",
    roles: ["admin"],
  },

  // Staff Management (Admin + Vendor)
  {
    label: "Staff",
    path: "/admin/staff",
    roles: ["admin", "vendor"],
  },

  // Services (Vendor only – admin may access later via vendor view)
  {
    label: "Services",
    path: "/admin/services",
    roles: ["vendor"],
  },

  // Subscriptions & Payments
  {
    label: "Subscription",
    path: "/admin/subscription",
    roles: ["admin", "vendor"],
  },

  // Platform Settings (Admin only)
  {
    label: "Settings",
    path: "/admin/settings",
    roles: ["admin"],
  },
];
