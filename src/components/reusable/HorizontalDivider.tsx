import { cn } from "@/lib/utils";

const HorizontalDivider = ({title, className}: {title: string; className?: string}) => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="h-[1px] w-full bg-gradient-to-l from-[#000] to-transparent" />
      <h1 className={cn("text-sm font-bold whitespace-nowrap", className)}>{title}</h1>
      <div className="h-[1px] w-full bg-gradient-to-r from-[#000] to-transparent" />
    </div>
  );
};

export default HorizontalDivider;
