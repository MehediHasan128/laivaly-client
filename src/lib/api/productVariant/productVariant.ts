import { baseApi } from "../baseApi/baseApi";

export const getProductVariant = (variantId: string) => {
  return baseApi({
    endPoints: `/variants/get-product-variant/${variantId}`,
    options: { method: "GET" },
  });
};
