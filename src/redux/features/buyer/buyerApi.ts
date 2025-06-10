import { baseApi } from "@/redux/api/baseApi";

const buyerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBuyerInfoFromDb: builder.query({
      query: (userId) => ({
        url: `/buyers/${userId}`,
        method: "GET",
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
        method: "PATCH",
        body: shippingAddress,
      }),
    }),
    updateShippingAddress: builder.mutation({
      query: ([userId, addressId, updatedhippingAddress]) => ({
        url: `/buyers/update-shipping-address/${userId}?addressId=${addressId}`,
        method: "PATCH",
        body: updatedhippingAddress,
      }),
    }),
    deleteShippingAddress: builder.mutation({
      query: ([userId, addressId]) => ({
        url: `/buyers/delete-shipping-address/${userId}?addressId=${addressId}`,
        method: "DELETE"
      }),
    }),
  }),
});

export const {
  useGetBuyerInfoFromDbQuery,
  useAddShippingAddressMutation,
  useUpdateShippingAddressMutation,
  useDeleteShippingAddressMutation
} = buyerApi;
