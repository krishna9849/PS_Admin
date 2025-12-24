import { Role } from "../store/auth.store";

type Permission =
  | "VIEW_DASHBOARD"
  | "MANAGE_VENDORS"
  | "MANAGE_ORDERS"
  | "ASSIGN_STAFF"
  | "VIEW_SUBSCRIPTIONS"
  | "MANAGE_SETTINGS";

const ROLE_PERMISSIONS: Record<Role, Permission[]> = {
  admin: [
    "VIEW_DASHBOARD",
    "MANAGE_VENDORS",
    "MANAGE_ORDERS",
    "ASSIGN_STAFF",
    "VIEW_SUBSCRIPTIONS",
    "MANAGE_SETTINGS",
  ],
  staff: [
    "VIEW_DASHBOARD",
    "MANAGE_ORDERS",
    "ASSIGN_STAFF",
  ],
  vendor: [
    "VIEW_DASHBOARD",
    "MANAGE_ORDERS",
  ],
};

export const hasPermission = (
  role: Role | null,
  permission: Permission
): boolean => {
  if (!role) return false;
  return ROLE_PERMISSIONS[role].includes(permission);
};
