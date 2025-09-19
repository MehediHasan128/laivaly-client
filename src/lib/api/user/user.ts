import { baseApi } from "../baseApi/baseApi";

export const getUserProfile = () => {
  return baseApi({
    endPoints: `/users/me`,
    options: { method: "GET" },
  });
};

export const createCustomerAcoount = (customerData: object) => {
  return baseApi({
    endPoints: "/users/create-customer",
    options: { method: "POST", body: JSON.stringify(customerData) },
  });
};
