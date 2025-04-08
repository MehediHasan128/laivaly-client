const HeaderTitle = ({title, colorTitle, subTitle}: {title: string; colorTitle?: string; subTitle: string;}) => {
    return (
        <div className="text-center space-y-4 md:w-[80%] lg:w-[50%] mx-auto">
            <h1 className="text-3xl lg:text-5xl font-semibold">{title} <span className="text-[#31473A]">{colorTitle}</span></h1>
            <p className="text-gray-600 font-medium text-xs md:text-sm lg:text-lg">{subTitle}</p>
        </div>
    );
};

export default HeaderTitle;