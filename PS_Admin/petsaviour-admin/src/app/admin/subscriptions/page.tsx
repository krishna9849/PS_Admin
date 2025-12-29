"use client";

import { useEffect, useState } from "react";
import {
  getSubscriptionPlans,
  createSubscriptionPlan,
  deleteSubscriptionPlan,
} from "../../../services/subscription.service";
import { toastSuccess, toastError } from "../../../utils/toast";
import {
  TrashIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

/* ================= TYPES ================= */

type Plan = {
  id: string;
  name: string;
  durationDays: number;
  price: number;
  commissionRate: number;
  benefits: string[];
};

/* ================= PAGE ================= */

export default function AdminSubscriptionsPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  /* ---------- UI STATE ---------- */
  const [openAdd, setOpenAdd] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);
  const [openBenefits, setOpenBenefits] = useState<string | null>(null);

  /* ---------- FORM STATE ---------- */
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [durationDays, setDurationDays] = useState("");
  const [commissionRate, setCommissionRate] = useState("");
  const [benefits, setBenefits] = useState("");

  /* ================= LOAD PLANS ================= */

  const loadPlans = async () => {
    try {
      setLoading(true);
      const res = await getSubscriptionPlans();
      setPlans(res.plans || []);
    } catch (err: any) {
      toastError(err?.message || "Failed to load subscription plans");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPlans();
  }, []);

  /* ================= CREATE PLAN ================= */

  const handleCreate = async () => {
    if (!name || !price || !durationDays || !commissionRate) {
      toastError("All fields are required");
      return;
    }

    try {
      await createSubscriptionPlan({
        name,
        price: Number(price),
        durationDays: Number(durationDays),
        commissionRate: Number(commissionRate),
        benefits: benefits
          ? benefits.split(",").map((b) => b.trim())
          : [],
      });

      toastSuccess("Subscription plan created successfully 🐾");

      setOpenAdd(false);
      setName("");
      setPrice("");
      setDurationDays("");
      setCommissionRate("");
      setBenefits("");

      loadPlans();
    } catch (err: any) {
      toastError(err?.message || "Failed to create subscription plan");
    }
  };

  /* ================= DELETE PLAN ================= */

  const handleDelete = async () => {
    if (!confirmDelete) return;

    try {
      await deleteSubscriptionPlan(confirmDelete);
      toastSuccess("Subscription plan deleted");
      setConfirmDelete(null);
      loadPlans();
    } catch (err: any) {
      toastError(err?.message || "Failed to delete subscription plan");
    }
  };

  /* ================= RENDER ================= */

  return (
    <div className="space-y-6">
      {/* ---------- HEADER ---------- */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold flex items-center gap-2">
          🐾 Subscription Plans
        </h1>

        <button
          onClick={() => setOpenAdd(true)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
        >
          + Add Plan
        </button>
      </div>

      {/* ---------- TABLE ---------- */}
      <div className="bg-white rounded shadow overflow-x-auto">
        {loading ? (
          <p className="p-6">Loading...</p>
        ) : plans.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            🐶 No subscription plans found
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Plan</th>
                <th className="p-3 text-center">Duration</th>
                <th className="p-3 text-center">Price</th>
                <th className="p-3 text-center">Commission</th>
                <th className="p-3 text-center">Benefits</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {plans.map((p) => (
                <tr
                  key={p.id}
                  className="border-t hover:bg-orange-50/40"
                >
                  <td className="p-3 font-medium">{p.name}</td>

                  <td className="p-3 text-center">
                    {p.durationDays} days
                  </td>

                  <td className="p-3 text-center">
                    ₹{p.price}
                  </td>

                  <td className="p-3 text-center">
                    {p.commissionRate}%
                  </td>

                  {/* BENEFITS */}
                  <td className="p-3 text-center">
                    {p.benefits.length === 0 ? (
                      <span className="text-gray-400 text-xs">
                        No benefits
                      </span>
                    ) : (
                      <>
                        <button
                          onClick={() =>
                            setOpenBenefits(
                              openBenefits === p.id ? null : p.id
                            )
                          }
                          className="inline-flex items-center gap-1 text-orange-600 text-xs"
                        >
                          View ({p.benefits.length})
                          {openBenefits === p.id ? (
                            <ChevronUpIcon className="h-4 w-4" />
                          ) : (
                            <ChevronDownIcon className="h-4 w-4" />
                          )}
                        </button>

                        {openBenefits === p.id && (
                          <div className="mt-2 bg-orange-50 border rounded p-2 text-left text-xs">
                            <ul className="list-disc ml-4 space-y-1">
                              {p.benefits.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    )}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-3 text-center">
                    <button
                      onClick={() => setConfirmDelete(p.id)}
                      className="p-2 rounded hover:bg-red-50 text-red-600"
                      title="Delete plan"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ---------- DELETE CONFIRM ---------- */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 w-full max-w-sm space-y-4">
            <h3 className="text-lg font-medium">
              Delete Subscription Plan?
            </h3>
            <p className="text-sm text-gray-600">
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- ADD PLAN MODAL ---------- */}
      {openAdd && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded p-6 space-y-4">
            <h2 className="text-lg font-semibold">
              🐾 Add Subscription Plan
            </h2>

            <input
              className="border p-2 rounded w-full"
              placeholder="Plan Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="number"
              className="border p-2 rounded w-full"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="number"
              className="border p-2 rounded w-full"
              placeholder="Duration (days)"
              value={durationDays}
              onChange={(e) => setDurationDays(e.target.value)}
            />

            <input
              type="number"
              className="border p-2 rounded w-full"
              placeholder="Commission Rate (%)"
              value={commissionRate}
              onChange={(e) => setCommissionRate(e.target.value)}
            />

            <input
              className="border p-2 rounded w-full"
              placeholder="Benefits (comma separated)"
              value={benefits}
              onChange={(e) => setBenefits(e.target.value)}
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenAdd(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                className="bg-orange-500 text-white px-6 py-2 rounded"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
