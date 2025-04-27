import { baseApi } from "@/redux/api/baseApi";

const whislistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addWhislist: builder.mutation({
        query: (data) => ({
            url: '/whislist/create-whislist',
            method: 'POST',
            body: data
        })
    }),
    getAllWhislistProduct: builder.query({
      query: (userId) => ({
        url: `/whislist/${userId}`,
        method: 'GET'
      }),
      transformResponse: (res) => {
        return {
          data: res?.data
        }
      }
    }),
    getSingleProductFromWhislist: builder.query({
      query: ([userId, productId]) => ({
        url: `/whislist/products/single-product?userId=${userId}&productId=${productId}`,
        method: 'GET'
      })
    }),
    deleteProductFromWhislist: builder.mutation({
      query: (params) => ({
        url: `/whislist/delete-whislist/${params}`,
        method: 'DELETE'
      })
    })
  }),
});

export const { useAddWhislistMutation, useGetAllWhislistProductQuery, useGetSingleProductFromWhislistQuery, useDeleteProductFromWhislistMutation } = whislistApi;