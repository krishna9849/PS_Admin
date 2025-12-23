"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-surface-light dark:bg-surface-dark border-r border-gray-200 dark:border-gray-700">
      <div className="p-4 font-bold text-primary">
        PetSaviour Admin
      </div>

      <nav className="mt-4 flex flex-col gap-2 px-2">
        <span className="px-3 py-2 rounded text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
          Dashboard
        </span>
        <span className="px-3 py-2 rounded text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
          Vendors
        </span>
        <span className="px-3 py-2 rounded text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
          Orders
        </span>
      </nav>
    </aside>
  );
}
