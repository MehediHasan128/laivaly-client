import { TCartProduct, TOrderData } from "@/types/types";
import { baseApi } from "../baseApi/baseApi";

export const buySingleProduct = (productData: TCartProduct) => {
  return baseApi({
    endPoints: "/orders/check-out",
    options: { method: "POST", body: JSON.stringify(productData) },
  });
};

export const storeOrderData = (
  orderData: Pick<
    TOrderData,
    | "userId"
    | "orderItems"
    | "subTotal"
    | "shippingCharge"
    | "tax"
    | "estimatedTotal"
    | "shippingMethod"
    | "shippingAddress"
  >
) => {
  return baseApi({
    endPoints: "/orders/create",
    options: { method: "POST", body: JSON.stringify(orderData) },
  });
};

export const removeOrderData = (name: string) => {
  return baseApi({
    endPoints: "/remove",
    options: { method: "POST", body: JSON.stringify({ cookieName: name }) },
  });
};
