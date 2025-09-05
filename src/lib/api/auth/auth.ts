import { FieldValues } from "react-hook-form";
import { baseApi } from "../baseApi/api";

export const userLogin = (userCreadential: FieldValues) => {
  return baseApi({
    endPoints: "/auth/login",
    options: { method: "POST", body: JSON.stringify(userCreadential) },
  });
};

export const userLogout = () => {
  return baseApi({
    endPoints: "/auth/logout",
    options: { method: "POST" },
  });
};

export const resetPasswordLink = (userEmail: string) => {
  return baseApi({
    endPoints: "/auth/forget-password",
    options: { method: "POST", body: JSON.stringify({ userEmail }) },
  });
};

export const resetUserPassword = (resetPasswordData: object, token: string) => {
  return baseApi({
    endPoints: "/auth/reset-password",
    options: { method: "POST", body: JSON.stringify(resetPasswordData) },
    temporaryToken: token
  });
};
