import { Dispatch, SetStateAction } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type TSelectProps = {
  selectTitle: string;
  options: {
    value: string;
    label: string;
  }[];
  setValue?: Dispatch<SetStateAction<string | null>>;
  className?: string;
};

const SelectWrapper = ({ selectTitle, options, setValue, className }: TSelectProps) => {
  return (
    <Select onValueChange={(val => setValue?.(val))}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={selectTitle} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options?.map((option) => (
            <SelectItem value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectWrapper;
