import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface TLVInputProps {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  setInputValue?: Dispatch<SetStateAction<string | null>>;
  defaultValue?: string;
  options?: { label: string; value: string }[];
}

const LVInput = ({
  type,
  name,
  placeholder,
  className,
  setInputValue,
  defaultValue,
  options,
}: TLVInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) =>
          type === "select" ? (
            <Select onValueChange={(val) => {
              setInputValue?.(val);
            }}>
              <SelectTrigger
                className={cn(
                  "outline-none border focus:border-black w-full rounded font-medium",
                  className
                )}
              >
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="h-[300px]">
                <SelectGroup>
                  {options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <Input
              {...field}
              onChange={(e) => setInputValue?.(e.target.value)}
              type={type}
              placeholder={placeholder}
              defaultValue={defaultValue}
              className={cn(
                "outline-none border focus:border-black w-full rounded font-medium",
                className
              )}
            />
          )
        }
      />
    </div>
  );
};

export default LVInput;
