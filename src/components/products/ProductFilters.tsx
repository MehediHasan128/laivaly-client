import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const ProductFilters = () => {
    return (
        <div className="border-b p-5 md:p-10 xl:p-12">
        <div>
          <Select>
            <SelectTrigger className="border-black">
              <SelectValue placeholder="Category" className="text-black" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>            
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    );
};

export default ProductFilters;