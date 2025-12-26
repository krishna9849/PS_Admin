// import { api } from "./api";
// import { useAuthStore } from "../store/auth.store";
// export type AdminLoginResponse = {
//   token: string;
//   role: "admin";
// };

// export const adminLoginApi = async (payload: {
//   email: string;
//   password: string;
// }): Promise<AdminLoginResponse> => {
//   const res = await api.post("/auth/login", payload);
// console.log("res" , res)
//   // API.html contract check
//   if (!res.data?.token || !res.data?.role) {
//     throw new Error("Invalid login response");
//   }
//   useAuthStore.getState().setAuth(res.data.token, res.data.role);
//   console.log("storing.....res.data" , res)
//   return res.data;
// };



import { api } from "./api";

export const adminLogin = async (
  email: string,
  password: string
) => {
  const res = await api.post("/auth/login", {
    email,
    password,
  });
  return res.data;
};

export const staffVendorLogin = async (
  vendorId: string,
  email: string,
  password: string
) => {
  const res = await api.post(
    "/api/grooming/vendors/staff/login",
    {
      vendorId,
      email,
      password,
    }
  );
  return res.data;
};
