import { baseApi } from "../baseApi/api";

export const getUserProfile = () => {
  return baseApi({
    endPoints: "/users/me",
    options: { method: "GET" },
  });
};
