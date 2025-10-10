import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";
import { Controller } from "react-hook-form";
import { Textarea } from "../ui/textarea";

interface TLVTextAreaProps {
  name: string;
  placeholder: string;
  className?: string;
  setInputValue?: Dispatch<SetStateAction<string | null>>;
}

const LVTextArea = ({
  name,
  placeholder,
  className,
}: TLVTextAreaProps) => {
  return (
    <>
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
    </>
  );
};

export default LVTextArea;
