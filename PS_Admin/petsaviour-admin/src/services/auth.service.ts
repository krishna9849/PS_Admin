import { api } from "./api";

export type LoginPayload = {
  email: string;
  password: string;
};

export const loginApi = async (payload: LoginPayload) => {
  const res = await api.post("/auth/login", payload);

  console.log("loginres" , res)
  return {
    token: res.data?.token ?? null,
    user: res.data?.user ?? null,
  };
};
