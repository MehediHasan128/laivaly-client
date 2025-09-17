/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProductQueryParams } from "@/lib/api/products/products";
import { ReadonlyURLSearchParams } from "next/navigation";

export const filters = (defaultFilterValue: string, searchParams: Record<string, string>) => {
    const defaultFilter: TProductQueryParams = { field: "productFor", value: defaultFilterValue };

    const productFilters = searchParams ? Object.entries(searchParams).map(([field, value]) => ({field, value})) : [];

    const Filters: TProductQueryParams[] = [defaultFilter, ...productFilters];

    return Filters
}

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
