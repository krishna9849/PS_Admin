import {api} from "./api";

export type StaffRole =
  | "vendor_admin"
  | "groomer"
  | "trainer"
  | "phlebotomist";

export type Staff = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: StaffRole;
  active: boolean;
};

/* =========================
   GET STAFF (LIST)
========================= */
export const getVendorStaff = async (vendorId: string) => {
  const res = await api.get(
    `/api/grooming/vendors/${vendorId}/staff`
  );
  return res.data.staff as Staff[];
};

/* =========================
   CREATE STAFF
========================= */
export const createStaff = async (
  vendorId: string,
  payload: {
    name: string;
    email: string;
    phone?: string;
    role: StaffRole;
    password: string;
  }
) => {
  const res = await api.post(
    `/api/grooming/vendors/${vendorId}/staff`,
    payload
  );
  return res.data;
};

/* =========================
   ACTIVATE / DEACTIVATE
========================= */
export const activateStatus = async (
  vendorId: string,
  staffId: string,
  active: boolean
) => {
  const res = await api.patch(
    `/api/grooming/vendors/${vendorId}/staff/${staffId}`,
    { active }
  );
  return res.data;
};



export const updateStaff = async (
  vendorId: string,
  staffId: string,
  payload: {
    name?: string;
    phone?: string;
    role?: StaffRole;
    active?: boolean;
  }
) => {
  const res = await api.patch(
    `/api/grooming/vendors/${vendorId}/staff/${staffId}`,
    payload
  );
  return res.data;
};
