import * as React from "react"

import { cn } from "@/lib/utils"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}


function Input({ icon, className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        `file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-gray-300 flex w-full min-w-0 rounded-lg border bg-transparent ${icon ? "px-12" : "px-3"} py-1.5 md:py-2.5 xl:py-3 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 text-sm`,
        "focus-visible:border-ring focus-visible:ring-ring/50 focus:border-blue-800",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }
