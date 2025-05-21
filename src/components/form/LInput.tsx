import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Dispatch, SetStateAction } from "react";

type TInputProps = {
  type: string;
  name: string;
  placeholder: string;
  icon: boolean;
  className?: string;
  setValue?: Dispatch<SetStateAction<string | null>>;
  isArray?: boolean;
  defaultValue?: string;
  disabled?: boolean
};

const LInput = ({
  type,
  name,
  placeholder,
  icon,
  className,
  setValue,
  isArray,
  defaultValue,
  disabled
}: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => {
              if (!isArray) {
                field.onChange(e);
                setValue?.(e.target.value);
              } else {
                const rawValue = e.target.value;
                const processedValue = rawValue
                  .split(",")
                  .map((item) => item.trim());
                field.onChange(processedValue);
                setValue?.(rawValue);
              }
            }}
            type={type}
            name={name}
            placeholder={placeholder}
            icon={icon}
            className={className}
            defaultValue={defaultValue}
            disabled={disabled}
          />
        )}
      />
    </>
  );
};

export default LInput;
