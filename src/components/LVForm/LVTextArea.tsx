import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";

interface TLVTextAreaProps {
  name: string;
  placeholder: string;
  className?: string;
  setInputValue?: Dispatch<SetStateAction<string | null>>;
  label?: string;
  required?: boolean;
}

const LVTextArea = ({ name, placeholder, className, label, required }: TLVTextAreaProps) => {
  return (
    <div className="space-y-2">
      {label && <Label className="font-semibold">{label}<span className="text-red-600">{required && "*"}</span></Label>}
      <Controller
        name={name}
        render={({ field }) => (
          <Textarea
            {...field}
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

export default LVTextArea;
