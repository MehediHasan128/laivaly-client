import { baseApi } from "@/redux/api/baseApi";

const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProductIntoCart: builder.mutation({
        query: (productInfo) => ({
            url: '/carts/create-cart',
            method: 'POST',
            body: productInfo
        })
    }),
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

export const { useAddProductIntoCartMutation, useGetAllProductFromCartQuery } = cartApi;
