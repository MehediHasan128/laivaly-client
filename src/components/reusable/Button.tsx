import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TButtonProps {
    buttonTitle: string;
    buttonIcon?: ReactNode;
    className?: string;
}

const Button = ({buttonTitle, buttonIcon, className}: TButtonProps) => {
    return (
        <button className={cn("border cursor-pointer rounded-md font-medium active:scale-95 duration-700 text-sm md:text-base px-3 md:px-5 py-1.5 md:py-3", className)}>
            <div className="flex items-center gap-1.5">
                {buttonTitle} <span>{buttonIcon}</span>
            </div>
        </button>
    );
};

export default Button;