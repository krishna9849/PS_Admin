"use client";

import { useAuthStore } from "../../../store/auth.store";

export default function VendorDashboardPage() {
  const role = useAuthStore((s) => s.role);

  return (
    <div className="space-y-6">
      {/* PAGE TITLE */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Vendor Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Manage your services, staff, and subscriptions
        </p>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Services"
          value="0"
          hint="Services added by you"
        />
        <DashboardCard
          title="Staff"
          value="0"
          hint="Active staff members"
        />
        <DashboardCard
          title="Subscription"
          value="Inactive"
          hint="Platform subscription status"
        />
        <DashboardCard
          title="Orders"
          value="0"
          hint="Total orders received"
        />
      </div>

      {/* INFO SECTION */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="text-lg font-medium mb-2">
          Welcome to PetSaviour 🐾
        </h2>
        <p className="text-sm text-gray-600">
          You are logged in as{" "}
          <span className="font-medium capitalize">
            {role}
          </span>
          .  
          Use the sidebar to manage your business operations.
        </p>
      </div>
    </div>
  );
}

/* =========================
   SMALL CARD COMPONENT
========================= */

function DashboardCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="bg-white rounded shadow p-5">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-800">
        {value}
      </p>
      <p className="text-xs text-gray-400 mt-1">
        {hint}
      </p>
    </div>
  );
}
