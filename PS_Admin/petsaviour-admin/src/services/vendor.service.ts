import { api } from "./api";

export type Vendor = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "ACTIVE" | "INACTIVE";
};
export type VendorType = "GROOMING" | "BOARDING" | "VETERINARY";

export type GetVendorsResponse = {
  vendors: {
    vendor: {
      _id: string;
      name: string;
      email: string;
      phone: string;
      status: string;
    };
    services: any[];
  }[];
  page: number;
  limit: number;
  total: number;
};

export type CreateVendorPayload = {
  name: string;
  email: string;
  phone: string;

  // optional fields allowed by API at onboarding
  vendorType?: VendorType;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
};

/**
 * ADMIN – Onboard Vendor
 * POST /api/grooming/vendors
 */
export const createVendor = async (
  payload: CreateVendorPayload
) => {
  const res = await api.post("/grooming/vendors", payload);
  return res.data;
};


/**
 * ADMIN – List Vendors
 * GET /api/grooming/vendors
 */
export const getVendors = async (): Promise<GetVendorsResponse> => {
  const res = await api.get("/api/cart/vendors/by-address");
  return res.data.data || [];
};


/**
 * ADMIN – Get Vendor by ID
 * GET /api/grooming/vendors/{vendorId}
 */
// export const getVendorById = async (
//   vendorId: string
// ): Promise<Vendor> => {
//   const res = await api.get(`/api/grooming/vendors/${vendorId}`);
//   return res.data;
// };
export const getVendorById = async (vendorId: string) => {
  const res = await api.get(`/api/grooming/vendors/${vendorId}`);
  return res.data.data;
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


// Get master catalog
export const getServiceCatalog = async () => {
  const res = await api.get("/api/grooming/services/catalog");
  return res.data.data;
};

// Assign services to vendor
export const assignVendorServices = async (
  vendorId: string,
  services: {
    serviceId: string;
    basePrice: number;
    grossPrice: number;
  }[]
) => {
  const res = await api.post(
    `/api/grooming/vendors/${vendorId}/services`,
    services
  );
  return res.data;
};
