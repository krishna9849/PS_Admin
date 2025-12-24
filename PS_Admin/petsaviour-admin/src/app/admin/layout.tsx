"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../store/auth.store";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";
import { useUIStore } from "../../store/ui.store";


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const token = useAuthStore((s) => s.token);
  const setMobile = useUIStore((s) => s.setMobile);


  useEffect(() => {
    if (!token) {
      router.replace("/auth/login");
    }
  }, [token, router]);


  if (!token) return null;

  useEffect(() => {
  const checkMobile = () => {
    setMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, [setMobile]);

const sidebarOpen = useUIStore((s) => s.sidebarOpen);
const isMobile = useUIStore((s) => s.isMobile);
const closeSidebar = useUIStore((s) => s.closeSidebar);


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
