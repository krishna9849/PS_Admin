// "use client";

// import { useEffect, useState } from "react";
// import { useAuthStore } from "../../../store/auth.store";
// import {
//   getVendorStaff,
//   createStaff,
//   activateStatus,
//   Staff,
//   StaffRole,
// } from "../../../services/staff.service";
// import { toastSuccess, toastError } from "../../../utils/toast";

// export default function VendorStaffPage() {
//   const vendorId = useAuthStore((s) => s.vendorId);
//   const hydrated = useAuthStore((s) => s.hydrated);

//   const [staff, setStaff] = useState<Staff[]>([]);
//   const [loading, setLoading] = useState(true);

//   /* ---------- MODAL ---------- */
//   const [open, setOpen] = useState(false);
//   const [creating, setCreating] = useState(false);

//   /* ---------- FORM ---------- */
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [role, setRole] =
//     useState<StaffRole>("groomer");
//   const [password, setPassword] = useState("");

//   /* ---------- LOAD ---------- */
//   const loadStaff = async () => {
//     if (!vendorId) return;
//     try {
//       setLoading(true);
//       const data = await getVendorStaff(vendorId);
//       setStaff(data);
//     } catch {
//       toastError("Failed to load staff");
//     } finally {
//       setLoading(false);
//     }
//   };


//   const handleSave = async () => {
//   if (!name || !email) {
//     toastError("Name and Email are required");
//     return;
//   }

//   try {
//     setCreating(true);

//     if (editingStaff) {
//       // UPDATE
//       await updateStaff(vendorId!, editingStaff._id, {
//         name,
//         phone,
//         role,
//         active: editingStaff.active,
//       });

//       toastSuccess("Staff updated successfully");
//     } else {
//       // CREATE
//       await createStaff(vendorId!, {
//         name,
//         email,
//         phone,
//         role,
//         password,
//       });

//       toastSuccess("Staff created successfully");
//     }

//     setOpen(false);
//     resetForm();
//     setEditingStaff(null);
//     loadStaff();
//   } catch (e: any) {
//     toastError(
//       e?.response?.data?.message || "Action failed"
//     );
//   } finally {
//     setCreating(false);
//   }
// };


//   useEffect(() => {
//     if (hydrated ) {
//       loadStaff();
//     }
//     // if (hydrated && vendorId) {
//     //   loadStaff();
//     // }
//   }, [hydrated, vendorId]);

//   if (!hydrated) {
//     return <p className="p-6">Loading session...</p>;
//   }

//   /* ---------- CREATE ---------- */
//   const handleCreate = async () => {
//     if (!name || !email || !password) {
//       toastError("Name, Email & Password required");
//       return;
//     }

//     try {
//       setCreating(true);
//       await createStaff(vendorId!, {
//         name,
//         email,
//         phone,
//         role,
//         password,
//       });
//       toastSuccess("Staff created");
//       setOpen(false);
//       resetForm();
//       loadStaff();
//     } catch (e: any) {
//       toastError(
//         e?.response?.data?.message ||
//           "Failed to create staff"
//       );
//     } finally {
//       setCreating(false);
//     }
//   };

//   /* ---------- STATUS ---------- */
//   const toggleStatus = async (s: Staff) => {
//     try {
//       await activateStatus(
//         vendorId!,
//         s._id,
//         !s.active
//       );
//       toastSuccess(
//         s.active
//           ? "Staff deactivated"
//           : "Staff activated"
//       );
//       loadStaff();
//     } catch {
//       toastError("Failed to update status");
//     }
//   };

//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setPassword("");
//     setRole("groomer");
//   };

//   return (
//     <div className="space-y-6">
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-semibold">
//           Staff
//         </h1>
//         <button
//           onClick={() => setOpen(true)}
//           className="bg-orange-500 text-white px-4 py-2 rounded"
//         >
//           + Add Staff
//         </button>
//       </div>

//       <div className="bg-white rounded shadow">
//         {loading ? (
//           <p className="p-6">Loading...</p>
//         ) : staff.length === 0 ? (
//           <p className="p-6 text-gray-500">
//             No staff added
//           </p>
//         ) : (
//           <table className="w-full text-sm">
//             <thead className="bg-gray-50 border-b">
//               <tr>
//                 <th className="p-3 text-left">
//                   Name
//                 </th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 <th />
//               </tr>
//             </thead>
//             <tbody>
//               {staff.map((s) => (
//                 <tr
//                   key={s._id}
//                   className="border-b"
//                 >
//                   <td className="p-3 font-medium">
//                     {s.name}
//                   </td>
//                   <td>{s.email}</td>
//                   <td className="capitalize">
//                     {s.role.replace("_", " ")}
//                   </td>
//                   <td>
//                     <span
//                       className={`px-2 py-1 text-xs rounded ${
//                         s.active
//                           ? "bg-green-100 text-green-700"
//                           : "bg-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {s.active
//                         ? "Active"
//                         : "Inactive"}
//                     </span>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() =>
//                         toggleStatus(s)
//                       }
//                       className="text-xs text-orange-600 hover:underline"
//                     >
//                       {s.active
//                         ? "Deactivate"
//                         : "Activate"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {open && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-lg rounded p-6 space-y-4">
//             <h2 className="text-lg font-semibold">
//               Add Staff
//             </h2>

//             <input
//               className="border p-2 w-full rounded"
//               placeholder="Name"
//               value={name}
//               onChange={(e) =>
//                 setName(e.target.value)
//               }
//             />
//             <input
//               className="border p-2 w-full rounded"
//               placeholder="Email"
//               value={email}
//               onChange={(e) =>
//                 setEmail(e.target.value)
//               }
//             />
//             <input
//               className="border p-2 w-full rounded"
//               placeholder="Phone"
//               value={phone}
//               onChange={(e) =>
//                 setPhone(e.target.value)
//               }
//             />
//             <select
//               className="border p-2 w-full rounded"
//               value={role}
//               onChange={(e) =>
//                 setRole(
//                   e.target.value as StaffRole
//                 )
//               }
//             >
//               <option value="vendor_admin">
//                 Vendor Admin
//               </option>
//               <option value="groomer">
//                 Groomer
//               </option>
//               <option value="trainer">
//                 Trainer
//               </option>
//               <option value="phlebotomist">
//                 Phlebotomist
//               </option>
//             </select>
//             <input
//               className="border p-2 w-full rounded"
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) =>
//                 setPassword(e.target.value)
//               }
//             />

//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="border px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={creating}
//                 onClick={handleCreate}
//                 className="bg-orange-500 text-white px-4 py-2 rounded"
//               >
//                 {creating
//                   ? "Creating..."
//                   : "Create"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useAuthStore } from "../../../store/auth.store";
import {
  getVendorStaff,
  createStaff,
  updateStaff,
  Staff,
  StaffRole,
} from "../../../services/staff.service";
import { toastSuccess, toastError } from "../../../utils/toast";

/* =========================
   PAGE
========================= */
export default function VendorStaffPage() {
  const vendorId = useAuthStore((s) => s.vendorId);

  const [staff, setStaff] = useState<Staff[]>([]);
  const [loading, setLoading] = useState(true);

  /* ---------- MODAL ---------- */
  const [open, setOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingStaff, setEditingStaff] = useState<Staff | null>(null);

  /* ---------- FORM ---------- */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<StaffRole>("groomer");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(true);

  /* =========================
     LOAD STAFF
  ========================= */
  const loadStaff = async () => {
    if (!vendorId) return;

    try {
      setLoading(true);
      const data = await getVendorStaff(vendorId);
      setStaff(data);
    } catch {
      toastError("Failed to load staff");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStaff();
  }, [vendorId]);

  /* =========================
     RESET FORM
  ========================= */
  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setRole("groomer");
    setPassword("");
    setActive(true);
    setEditingStaff(null);
  };

  /* =========================
     SAVE (CREATE / UPDATE)
  ========================= */
  const handleSave = async () => {
    if (!name || (!editingStaff && !email)) {
      toastError("Name and Email are required");
      return;
    }

    if (!vendorId) {
      toastError("Vendor not found");
      return;
    }

    try {
      setSaving(true);

      if (editingStaff) {
        /* UPDATE */
        await updateStaff(vendorId, editingStaff._id, {
          name,
          phone,
          role,
          active,
        });

        toastSuccess("Staff updated successfully");
      } else {
        /* CREATE */
        if (!password) {
          toastError("Password is required");
          return;
        }

        await createStaff(vendorId, {
          name,
          email,
          phone,
          role,
          password,
        });

        toastSuccess("Staff created successfully");
      }

      setOpen(false);
      resetForm();
      loadStaff();
    } catch (e: any) {
      toastError(
        e?.response?.data?.message || "Operation failed"
      );
    } finally {
      setSaving(false);
    }
  };

  /* =========================
     OPEN EDIT
  ========================= */
  const openEdit = (s: Staff) => {
    setEditingStaff(s);
    setName(s.name);
    setEmail(s.email);
    setPhone(s.phone || "");
    setRole(s.role);
    setActive(s.active);
    setOpen(true);
  };

  /* =========================
     RENDER
  ========================= */
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Staff</h1>
        <button
          onClick={() => {
            resetForm();
            setOpen(true);
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          + Add Staff
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded shadow">
        {loading ? (
          <p className="p-6">Loading...</p>
        ) : staff.length === 0 ? (
          <p className="p-6 text-gray-500">No staff added yet</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {staff.map((s) => (
                <tr key={s._id} className="border-b">
                  <td className="p-3 font-medium">{s.name}</td>
                  <td>{s.email}</td>
                  <td className="capitalize">
                    {s.role.replace("_", " ")}
                  </td>
                  <td>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        s.active
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {s.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => openEdit(s)}
                      className="text-xs text-orange-600 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-lg rounded p-6 space-y-4">
            <h2 className="text-lg font-semibold">
              {editingStaff ? "Edit Staff" : "Add Staff"}
            </h2>

            <input
              className="border p-2 w-full rounded"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            {!editingStaff && (
              <input
                className="border p-2 w-full rounded"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}

            <input
              className="border p-2 w-full rounded"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <select
              className="border p-2 w-full rounded"
              value={role}
              onChange={(e) =>
                setRole(e.target.value as StaffRole)
              }
            >
              <option value="vendor_admin">Vendor Admin</option>
              <option value="groomer">Groomer</option>
              <option value="trainer">Trainer</option>
              <option value="phlebotomist">Phlebotomist</option>
            </select>

            {editingStaff ? (
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={(e) =>
                    setActive(e.target.checked)
                  }
                />
                Active
              </label>
            ) : (
              <input
                type="password"
                className="border p-2 w-full rounded"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
            )}

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                disabled={saving}
                onClick={handleSave}
                className="bg-orange-500 text-white px-4 py-2 rounded disabled:opacity-60"
              >
                {saving
                  ? "Saving..."
                  : editingStaff
                  ? "Update"
                  : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

