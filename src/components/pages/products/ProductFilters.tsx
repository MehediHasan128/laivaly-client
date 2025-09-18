"use client";

import { SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import SidebarFilters from "./SidebarFilters";
import { useRouter, useSearchParams } from "next/navigation";
import { filtersProducts } from "./Filters.utils";

interface TProductFiltersProps {
  title: string;
  value: string;
  options: {
    value: string;
    label: string;
  }[];
}

const ProductFilters = ({
  filters,
  totalProducts,
}: {
  filters: TProductFiltersProps[];
  totalProducts?: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <div className="sticky top-0 z-10 bg-white border-b p-5 md:p-8">
      <div className="hidden md:flex justify-between items-center">
        <div className="flex gap-3 xl:w-[30%]">
          {filters.map((filter, index) => (
            <Select
              key={index}
              onValueChange={(value) =>
                filtersProducts(router, searchParams, filter.value, value)
              }
            >
              <SelectTrigger className="hover:border-black">
                <SelectValue
                  placeholder={filter.title}
                  className="text-black"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {filter?.options?.map((option) => (
                    <SelectItem key={option?.label} value={option?.value}>
                      {option?.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ))}
        </div>

        <div>
          <button className="btn px-5">Clear Filter</button>
        </div>

        <div className="flex items-center gap-3 lg:gap-5 gray-text xl:w-[25%] 2xl:w-[20%]">
          <h1 className="whitespace-nowrap">
            {totalProducts ? totalProducts : 0} item
            <span>{(totalProducts as number) > 1 ? "s" : ""}</span>
          </h1>
          <span className="border-l-2 h-5" />
          <h1 className="whitespace-nowrap">Sort By</h1>
          <div className="w-full">
            <Select>
              <SelectTrigger className="hover:border-black">
                <SelectValue placeholder="Sorted By" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="newArrival">New Arrival</SelectItem>
                  <SelectItem value="low-high">Price Low To High</SelectItem>
                  <SelectItem value="high-low">Price High To Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Filter for mobile devices */}
      <div className="flex justify-between items-center md:hidden font-semibold text-gray-600">
        <h1 className="whitespace-nowrap">
          {totalProducts ? totalProducts : 0} item
          <span>{(totalProducts as number) > 1 ? "s" : ""}</span>
        </h1>

        <SidebarFilters filters={filters}>
          <div className="flex items-center gap-2">
            <h1>Filters</h1>
            <SlidersHorizontal className="size-5" />
          </div>
        </SidebarFilters>
      </div>
    </div>
  );
};

export default ProductFilters;
