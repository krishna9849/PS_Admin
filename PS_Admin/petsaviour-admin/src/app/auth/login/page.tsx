"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../../store/auth.store";
import { useThemeStore } from "../../../store/theme.store";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.setAuth);
  const theme = useThemeStore((s) => s.theme);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      // 🔹 TEMP: backend is empty, so frontend initiates auth
      // Replace later with real API call
      if (!email || !password) {
        throw new Error("Email and password are required");
      }

      // Simulate successful admin login
      login("admin-token", "admin");

      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-bg-dark px-4">
      <div className="w-full max-w-md bg-bg-light dark:bg-surface-dark rounded-xl shadow-lg border border-brand/20 p-8">
        {/* Logo */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
            <span className="text-brand">Pet</span>Saviour
          </h1>
          <p className="text-sm mt-1 text-text-light/70 dark:text-text-dark/70">
            Admin Login
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-md bg-red-100 dark:bg-red-500/10 text-red-600 px-4 py-2 text-sm">
            {error}
          </div>
        )}

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm mb-1 text-text-light dark:text-text-dark">
            Email
          </label>
          <input
            type="email"
            placeholder="admin@petsaviour.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full rounded-md border border-brand/30
              bg-bg-light dark:bg-bg-dark
              px-3 py-2
              text-text-light dark:text-text-dark
              focus:outline-none focus:ring-2 focus:ring-brand
            "
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm mb-1 text-text-light dark:text-text-dark">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full rounded-md border border-brand/30
              bg-bg-light dark:bg-bg-dark
              px-3 py-2
              text-text-light dark:text-text-dark
              focus:outline-none focus:ring-2 focus:ring-brand
            "
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full py-2 rounded-md font-medium
            bg-brand text-white
            hover:bg-brand-dark
            transition disabled:opacity-50
          "
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Footer */}
        <p className="mt-6 text-xs text-center text-text-light/60 dark:text-text-dark/60">
          © {new Date().getFullYear()} PetSaviour Admin
        </p>
      </div>
    </div>
  );
}
