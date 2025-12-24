import {
  HomeIcon,
  BuildingStorefrontIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

export const sidebarItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: HomeIcon,
  },
  {
    label: "Vendors",
    href: "/admin/vendors",
    icon: BuildingStorefrontIcon,
  },
  {
    label: "Staff",
    href: "/admin/staff",
    icon: UsersIcon,
  },
];
