import { baseApi } from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProductFromCart: builder.query({
      query: (params) => ({
        url: `/carts/${params}`,
        method: 'GET'
      }),
      transformResponse: (res) => {
        return {
          data: res?.data,
        };
      },
    }),
  }),
});

export const { useGetAllProductFromCartQuery } = cartApi;
