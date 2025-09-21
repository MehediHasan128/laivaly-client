import { TCartProduct } from "@/types/types";
import { baseApi } from "../baseApi/baseApi";

export const buySingleProduct = (productData: TCartProduct) => {
  return baseApi({
    endPoints: '/orders/check-out',
    options: { method: "POST", body: JSON.stringify(productData) },
  });
};