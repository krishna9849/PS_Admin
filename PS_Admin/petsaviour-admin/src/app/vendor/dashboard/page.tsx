"use client";

import { useAuthStore } from "../../../store/auth.store";

export default function VendorDashboard() {
  const role = useAuthStore((s) => s.role);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">
        Vendor Dashboard
      </h1>
      <p className="text-gray-600">
        Logged in as: {role}
      </p>
    </div>
  );
}
