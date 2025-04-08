import { ReactNode } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

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
