import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { Input } from "../ui/input";

interface TLVInputProps {
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  setInputValue?: Dispatch<SetStateAction<string | null>>;
}

const LVInput = ({ type, name, placeholder, className, setInputValue }: TLVInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <Input
            {...field}
            onChange={(e) => setInputValue?.(e.target.value)}
            type={type}
            placeholder={placeholder}
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
