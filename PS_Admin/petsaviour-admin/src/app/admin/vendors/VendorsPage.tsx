// "use client";

// import { useEffect, useState } from "react";
// import {
//   getVendors,
//   createVendor,
//   updateVendor,
//   deleteVendor,
//   Vendor,
// } from "../../../services/vendor.service";

// import TableSkeleton from "../../../components/ui/TableSkeleton";
// import EmptyState from "../../../components/ui/EmptyState";

// type Message = {
//   type: "success" | "error";
//   text: string;
// };

// export default function VendorsPage() {
//   const [vendors, setVendors] = useState<Vendor[]>([]);
//   const [loading, setLoading] = useState(true);

//   // global feedback
//   const [message, setMessage] = useState<Message | null>(null);

//   // create form
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [creating, setCreating] = useState(false);

//   // edit state
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editName, setEditName] = useState("");
//   const [editEmail, setEditEmail] = useState("");
//   const [editPhone, setEditPhone] = useState("");
//   const [updating, setUpdating] = useState(false);

//   // delete state
//   const [deletingId, setDeletingId] = useState<string | null>(null);

//   const loadVendors = async () => {
//     try {
//       setLoading(true);
//       const data = await getVendors();
//       setVendors(data);
//     } catch {
//       setMessage({ type: "error", text: "Failed to load vendors" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadVendors();
//   }, []);

//   const handleCreate = async () => {
//     if (!name || !email || !phone) return;

//     try {
//       setCreating(true);
//       await createVendor({ name, email, phone });
//       setMessage({ type: "success", text: "Vendor created successfully" });
//       setName("");
//       setEmail("");
//       setPhone("");
//       loadVendors();
//     } catch {
//       setMessage({ type: "error", text: "Failed to create vendor" });
//     } finally {
//       setCreating(false);
//     }
//   };

//   const startEdit = (v: Vendor) => {
//     setEditingId(v.id);
//     setEditName(v.name);
//     setEditEmail(v.email);
//     setEditPhone(v.phone);
//   };

//   const saveEdit = async (id: string) => {
//     try {
//       setUpdating(true);
//       await updateVendor(id, {
//         name: editName,
//         email: editEmail,
//         phone: editPhone,
//       });
//       setMessage({ type: "success", text: "Vendor updated successfully" });
//       setEditingId(null);
//       loadVendors();
//     } catch {
//       setMessage({ type: "error", text: "Failed to update vendor" });
//     } finally {
//       setUpdating(false);
//     }
//   };

//   const toggleStatus = async (v: Vendor) => {
//     try {
//       await updateVendor(v.id, {
//         status: v.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
//       });
//       setMessage({ type: "success", text: "Status updated" });
//       loadVendors();
//     } catch {
//       setMessage({ type: "error", text: "Failed to update status" });
//     }
//   };

//   const handleDelete = async (id: string) => {
//     const ok = window.confirm(
//       "Are you sure you want to delete this vendor?\nThis action cannot be undone."
//     );
//     if (!ok) return;

//     try {
//       setDeletingId(id);
//       await deleteVendor(id);
//       setMessage({ type: "success", text: "Vendor deleted" });
//       loadVendors();
//     } catch {
//       setMessage({ type: "error", text: "Failed to delete vendor" });
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-semibold">Vendors</h1>

//       {/* Feedback message */}
//       {message && (
//         <div
//           className={`p-3 rounded text-sm ${
//             message.type === "success"
//               ? "bg-green-100 text-green-700"
//               : "bg-red-100 text-red-700"
//           }`}
//         >
//           {message.text}
//         </div>
//       )}

//       {/* CREATE */}
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="font-medium mb-4">Add Vendor</h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <input
//             className="border p-2 rounded"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             disabled={creating}
//           />

//           <input
//             className="border p-2 rounded"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             disabled={creating}
//           />

//           <input
//             className="border p-2 rounded"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             disabled={creating}
//           />

//           <button
//             onClick={handleCreate}
//             disabled={creating}
//             className="bg-orange-500 text-white rounded px-4 py-2 disabled:opacity-60"
//           >
//             {creating ? "Creating..." : "Create"}
//           </button>
//         </div>
//       </div>

//       {/* LIST */}
//       <div className="bg-white p-6 rounded shadow">
//         {loading ? (
//           <TableSkeleton />
//         ) : vendors.length === 0 ? (
//           <EmptyState
//             title="No vendors found"
//             description="Create your first vendor to get started."
//           />
//         ) : (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="border-b text-left text-sm text-gray-600">
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Status</th>
//                 <th className="text-right">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {vendors.map((v) => (
//                 <tr key={v.id} className="border-b hover:bg-gray-50">
//                   <td>
//                     {editingId === v.id ? (
//                       <input
//                         className="border p-1"
//                         value={editName}
//                         onChange={(e) => setEditName(e.target.value)}
//                         disabled={updating}
//                       />
//                     ) : (
//                       v.name
//                     )}
//                   </td>

//                   <td>
//                     {editingId === v.id ? (
//                       <input
//                         className="border p-1"
//                         value={editEmail}
//                         onChange={(e) => setEditEmail(e.target.value)}
//                         disabled={updating}
//                       />
//                     ) : (
//                       v.email
//                     )}
//                   </td>

//                   <td>
//                     {editingId === v.id ? (
//                       <input
//                         className="border p-1"
//                         value={editPhone}
//                         onChange={(e) => setEditPhone(e.target.value)}
//                         disabled={updating}
//                       />
//                     ) : (
//                       v.phone
//                     )}
//                   </td>

//                   <td>
//                     <button
//                       onClick={() => toggleStatus(v)}
//                       className={`px-3 py-1 rounded text-sm ${
//                         v.status === "ACTIVE"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-gray-200 text-gray-600"
//                       }`}
//                     >
//                       {v.status}
//                     </button>
//                   </td>

//                   <td className="text-right space-x-3">
//                     {editingId === v.id ? (
//                       <button
//                         onClick={() => saveEdit(v.id)}
//                         disabled={updating}
//                         className="text-blue-600 disabled:opacity-60"
//                       >
//                         {updating ? "Saving..." : "Save"}
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => startEdit(v)}
//                         className="text-blue-600"
//                       >
//                         Edit
//                       </button>
//                     )}

//                     <button
//                       onClick={() => handleDelete(v.id)}
//                       disabled={deletingId === v.id}
//                       className="text-red-600 disabled:opacity-60"
//                     >
//                       {deletingId === v.id ? "Deleting..." : "Delete"}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getVendorById } from "../../../services/vendor.service";

type Vendor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  vendorType?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  createdAt?: string;
  updatedAt?: string;
};

export default function VendorDetailPage() {
  const params = useParams();
  const vendorId = params.vendorId as string;

  const [vendor, setVendor] = useState<Vendor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVendor = async () => {
      try {
        setLoading(true);
        const data = await getVendorById(vendorId);
        console.log("Vendor data:", data);
        setVendor(data);
      } catch (err) {
        setError("Failed to load vendor details");
      } finally {
        setLoading(false);
      }
    };

    if (vendorId) {
      loadVendor();
    }
  }, [vendorId]);

  if (loading) {
    return <div className="p-6">Loading vendor details...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-600">{error}</div>;
  }

  if (!vendor) {
    return <div className="p-6">Vendor not found</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Vendor Details</h1>

      {/* BASIC INFO */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="font-medium mb-4">Basic Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><b>ID:</b> {vendor.id}</div>
          <div><b>Status:</b> {vendor.status}</div>
          <div><b>Name:</b> {vendor.name}</div>
          <div><b>Email:</b> {vendor.email}</div>
          <div><b>Phone:</b> {vendor.phone}</div>
          <div><b>Vendor Type:</b> {vendor.vendorType || "-"}</div>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="font-medium mb-4">Address</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><b>Address:</b> {vendor.address || "-"}</div>
          <div><b>City:</b> {vendor.city || "-"}</div>
          <div><b>State:</b> {vendor.state || "-"}</div>
          <div><b>Pincode:</b> {vendor.pincode || "-"}</div>
        </div>
      </div>

      {/* SYSTEM INFO */}
      <div className="bg-white rounded shadow p-6">
        <h2 className="font-medium mb-4">System Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><b>Created At:</b> {vendor.createdAt || "-"}</div>
          <div><b>Updated At:</b> {vendor.updatedAt || "-"}</div>
        </div>
      </div>
    </div>
  );
}
