"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/auth.store";
import { Role, rolePermissions } from "../../config/roles.config";

export default function RequireRole({
  children,
  allowed,
}: {
  children: React.ReactNode;
  allowed: Role[];
}) {
  const router = useRouter();
  const role = useAuthStore((s) => s.role);

  useEffect(() => {
    if (!role || !allowed.includes(role)) {
      router.replace("/admin/dashboard");
    }
  }, [role, allowed, router]);

  if (!role || !allowed.includes(role)) return null;

  return <>{children}</>;
}