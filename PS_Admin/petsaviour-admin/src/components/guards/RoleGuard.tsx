"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { hasPermission } from "../../utils/authorization";
import { useAuthStore } from "../../store/auth.store";

type RoleGuardProps = {
  permission: Parameters<typeof hasPermission>[1];
  children: ReactNode;
};

export default function RoleGuard({
  permission,
  children,
}: RoleGuardProps) {
  const router = useRouter();
  const { role, hydrated } = useAuthStore();

  useEffect(() => {
    if (!hydrated) return;

    if (!hasPermission(role, permission)) {
      router.replace("/admin/dashboard");
    }
  }, [hydrated, role, permission, router]);

  if (!hydrated) return null;
  if (!hasPermission(role, permission)) return null;

  return <>{children}</>;
}
