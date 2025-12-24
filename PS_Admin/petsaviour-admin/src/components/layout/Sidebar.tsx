"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "./sidebar.config";
import { useUIStore } from "../../store/ui.store";
import { useAuthStore } from "../../store/auth.store";
import { rolePermissions } from "../../config/roles.config";

export default function Sidebar() {
  const pathname = usePathname();

  // UI state
  const sidebarOpen = useUIStore((s) => s.sidebarOpen);
  const isMobileSidebarOpen = useUIStore((s) => s.sidebarOpen);
  const closeMobileSidebar = useUIStore((s) => s.closeSidebar);

  // Auth / role
  const role = useAuthStore((s) => s.role);

  const allowedRoutes = role ? rolePermissions[role] : [];

  return (
    <>
      {/* Mobile overlay */}
      {isMobileSidebarOpen && (
        <div
          onClick={closeMobileSidebar}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static z-50 min-h-screen bg-white border-r transition-all duration-300
          ${
            isMobileSidebarOpen
              ? "left-0 w-64"
              : "-left-64 md:left-0"
          }
          ${sidebarOpen ? "md:w-64" : "md:w-16"}
        `}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b font-bold text-lg">
          {sidebarOpen ? (
            <span>
              <span className="text-orange-600">Pet</span>Saviour
            </span>
          ) : (
            <span className="text-orange-600">PS</span>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-2 space-y-1">
          {sidebarItems
            .filter((item) => allowedRoutes.includes(item.href))
            .map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileSidebar}
                  className={`flex items-center gap-3 px-3 py-2 rounded-md transition
                    ${
                      active
                        ? "bg-orange-50 text-orange-600 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                    ${!sidebarOpen ? "md:justify-center" : ""}
                  `}
                >
                  {/* Active indicator */}
                  <span
                    className={`w-1 h-6 rounded-full ${
                      active ? "bg-orange-500" : "bg-transparent"
                    }`}
                  />

                  {/* Icon */}
                  <Icon className="h-5 w-5 shrink-0" />

                  {/* Label */}
                  {sidebarOpen && (
                    <span className="whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
        </nav>
      </aside>
    </>
  );
}
