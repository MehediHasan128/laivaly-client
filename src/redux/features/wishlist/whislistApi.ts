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
    })
  }),
});

export const { useAddWhislistMutation, useGetAllWhislistProductQuery } = whislistApi;