import { api } from "./api";

export type Vendor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "ACTIVE" | "INACTIVE";
};

export type CreateVendorPayload = {
  name: string;
  email: string;
  phone: string;
};

/**
 * ADMIN – Onboard Vendor
 * POST /api/grooming/vendors
 */
export const createVendor = async (
  payload: CreateVendorPayload
): Promise<Vendor> => {
  const res = await api.post("/api/grooming/vendors", payload);
  return res.data;
};

/**
 * ADMIN – List Vendors
 * GET /api/grooming/vendors
 */
export const getVendors = async (): Promise<Vendor[]> => {
  const res = await api.get("/api/grooming/vendors");
  return res.data || [];
};

/**
 * ADMIN – Get Vendor by ID
 * GET /api/grooming/vendors/{vendorId}
 */
export const getVendorById = async (
  vendorId: string
): Promise<Vendor> => {
  const res = await api.get(`/api/grooming/vendors/${vendorId}`);
  return res.data;
};

/**
 * ADMIN – Update Vendor
 * PATCH /api/grooming/vendors/{vendorId}
 */
export const updateVendor = async (
  vendorId: string,
  payload: Partial<CreateVendorPayload & { status: Vendor["status"] }>
): Promise<Vendor> => {
  const res = await api.patch(
    `/api/grooming/vendors/${vendorId}`,
    payload
  );
  return res.data;
};

/**
 * ADMIN – Delete Vendor (if supported)
 */
export const deleteVendor = async (vendorId: string) => {
  const res = await api.delete(
    `/api/grooming/vendors/${vendorId}`
  );
  return res.data;
};
