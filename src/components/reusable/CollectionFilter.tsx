import SelectWrapper from "./SelectWrapper";

const priceOptions = [
  { value: "5.00-10.00", label: "5.00 - 10.00" },
  { value: "10.00-20.00", label: "10.00 - 20.00" },
  { value: "20.00-30.00", label: "20.00 - 30.00" },
  { value: "30.00-40.00", label: "30.00 - 40.00" },
];

const sizeOptions = [
  { value: "xs", label: "XS" },
  { value: "s", label: "S" },
  { value: "m", label: "M" },
  { value: "l", label: "L" },
  { value: "xl", label: "XL" },
  { value: "xxl", label: "XXL" },
];

const CollectionFilter = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-3 lg:p-5">
      <div className="flex">
        <SelectWrapper selectTitle="Price" options={priceOptions} />
        <SelectWrapper selectTitle="Size" options={sizeOptions} />
      </div>
    </div>
  );
};

export default CollectionFilter;
