import { baseApi } from "../baseApi/baseApi";

export const addProductToWishlist = (productId: string) => {
  return baseApi({
    endPoints: `/wishlist/add-product/${productId}`,
    options: { method: "PATCH" },
  });
};

export const getAllProductFromWishlist = () => {
  return baseApi({
    endPoints: '/wishlist',
    options: { method: "GET" },
  });
};

export const productExistToWishlist = (productId: string) => {
  return baseApi({
    endPoints: `/wishlist/exist-product/${productId}`,
    options: { method: "GET" },
  });
};