import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TCartProduct } from "@/types/types";

const CartProductCard = ({ product }: { product: TCartProduct; }) => {
  return (
    <div className="border-b py-5 flex flex-col lg:flex-row justify-between gap-5">
      {/* Image and product Info */}
      <div className="flex items-start gap-3 h-48 md:h-72 lg:h-60 lg:w-[60%] xl:w-[50%]">
        <div className="relative w-[45%] md:w-[30%] h-full">
          <Image
            src={product?.productThumbnai}
            alt={product?.productThumbnai}
            fill
          />
        </div>

        <div className="text-xs md:text-sm font-semibold flex flex-col justify-between items-start h-full">
          <div className="space-y-1">
            <h1>{product?.title}</h1>
            <p className="text-gray-600">SKU: {product?.productSKU}</p>
            <p className="text-gray-600">Price: ${product?.price}</p>
            <p className="text-gray-600">
              {product?.color} | {product?.size}
            </p>
          </div>
          <div className="space-y-1">
            {product?.discount !== 0 && (
              <p className="flex items-center gap-1.5 text-red-800">
                <span>
                  <CircleCheck className="size-4 md:size-5" />
                </span>{" "}
                {product?.discount}% Off Select Men Styles
              </p>
            )}
            <p className="text-gray-600">
              <span className="text-black">In Stock:</span> Ships in 1-2
              business days
            </p>
          </div>
          <div className="hidden md:flex gap-5 text-gray-600">
            <button className="hover:underline cursor-pointer">Edit</button>
            <span>|</span>
            <button className="hover:underline cursor-pointer">Remove</button>
            <span>|</span>
            <button className="hover:underline cursor-pointer">
              Move To Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Product quantity and Price section */}
      <div className="flex flex-1 justify-between items-center lg:items-start lg:pl-5 xl:pl-32">
        {/* Quantity */}
        <div className="text-xs md:text-sm font-semibold space-y-1">
          <h1>Quantity</h1>
          <Select>
            <SelectTrigger className="w-[80px] md:w-[120px]">
              <SelectValue placeholder={product.quantity} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="6">6</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        {/* Price */}
        <div className="text-xs md:text-sm font-semibold space-y-1">
          <h1>Total Price</h1>
          <p className="text-gray-600">
            ${(product?.price * product?.quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="lg:hidden text-xs md:text-sm font-semibold flex gap-5 text-gray-600">
        <button className="hover:underline cursor-pointer">Edit</button>
        <span>|</span>
        <button className="hover:underline cursor-pointer">Remove</button>
        <span>|</span>
        <button className="hover:underline cursor-pointer">
          Move To Wishlist
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
