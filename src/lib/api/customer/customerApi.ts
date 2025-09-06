import { FieldValues } from "react-hook-form";
import { baseApi } from "../baseApi/api";

export const updateCustomerProfile = (
  updateUserData: FieldValues,
  customerId: string
) => {
  return baseApi({
    endPoints: `/customer/update-profile/${customerId}`,
    options: { method: "PATCH", body: JSON.stringify(updateUserData) },
  });
};

export const addShippingAddress = (
  shippingAddress: FieldValues,
  customerId: string
) => {
  return baseApi({
    endPoints: `/customer/add-shipping-address/${customerId}`,
    options: { method: "PATCH", body: JSON.stringify({shippingAddress}) },
  });
};
