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
import { TError, TResponce } from "@/types/types";
import { GetColorName } from "hex-color-to-color-name";
import { deleteProductFromCart } from "@/lib/api/cart/cart";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TCartProduct } from "@/types/cart.type";

const CartProductCard = ({ product }: { product: TCartProduct }) => {

  // Router for page refreshing
  const router = useRouter();

  // Get all information of product
  const { _id, productId, quantity, selectedVariant } = product;
  const { title, productFor, price, discount } = productId;
  const { color, size, SKU, productImage } = selectedVariant;

  // Calculater discount price
  const discountPrice = price - price * (discount / 100);

  //  Set productImage

  // Delete product from cart function
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
          <Image src={productImage} alt="Product Image" fill />
        </div>

        <div className="text-xs md:text-sm font-semibold flex flex-col justify-between items-start h-full">
          <div className="space-y-1">
            <h1>{title}</h1>
            <p className="text-gray-600">
              SKU: <span className="text-black">{SKU}</span>
            </p>
            <p className="text-gray-600">
              Price:{" "}
              <span className="text-black">
                ${discount === 0 ? price : discountPrice}
              </span>
            </p>
            <p>
              {GetColorName(color as string)} | {size}
            </p>
          </div>
          <div className="space-y-1">
            {discount !== 0 && (
              <p className="flex items-center gap-1.5 text-red-800">
                <span>
                  <CircleCheck className="size-4 md:size-5" />
                </span>{" "}
                {discount}% Off Select {productFor} Styles
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
              onClick={() => handelDeleteProductFromCart(_id as string)}
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
            $
            {discount === 0
              ? (price * quantity).toFixed(2)
              : (discountPrice * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="lg:hidden text-xs md:text-sm font-semibold flex gap-5 text-gray-600">
        <button className="hover:underline cursor-pointer">Edit</button>
        <span>|</span>
        <button
          onClick={() => handelDeleteProductFromCart(_id as string)}
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
  );
};

export default CartProductCard;
