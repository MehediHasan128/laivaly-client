import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TLVInputProps {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  setInputValue?: Dispatch<SetStateAction<string | null>>;
  defaultValue?: string;
  disabled?: boolean;
  label?: string;
  required?: boolean;
}

const LVInput = ({
  type,
  name,
  placeholder,
  className,
  setInputValue,
  defaultValue,
  disabled,
  label,
  required
}: TLVInputProps) => {
  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      <Controller
        name={name}
        defaultValue={defaultValue ?? ""}
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => {
              field.onChange(e);
              setInputValue?.(e.target.value);
            }}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={cn(
              "outline-none border focus:border-black w-full rounded font-medium",
              className
            )}
          />
        )}
      />
    </div>
  );
};

export default LVInput;
