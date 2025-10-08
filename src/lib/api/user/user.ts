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

export const uploadProfilePicture = (formData: FormData) => {
  return baseApi({
    endPoints: "/users/add-profile-picture",
    options: { method: "POST", body: formData },
  });
};
