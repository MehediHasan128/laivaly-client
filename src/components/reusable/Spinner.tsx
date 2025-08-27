import { cn } from "@/lib/utils";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "size-6 animate-spin rounded-full border-2 border-white border-t-transparent",
        className
      )}
    />
  );
};

export default Spinner;
