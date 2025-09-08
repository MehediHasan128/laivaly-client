import { baseApi } from "../baseApi/api";

export const getAllProducts = () => {
  return baseApi({
    endPoints: `/products`,
    options: { method: "GET" },
  });
}