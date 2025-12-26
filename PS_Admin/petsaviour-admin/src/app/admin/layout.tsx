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
import { useAuthStore } from "../../store/auth.store";
import { useUIStore } from "../../store/ui.store";
import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

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
  if (hydrated && role !== "admin") {
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

