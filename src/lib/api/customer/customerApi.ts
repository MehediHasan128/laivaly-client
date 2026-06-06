import { FieldValues } from "react-hook-form";
import { baseApi } from "../baseApi/baseApi";

export interface TCustomerQueryParams {
  field: "gender" | "searchTerm" | "limit";
  value: string | string[] | undefined;
}

export const updateCustomerProfile = (
  updateUserData: FieldValues,
  customerId: string,
) => {
  return baseApi({
    endPoints: `/customer/update-profile/${customerId}`,
    options: { method: "PATCH", body: JSON.stringify(updateUserData) },
  });
};

export const addShippingAddress = (
  shippingAddress: FieldValues,
  customerId: string,
) => {
  return baseApi({
    endPoints: `/customer/add-shipping-address/${customerId}`,
    options: { method: "PATCH", body: JSON.stringify({ shippingAddress }) },
  });
};

export const getShippingAddress = (customerId: string) => {
  return baseApi({
    endPoints: `/customer/shipping-address/${customerId}`,
    options: { method: "GET" },
  });
};

export const updateShippingAddress = (
  updatedAddressInfo: object,
  customerId: string,
  addressId: string,
) => {
  return baseApi({
    endPoints: `/customer/update-shipping-address/${customerId}?addressId=${addressId}`,
    options: { method: "PATCH", body: JSON.stringify(updatedAddressInfo) },
  });
};

export const changeDefaultAddress = (customerId: string, addressId: string) => {
  return baseApi({
    endPoints: `/customer/change-default-address/${customerId}?addressId=${addressId}`,
    options: { method: "PATCH" },
  });
};

export const deleteShippingAddress = (
  customerId: string,
  addressId: string,
) => {
  return baseApi({
    endPoints: `/customer/delete-shipping-address/${customerId}?addressId=${addressId}`,
    options: { method: "DELETE" },
  });
};

export const getAllCustomers = (args?: TCustomerQueryParams[]) => {

  const params = new URLSearchParams();

  if (params) {
    args?.forEach((item: TCustomerQueryParams) => { 
      params.append(item.field, item.value as string);
    })
  }

  return baseApi({
    endPoints: `/customer?${params}`,
    options: { method: "GET" },
  });
};
