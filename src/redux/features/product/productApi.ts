import { baseApi } from "@/redux/api/baseApi";

export type TQueryParams = {
  field: string;
  value: boolean | React.Key;
};

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (args) => {
        
        const params = new URLSearchParams();
        if(params){
          args.forEach((item: TQueryParams) => {
            params.append(item.field, item.value as string)
          })
        }

        return {
          url: "/products",
          method: "GET",
          params: params
        };
      },
      transformResponse: (res) => {
        return {
          data: res?.data
        }
      }
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
