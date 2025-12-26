// // "use client";

// // import RequireRole from "../../../../components/auth/RequireRole";

// // export default function Page() {
// //   return (
// //     <RequireRole allowed={["admin"]}>
// //       <div>
// //         Vendor Detail Page (working)
// //       </div>
// //     </RequireRole>
// //   );
// // }



// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import VendorTabs from "./VendorTabs";
// import { getVendorById } from "../../../../services/vendor.service";
// import { useAuthStore } from "../../../../store/auth.store";

// export default function VendorDetailPage() {
//   const { vendorId } = useParams<{ vendorId: string }>();

//   const hydrated = useAuthStore((s) => s.hydrated);
//   const token = useAuthStore((s) => s.token);

//   const [vendor, setVendor] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     if (!hydrated || !token || !vendorId) return;

//     const loadVendor = async () => {
//       try {
//         const data = await getVendorById(vendorId);
//         setVendor(data);
//       } catch (e) {
//         console.error(e);
//         setError("Failed to load vendor details");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadVendor();
//   }, [hydrated, token, vendorId]);

//   if (!hydrated || !token) return null;
//   if (loading) return <p>Loading vendor...</p>;
//   if (error) return <p className="text-red-600">{error}</p>;

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-semibold" onClick={async (e)=>await getVendorById(vendor._id)}>{vendor.name}</h1>
//         <p className="text-sm text-gray-500">
//           {vendor.email} · {vendor.phone}
//         </p>
//       </div>

//       <VendorTabs vendor={vendor} />
//     </div>
//   );
// }





"use client";

import { useAuthStore } from "../../../../store/auth.store";

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
