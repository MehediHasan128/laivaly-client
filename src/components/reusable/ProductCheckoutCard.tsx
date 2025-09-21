import { TCartProduct } from "@/types/types";
import Image from "next/image";
import { GetColorName } from 'hex-color-to-color-name';

const ProductCheckoutCard = ({
  checkoutProduct,
}: {
  checkoutProduct: TCartProduct;
}) => {

    const selectedColorName = GetColorName(checkoutProduct?.selectedVariant.color as string);

  return (
    <div className="flex gap-2">
      <div className="relative h-[180px] w-[35%] md:w-[15%] lg:w-[40%] xl:w-[30%]">
        <Image
          src={checkoutProduct?.productThumbnail}
          alt={checkoutProduct?.productTitle}
          fill
          quality={100}
        />
      </div>
      <div className="text-sm font-medium space-y-2">
        <h1>{checkoutProduct?.productTitle}</h1>
        <p className="text-gray-600">
          {selectedColorName} |{" "}
          {checkoutProduct?.selectedVariant.size}
        </p>
        <p>Qty: {checkoutProduct?.quantity}</p>
        <p>Price: ${checkoutProduct?.totalPrice}</p>
      </div>
    </div>
  );
};

export default ProductCheckoutCard;
