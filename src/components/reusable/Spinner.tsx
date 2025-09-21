import { cn } from "@/lib/utils";

const Spinner = ({
  className,
  isDark = true,
}: {
  className?: string;
  isDark?: boolean;
}) => {
  return (
    <div
      className={cn(
        `size-5 animate-spin rounded-full border-2 ${
          isDark ? "border-white" : "border-black"
        } border-t-transparent`,
        className
      )}
    />
  );
};

export default Spinner;
