// src/config/roles.config.ts

export type Role = "admin" | "staff" | "vendor";

/**
 * Routes allowed per role
 * This controls SIDEBAR visibility (UI-level authorization)
 */
export const rolePermissions: Record<Role, string[]> = {
  admin: [
    "/admin/dashboard",
    "/admin/vendors",
    "/admin/staff",
  ],

  staff: [
    "/admin/dashboard",
  ],

  vendor: [
    "/admin/dashboard",
  ],
};
