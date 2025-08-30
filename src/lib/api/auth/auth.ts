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
    options: {method: "POST"}
  })
}
