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
  field: string;
  options: {
    value: string;
    label: string;
  }[];
}

const sortedData = [
  {
    title: "Sorted By",
    field: "sort",
    options: [
      { label: "Price Low To High", value: "price" },
      { label: "Price High To Low", value: "-price" },
    ],
  },
];

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
                filtersProducts(router, searchParams, filter.field, value)
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
        <div className="flex items-center gap-3 lg:gap-5 gray-text xl:w-[25%] 2xl:w-[15%]">
          <h1 className="whitespace-nowrap">
            {totalProducts ? totalProducts : 0} item
            <span>{(totalProducts as number) > 1 ? "s" : ""}</span>
          </h1>
          <span className="border-l-2 h-5" />
          <div className="w-full">
            {sortedData?.map((item) => (
              <Select key={item?.title} onValueChange={(value) =>
                filtersProducts(router, searchParams, item.field, value)
              }>
                <SelectTrigger className="hover:border-black">
                  <SelectValue placeholder="Sorted By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {
                      item?.options?.map((option) => (
                        <SelectItem key={option.label} value={option.value}>{option.label}</SelectItem>
                      ))
                    }
                  </SelectGroup>
                </SelectContent>
              </Select>
            ))}
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
