import Image from "next/image";

const DiscoverMoreProductCard = () => {
    return (
        <div>
            <div className="relative h-[250px] md:h-[400px] w-full">
                <Image src="/images/products/25.jpg" alt="product" quality={100} fill className="object-cover object-top" />
            </div>
            <div className="mt-2 space-y-2 px-1">
                <p className="text-xs font-semibold gray-text">Regular Fit Stretch Oxford Shirt</p>
                <p className="text-xs font-semibold"><span className="line-through">$79.50</span> <span>$39.99</span> <span className="text-red-700">49% off</span></p>
            </div>
        </div>
    );
};

export default DiscoverMoreProductCard;