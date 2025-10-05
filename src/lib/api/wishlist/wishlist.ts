import { baseApi } from "../baseApi/baseApi";

export const addProductToWishlist = (productId: string) => {
  return baseApi({
    endPoints: `/wishlist/add-product/${productId}`,
    options: { method: "PATCH" },
  });
};