"use client";

import { useEffect, useState } from "react";
import {
  getApprovalRequests,
  approveRequest,
  rejectRequest,
} from "../../../services/approval.service";

type ApprovalRequest = {
  _id: string;
  vendor: string;
  type: string;
  action: string;
  payload: Record<string, any>;
  status: "pending" | "approved" | "rejected";
  requestedBy: string;
  createdAt: string;
};

export default function AdminApprovalsPage() {
  const [requests, setRequests] = useState<ApprovalRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadApprovals = async () => {
    try {
      setLoading(true);
      const res = await getApprovalRequests();
      setRequests(res.requests || []);
    } catch {
      setError("Failed to load approval requests");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApprovals();
  }, []);

  const handleApprove = async (id: string) => {
    if (!confirm("Approve this request?")) return;
    await approveRequest(id);
    loadApprovals();
  };

  const handleReject = async (id: string) => {
    if (!confirm("Reject this request?")) return;
    await rejectRequest(id);
    loadApprovals();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">
        Approval Requests
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded">
          {error}
        </div>
      )}

      <div className="bg-white rounded shadow overflow-x-auto">
        {loading ? (
          <p className="p-6">Loading...</p>
        ) : requests.length === 0 ? (
          <p className="p-6 text-gray-500">
            No pending approvals
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-left">
              <tr>
                <th className="p-3">Type</th>
                <th className="p-3">Action</th>
                <th className="p-3">Vendor</th>
                <th className="p-3">Payload</th>
                <th className="p-3">Requested At</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((r) => (
                <tr key={r._id} className="border-t">
                  <td className="p-3 capitalize">
                    {r.type.replace("_", " ")}
                  </td>
                  <td className="p-3 capitalize">
                    {r.action}
                  </td>
                  <td className="p-3 text-xs">
                    {r.vendor}
                  </td>
                  <td className="p-3 text-xs">
                    <pre className="bg-gray-100 p-2 rounded">
                      {JSON.stringify(r.payload, null, 2)}
                    </pre>
                  </td>
                  <td className="p-3">
                    {new Date(
                      r.createdAt
                    ).toLocaleString()}
                  </td>
                  <td className="p-3 space-x-2">
                    {r.status === "pending" ? (
                      <>
                        <button
                          onClick={() =>
                            handleApprove(r._id)
                          }
                          className="px-3 py-1 bg-green-500 text-white rounded text-xs"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() =>
                            handleReject(r._id)
                          }
                          className="px-3 py-1 bg-red-500 text-white rounded text-xs"
                        >
                          Reject
                        </button>
                      </>
                    ) : (
                      <span className="text-gray-500">
                        {r.status}
                      </span>
                    )}
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
