import { TCreateCartData } from "@/types/cart.type";
import { baseApi } from "../baseApi/baseApi";

export const addProductToCart = (productData: TCreateCartData) => {
  return baseApi({
    endPoints: "/cart/add-product",
    options: { method: "PATCH", body: JSON.stringify(productData) },
  });
};

export const getAllProductFromCart = () => {
  return baseApi({
    endPoints: "/cart",
    options: { method: "GET" },
  });
};

export const deleteProductFromCart = (cartId: string) => {
  return baseApi({
    endPoints: `/cart/remove-product/${cartId}`,
    options: { method: "DELETE" },
  });
};
