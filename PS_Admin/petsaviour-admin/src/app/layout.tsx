"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const hydrate = useAuthStore((s) => s.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
