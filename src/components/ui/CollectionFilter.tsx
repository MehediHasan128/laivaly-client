import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./select";

const CollectionFilter = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-5 lg:my-8">
      <div>
        <Select>
          <SelectTrigger className="bg-transparent">
            <SelectValue placeholder="Price" />
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

export default CollectionFilter;
