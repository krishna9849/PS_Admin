"use client";

import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
      <body>{children}
         {/* GLOBAL TOASTER */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "8px",
              background: "#333",
              color: "#fff",
            },
          }}
        />
      </body>
    </html>
  );
}
