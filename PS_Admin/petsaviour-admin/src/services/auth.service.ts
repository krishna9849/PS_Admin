import { api } from "./api";

export type AdminLoginResponse = {
  token: string;
  role: "admin";
};

export const adminLoginApi = async (payload: {
  email: string;
  password: string;
}): Promise<AdminLoginResponse> => {
  const res = await api.post("/auth/login", payload);

  // API.html contract check
  if (!res.data?.token || !res.data?.role) {
    throw new Error("Invalid login response");
  }

  return res.data;
};
