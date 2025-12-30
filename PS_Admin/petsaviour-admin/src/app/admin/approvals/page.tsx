"use client";

import { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../../../utils/toast";
import { getApprovalRequests } from "../../../services/approval.service";

/* =========================
   TYPES (BASED ON REAL API)
========================= */

type ApprovalRequest = {
  _id: string;
  type: string;
  action: "create" | "update" | "delete";
  status: string;
  createdAt: string;
  review: {
    diff: {
      field: string;
      before?: any;
      after?: any;
    }[];
    entities: {
      vendor?: {
        name: string;
        email: string;
        phone: string;
      };
      service?: {
        name: string;
        category: string;
        grossPrice: number;
        currency: string;
      };
      staff?: {
        name: string;
        role: string;
      };
    };
  };
};

type ApprovalUI = {
  id: string;
  title: string;
  summary: string;
  createdAt: string;
  action: string;
  entities: ApprovalRequest["review"]["entities"];
  diff: ApprovalRequest["review"]["diff"];
};

/* =========================
   HELPERS
========================= */

function mapApproval(req: ApprovalRequest): ApprovalUI {
  const entity = req.review.entities;

  let title = "Approval Request";
  let summary = "Update requested";

  if (entity.service) {
    title = `${req.action.toUpperCase()} Service`;
    summary = `Service "${entity.service.name}" requested`;
  } else if (entity.vendor) {
    title = `${req.action.toUpperCase()} Vendor`;
    summary = `Vendor "${entity.vendor.name}" updated details`;
  } else if (entity.staff) {
    title = `${req.action.toUpperCase()} Staff`;
    summary = `Staff "${entity.staff.name}" updated`;
  }

  return {
    id: req._id,
    title,
    summary,
    createdAt: req.createdAt,
    action: req.action,
    entities: entity,
    diff: req.review.diff,
  };
}

/* =========================
   PAGE
========================= */

export default function AdminApprovalsPage() {
  const [items, setItems] = useState<ApprovalUI[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  /* ---------- LOAD ---------- */
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await getApprovalRequests("pending");

        // IMPORTANT FIX
        const list = Array.isArray(res?.requests)
          ? res.requests
          : [];

        setItems(list.map(mapApproval));
      } catch {
        toastError("Failed to load approval requests");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  /* ---------- ACTIONS (STUB) ---------- */
  const handleApprove = (id: string) => {
    toastSuccess("Approved (API to be wired)");
  };

  const handleReject = (id: string) => {
    toastError("Rejected (API to be wired)");
  };

  /* ---------- UI ---------- */
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Approvals</h1>

      {loading && <p>Loading...</p>}

      {!loading && items.length === 0 && (
        <p className="text-gray-500">No pending approvals</p>
      )}

      {items.map((item) => {
        const isOpen = expanded === item.id;

        return (
          <div
            key={item.id}
            className="border rounded bg-white shadow-sm"
          >
            {/* HEADER */}
            <div
              className="p-4 flex justify-between items-center cursor-pointer"
              onClick={() =>
                setExpanded(isOpen ? null : item.id)
              }
            >
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-sm text-gray-600">
                  {item.summary}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApprove(item.id);
                  }}
                  className="px-3 py-1 text-sm bg-green-500 text-white rounded"
                >
                  Approve
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReject(item.id);
                  }}
                  className="px-3 py-1 text-sm bg-red-500 text-white rounded"
                >
                  Reject
                </button>
              </div>
            </div>

            {/* EXPANDED */}
            {isOpen && (
              <div className="border-t bg-gray-50 p-4 space-y-4">
                {/* ENTITY DETAILS */}
                {item.entities.service && (
                  <div>
                    <h3 className="font-medium mb-1">
                      Service Details
                    </h3>
                    <p>Name: {item.entities.service.name}</p>
                    <p>
                      Category:{" "}
                      {item.entities.service.category}
                    </p>
                    <p>
                      Price: ₹
                      {item.entities.service.grossPrice}{" "}
                      {item.entities.service.currency}
                    </p>
                  </div>
                )}

                {item.entities.vendor && (
                  <div>
                    <h3 className="font-medium mb-1">
                      Vendor Details
                    </h3>
                    <p>Name: {item.entities.vendor.name}</p>
                    <p>Email: {item.entities.vendor.email}</p>
                    <p>Phone: {item.entities.vendor.phone}</p>
                  </div>
                )}

                {/* DIFF */}
                <div>
                  <h3 className="font-medium mb-1">
                    Changes
                  </h3>
                  {item.diff.length === 0 ? (
                    <p className="text-gray-500 text-sm">
                      No field-level changes
                    </p>
                  ) : (
                    <ul className="text-sm space-y-1">
                      {item.diff.map((d, i) => (
                        <li key={i}>
                          <span className="font-medium">
                            {d.field}
                          </span>{" "}
                          → {String(d.after)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
