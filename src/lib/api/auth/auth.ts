import { FieldValues } from "react-hook-form";
import { baseApi } from "../baseApi/api";

export const userLogin = (userCreadential: FieldValues) => {
  return baseApi({
    endPoints: "/auth/login",
    options: { method: "POST", body: JSON.stringify(userCreadential) },
  });
};
