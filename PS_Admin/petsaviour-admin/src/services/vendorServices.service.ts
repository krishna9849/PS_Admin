import { api } from "./api";

/* Catalog (nested categories) */
export const getServiceCatalog = async () => {
  const res = await api.get("/api/grooming/services/catalog");
  return res.data?.data?.categories || [];
};

/* Get vendor with services */
export const getVendorDetails = async (vendorId: string) => {
  const res = await api.get(`/api/grooming/vendors/${vendorId}`);
  return res.data?.data;
};

/* Assign services */
export const assignVendorServices = async (
  vendorId: string,
  services: {
    serviceId: string;
    basePrice: number;
    grossPrice: number;
  }[]
) => {
  return api.post(`/api/grooming/vendors/${vendorId}/services`, {
    services,
  });
};

/* Update service */
export const updateVendorService = async (
  vendorId: string,
  serviceId: string,
  payload: {
    basePrice?: number;
    grossPrice?: number;
    isActive?: boolean;
  }
) => {
  return api.patch(
    `/api/grooming/vendors/${vendorId}/services/${serviceId}`,
    payload
  );
};

/* Remove service */
export const removeVendorService = async (
  vendorId: string,
  serviceId: string
) => {
  return api.delete(
    `/api/grooming/vendors/${vendorId}/services/${serviceId}`);
};
