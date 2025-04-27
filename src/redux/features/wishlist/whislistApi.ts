import { baseApi } from "@/redux/api/baseApi";

const whislistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addWhislist: builder.mutation({
        query: (data) => ({
            url: '/whislist/create-whislist',
            method: 'POST',
            body: data
        })
    })
  }),
});

export const { useAddWhislistMutation } = whislistApi;