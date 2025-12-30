// // // // "use client";

// // // // import { useEffect, useState } from "react";
// // // // import { VendorType,createVendor, getVendors } from "../../../services/vendor.service";

// // // // type Vendor = {
// // // //   id: string;
// // // //   name: string;
// // // //   email: string;
// // // //   phone: string;
// // // //   status: "ACTIVE" | "INACTIVE";
// // // // };

// // // // export default function VendorsPage() {
// // // //   const [vendors, setVendors] = useState<Vendor[]>([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [creating, setCreating] = useState(false);
// // // //   const [error, setError] = useState<string | null>(null);

// // // //   // modal state
// // // //   const [open, setOpen] = useState(false);

// // // //   // mandatory fields
// // // //   const [name, setName] = useState("");
// // // //   const [email, setEmail] = useState("");
// // // //   const [phone, setPhone] = useState("");

// // // //   // optional fields
// // // //   const [vendorType, setVendorType] = useState<VendorType | "">("");
// // // //   const [address, setAddress] = useState("");
// // // //   const [city, setCity] = useState("");
// // // //   const [state, setState] = useState("");
// // // //   const [pincode, setPincode] = useState("");

// // // //   // const loadVendors = async () => {
// // // //   //   setLoading(true);
// // // //   //   try {
// // // //   //     const data = await getVendors();
// // // //   //     setVendors(data || []);
// // // //   //   } catch {
// // // //   //     setError("Failed to load vendors");
// // // //   //   } finally {
// // // //   //     setLoading(false);
// // // //   //   }
// // // //   // };


// // // //   const loadVendors = async () => {
// // // //   setLoading(true);
// // // //   try {
// // // //     const res = await getVendors();

// // // //     // res.data.vendors → API shape
// // // //     const normalizedVendors = (res.vendors  || []).map(
// // // //       (item: any) => ({
// // // //         id: item.vendor._id,
// // // //         name: item.vendor.name,
// // // //         email: item.vendor.email,
// // // //         phone: item.vendor.phone,
// // // //         status:
// // // //           item.vendor.status === "active"
// // // //             ? "ACTIVE"
// // // //             : "INACTIVE",
// // // //       })
// // // //     );

// // // //     setVendors(normalizedVendors);
// // // //   } catch (e) {
// // // //     console.error(e);
// // // //     setError("Failed to load vendors");
// // // //   } finally {
// // // //     setLoading(false);
// // // //   }
// // // // };


// // // //   useEffect(() => {
// // // //     loadVendors();
// // // //   }, []);

// // // //   const resetForm = () => {
// // // //     setName("");
// // // //     setEmail("");
// // // //     setPhone("");
// // // //     setVendorType("");
// // // //     setAddress("");
// // // //     setCity("");
// // // //     setState("");
// // // //     setPincode("");
// // // //   };

// // // //   const handleCreateVendor = async () => {
// // // //     if (!name || !email || !phone) {
// // // //       setError("Name, Email and Phone are mandatory");
// // // //       return;
// // // //     }

// // // //     setCreating(true);
// // // //     setError(null);

// // // //     try {
// // // //       await createVendor({
// // // //         name,
// // // //         email,
// // // //         phone,
// // // //         vendorType: vendorType || undefined,
// // // //         address: address || undefined,
// // // //         city: city || undefined,
// // // //         state: state || undefined,
// // // //         pincode: pincode || undefined,
// // // //       });

// // // //       resetForm();
// // // //       setOpen(false);
// // // //       loadVendors();
// // // //     } catch {
// // // //       setError("Vendor onboarding failed");
// // // //     } finally {
// // // //       setCreating(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="space-y-6">
// // // //       {/* HEADER */}
// // // //       <div className="flex justify-between items-center">
// // // //         <h1 className="text-2xl font-semibold">Vendors</h1>

// // // //         <button
// // // //           onClick={() => setOpen(true)}
// // // //           className="bg-orange-500 text-white px-4 py-2 rounded"
// // // //         >
// // // //           + Onboard Vendor
// // // //         </button>
// // // //       </div>

// // // //       {/* ERROR */}
// // // //       {error && (
// // // //         <div className="bg-red-100 text-red-700 p-3 rounded">
// // // //           {error}
// // // //         </div>
// // // //       )}

// // // //       {/* VENDOR LIST */}
// // // //       <div className="bg-white p-6 rounded shadow">
// // // //         {loading ? (
// // // //           <p>Loading...</p>
// // // //         ) : vendors.length === 0 ? (
// // // //           <p className="text-gray-500">No vendors found</p>
// // // //         ) : (
// // // //           <table className="w-full text-sm">
// // // //             <thead>
// // // //               <tr className="border-b text-left text-gray-600">
// // // //                 <th>Name</th>
// // // //                 <th>Email</th>
// // // //                 <th>Phone</th>
// // // //                 <th>Status</th>
// // // //                 <th>Next Step</th>
// // // //               </tr>
// // // //             </thead>

// // // //             <tbody>
// // // //               {vendors.map((v) => (
// // // //                 <tr key={v.id} className="border-b">
// // // //                   <td className="font-medium">{v.name}</td>
// // // //                   <td>{v.email}</td>
// // // //                   <td>{v.phone}</td>
// // // //                   <td>
// // // //                     <span
// // // //                       className={`px-2 py-1 rounded text-xs font-medium ${
// // // //                         v.status === "ACTIVE"
// // // //                           ? "bg-green-100 text-green-700"
// // // //                           : "bg-yellow-100 text-yellow-700"
// // // //                       }`}
// // // //                     >
// // // //                       {v.status}
// // // //                     </span>
// // // //                   </td>
// // // //                   <td className="text-xs text-gray-600">
// // // //                     {v.status === "INACTIVE"
// // // //                       ? "Complete profile, staff & services"
// // // //                       : "Ready for operations"}
// // // //                   </td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         )}
// // // //       </div>

// // // //       {/* MODAL */}
// // // //       {open && (
// // // //         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
// // // //           <div className="bg-white w-full max-w-2xl rounded shadow p-6 space-y-6">
// // // //             <div className="flex justify-between items-center">
// // // //               <h2 className="text-lg font-semibold">Onboard Vendor</h2>
// // // //               <button onClick={() => setOpen(false)}>✕</button>
// // // //             </div>

// // // //             {/* Mandatory */}
// // // //             <div>
// // // //               <h3 className="text-sm font-medium mb-2">
// // // //                 Mandatory Information *
// // // //               </h3>
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // //                 <input
// // // //                   className="border p-2 rounded"
// // // //                   placeholder="Vendor Name *"
// // // //                   value={name}
// // // //                   onChange={(e) => setName(e.target.value)}
// // // //                 />
// // // //                 <input
// // // //                   className="border p-2 rounded"
// // // //                   placeholder="Email *"
// // // //                   value={email}
// // // //                   onChange={(e) => setEmail(e.target.value)}
// // // //                 />
// // // //                 <input
// // // //                   className="border p-2 rounded"
// // // //                   placeholder="Phone *"
// // // //                   value={phone}
// // // //                   onChange={(e) => setPhone(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             {/* Optional */}
// // // //             <div>
// // // //               <h3 className="text-sm font-medium mb-2">
// // // //                 Optional Information
// // // //               </h3>
// // // //               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// // // //                 <select
// // // //                   className="border p-2 rounded"
// // // //                   value={vendorType}
// // // //                   onChange={(e) => setVendorType(e.target.value as VendorType)}
// // // //                 >
// // // //                   <option value="">Vendor Type</option>
// // // //                   <option value="GROOMING">Grooming</option>
// // // //                   <option value="BOARDING">Boarding</option>
// // // //                   <option value="VETERINARY">Veterinary</option>
// // // //                 </select>

// // // //                 <input
// // // //                   className="border p-2 rounded"
// // // //                   placeholder="Address"
// // // //                   value={address}
// // // //                   onChange={(e) => setAddress(e.target.value)}
// // // //                 />
// // // //                 <input
// // // //                   className="border p-2 rounded"
// // // //                   placeholder="City"
// // // //                   value={city}
// // // //                   onChange={(e) => setCity(e.target.value)}
// // // //                 />
// // // //                 <input
// // // //                   className="border p-2 rounded"
// // // //                   placeholder="State"
// // // //                   value={state}
// // // //                   onChange={(e) => setState(e.target.value)}
// // // //                 />
// // // //                 <input
// // // //                   className="border p-2 rounded"
// // // //                   placeholder="Pincode"
// // // //                   value={pincode}
// // // //                   onChange={(e) => setPincode(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             {/* ACTIONS */}
// // // //             <div className="flex justify-end gap-3">
// // // //               <button
// // // //                 onClick={() => setOpen(false)}
// // // //                 className="px-4 py-2 border rounded"
// // // //               >
// // // //                 Cancel
// // // //               </button>
// // // //               <button
// // // //                 onClick={handleCreateVendor}
// // // //                 disabled={creating}
// // // //                 className="bg-orange-500 text-white px-6 py-2 rounded disabled:opacity-60"
// // // //               >
// // // //                 {creating ? "Creating..." : "Submit"}
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }




// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { getVendors } from "../../../services/vendor.service";
// // // import { useAuthStore } from "../../../store/auth.store";

// // // /* =======================
// // //    UI Vendor Model
// // //    ======================= */
// // // type VendorRow = {
// // //   id: string;
// // //   name: string;
// // //   email: string;
// // //   phone: string;
// // //   business: string;
// // //   city: string;
// // //   servicesCount: number;
// // //   approvalStatus: string;
// // //   status: "ACTIVE" | "INACTIVE";
// // //   createdAt: string;
// // // };

// // // export default function VendorsPage() {
// // //   const [vendors, setVendors] = useState<VendorRow[]>([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const [error, setError] = useState<string | null>(null);

// // //   const hydrated = useAuthStore((s) => s.hydrated);
// // //   const token = useAuthStore((s) => s.token);

// // //   /* =======================
// // //      Load Vendors
// // //      ======================= */
// // //   const loadVendors = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const res = await getVendors();

// // //       const rows: VendorRow[] = res.vendors.map((item: any) => {
// // //         const v = item.vendor;

// // //         return {
// // //           id: v._id,
// // //           name: v.name,
// // //           email: v.email,
// // //           phone: v.phone,
// // //           business: v.businesses?.[0] ?? "-",
// // //           city: v.coverage?.cities?.[0] ?? "-",
// // //           servicesCount: item.services?.length ?? 0,
// // //           approvalStatus: v.approvals?.meta?.status ?? "unknown",
// // //           status: v.status === "active" ? "ACTIVE" : "INACTIVE",
// // //           createdAt: new Date(v.createdAt).toLocaleDateString(),
// // //         };
// // //       });

// // //       setVendors(rows);
// // //     } catch (e) {
// // //       console.error(e);
// // //       setError("Failed to load vendors");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   /* =======================
// // //      Wait for Auth
// // //      ======================= */
// // //   useEffect(() => {
// // //     if (!hydrated || !token) return;
// // //     loadVendors();
// // //   }, [hydrated, token]);

// // //   /* =======================
// // //      UI
// // //      ======================= */
// // //   return (
// // //     <div className="space-y-6">
// // //       <div className="flex justify-between items-center">
// // //         <h1 className="text-2xl font-semibold">All Vendors</h1>
// // //       </div>

// // //       {error && (
// // //         <div className="bg-red-100 text-red-700 p-3 rounded">
// // //           {error}
// // //         </div>
// // //       )}

// // //       <div className="bg-white rounded shadow overflow-x-auto">
// // //         {loading ? (
// // //           <p className="p-4">Loading vendors...</p>
// // //         ) : vendors.length === 0 ? (
// // //           <p className="p-4 text-gray-500">No vendors found</p>
// // //         ) : (
// // //           <table className="min-w-full text-sm">
// // //             <thead className="bg-gray-50 text-gray-600">
// // //               <tr>
// // //                 <th className="p-3 text-left">Name</th>
// // //                 <th className="p-3 text-left">Email</th>
// // //                 <th className="p-3 text-left">Phone</th>
// // //                 <th className="p-3 text-left">Business</th>
// // //                 <th className="p-3 text-left">City</th>
// // //                 <th className="p-3 text-center">Services</th>
// // //                 <th className="p-3 text-left">Approval</th>
// // //                 <th className="p-3 text-left">Status</th>
// // //                 <th className="p-3 text-left">Created</th>
// // //               </tr>
// // //             </thead>

// // //             <tbody>
// // //               {vendors.map((v) => (
// // //                 <tr
// // //                   key={v.id}
// // //                   className="border-t hover:bg-gray-50"
// // //                 >
// // //                   <td className="p-3 font-medium">{v.name}</td>
// // //                   <td className="p-3">{v.email}</td>
// // //                   <td className="p-3">{v.phone}</td>
// // //                   <td className="p-3 capitalize">{v.business}</td>
// // //                   <td className="p-3">{v.city}</td>
// // //                   <td className="p-3 text-center">
// // //                     {v.servicesCount}
// // //                   </td>
// // //                   <td className="p-3 capitalize">
// // //                     <span className="px-2 py-1 rounded bg-yellow-100 text-yellow-700 text-xs">
// // //                       {v.approvalStatus}
// // //                     </span>
// // //                   </td>
// // //                   <td className="p-3">
// // //                     <span
// // //                       className={`px-2 py-1 rounded text-xs ${
// // //                         v.status === "ACTIVE"
// // //                           ? "bg-green-100 text-green-700"
// // //                           : "bg-gray-100 text-gray-600"
// // //                       }`}
// // //                     >
// // //                       {v.status}
// // //                     </span>
// // //                   </td>
// // //                   <td className="p-3">{v.createdAt}</td>

// // //                   {/*
// // //                     FUTURE FIELDS (KEEP FOR LATER)
// // //                     --------------------------------
// // //                     commissionRate
// // //                     promotionEligible
// // //                     coverage.radiusKm
// // //                     coverage.pinCodes
// // //                     services[].name
// // //                     schedule
// // //                   */}
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/navigation";
// // import { getVendors } from "../../../services/vendor.service";
// // import { useAuthStore } from "../../../store/auth.store";
// // import { toastError } from "../../../utils/toast";

// // /* =======================
// //    UI Vendor Model
// //    (Future-safe)
// // ======================= */
// // type VendorRow = {
// //   id: string;
// //   name: string;
// //   email: string;
// //   phone: string;
// //   business: string;
// //   city: string;
// //   servicesCount: number;
// //   approvalStatus: "pending" | "approved" | "rejected" | "unknown";
// //   status: "ACTIVE" | "INACTIVE";
// //   createdAt: string;

// //   /* FUTURE */
// //   raw?: any; // keep original reference if needed later
// // };

// // export default function VendorsPage() {
// //   const router = useRouter();

// //   const [vendors, setVendors] = useState<VendorRow[]>([]);
// //   const [loading, setLoading] = useState(false);

// //   const hydrated = useAuthStore((s) => s.hydrated);
// //   const token = useAuthStore((s) => s.token);

// //   /* =======================
// //      Load Vendors
// //   ======================= */
// //   const loadVendors = async () => {
// //     try {
// //       setLoading(true);
// //       const res = await getVendors();

// //       const rows: VendorRow[] = res.vendors.map((item: any) => {
// //         const v = item.vendor;

// //         return {
// //           id: v._id,
// //           name: v.name,
// //           email: v.email,
// //           phone: v.phone,
// //           business: v.businesses?.[0] ?? "-",
// //           city: v.coverage?.cities?.[0] ?? "-",
// //           servicesCount: item.services?.length ?? 0,
// //           approvalStatus: v.approvals?.meta?.status ?? "unknown",
// //           status: v.status === "active" ? "ACTIVE" : "INACTIVE",
// //           createdAt: new Date(v.createdAt).toLocaleDateString(),
// //           raw: v,
// //         };
// //       });

// //       setVendors(rows);
// //     } catch (e) {
// //       console.error(e);
// //       toastError("Failed to load vendors");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   /* =======================
// //      Wait for Auth
// //   ======================= */
// //   useEffect(() => {
// //     if (!hydrated || !token) return;
// //     loadVendors();
// //   }, [hydrated, token]);

// //   /* =======================
// //      UI
// //   ======================= */
// //   return (
// //     <div className="space-y-6">
// //       {/* HEADER */}
// //       <div className="flex justify-between items-center">
// //         <h1 className="text-2xl font-semibold">All Vendors</h1>

// //         {/* Onboard button stays here */}
// //         <button
// //           onClick={() => router.push("/admin/vendors/onboard")}
// //           className="bg-orange-500 text-white px-4 py-2 rounded"
// //         >
// //           + Onboard Vendor
// //         </button>
// //       </div>

// //       {/* TABLE */}
// //       <div className="bg-white rounded shadow overflow-x-auto">
// //         {loading ? (
// //           <p className="p-4">Loading vendors…</p>
// //         ) : vendors.length === 0 ? (
// //           <p className="p-4 text-gray-500">No vendors found</p>
// //         ) : (
// //           <table className="min-w-full text-sm">
// //             <thead className="bg-gray-50 text-gray-600">
// //               <tr>
// //                 <th className="p-3 text-left">Vendor</th>
// //                 <th>Email</th>
// //                 <th>Phone</th>
// //                 <th>Business</th>
// //                 <th>City</th>
// //                 <th className="text-center">Services</th>
// //                 <th>Approval</th>
// //                 <th>Status</th>
// //                 <th>Created</th>
// //               </tr>
// //             </thead>

// //             <tbody>
// //               {vendors.map((v) => (
// //                 <tr
// //                   key={v.id}
// //                   onClick={() =>
// //                     router.push(`/admin/vendors/${v.id}`)
// //                   }
// //                   className="border-t hover:bg-gray-50 cursor-pointer"
// //                 >
// //                   <td className="p-3 font-medium">{v.name}</td>
// //                   <td className="p-3">{v.email}</td>
// //                   <td className="p-3">{v.phone}</td>
// //                   <td className="p-3 capitalize">{v.business}</td>
// //                   <td className="p-3">{v.city}</td>

// //                   <td className="p-3 text-center font-medium">
// //                     {v.servicesCount}
// //                   </td>

// //                   <td className="p-3">
// //                     <span
// //                       className={`px-2 py-1 rounded text-xs capitalize ${
// //                         v.approvalStatus === "approved"
// //                           ? "bg-green-100 text-green-700"
// //                           : v.approvalStatus === "rejected"
// //                           ? "bg-red-100 text-red-700"
// //                           : "bg-yellow-100 text-yellow-700"
// //                       }`}
// //                     >
// //                       {v.approvalStatus}
// //                     </span>
// //                   </td>

// //                   <td className="p-3">
// //                     <span
// //                       className={`px-2 py-1 rounded text-xs ${
// //                         v.status === "ACTIVE"
// //                           ? "bg-green-100 text-green-700"
// //                           : "bg-gray-100 text-gray-600"
// //                       }`}
// //                     >
// //                       {v.status}
// //                     </span>
// //                   </td>

// //                   <td className="p-3">{v.createdAt}</td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }



// "use client";

// import { useEffect, useMemo, useState } from "react";
// import {
//   getVendors,
//   createVendor,
//   VendorType,
// } from "../../../services/vendor.service";
// import { useAuthStore } from "../../../store/auth.store";
// import { toastSuccess, toastError } from "../../../utils/toast";

// /* ======================
//    UI Model
// ====================== */
// type VendorRow = {
//   id: string;
//   name: string;
//   email: string;
//   phone: string;
//   vendorType: string;
//   city: string;
//   status: string;
//   createdAt: string;
// };

// export default function VendorsPage() {
//   const hydrated = useAuthStore((s) => s.hydrated);
//   const token = useAuthStore((s) => s.token);

//   const [vendors, setVendors] = useState<VendorRow[]>([]);
//   const [loading, setLoading] = useState(false);

//   /* ---------- SEARCH ---------- */
//   const [search, setSearch] = useState("");

//   /* ---------- MODAL ---------- */
//   const [open, setOpen] = useState(false);
//   const [creating, setCreating] = useState(false);

//   /* ---------- FORM ---------- */
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [vendorType, setVendorType] =
//     useState<VendorType>("grooming");
//   const [city, setCity] = useState("");
//   const [address, setAddress] = useState("");
//   const [state, setState] = useState("");
//   const [pincode, setPincode] = useState("");

//   /* ======================
//      LOAD VENDORS
//   ====================== */
//   const loadVendors = async () => {
//     try {
//       setLoading(true);
//       const res = await getVendors();

//       const rows: VendorRow[] = res.vendors.map(
//         (item: any) => {
//           const v = item.vendor;
//           return {
//             id: v._id,
//             name: v.name,
//             email: v.email,
//             phone: v.phone,
//             vendorType:
//               v.businesses?.[0]?.toUpperCase() ??
//               "GROOMING",
//             city: v.coverage?.cities?.[0] ?? "-",
//             status: v.status,
//             createdAt: new Date(
//               v.createdAt
//             ).toLocaleDateString(),
//           };
//         }
//       );

//       setVendors(rows);
//     } catch {
//       toastError("Failed to load vendors");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!hydrated || !token) return;
//     loadVendors();
//   }, [hydrated, token]);

//   /* ======================
//      SEARCH FILTER
//   ====================== */
//   const filteredVendors = useMemo(() => {
//     if (!search) return vendors;
//     return vendors.filter((v) =>
//       `${v.name} ${v.email} ${v.phone}`
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );
//   }, [search, vendors]);

//   /* ======================
//      CREATE VENDOR
//   ====================== */
//   const handleCreateVendor = async () => {
//     if (!name || !email || !phone) {
//       toastError("Name, Email and Phone are required");
//       return;
//     }

//     try {
//       setCreating(true);
//       await createVendor({
//         name,
//         email,
//         phone,
//         vendorType,
//         address: address || undefined,
//         city: city || undefined,
//         state: state || undefined,
//         pincode: pincode || undefined,
//       });

//       toastSuccess("Vendor onboarded successfully");
//       resetForm();
//       setOpen(false);
//       loadVendors();
//     } catch (e: any) {
//       toastError(
//         e?.response?.data?.message ||
//           "Vendor onboarding failed"
//       );
//     } finally {
//       setCreating(false);
//     }
//   };

//   const resetForm = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setVendorType("grooming");
//     setCity("");
//     setAddress("");
//     setState("");
//     setPincode("");
//   };

//   /* ======================
//      UI
//   ====================== */
//   return (
//     <div className="space-y-6">
//       {/* HEADER */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-2xl font-semibold">
//           Vendors
//         </h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="bg-orange-500 text-white px-4 py-2 rounded"
//         >
//           + Onboard Vendor
//         </button>
//       </div>

//       {/* SEARCH */}
//       <input
//         placeholder="Search by name, email or phone"
//         className="border px-3 py-2 rounded w-full max-w-md"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       {/* TABLE */}
//       <div className="bg-white rounded shadow overflow-x-auto">
//         {loading ? (
//           <p className="p-4">Loading...</p>
//         ) : filteredVendors.length === 0 ? (
//           <p className="p-4 text-gray-500">
//             No vendors found
//           </p>
//         ) : (
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-3 text-left">Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Type</th>
//                 <th>City</th>
//                 <th>Status</th>
//                 <th>Created</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredVendors.map((v) => (
//                 <tr
//                   key={v.id}
//                   className="border-t hover:bg-gray-50"
//                 >
//                   <td className="p-3 font-medium">
//                     {v.name}
//                   </td>
//                   <td>{v.email}</td>
//                   <td>{v.phone}</td>
//                   <td>{v.vendorType}</td>
//                   <td>{v.city}</td>
//                   <td className="capitalize">
//                     {v.status}
//                   </td>
//                   <td>{v.createdAt}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* ONBOARD MODAL */}
//       {open && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-xl rounded p-6 space-y-4">
//             <h2 className="text-lg font-semibold">
//               Onboard Vendor
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//               <input
//                 placeholder="Vendor Name *"
//                 className="border p-2 rounded"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <input
//                 placeholder="Email *"
//                 className="border p-2 rounded"
//                 value={email}
//                 onChange={(e) =>
//                   setEmail(e.target.value)
//                 }
//               />
//               <input
//                 placeholder="Phone *"
//                 className="border p-2 rounded"
//                 value={phone}
//                 onChange={(e) =>
//                   setPhone(e.target.value)
//                 }
//               />
//               <select
//                 className="border p-2 rounded"
//                 value={vendorType}
//                 onChange={(e) =>
//                   setVendorType(
//                     e.target.value as VendorType
//                   )
//                 }
//               >
//                 <option value="GROOMING">
//                   Grooming
//                 </option>
//                 <option value="BOARDING">
//                   Boarding
//                 </option>
//                 <option value="VETERINARY">
//                   Veterinary
//                 </option>
//               </select>

//               <input
//                 placeholder="City"
//                 className="border p-2 rounded"
//                 value={city}
//                 onChange={(e) =>
//                   setCity(e.target.value)
//                 }
//               />
//               <input
//                 placeholder="State"
//                 className="border p-2 rounded"
//                 value={state}
//                 onChange={(e) =>
//                   setState(e.target.value)
//                 }
//               />
//               <input
//                 placeholder="Pincode"
//                 className="border p-2 rounded"
//                 value={pincode}
//                 onChange={(e) =>
//                   setPincode(e.target.value)
//                 }
//               />
//             </div>

//             <input
//               placeholder="Address"
//               className="border p-2 rounded w-full"
//               value={address}
//               onChange={(e) =>
//                 setAddress(e.target.value)
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
//                 onClick={handleCreateVendor}
//                 className="bg-orange-500 text-white px-6 py-2 rounded disabled:opacity-60"
//               >
//                 {creating
//                   ? "Creating..."
//                   : "Create Vendor"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useEffect, useMemo, useState } from "react";
import { getVendors, createVendor } from "../../../services/vendor.service";
import { useAuthStore } from "../../../store/auth.store";
import { toastSuccess, toastError } from "../../../utils/toast";

/* =========================
   UI Vendor Row
========================= */
type VendorRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  createdAt: string;
};

export default function VendorsPage() {
  const hydrated = useAuthStore((s) => s.hydrated);
  const token = useAuthStore((s) => s.token);

  const [vendors, setVendors] = useState<VendorRow[]>([]);
  const [loading, setLoading] = useState(false);

  /* ---------- SEARCH ---------- */
  const [search, setSearch] = useState("");

  /* ---------- MODAL ---------- */
  const [open, setOpen] = useState(false);
  const [creating, setCreating] = useState(false);

  /* ---------- FORM ---------- */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [logoUrl, setLogoUrl] = useState("");

  /* =========================
     LOAD VENDORS
  ========================= */
  const loadVendors = async () => {
    try {
      setLoading(true);
      const res = await getVendors();

      const rows: VendorRow[] = res.vendors.map((item: any) => {
        const v = item.vendor;
        return {
          id: v._id,
          name: v.name,
          email: v.email,
          phone: v.phone ?? "-",
          status: v.status,
          createdAt: new Date(v.createdAt).toLocaleDateString(),
        };
      });

      setVendors(rows);
    } catch {
      toastError("Failed to load vendors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!hydrated || !token) return;
    loadVendors();
  }, [hydrated, token]);

  /* =========================
     SEARCH FILTER
  ========================= */
  const filteredVendors = useMemo(() => {
    if (!search) return vendors;
    return vendors.filter((v) =>
      `${v.name} ${v.email} ${v.phone}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search, vendors]);

  /* =========================
     CREATE VENDOR
  ========================= */
  const handleCreateVendor = async () => {
    if (!name || !email) {
      toastError("Name and Email are required");
      return;
    }

    try {
      setCreating(true);
      await createVendor({
        name,
        email,
        phone,
        address: address || undefined,
        logoUrl: logoUrl || undefined,
      });

      toastSuccess("Vendor onboarded successfully");
      resetForm();
      setOpen(false);
      loadVendors();
    } catch (e: any) {
      toastError(
        e?.response?.data?.message || "Vendor onboarding failed"
      );
    } finally {
      setCreating(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setLogoUrl("");
  };

  /* =========================
     UI
  ========================= */
  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Vendors</h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          + Onboard Vendor
        </button>
      </div>

      {/* SEARCH */}
      <input
        placeholder="Search by name, email or phone"
        className="border px-3 py-2 rounded w-full max-w-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="bg-white rounded shadow overflow-x-auto">
        {loading ? (
          <p className="p-4">Loading...</p>
        ) : filteredVendors.length === 0 ? (
          <p className="p-4 text-gray-500">No vendors found</p>
        ) : (
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              {filteredVendors.map((v) => (
                <tr
                  key={v.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">{v.name}</td>
                  <td>{v.email}</td>
                  <td>{v.phone}</td>
                  <td className="capitalize">{v.status}</td>
                  <td>{v.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ONBOARD MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded p-6 space-y-4">
            <h2 className="text-lg font-semibold">
              Onboard Vendor
            </h2>

            <input
              className="border p-2 rounded w-full"
              placeholder="Vendor Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Logo URL"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                disabled={creating}
                onClick={handleCreateVendor}
                className="bg-orange-500 text-white px-6 py-2 rounded disabled:opacity-60"
              >
                {creating ? "Creating..." : "Create Vendor"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
