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
    | "shippingCharge"
    | "tax"
    | "grandTotal"
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

export const placeOrderByCOD = (
  data: Pick<
    TOrderData,
    | "userId"
    | "orderItems"
    | "shippingCharge"
    | "grandTotal"
    | "shippingMethod"
    | "shippingAddress"
    | "paymentMethod"
  >
) => {
  return baseApi({
    endPoints: "/orders/cash-on-delivery",
    options: { method: "POST", body: JSON.stringify(data) },
  });
};

export const getOrdersByUserId = () => {
  return baseApi({
    endPoints: "/orders/my",
    options: { method: "GET" },
  });
};

export const canceledOrder = (orderId: string) => {
  return baseApi({
    endPoints: `/orders/cancel-order/${orderId}`,
    options: { method: "PATCH" },
  });
};
