"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "../../../store/auth.store";
import {
  getServiceCatalog,
  getVendorDetails,
  assignVendorServices,
  updateVendorService,
  removeVendorService,
} from "../../../services/vendorServices.service";

export default function VendorServicesPage() {
  const role = useAuthStore((s) => s.role);
  const authVendorId = useAuthStore((s) => s.vendorId);
  const searchParams = useSearchParams();

  const vendorId =
    role === "admin"
      ? searchParams.get("vendorId")
      : authVendorId;

  const [vendor, setVendor] = useState<any>(null);
  const [catalog, setCatalog] = useState<any[]>([]);
  const [selected, setSelected] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const canDelete = role === "admin" || role === "vendor";
  const canToggle = role !== "staff";

  useEffect(() => {
    if (!vendorId) return;

    const load = async () => {
      const [v, c] = await Promise.all([
        getVendorDetails(vendorId),
        getServiceCatalog(),
      ]);
      setVendor(v);
      setCatalog(c);
      setLoading(false);
    };

    load();
  }, [vendorId]);

  if (!vendorId) return <p>Vendor context missing</p>;
  if (loading) return <p>Loading services...</p>;

  const assignedIds = vendor.services.map((s: any) => s.serviceId);

  /* ---------- ADD SERVICE ---------- */
  const addService = (service: any) => {
    if (selected.find((s) => s.id === service.id)) return;
    setSelected([...selected, { ...service, basePrice: "", grossPrice: "" }]);
  };

  const submitAssign = async () => {
    await assignVendorServices(
      vendorId,
      selected.map((s) => ({
        serviceId: s.id,
        basePrice: Number(s.basePrice),
        grossPrice: Number(s.grossPrice),
      }))
    );
    window.location.reload();
  };

  /* ---------- UPDATE ---------- */
  const saveUpdate = async (s: any) => {
    await updateVendorService(vendorId, s._id, {
      basePrice: s.basePrice,
      grossPrice: s.grossPrice,
    });
    alert("Updated");
  };

  const toggleStatus = async (s: any) => {
    await updateVendorService(vendorId, s._id, {
      isActive: !s.isActive,
    });
    window.location.reload();
  };

  const deleteService = async (s: any) => {
    if (!confirm("Remove this service?")) return;
    await removeVendorService(vendorId, s._id);
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Vendor Services</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          + Add Service
        </button>
      </div>

      {/* Assigned Services */}
      <div className="bg-white border rounded shadow">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="p-3 text-left">Service</th>
              <th className="p-3">Base</th>
              <th className="p-3">Gross</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {vendor.services.map((s: any) => (
              <tr key={s._id} className="border-b">
                <td className="p-3">{s.name}</td>

                <td className="p-3">
                  <input
                    defaultValue={s.basePrice}
                    onChange={(e) => (s.basePrice = e.target.value)}
                    className="border p-1 w-20"
                  />
                </td>

                <td className="p-3">
                  <input
                    defaultValue={s.grossPrice}
                    onChange={(e) => (s.grossPrice = e.target.value)}
                    className="border p-1 w-20"
                  />
                </td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      s.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {s.isActive ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => saveUpdate(s)}
                    className="text-blue-600"
                  >
                    Save
                  </button>

                  {canToggle && (
                    <button
                      onClick={() => toggleStatus(s)}
                      className="text-orange-600"
                    >
                      Toggle
                    </button>
                  )}

                  {canDelete && (
                    <button
                      onClick={() => deleteService(s)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 w-full max-w-4xl rounded space-y-4">
            <h2 className="font-semibold">Add Services</h2>

            {catalog.map((cat) => (
              <div key={cat.category.key}>
                <h3 className="font-medium text-orange-600">
                  {cat.category.name}
                </h3>

                <div className="grid grid-cols-2 gap-3 mt-2">
                  {cat.services.map((s: any) => (
                    <button
                      key={s.id}
                      disabled={assignedIds.includes(s.id)}
                      onClick={() => addService(s)}
                      className={`border p-3 rounded text-left ${
                        assignedIds.includes(s.id)
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <p className="font-medium">{s.name}</p>
                      <p className="text-xs text-gray-500">
                        {s.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {selected.length > 0 && (
              <>
                <h3 className="font-medium">Pricing</h3>
                {selected.map((s, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2">
                    <input value={s.name} disabled className="border p-2" />
                    <input
                      placeholder="Base Price"
                      onChange={(e) => (s.basePrice = e.target.value)}
                      className="border p-2"
                    />
                    <input
                      placeholder="Gross Price"
                      onChange={(e) => (s.grossPrice = e.target.value)}
                      className="border p-2"
                    />
                  </div>
                ))}
              </>
            )}

            <div className="flex justify-end gap-3">
              <button onClick={() => setOpen(false)}>Cancel</button>
              <button
                onClick={submitAssign}
                className="bg-orange-500 text-white px-6 py-2 rounded"
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
