// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useAuthStore } from "../../../store/auth.store";
// import { useThemeStore } from "../../../store/theme.store";
// import { adminLoginApi } from "../../../services/auth.service";
// export default function LoginPage() {
//   const router = useRouter();
//   const login = useAuthStore((s) => s.setAuth);
//   const theme = useThemeStore((s) => s.theme);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       setLoading(true);
//       setError("");

//       // 🔹 TEMP: backend is empty, so frontend initiates auth
//       // Replace later with real API call
//       if (!email || !password) {
//         throw new Error("Email and password are required");
//       }

//       const res = await adminLoginApi({email, password })
//       // Simulate successful admin login
//       login(res.token, res.role);

//       router.push("/admin/dashboard");
//     } catch (err: any) {
//       setError(err.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-bg-dark px-4">
//       <div className="w-full max-w-md bg-bg-light dark:bg-surface-dark rounded-xl shadow-lg border border-brand/20 p-8">
//         {/* Logo */}
//         <div className="text-center mb-6">
//           <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">
//             <span className="text-brand">Pet</span>Saviour
//           </h1>
//           <p className="text-sm mt-1 text-text-light/70 dark:text-text-dark/70">
//             Admin Login
//           </p>
//         </div>

//         {/* Error */}
//         {error && (
//           <div className="mb-4 rounded-md bg-red-100 dark:bg-red-500/10 text-red-600 px-4 py-2 text-sm">
//             {error}
//           </div>
//         )}

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block text-sm mb-1 text-text-light dark:text-text-dark">
//             Email
//           </label>
//           <input
//             type="email"
//             placeholder="admin@petsaviour.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="
//               w-full rounded-md border border-brand/30
//               bg-bg-light dark:bg-bg-dark
//               px-3 py-2
//               text-text-light dark:text-text-dark
//               focus:outline-none focus:ring-2 focus:ring-brand
//             "
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-6">
//           <label className="block text-sm mb-1 text-text-light dark:text-text-dark">
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="••••••••"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="
//               w-full rounded-md border border-brand/30
//               bg-bg-light dark:bg-bg-dark
//               px-3 py-2
//               text-text-light dark:text-text-dark
//               focus:outline-none focus:ring-2 focus:ring-brand
//             "
//           />
//         </div>

//         {/* Login Button */}
//         <button
//           onClick={handleLogin}
//           disabled={loading}
//           className="
//             w-full py-2 rounded-md font-medium
//             bg-brand text-white
//             hover:bg-brand-dark
//             transition disabled:opacity-50
//           "
//         >
//           {loading ? "Signing in..." : "Sign In"}
//         </button>

//         {/* Footer */}
//         <p className="mt-6 text-xs text-center text-text-light/60 dark:text-text-dark/60">
//           © {new Date().getFullYear()} PetSaviour Admin
//         </p>
//       </div>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  adminLogin,
  staffVendorLogin,
} from "../../../services/auth.service";
import { useAuthStore } from "../../../store/auth.store";

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((s) => s.setAuth);

  const [role, setRole] = useState<"admin" | "vendor" | "staff">("admin");
  const [vendorId, setVendorId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      let res;

      if (role === "admin") {
        res = await adminLogin(email, password);
      } else {
        if (!vendorId) {
          throw new Error("Vendor ID is required");
        }
        res = await staffVendorLogin(vendorId, email, password);
        console.log(res);
      }

      setAuth(res.token, role);
      // router.replace("/admin/dashboard");
      if (role === "admin") {
  router.replace("/admin/dashboard");
} else if (role === "vendor") {
  router.replace("/vendor/dashboard");
} else {
  router.replace("/staff/dashboard");
}

    } catch (e: any) {
      console.log(e);
      setError(
        e?.response?.data?.message || "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold text-center">
          Login
        </h1>

        {/* ROLE */}
        <select
          value={role}
          onChange={(e) =>
            setRole(e.target.value as any)
          }
          className="w-full border p-2 rounded"
        >
          <option value="admin">Admin</option>
          <option value="vendor">Vendor</option>
          <option value="staff">Staff</option>
        </select>

        {/* VENDOR ID */}
        {(role === "vendor" || role === "staff") && (
          <input
            className="w-full border p-2 rounded"
            placeholder="Vendor ID"
            value={vendorId}
            onChange={(e) =>
              setVendorId(e.target.value)
            }
          />
        )}

        {/* EMAIL */}
        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        {error && (
          <p className="text-red-600 text-sm">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded disabled:opacity-60"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}
