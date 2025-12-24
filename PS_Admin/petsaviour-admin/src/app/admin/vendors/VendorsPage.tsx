"use client";

import { useEffect, useState } from "react";
import {
  getVendors,
  createVendor,
  updateVendor,
  deleteVendor,
  Vendor,
} from "../../../services/vendor.service";


import TableSkeleton from "../../../components/ui/TableSkeleton";
import EmptyState from "../../../components/ui/EmptyState";

export default function VendorsPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);

  // create form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");

  const loadVendors = async () => {
    setLoading(true);
    const data = await getVendors();
    setVendors(data);
    setLoading(false);
  };

  useEffect(() => {
    loadVendors();
  }, []);

  const handleCreate = async () => {
    if (!name || !email || !phone) return;
    await createVendor({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
    loadVendors();
  };

  const startEdit = (v: Vendor) => {
    setEditingId(v.id);
    setEditName(v.name);
    setEditEmail(v.email);
    setEditPhone(v.phone);
  };

  const saveEdit = async (id: string) => {
    await updateVendor(id, {
      name: editName,
      email: editEmail,
      phone: editPhone,
    });
    setEditingId(null);
    loadVendors();
  };

  const toggleStatus = async (v: Vendor) => {
    await updateVendor(v.id, {
      status: v.status === "ACTIVE" ? "INACTIVE" : "ACTIVE",
    });
    loadVendors();
  };

  const handleDelete = async (id: string) => {
    await deleteVendor(id);
    loadVendors();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Vendors</h1>

      {/* CREATE */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-medium mb-4">Add Vendor</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input className="border p-2" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="border p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="border p-2" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handleCreate} className="bg-orange-500 text-white rounded px-4 py-2">
            Create
          </button>
        </div>
      </div>

      {/* LIST */}
      <div className="bg-white p-6 rounded shadow">
        {loading ? (
          <TableSkeleton />
        ) : vendors.length === 0 ? (
          <EmptyState title="No vendors" description="Create your first vendor." />
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b text-left">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {vendors.map((v) => (
                <tr key={v.id} className="border-b">
                  <td>
                    {editingId === v.id ? (
                      <input className="border p-1" value={editName} onChange={(e) => setEditName(e.target.value)} />
                    ) : (
                      v.name
                    )}
                  </td>

                  <td>
                    {editingId === v.id ? (
                      <input className="border p-1" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} />
                    ) : (
                      v.email
                    )}
                  </td>

                  <td>
                    {editingId === v.id ? (
                      <input className="border p-1" value={editPhone} onChange={(e) => setEditPhone(e.target.value)} />
                    ) : (
                      v.phone
                    )}
                  </td>

                  <td>
                    <button
                      onClick={() => toggleStatus(v)}
                      className={`px-3 py-1 rounded text-sm ${
                        v.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {v.status}
                    </button>
                  </td>

                  <td className="text-right space-x-2">
                    {editingId === v.id ? (
                      <button onClick={() => saveEdit(v.id)} className="text-blue-600">
                        Save
                      </button>
                    ) : (
                      <button onClick={() => startEdit(v)} className="text-blue-600">
                        Edit
                      </button>
                    )}

                    <button onClick={() => handleDelete(v.id)} className="text-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}