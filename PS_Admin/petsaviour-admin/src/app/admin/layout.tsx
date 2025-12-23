import Sidebar from "../../components/layout/Sidebar";
import Header from "../../components/layout/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 bg-background-light dark:bg-background-dark">
          {children}
        </main>
      </div>
    </div>
  );
}
