// import { api } from "./api"; // your axios instance

// export const getServiceCatalog = async () => {
//   const res = await api.get("/api/grooming/services/catalog");
//   return res.data.data;
// };

// export const getServiceCategories = async () => {
//   const res = await api.get("/api/grooming/service-categories");
//   return res.data.data;
// };



import { api } from "./api";

export const getServiceCatalog = async () => {
  const res = await api.get("/api/grooming/services/catalog");

  console.log("CATALOG RAW RESPONSE 👉", res.data);

  // ✅ normalize safely
  const categories =
    res.data?.data?.categories || res.data?.categories || [];

  return categories;
};

export const getServiceCategories = async () => {
  const res = await api.get("/api/grooming/service-categories");
  return res.data.data;
};