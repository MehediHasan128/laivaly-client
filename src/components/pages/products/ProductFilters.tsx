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

interface TProductFiltersProps {
  title: string;
  options: {
    value: string;
    label: string;
  }[];
}

const ProductFilters = ({ filters }: { filters: TProductFiltersProps[] }) => {
  return (
    <div className="border-b p-5 md:p-10 xl:p-12">
      <div className="hidden md:flex justify-between items-center">
        <div className="flex gap-3 xl:w-[30%]">
          {filters.map((filter, index) => (
            <Select key={index}>
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
        <div className="flex items-center gap-3 lg:gap-5 gray-text xl:w-[25%] 2xl:w-[20%]">
          <h1 className="whitespace-nowrap">1404 items</h1>
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
        <h1 className="whitespace-nowrap">1404 items</h1>

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
