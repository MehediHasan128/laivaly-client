import { baseApi } from "../baseApi/baseApi";

export interface TProductQueryParams {
  field:
    | "productFor"
    | "season"
    | "productGroup"
    | "productCategory"
    | "productSubCategory"
    | "searchTerm"
    | "limit";
  value: string | string[] | undefined;
}

export const getAllProducts = (args?: TProductQueryParams[]) => {
  const params = new URLSearchParams();

  if (params) {
    args?.forEach((item: TProductQueryParams) => {
      params.append(item.field, item.value as string);
    });
  }

  return baseApi({
    endPoints: `/products?${params}`,
    options: { method: "GET" },
  });
};

export const getSingleProducts = (productId: string) => {
  return baseApi({
    endPoints: `/products/${productId}`,
    options: { method: "GET" },
  });
};
