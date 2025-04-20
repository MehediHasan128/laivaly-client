import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type TSelectProps = {
  name: string;
  placeholder: string;
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
};

const LSelect = ({ name, placeholder, className, options }: TSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Select {...field} name={name}>
            <SelectTrigger className={className}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        )}
      />
    </>
  );
};

export default LSelect;
