"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Bars3Icon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "../../store/auth.store";
import { useUIStore } from "../../store/ui.store";
import { useThemeStore } from "../../store/theme.store";
import { usePathname } from "next/navigation";
import { headerTitles } from "./header.config";


export default function Header() {
 
  const pathname = usePathname();
const title =
  headerTitles[pathname] ||
  "Admin Panel";

  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);
  const role = useAuthStore((s) => s.role);

  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    logout();
    router.replace("/auth/login");
  };

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="h-16 bg-bg-light dark:bg-surface-dark border-b border-brand/20 flex items-center justify-between px-6">
      {/* Left */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded hover:bg-brand-light/70 dark:hover:bg-brand/10"
        >
          <Bars3Icon className="h-5 w-5 text-brand" />
        </button>

        <span className="text-lg font-medium text-text-light dark:text-text-dark">
         {title}
        </span>
      </div>

      {/* Right */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-3 focus:outline-none"
        >
          {/* Avatar */}
          <div className="h-9 w-9 rounded-full bg-brand text-white flex items-center justify-center font-semibold">
            A
          </div>

          {/* Role */}
          {role && (
            <span className="hidden sm:block text-sm text-text-light dark:text-text-dark">
              {role.toUpperCase()}
            </span>
          )}
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-bg-light dark:bg-surface-dark border border-brand/20 rounded shadow-lg z-50">
            <div className="px-4 py-2 text-sm border-b border-brand/20 text-text-light dark:text-text-dark">
              Signed in as <br />
              <span className="font-medium text-brand">
                {role}
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className="w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-brand-light/60 dark:hover:bg-brand/10"
            >
              {theme === "light" ? (
                <>
                  <MoonIcon className="h-4 w-4 text-brand" />
                  <span>Dark mode</span>
                </>
              ) : (
                <>
                  <SunIcon className="h-4 w-4 text-brand" />
                  <span>Light mode</span>
                </>
              )}
            </button>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
