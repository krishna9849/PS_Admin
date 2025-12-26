// "use client";

// import { useEffect, useState } from "react";
// import {
//   getServiceCatalog,
//   assignVendorServices,
// } from "../../../../services/vendor.service";

// // type Props = {
// //   vendor: any;
// // };

// type Props = {
//   vendorData: {
//     vendor: any;
//     services: any[];
//   };
// };

// const tabs = [
//   { key: "overview", label: "Overview" },
//   { key: "services", label: "Services" },
//   { key: "staff", label: "Staff" },
//   { key: "subscription", label: "Subscription" },
//   { key: "approvals", label: "Approvals" },
// ];

// export default function VendorTabs({ vendorData }: Props) {
//   const vendor = vendorData.vendor;
//   const services = vendorData.services;

//   const [activeTab, setActiveTab] = useState("overview");

//   return (
//     <div className="bg-white rounded shadow">
//       {/* Tabs Header */}
//       <div className="border-b flex">
//         {tabs.map((tab) => (
//           <button
//             key={tab.key}
//             onClick={() => setActiveTab(tab.key)}
//             className={`px-4 py-3 text-sm font-medium border-b-2 ${
//               activeTab === tab.key
//                 ? "border-orange-500 text-orange-600"
//                 : "border-transparent text-gray-600 hover:text-black"
//             }`}
//           >
//             {tab.label}
//           </button>
//         ))}
//       </div>

//       {/* Tabs Content */}
//       <div className="p-6">
//         {activeTab === "overview" && <OverviewTab vendor={vendor} />}
//         {activeTab === "services" && <ServicesTab vendor={vendor} />}

//         {/* Future tabs */}
//         {activeTab === "staff" && (
//           <p className="text-gray-500">Staff management coming soon</p>
//         )}
//         {activeTab === "subscription" && (
//           <p className="text-gray-500">Subscription details coming soon</p>
//         )}
//         {activeTab === "approvals" && (
//           <p className="text-gray-500">Approval flow coming soon</p>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ======================
//    Overview Tab
//    ====================== */
// function OverviewTab({ vendor }: { vendor: any }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//       <Info label="Vendor Name" value={vendor.name} />
//       <Info label="Email" value={vendor.email} />
//       <Info label="Phone" value={vendor.phone} />
//       <Info label="Status" value={vendor.status} />
//       <Info
//         label="Business"
//         value={vendor.businesses?.join(", ") ?? "-"}
//       />
//       <Info
//         label="City"
//         value={vendor.coverage?.cities?.[0] ?? "-"}
//       />

//       {/*
//         FUTURE FIELDS
//         commissionRate
//         promotionEligible
//         coverage.radiusKm
//         schedule
//       */}
//     </div>
//   );
// }

// /* ======================
//    Services Tab
//    ====================== */


// function ServicesTab({ vendor }: { vendor: any }) {
//   const [catalog, setCatalog] = useState<any[]>([]);
//   const [selected, setSelected] = useState<any[]>([]);
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // Load master catalog
//   useEffect(() => {
//     const loadCatalog = async () => {
//       const data = await getServiceCatalog();
//       setCatalog(data);
//     };
//     loadCatalog();
//   }, []);

//   const handleAddService = (service: any) => {
//     if (selected.find((s) => s.serviceId === service._id)) return;

//     setSelected([
//       ...selected,
//       {
//         serviceId: service._id,
//         name: service.name,
//         basePrice: "",
//         grossPrice: "",
//       },
//     ]);
//   };

//   const handleAssign = async () => {
//     setLoading(true);
//     try {
//       await assignVendorServices(
//         vendor._id,
//         selected.map((s) => ({
//           serviceId: s.serviceId,
//           basePrice: Number(s.basePrice),
//           grossPrice: Number(s.grossPrice),
//         }))
//       );

//       // reload page to refresh vendor data
//       window.location.reload();
//     } catch (e) {
//       console.error(e);
//       alert("Failed to assign services");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Assigned Services */}
//       <div className="flex justify-between items-center">
//         <h3 className="font-medium">Assigned Services</h3>
//         <button
//           onClick={() => setOpen(true)}
//           className="bg-orange-500 text-white px-4 py-2 rounded"
//         >
//           + Add Services
//         </button>
//       </div>

//       {vendor.services?.length === 0 ? (
//         <p className="text-gray-500">No services assigned</p>
//       ) : (
//         <table className="w-full text-sm border">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="p-2 text-left">Service</th>
//               <th className="p-2 text-left">Category</th>
//               <th className="p-2 text-left">Price</th>
//               <th className="p-2 text-left">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {vendor.services.map((s: any) => (
//               <tr key={s._id} className="border-t">
//                 <td className="p-2">{s.name}</td>
//                 <td className="p-2 capitalize">{s.category}</td>
//                 <td className="p-2">
//                   ₹{s.grossPrice} {s.currency}
//                 </td>
//                 <td className="p-2">
//                   {s.isActive ? "Active" : "Inactive"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* ADD SERVICES MODAL */}
//       {open && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-3xl rounded shadow p-6 space-y-4">
//             <div className="flex justify-between items-center">
//               <h2 className="text-lg font-semibold">
//                 Assign Services
//               </h2>
//               <button onClick={() => setOpen(false)}>✕</button>
//             </div>

//             {/* Catalog */}
//             <div className="grid grid-cols-2 gap-3">
//               {catalog.map((c) => (
//                 <button
//                   key={c._id}
//                   onClick={() => handleAddService(c)}
//                   className="border p-2 rounded text-left hover:bg-gray-50"
//                 >
//                   <p className="font-medium">{c.name}</p>
//                   <p className="text-xs text-gray-500 capitalize">
//                     {c.category}
//                   </p>
//                 </button>
//               ))}
//             </div>

//             {/* Selected Services */}
//             {selected.length > 0 && (
//               <div>
//                 <h4 className="font-medium mb-2">
//                   Pricing
//                 </h4>
//                 <div className="space-y-2">
//                   {selected.map((s, i) => (
//                     <div
//                       key={i}
//                       className="grid grid-cols-3 gap-2"
//                     >
//                       <input
//                         className="border p-2 rounded"
//                         value={s.name}
//                         disabled
//                       />
//                       <input
//                         className="border p-2 rounded"
//                         placeholder="Base Price"
//                         onChange={(e) =>
//                           (s.basePrice = e.target.value)
//                         }
//                       />
//                       <input
//                         className="border p-2 rounded"
//                         placeholder="Gross Price"
//                         onChange={(e) =>
//                           (s.grossPrice = e.target.value)
//                         }
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Actions */}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="border px-4 py-2 rounded"
//               >
//                 Cancel
//               </button>
//               <button
//                 disabled={loading || selected.length === 0}
//                 onClick={handleAssign}
//                 className="bg-orange-500 text-white px-6 py-2 rounded disabled:opacity-60"
//               >
//                 {loading ? "Assigning..." : "Assign Services"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// /* ======================
//    Small Helper
//    ====================== */
// function Info({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p className="text-gray-500">{label}</p>
//       <p className="font-medium">{value}</p>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import {
  getServiceCatalog,
  assignVendorServices,
} from "../../../../services/vendor.service";

/* ======================
   Types
   ====================== */
type Props = {
  vendorData: {
    vendor: any;
    services: any[];
  };
};

const tabs = [
  { key: "overview", label: "Overview" },
  { key: "services", label: "Services" },
  { key: "staff", label: "Staff" },
  { key: "subscription", label: "Subscription" },
  { key: "approvals", label: "Approvals" },
];

export default function VendorTabs({ vendorData }: Props) {
  const vendor = vendorData.vendor;
  const services = vendorData.services;

  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="bg-white rounded shadow">
      {/* Tabs Header */}
      <div className="border-b flex">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-3 text-sm font-medium border-b-2 ${
              activeTab === tab.key
                ? "border-orange-500 text-orange-600"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="p-6">
        {activeTab === "overview" && <OverviewTab vendor={vendor} />}

        {activeTab === "services" && (
          <ServicesTab
            vendorId={vendor._id}
            services={services}
          />
        )}

        {activeTab === "staff" && (
          <p className="text-gray-500">
            Staff management coming soon
          </p>
        )}

        {activeTab === "subscription" && (
          <p className="text-gray-500">
            Subscription details coming soon
          </p>
        )}

        {activeTab === "approvals" && (
          <p className="text-gray-500">
            Approval flow coming soon
          </p>
        )}
      </div>
    </div>
  );
}

/* ======================
   Overview Tab
   ====================== */
function OverviewTab({ vendor }: { vendor: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <Info label="Vendor Name" value={vendor.name} />
      <Info label="Email" value={vendor.email} />
      <Info label="Phone" value={vendor.phone} />
      <Info label="Status" value={vendor.status} />
      <Info
        label="Business"
        value={vendor.businesses?.join(", ") ?? "-"}
      />
      <Info
        label="City"
        value={vendor.coverage?.cities?.[0] ?? "-"}
      />

      {/*
        FUTURE FIELDS
        commissionRate
        promotionEligible
        coverage.radiusKm
        schedule
      */}
    </div>
  );
}

/* ======================
   Services Tab
   ====================== */
function ServicesTab({
  vendorId,
  services,
}: {
  vendorId: string;
  services: any[];
}) {
  const [catalog, setCatalog] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  /* Load master service catalog */
  useEffect(() => {
    const loadCatalog = async () => {
      const data = await getServiceCatalog();
      setCatalog(data);
    };
    loadCatalog();
  }, []);

  const handleAddService = (service: any) => {
    if (selected.find((s) => s.serviceId === service._id)) return;

    setSelected((prev) => [
      ...prev,
      {
        serviceId: service._id,
        name: service.name,
        basePrice: "",
        grossPrice: "",
      },
    ]);
  };

  const handleAssign = async () => {
    setLoading(true);
    try {
      await assignVendorServices(
        vendorId,
        selected.map((s) => ({
          serviceId: s.serviceId,
          basePrice: Number(s.basePrice),
          grossPrice: Number(s.grossPrice),
        }))
      );

      // refresh vendor data
      window.location.reload();
    } catch (e) {
      console.error(e);
      alert("Failed to assign services");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Assigned Services Header */}
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Assigned Services</h3>
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          + Add Services
        </button>
      </div>

      {/* Assigned Services Table */}
      {services.length === 0 ? (
        <p className="text-gray-500">No services assigned</p>
      ) : (
        <table className="w-full text-sm border">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-2 text-left">Service</th>
              <th className="p-2 text-left">Category</th>
              <th className="p-2 text-left">Price</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s: any) => (
              <tr key={s._id} className="border-t">
                <td className="p-2">{s.name}</td>
                <td className="p-2 capitalize">{s.category}</td>
                <td className="p-2">
                  ₹{s.grossPrice} {s.currency}
                </td>
                <td className="p-2">
                  {s.isActive ? "Active" : "Inactive"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ADD SERVICES MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-3xl rounded shadow p-6 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                Assign Services
              </h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            {/* Catalog */}
            <div className="grid grid-cols-2 gap-3">
              {catalog.map((c) => (
                <button
                  key={c._id}
                  onClick={() => handleAddService(c)}
                  className="border p-2 rounded text-left hover:bg-gray-50"
                >
                  <p className="font-medium">{c.name}</p>
                  <p className="text-xs text-gray-500 capitalize">
                    {c.category}
                  </p>
                </button>
              ))}
            </div>

            {/* Pricing Inputs */}
            {selected.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">
                  Pricing
                </h4>
                <div className="space-y-2">
                  {selected.map((s, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-2"
                    >
                      <input
                        className="border p-2 rounded"
                        value={s.name}
                        disabled
                      />
                      <input
                        className="border p-2 rounded"
                        placeholder="Base Price"
                        onChange={(e) =>
                          setSelected((prev) =>
                            prev.map((item, idx) =>
                              idx === i
                                ? {
                                    ...item,
                                    basePrice: e.target.value,
                                  }
                                : item
                            )
                          )
                        }
                      />
                      <input
                        className="border p-2 rounded"
                        placeholder="Gross Price"
                        onChange={(e) =>
                          setSelected((prev) =>
                            prev.map((item, idx) =>
                              idx === i
                                ? {
                                    ...item,
                                    grossPrice: e.target.value,
                                  }
                                : item
                            )
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                disabled={loading || selected.length === 0}
                onClick={handleAssign}
                className="bg-orange-500 text-white px-6 py-2 rounded disabled:opacity-60"
              >
                {loading ? "Assigning..." : "Assign Services"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ======================
   Small Helper
   ====================== */
function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-500">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}
