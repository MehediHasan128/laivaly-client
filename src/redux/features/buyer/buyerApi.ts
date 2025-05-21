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
    })
  }),
});

export const { useGetBuyerInfoFromDbQuery } = buyerApi;