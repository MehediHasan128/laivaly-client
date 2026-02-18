/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProductQueryParams } from "@/lib/api/products/products";
import { ReadonlyURLSearchParams } from "next/navigation";

export const filters = (
  searchParams: Record<string, string | string[] | undefined>
) => {

  const productFilters = searchParams
    ? Object.entries(searchParams).map(([field, value]) => ({
        field: field as "productFor" | "season" | "productGroup" | "searchTerm" | "productCategory",
        value,
      }))
    : [];

  const Filters: TProductQueryParams[] = [...productFilters];


  return Filters;
};

export const filtersProducts = (
  router: any,
  searchParams: ReadonlyURLSearchParams,
  field: string,
  value: string
) => {
  const params = new URLSearchParams(searchParams.toString());

  if (value) {
    params.set(field, value);
  } else {
    params.delete(field);
  }

  router.push(`?${params.toString()}`);
};

export const clearFilter = () => {};
