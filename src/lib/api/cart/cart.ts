import { TCartProduct } from "@/types/types";
import { baseApi } from "../baseApi/baseApi";

export const addProductToCart = (productData: TCartProduct) => {
  return baseApi({
    endPoints: '/cart/add-product',
    options: { method: "PATCH", body: JSON.stringify(productData) },
  });
};