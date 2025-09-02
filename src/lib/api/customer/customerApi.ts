import { FieldValues } from "react-hook-form";
import { baseApi } from "../baseApi/api";

export const updateCustomerProfile = (
  updateUserData: FieldValues,
  customerId: string
) => {
    console.log(updateUserData, customerId);
  return baseApi({
    endPoints: `/customer/update-profile/${customerId}`,
    options: { method: "PATCH", body: JSON.stringify(updateUserData) },
  });
};
