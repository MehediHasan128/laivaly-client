import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ReactNode } from "react";

const TooltipWrapper = ({child, name}: {child: ReactNode; name: string;}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{child}</TooltipTrigger>
        <TooltipContent className="px-2 py-1 rounded text-sm font-semibold">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipWrapper;
