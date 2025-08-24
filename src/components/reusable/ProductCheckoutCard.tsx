import Image from "next/image";

interface TProductCheckoutCard {
    id: string;
    productThumbnai: string;
    title: string;
    productSKU: string;
    price: number;
    color: string;
    size: string;
    quantity: number;
}


const ProductCheckoutCard = ({checkoutProduct}: {checkoutProduct: TProductCheckoutCard}) => {
    return (
        <div className="flex gap-2">
            <div className="relative h-[150px] w-[40%] md:w-[15%] lg:w-[40%] xl:w-[30%]">
                <Image src={checkoutProduct?.productThumbnai} alt={checkoutProduct?.title} fill quality={100}  />
            </div>
            <div className="text-sm font-medium space-y-1">
                <h1>{checkoutProduct?.title}</h1>
                <p className="text-gray-600">{checkoutProduct?.color} | {checkoutProduct?.size}</p>
                <p>Qty: {checkoutProduct?.quantity}</p>
                <p>Price: ${checkoutProduct?.price}</p>
            </div>
        </div>
    );
};

export default ProductCheckoutCard;