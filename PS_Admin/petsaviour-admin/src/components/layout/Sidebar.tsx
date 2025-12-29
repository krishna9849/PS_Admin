// // // "use client";

// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import { SIDEBAR_ITEMS } from "./sidebar.config";
// // // import { useUIStore } from "../../store/ui.store";
// // // import { useAuthStore } from "../../store/auth.store";
// // // import { rolePermissions } from "../../config/roles.config";

// // // export default function Sidebar() {
// // //   const pathname = usePathname();

// // //   // UI state
// // //   const sidebarOpen = useUIStore((s) => s.sidebarOpen);
// // //   const isMobileSidebarOpen = useUIStore((s) => s.sidebarOpen);
// // //   const closeMobileSidebar = useUIStore((s) => s.closeSidebar);

// // //   // Auth / role
// // //   const role = useAuthStore((s) => s.role);

// // //   const allowedRoutes = role ? rolePermissions[role] : [];

// // //   return (
// // //     <>
// // //       {/* Mobile overlay */}
// // //       {isMobileSidebarOpen && (
// // //         <div
// // //           onClick={closeMobileSidebar}
// // //           className="fixed inset-0 bg-black/40 z-40 md:hidden"
// // //         />
// // //       )}

// // //       {/* Sidebar */}
// // //       <aside
// // //         className={`fixed md:static z-50 min-h-screen bg-white border-r transition-all duration-300
// // //           ${
// // //             isMobileSidebarOpen
// // //               ? "left-0 w-64"
// // //               : "-left-64 md:left-0"
// // //           }
// // //           ${sidebarOpen ? "md:w-64" : "md:w-16"}
// // //         `}
// // //       >
// // //         {/* Logo */}
// // //         <div className="h-16 flex items-center justify-center border-b font-bold text-lg">
// // //           {sidebarOpen ? (
// // //             <span>
// // //               <span className="text-orange-600">Pet</span>Saviour
// // //             </span>
// // //           ) : (
// // //             <span className="text-orange-600">PS</span>
// // //           )}
// // //         </div>

// // //         {/* Navigation */}
// // //         <nav className="mt-4 px-2 space-y-1">
// // //           {SIDEBAR_ITEMS
// // //             .filter((item : any) => allowedRoutes.includes(item.href))
// // //             .map((item : any) => {
// // //               const active = pathname === item.href;
// // //               const Icon = item.icon;

// // //               return (
// // //                 <Link
// // //                   key={item.label}
// // //                   href={item.href}
// // //                   onClick={closeMobileSidebar}
// // //                   className={`flex items-center gap-3 px-3 py-2 rounded-md transition
// // //                     ${
// // //                       active
// // //                         ? "bg-orange-50 text-orange-600 font-medium"
// // //                         : "text-gray-600 hover:bg-gray-100"
// // //                     }
// // //                     ${!sidebarOpen ? "md:justify-center" : ""}
// // //                   `}
// // //                 >
// // //                   {/* Active indicator */}
// // //                   <span
// // //                     className={`w-1 h-6 rounded-full ${
// // //                       active ? "bg-orange-500" : "bg-transparent"
// // //                     }`}
// // //                   />

// // //                   {/* Icon */}
// // //                   <Icon className="h-5 w-5 shrink-0" />

// // //                   {/* Label */}
// // //                   {sidebarOpen && (
// // //                     <span className="whitespace-nowrap">
// // //                       {item.label}
// // //                     </span>
// // //                   )}
// // //                 </Link>
// // //               );
// // //             })}
// // //         </nav>
// // //       </aside>
// // //     </>
// // //   );
// // // }



// // "use client";

// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { SIDEBAR_ITEMS } from "./sidebar.config";
// // import { useAuthStore } from "../../store/auth.store";
// // import { useUIStore } from "../../store/ui.store";

// // export default function Sidebar() {
// //   const pathname = usePathname();

// //   /* ---------------- AUTH ---------------- */
// //   const role = useAuthStore((s) => s.role);

// //   /* ---------------- UI ---------------- */
// //   const sidebarOpen = useUIStore((s) => s.sidebarOpen);
// //   const isMobile = useUIStore((s) => s.isMobile);
// //   const closeSidebar = useUIStore((s) => s.closeSidebar);

// //   if (!role) return null;

// //   return (
// //     <>
// //       {/* Mobile overlay */}
// //       {isMobile && sidebarOpen && (
// //         <div
// //           onClick={closeSidebar}
// //           className="fixed inset-0 bg-black/40 z-40 md:hidden"
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <aside
// //         className={`fixed md:static z-50 min-h-screen bg-white border-r transition-all duration-300
// //           ${isMobile ? (sidebarOpen ? "left-0 w-64" : "-left-64") : ""}
// //           ${!isMobile && (sidebarOpen ? "md:w-64" : "md:w-16")}
// //         `}
// //       >
// //         {/* Logo */}
// //         <div className="h-16 flex items-center justify-center border-b font-bold">
// //           {sidebarOpen ? (
// //             <span>
// //               <span className="text-orange-600">Pet</span>Saviour
// //             </span>
// //           ) : (
// //             <span className="text-orange-600">PS</span>
// //           )}
// //         </div>

// //         {/* Navigation */}
// //         <nav className="mt-4 px-2 space-y-1">
// //           {SIDEBAR_ITEMS
// //             .filter((item) => item.roles.includes(role))
// //             .map((item) => {
// //               const active =
// //                 pathname === item.path ||
// //                 pathname.startsWith(item.path + "/");

// //               const Icon = item.icon;

// //               return (
// //                 <Link
// //                   key={item.path}
// //                   href={item.path}
// //                   onClick={() => isMobile && closeSidebar()}
// //                   className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition
// //                     ${
// //                       active
// //                         ? "bg-orange-100 text-orange-700"
// //                         : "text-gray-700 hover:bg-gray-100"
// //                     }
// //                     ${!sidebarOpen ? "md:justify-center" : ""}
// //                   `}
// //                 >
// //                   {/* Active indicator */}
// //                   <span
// //                     className={`w-1 h-6 rounded-full ${
// //                       active ? "bg-orange-500" : "bg-transparent"
// //                     }`}
// //                   />

// //                   {/* Icon (always visible) */}
// //                   <Icon className="h-5 w-5 shrink-0" />

// //                   {/* Label (only when expanded) */}
// //                   {sidebarOpen && (
// //                     <span className="whitespace-nowrap">
// //                       {item.label}
// //                     </span>
// //                   )}
// //                 </Link>
// //               );
// //             })}
// //         </nav>
// //       </aside>
// //     </>
// //   );
// // }



// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { SIDEBAR_ITEMS } from "./sidebar.config";
// import { useAuthStore } from "../../store/auth.store";
// import { useUIStore } from "../../store/ui.store";

// export default function Sidebar() {
//   const pathname = usePathname();
//   const role = useAuthStore((s) => s.role);

//   const sidebarOpen = useUIStore((s) => s.sidebarOpen);
//   const closeSidebar = useUIStore((s) => s.closeSidebar);

//   return (
//     <aside
//       className={`h-screen bg-white border-r transition-all
//         ${sidebarOpen ? "w-64" : "w-16"}
//       `}
//     >
//       {/* Logo */}
//       <div className="h-16 flex items-center justify-center border-b font-bold">
//         {sidebarOpen ? (
//           <span>
//             <span className="text-orange-600">Pet</span>Saviour
//           </span>
//         ) : (
//           <span className="text-orange-600">PS</span>
//         )}
//       </div>

//       {/* Nav */}
//       <nav className="mt-4 space-y-1 px-2">
//         {SIDEBAR_ITEMS
//           .filter((item) => role && item.roles.includes(role))
//           .map((item) => {
//             const active =
//               pathname === item.path ||
//               pathname.startsWith(item.path + "/");

//             const Icon = item.icon;

//             return (
//               <Link
//                 key={item.path}
//                 href={item.path}
//                 onClick={closeSidebar}
//                 className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm
//                   ${
//                     active
//                       ? "bg-orange-100 text-orange-700"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }
//                 `}
//               >
//                 <Icon className="h-5 w-5 shrink-0" />
//                 {sidebarOpen && <span>{item.label}</span>}
//               </Link>
//             );
//           })}
//       </nav>
//     </aside>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDEBAR_ITEMS } from "./sidebar.config";
import { useAuthStore } from "../../store/auth.store";
import { useVendorStore } from "../../store/vendor.store";

export default function Sidebar() {
  const pathname = usePathname();

  const role = useAuthStore((s) => s.role);
  const isSubscribed = useVendorStore((s) => s.isSubscribed);

  if (!role) return null;

  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      {/* Logo */}
      <div className="h-16 flex items-center justify-center border-b font-bold text-lg">
        <span className="text-orange-600">Pet</span>Saviour
      </div>

      {/* Navigation */}
      <nav className="mt-4 space-y-1 px-3">
        {SIDEBAR_ITEMS
          .filter((item) => item.roles.includes(role))
          .filter((item) => {
            if (!item.requiresSubscription) return true;
            return isSubscribed;
          })
          .map((item) => {
            const active =
              pathname === item.path ||
              pathname.startsWith(item.path + "/");
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded text-sm font-medium transition
                  ${
                    active
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
      </nav>
    </aside>
  );
}
