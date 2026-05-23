import { baseApi } from "../baseApi/baseApi";

export const getAllInformationFromDB = () => {
  return baseApi({
    endPoints: "/admin-dashboard",
    options: { method: "GET" },
  });
};