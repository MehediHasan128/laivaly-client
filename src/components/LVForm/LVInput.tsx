import { cn } from "@/lib/utils";
import { Controller } from "react-hook-form";

interface TLVInputProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

const LVInput = ({ type, name, placeholder, className }: TLVInputProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => (
          <input
            {...field}
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
