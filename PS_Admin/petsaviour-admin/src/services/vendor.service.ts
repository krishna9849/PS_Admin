import { api } from "./api";

export type VendorPayload = {
  name: string;
  email: string;
  phone: string;
};

export type Vendor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "ACTIVE" | "INACTIVE";
};

export const getVendors = async (): Promise<Vendor[]> => {
  const res = await api.get("/vendors");
  return res.data || [];
};

export const createVendor = async (payload: VendorPayload) => {
  const res = await api.post("/vendors", payload);
  return res.data;
};

export const updateVendor = async (
  id: string,
  payload: Partial<VendorPayload & { status: Vendor["status"] }>
) => {
  const res = await api.put(`/vendors/${id}`, payload);
  return res.data;
};

export const deleteVendor = async (id: string) => {
  const res = await api.delete(`/vendors/${id}`);
  return res.data;
};
