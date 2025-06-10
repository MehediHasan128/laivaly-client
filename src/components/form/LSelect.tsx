import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Dispatch, SetStateAction } from "react";

type TSelectProps = {
  name: string;
  placeholder: string;
  className?: string;
  options: {
    value: string;
    label: string;
  }[];
  setValue?: Dispatch<SetStateAction<string | null>>;
  disabled?: boolean;
  defaultValue?: string
};

const LSelect = ({ name, placeholder, className, options, setValue, disabled, defaultValue }: TSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Select {...field} onValueChange={(val) => {
            field.onChange(val);
            setValue?.(val)
          }} defaultValue={defaultValue}>
            <SelectTrigger className={className} disabled={options?.length === 0 || disabled}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {options?.map((option) => (
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
