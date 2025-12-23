"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginApi } from "../../../services/auth.service";
import { useAuthStore } from "../../../store/auth.store";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      setLoading(true);

      const { token, user } = await loginApi({ email, password });

      if (!token || !user) {
        throw new Error("Invalid login response");
      }

      login(token, user);
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-80 p-6 border rounded bg-surface-light dark:bg-surface-dark">
        <h1 className="mb-4 font-semibold text-center">Admin Login</h1>

        {error && (
          <p className="mb-2 text-sm text-red-500">{error}</p>
        )}

        <input
          className="w-full mb-2 p-2 border rounded bg-transparent"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mb-4 p-2 border rounded bg-transparent"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-2 bg-primary text-white rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
