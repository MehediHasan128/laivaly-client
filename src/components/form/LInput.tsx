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
};

const LInput = ({
  type,
  name,
  placeholder,
  icon,
  className,
  setValue,
}: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => {
              field.onChange(e);
              setValue?.(e.target.value);
            }}
            type={type}
            name={name}
            placeholder={placeholder}
            icon={icon}
            className={className}
          />
        )}
      />
    </>
  );
};

export default LInput;
