import Image from "next/image";
import { GetColorName } from "hex-color-to-color-name";
import { TOrderItems } from "@/types/order.type";

const ProductCheckoutCard = ({ orderItems }: { orderItems: TOrderItems }) => {
  const { title, price, discount, productImages, quantity, color, size } =
    orderItems;

  const disCountPrice = price - price * (discount / 100);

  const selectedColorName = GetColorName(color as string);

  return (
    <div className="flex gap-2">
      <div className="relative h-[140px] w-[25%] md:w-[15%] lg:w-[25%]">
        <Image src={productImages} alt={title} quality={100} fill />
      </div>
      <div className="text-sm font-medium space-y-2">
        <h1>{title}</h1>
        <p className="text-gray-600">
          {selectedColorName} | {size}
        </p>
        <p>Qty: {quantity}</p>
        <p>
          Unit Price: ${discount === 0 ? price : disCountPrice}{" "}
          <span className="line-through text-gray-600">
            {discount > 0 && <>${`${price}`}</>}
          </span>
        </p>
        <p>
          Total Price: $
          {discount === 0
            ? (price * quantity).toFixed(2)
            : (disCountPrice * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCheckoutCard;
