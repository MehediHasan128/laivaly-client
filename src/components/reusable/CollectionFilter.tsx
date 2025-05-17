import { Dispatch, SetStateAction } from "react";
import SelectWrapper from "./SelectWrapper";

const priceOptions = [
  { value: "price", label: "Low to High" },
  { value: "-price", label: "High to Low" }
];

// const sizeOptions = [
//   { value: "xs", label: "XS" },
//   { value: "s", label: "S" },
//   { value: "m", label: "M" },
//   { value: "l", label: "L" },
//   { value: "xl", label: "XL" },
//   { value: "xxl", label: "XXL" },
// ];

const CollectionFilter = ({setPriceRange}: {setPriceRange: Dispatch<SetStateAction<string | null>>}) => {
  return (
    <div className="w-full">
      <div>
        <SelectWrapper selectTitle="Price range" options={priceOptions} setValue={setPriceRange} className="border flex gap-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default CollectionFilter;
