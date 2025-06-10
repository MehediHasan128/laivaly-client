import { Controller } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";

type TDatePickerProps = {
  name: string;
  className?: string;
  defaultValue?: Date | undefined;
  disabled?: boolean;
};

const LDatePicker = ({ name, className, defaultValue, disabled }: TDatePickerProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger
              className={className}
              asChild
              disabled={disabled}
            >
              <Button
                variant={"outline"}
                className={cn(
                  "w-full pl-3 text-left font-medium",
                  !field.value && "text-muted-foreground"
                )}
              >
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  defaultValue ? <><span>{format(defaultValue, "PPP")}</span></> : <><span>Pick your date of birth</span></>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
    </>
  );
};

export default LDatePicker;
