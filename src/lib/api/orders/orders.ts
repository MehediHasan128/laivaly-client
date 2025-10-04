import { TCartProduct } from "@/types/cart.type";
import { baseApi } from "../baseApi/baseApi";
import { TOrderData } from "@/types/order.type";

export const buySingleProduct = (productData: TCartProduct) => {
  return baseApi({
    endPoints: "/orders/check-out",
    options: { method: "POST", body: JSON.stringify(productData) },
  });
};

export const storeOrderData = (orderData: TOrderData) => {
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

export const placeOrderByCOD = (data: TOrderData) => {
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

export const getSingleOrdersByUserId = (orderId: string) => {
  return baseApi({
    endPoints: `/orders/my/${orderId}`,
    options: { method: "GET" },
  });
};

export const canceledOrder = (orderId: string) => {
  return baseApi({
    endPoints: `/orders/cancel-order/${orderId}`,
    options: { method: "PATCH" },
  });
};
