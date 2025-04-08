import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

type TSelectProps = {
    selectTitle: string;
    options: {
        value: string;
        label: string;
    }[]
}

const SelectWrapper = ({selectTitle, options}: TSelectProps) => {
  return (
    <Select>
      <SelectTrigger className="bg-transparent w-32">
        <SelectValue placeholder={selectTitle} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {
            options?.map((option) => (
                <SelectItem value={option.value}>{option.label}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectWrapper;
