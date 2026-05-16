/* eslint-disable @typescript-eslint/no-explicit-any */
import { capitalizeFirstLetter } from "@/utils";
import { MdFilterList } from "react-icons/md";
import FilterDrawer from "./FilterDrawer";

const ProductFilters = (produstsFilterProps: any) => {
  const { searchParams } = produstsFilterProps;
  const { productFor, category, subCategory } = searchParams;

  const paramsArray = Object.values(searchParams);

  return (
    <div className="sticky top-[84px] z-50 bg-white border-t py-7 px-20 flex justify-between items-center">
      <div>
        <p className="font-medium text-sm">{`All ${!category && !subCategory ? "Products" : ""} ${subCategory ? capitalizeFirstLetter(subCategory?.[0]) : ""} ${category ? capitalizeFirstLetter(category) : ""} for ${capitalizeFirstLetter(productFor as string)}`}</p>
      </div>
      <div>
        <FilterDrawer params={paramsArray as string[]} productFor={productFor}>
          <div className="flex items-center gap-2 border rounded-full px-5 py-2 text-sm font-medium cursor-pointer active:scale-95 duration-300">
            Filter
            <MdFilterList className="text-lg" />
          </div>
        </FilterDrawer>
      </div>
    </div>
  );
};

export default ProductFilters;
