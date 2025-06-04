import { baseApi } from "@/redux/api/baseApi";

const buyerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBuyerInfoFromDb: builder.query({
      query: (userId) => ({
        url: `/buyers/${userId}`,
        method: 'GET'
      }),
      transformResponse: (res) => {
        return {
          data: res?.data,
        };
      },
    }),
    addShippingAddress: builder.mutation({
      query: ([userId, shippingAddress]) => ({
        url: `/buyers/add-shipping-address/${userId}`,
        method: 'PATCH',
        body: shippingAddress
      })
    })
  }),
});

export const { useGetBuyerInfoFromDbQuery, useAddShippingAddressMutation } = buyerApi;