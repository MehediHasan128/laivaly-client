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
    orderCashOnDelivery: builder.mutation({
      query: (productData) => ({
        url: '/orders/cash-on-delivery',
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
    getUserOrdersFromDB: builder.query({
      query: (userId) => ({
        url: `/orders/user/${userId}`,
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

export const { useGetAllOrdersFromDBQuery, useCreateStripeCheckoutSessionMutation, useGetUserOrdersFromDBQuery, useOrderCashOnDeliveryMutation } = orderApi;
