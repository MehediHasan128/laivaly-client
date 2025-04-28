import { baseApi } from "@/redux/api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUserComment: builder.mutation({
        query: ([data, productId]) => ({
            url: `/reviews/add-review/${productId}`,
            method: 'PATCH',
            body: data
        })
    })
  }),
});

export const { useAddUserCommentMutation } = reviewApi;
