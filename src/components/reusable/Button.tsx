import { cn } from "@/lib/utils";

interface TButtonProps {
    buttonTitle: string;
    className?: string;
}

const Button = ({buttonTitle, className}: TButtonProps) => {
    return (
        <button className={cn("cursor-pointer border border-black px-5 md:px-8 py-2 md:py-2.5 rounded-full font-medium bg-black text-secondary hover:border-black hover:bg-white hover:text-black duration-700 text-sm md:text-base", className)}>
            {buttonTitle}
        </button>
    );
};

export default Button;