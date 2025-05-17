import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrdersFromDB: builder.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      transformResponse: (res) => {
        return {
          data: res?.data,
        };
      },
    }),
  }),
});

export const { useGetAllOrdersFromDBQuery } = orderApi;
