import {api} from "./api";

export const getApprovalRequests = async (status: string) => {
  const res = await api.get(`/api/approvals/requests?status=${status}`);
  return res.data;
};

export const approveRequest = async (
  approvalId: string
) => {
  return api.post("/api/admin/approvals/approve", {
    approvalId,
  });
};

export const rejectRequest = async (
  approvalId: string
) => {
  return api.post("/api/admin/approvals/reject", {
    approvalId,
  });
};
