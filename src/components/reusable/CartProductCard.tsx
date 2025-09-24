"use client";

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
import { TCartProduct, TError, TResponce } from "@/types/types";
import { GetColorName } from "hex-color-to-color-name";
import { deleteProductFromCart } from "@/lib/api/cart/cart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CartProductCard = ({ product }: { product: TCartProduct }) => {
  const router = useRouter();
  const {
    _id,
    productThumbnail,
    productTitle,
    quantity,
    selectedVariant,
    disscountRate,
    totalPrice,
  } = product;
  const { SKU, size, color } = selectedVariant;

  const handelDeleteProductFromCart = async (cartId: string) => {
    try {
      const res = (await deleteProductFromCart(cartId)) as TResponce;
      if (res?.success) {
        router.refresh();
      }
    } catch (err) {
      const error = err as TError;
      const toastId = toast.loading("Loading...");
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  return (
    <div className="border-b py-5 flex flex-col lg:flex-row justify-between gap-5">
      {/* Image and product Info */}
      <div className="flex items-start gap-3 h-48 md:h-72 lg:h-60 lg:w-[60%] xl:w-[50%]">
        <div className="relative w-[45%] md:w-[30%] h-full">
          <Image src={productThumbnail} alt="Product Image" fill />
        </div>

        <div className="text-xs md:text-sm font-semibold flex flex-col justify-between items-start h-full">
          <div className="space-y-1">
            <h1>{productTitle}</h1>
            <p className="text-gray-600">SKU: {SKU}</p>
            <p className="text-gray-600">Price: ${totalPrice}</p>
            <p className="text-gray-600">
              {GetColorName(color as string)} | {size}
            </p>
          </div>
          <div className="space-y-1">
            {product?.disscountRate !== 0 && (
              <p className="flex items-center gap-1.5 text-red-800">
                <span>
                  <CircleCheck className="size-4 md:size-5" />
                </span>{" "}
                {disscountRate}% Off Select Men Styles
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
            <button
              onClick={() => handelDeleteProductFromCart(_id)}
              className="hover:underline cursor-pointer"
            >
              Remove
            </button>
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
          <Select defaultValue={quantity.toString()}>
            <SelectTrigger className="w-[80px] md:w-[120px]">
              <SelectValue placeholder={quantity} />
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
            ${(product?.totalPrice * product?.quantity).toFixed(2)}
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
