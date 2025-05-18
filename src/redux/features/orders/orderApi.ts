import { baseApi } from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStripeCheckoutSession: builder.mutation({
      query: (productData) => ({
        url: '/orders/create-stripe-checkout-session',
        method: 'POST',
        body: productData
      })
    }),
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

export const { useGetAllOrdersFromDBQuery, useCreateStripeCheckoutSessionMutation } = orderApi;
