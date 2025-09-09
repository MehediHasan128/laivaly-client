import { baseApi } from "../baseApi/api";

export const getAllProducts = () => {
  return baseApi({
    endPoints: `/products`,
    options: { method: "GET" },
  });
};

export const getSingleProducts = (productId: string) => {
  return baseApi({
    endPoints: `/products/${productId}`,
    options: { method: "GET" },
  });
}