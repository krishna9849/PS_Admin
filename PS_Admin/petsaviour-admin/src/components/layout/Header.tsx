"use client";

import ThemeToggle from "../../components/ThemeToggle";

export default function Header() {
  return (
    <header className="h-14 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-700 bg-surface-light dark:bg-surface-dark">
      <h1 className="text-sm font-semibold">Dashboard</h1>
      <ThemeToggle />
    </header>
  );
}
