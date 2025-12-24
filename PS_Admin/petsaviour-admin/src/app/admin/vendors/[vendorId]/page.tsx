"use client";

import RequireRole from "../../../../components/auth/RequireRole";

export default function Page() {
  return (
    <RequireRole allowed={["admin"]}>
      <div>
        Vendor Detail Page (working)
      </div>
    </RequireRole>
  );
}
