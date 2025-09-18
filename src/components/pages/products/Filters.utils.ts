/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProductQueryParams } from "@/lib/api/products/products";
import { ReadonlyURLSearchParams } from "next/navigation";

export const filters = (
  defauldField: "productFor" | "season" | "productGroup" | "searchTerm",
  defaultFilterValue: string,
  searchParams: Record<string, string>
) => {
  const defaultFilter: TProductQueryParams = {
    field: defauldField,
    value: defaultFilterValue,
  };

  const productFilters = searchParams
    ? Object.entries(searchParams).map(([field, value]) => ({
        field: field as "productFor" | "season" | "productGroup" | "searchTerm",
        value,
      }))
    : [];

  const Filters: TProductQueryParams[] = [defaultFilter, ...productFilters];

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
