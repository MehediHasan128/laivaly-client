import { cn } from "@/lib/utils";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Eye } from "lucide-react";

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
  icon?: ReactNode
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
  required,
  icon
}: TLVInputProps) => {
  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      <div className="relative">
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
        <div className="absolute top-0 right-0 flex justify-center items-center h-full px-5">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default LVInput;
