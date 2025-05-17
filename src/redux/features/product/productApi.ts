import { baseApi } from "@/redux/api/baseApi";

export type TQueryParams = {
  field: string;
  value: boolean | React.Key;
};

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (productData) => ({
        url: '/products/add-product',
        method: 'POST',
        body: productData
      })
    }),
    getAllProduct: builder.query({
      query: ([args]) => {
        const params = new URLSearchParams();
        if (params) {
          args.forEach((item: TQueryParams) => {
            params.append(item.field, item.value as string);
          });
        }

        return {
          url: `/products`,
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res) => {
        return {
          data: res?.data,
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (params) => ({
        url: `/products/product/${params}`,
        method: "GET",
      }),
    }),
    getSimillerProduct: builder.query({
      query: ([audience, subCategory, currentProductId]) => ({
        url: `/products/products/similer-product?audience=${audience}&subCategory=${subCategory}&currentProductId=${currentProductId}`,
        method: 'GET'
      })
    })
  }),
});

export const { useAddProductMutation, useGetAllProductQuery, useGetSingleProductQuery, useGetSimillerProductQuery } = productApi;
