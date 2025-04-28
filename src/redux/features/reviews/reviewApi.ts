import { baseApi } from "@/redux/api/baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUserComment: builder.mutation({
        query: ([data, productId]) => ({
            url: `/reviews/add-review/${productId}`,
            method: 'PATCH',
            body: data
        })
    }),
    getAllUserReview: builder.query({
        query: (params) => ({
            url: `/reviews/${params}`,
            method: 'GET'
        })
    })
  }),
});

export const { useAddUserCommentMutation, useGetAllUserReviewQuery } = reviewApi;
