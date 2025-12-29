import {api} from "./api";

/* ---------- LIST PLANS ---------- */
export const getSubscriptionPlans = async () => {
  const res = await api.get("/api/subscriptions/plans");
  return res.data;
};

/* ---------- CREATE PLAN ---------- */
export const createSubscriptionPlan = async (payload: {
  name: string;
  price: number;
  durationDays: number;
  commissionRate: number;
  benefits: string[];
}) => {
  const res = await api.post("/api/subscriptions/plans", payload);
  return res.data;
};

/* ---------- DELETE PLAN ---------- */
export const deleteSubscriptionPlan = async (planId: string) => {
  const res = await api.delete(`/api/subscriptions/plans/${planId}`);
  return res.data;
};
