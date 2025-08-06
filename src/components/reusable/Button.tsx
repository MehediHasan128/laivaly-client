interface TButtonProps {
    buttonTitle: string;
}

const Button = ({buttonTitle}: TButtonProps) => {
    return (
        <button className="cursor-pointer border border-primary px-8 py-2.5 rounded-full font-medium bg-primary text-secondary hover:border-primary hover:bg-white hover:text-black duration-700">
            {buttonTitle}
        </button>
    );
};

export default Button;