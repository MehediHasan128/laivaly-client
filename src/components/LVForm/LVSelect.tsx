import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";
import { Label } from "../ui/label";

interface TLVSelectProps {
  name: string;
  placeholder?: string;
  className?: string;
  setInputValue?: Dispatch<SetStateAction<string | null>>;
  defaultValue?: string | null;
  options: { label: string; value: string }[];
  label?: string;
  disabled?: boolean;
  required?: boolean;
}

const LVSelect = ({
  name,
  placeholder,
  className,
  setInputValue,
  defaultValue,
  options,
  label,
  disabled,
  required
}: TLVSelectProps) => {
  return (
    <div className="space-y-2">
      {label && <Label className="font-semibold">{label}<span className="text-red-600">{required && "*"}</span></Label>}
      <Controller
        name={name}
        defaultValue={defaultValue ?? ""}
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={(val) => {
              field.onChange(val);
              setInputValue?.(val);
            }}
            disabled={disabled}
          >
            <SelectTrigger
              className={cn(
                "outline-none border focus:border-black w-full rounded font-medium",
                className
              )}
            >
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
    </div>
  );
};

export default LVSelect;
