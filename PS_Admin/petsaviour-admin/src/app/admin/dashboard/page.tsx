"use client";

import { hasPermission } from "../../../utils/authorization";
import { useAuthStore } from "../../../store/auth.store";

export default function DashboardPage() {
  const role = useAuthStore((s) => s.role);

  console.log("Current role:", role);
  console.log(
    "Can manage vendors:",
    hasPermission(role, "MANAGE_VENDORS")
  );
  console.log(
    "Can manage orders:",
    hasPermission(role, "MANAGE_ORDERS")
  );

  return <div>Dashboard</div>;
}
