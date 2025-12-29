// "use client";

// import { useAuthStore } from "../../../store/auth.store";

// export default function VendorDashboard() {
//   const role = useAuthStore((s) => s.role);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-semibold">
//         Vendor Dashboard
//       </h1>
//       <p className="text-gray-600">
//         Logged in as: {role}
//       </p>
//     </div>
//   );
// }




// "use client";

// import Link from "next/link";

// export default function VendorDashboardPage() {
//   // 🔹 Mock data (replace with API later)
//   const stats = [
//     { label: "Today's Orders", value: 12 },
//     { label: "Pending Orders", value: 5 },
//     { label: "Today's Earnings", value: "₹3,450" },
//     { label: "Active Services", value: 8 },
//   ];

//   const recentOrders = [
//     {
//       id: "ORD-001",
//       customer: "Rahul",
//       service: "Full Grooming",
//       status: "Pending",
//     },
//     {
//       id: "ORD-002",
//       customer: "Anita",
//       service: "Bath & Blow Dry",
//       status: "Confirmed",
//     },
//     {
//       id: "ORD-003",
//       customer: "Vikram",
//       service: "Nail Trim",
//       status: "Completed",
//     },
//   ];

//   return (
//     <div className="space-y-8">
//       {/* PAGE TITLE */}
//       <div>
//         <h1 className="text-2xl font-semibold">
//           Vendor Dashboard
//         </h1>
//         <p className="text-gray-500 text-sm">
//           Overview of your business today
//         </p>
//       </div>

//       {/* KPI CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         {stats.map((stat) => (
//           <div
//             key={stat.label}
//             className="bg-white border rounded p-5"
//           >
//             <p className="text-sm text-gray-500">
//               {stat.label}
//             </p>
//             <p className="text-2xl font-bold mt-1">
//               {stat.value}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* RECENT ORDERS */}
//       <div className="bg-white border rounded p-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-lg font-medium">
//             Recent Orders
//           </h2>
//           <Link
//             href="/vendor/orders"
//             className="text-sm text-orange-600 hover:underline"
//           >
//             View All
//           </Link>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead className="border-b text-gray-600">
//               <tr>
//                 <th className="py-2 text-left">
//                   Order ID
//                 </th>
//                 <th className="py-2 text-left">
//                   Customer
//                 </th>
//                 <th className="py-2 text-left">
//                   Service
//                 </th>
//                 <th className="py-2 text-left">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {recentOrders.map((order) => (
//                 <tr
//                   key={order.id}
//                   className="border-b last:border-b-0"
//                 >
//                   <td className="py-2">
//                     {order.id}
//                   </td>
//                   <td className="py-2">
//                     {order.customer}
//                   </td>
//                   <td className="py-2">
//                     {order.service}
//                   </td>
//                   <td className="py-2">
//                     <StatusBadge status={order.status} />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* QUICK ACTIONS */}
//       <div className="bg-white border rounded p-6">
//         <h2 className="text-lg font-medium mb-4">
//           Quick Actions
//         </h2>

//         <div className="flex flex-wrap gap-4">
//           <QuickAction
//             label="Manage Services"
//             href="/vendor/services"
//           />
//           <QuickAction
//             label="Manage Staff"
//             href="/vendor/staff"
//           />
//           <QuickAction
//             label="View Orders"
//             href="/vendor/orders"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ------------------------
//    Small Helper Components
// ------------------------- */

// function StatusBadge({ status }: { status: string }) {
//   const color =
//     status === "Completed"
//       ? "bg-green-100 text-green-700"
//       : status === "Confirmed"
//       ? "bg-blue-100 text-blue-700"
//       : "bg-yellow-100 text-yellow-700";

//   return (
//     <span
//       className={`px-2 py-1 rounded text-xs font-medium ${color}`}
//     >
//       {status}
//     </span>
//   );
// }

// function QuickAction({
//   label,
//   href,
// }: {
//   label: string;
//   href: string;
// }) {
//   return (
//     <Link
//       href={href}
//       className="border px-4 py-2 rounded text-sm hover:bg-gray-50"
//     >
//       {label}
//     </Link>
//   );
// }



// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "../../store/auth.store";
// import Sidebar from "../../components/layout/Sidebar";
// import Header from "../../components/layout/Header";
// import { useUIStore } from "../../store/ui.store";

// const { token, hydrated, hydrate } = useAuthStore();



// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const token = useAuthStore((s) => s.token);
//   const setMobile = useUIStore((s) => s.setMobile);


//   useEffect(() => {
//   hydrate();
// }, [hydrate]);

//   useEffect(() => {
//     if (!token) {
//       router.replace("/auth/login");
//     }
//   }, [token, router]);


//   if (!token) return null;

//   useEffect(() => {
//   const checkMobile = () => {
//     setMobile(window.innerWidth < 768);
//   };

//   checkMobile();
//   window.addEventListener("resize", checkMobile);

//   return () => window.removeEventListener("resize", checkMobile);
// }, [setMobile]);

// const sidebarOpen = useUIStore((s) => s.sidebarOpen);
// const isMobile = useUIStore((s) => s.isMobile);
// const closeSidebar = useUIStore((s) => s.closeSidebar);


//   return (
//    <div className="flex min-h-screen bg-gray-50 overflow-hidden relative">
//   {/* Mobile backdrop */}
//   {isMobile && sidebarOpen && (
//     <div
//       onClick={closeSidebar}
//       className="fixed inset-0 bg-black bg-opacity-40 z-40"
//     />
//   )}

//   <Sidebar />

//   <div className="flex-1 flex flex-col relative z-0">
//     <Header />
//     <main className="flex-1 p-6">{children}</main>
//   </div>
// </div>

//   );
// }



"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../store/auth.store";
import { useUIStore } from "../../../store/ui.store";
import Sidebar from "../../../components/layout/Sidebar";
import Header from "../../../components/layout/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* ---------------- AUTH STORE ---------------- */
  const token = useAuthStore((s) => s.token);
  const hydrated = useAuthStore((s) => s.hydrated);
  const hydrate = useAuthStore((s) => s.hydrate);

  /* ---------------- UI STORE ---------------- */
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const isMobile = useUIStore((s) => s.isMobile);
  const closeSidebar = useUIStore((s) => s.closeSidebar);
  const setMobile = useUIStore((s) => s.setMobile);
const role = useAuthStore((s) => s.role);
  const router = useRouter();

  /* ---------------- HYDRATE AUTH ---------------- */
  useEffect(() => {
    hydrate();
  }, [hydrate]);
  

  /* ---------------- AUTH GUARD ---------------- */
  // useEffect(() => {
  //   if (hydrated && !token) {
  //     router.replace("/auth/login");
  //   }
  // }, [hydrated, token, router]);

  useEffect(() => {
  if (hydrated && role !== "staff") {
    router.replace("/auth/login");
  }
}, [hydrated, role, router]);
  /* ---------------- MOBILE DETECTION ---------------- */
  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [setMobile]);

  /* ---------------- BLOCK RENDER ---------------- */
  if (!hydrated) return null;
  if (!token) return null;
  

  /* ---------------- RENDER ---------------- */
  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden relative">
      {/* Mobile backdrop */}
      
      {isMobile && sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        />
      )}

      <Sidebar />

      <div className="flex-1 flex flex-col relative z-0">
        <Header />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

