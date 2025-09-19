"use client";

import { TVariants } from "@/types/types";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface TProductColorSizeAndQuantityProps {
  productVariants: TVariants[];
}

const ProductColorSizeAndQuantity = ({
  productVariants,
}: TProductColorSizeAndQuantityProps) => {
  const getProductColors = new Set(
    productVariants.map((variant) => variant.color)
  );
  const colors = Array.from(getProductColors);

  const [productColor, setProductColor] = useState<string>(colors[0] as string);
  const [productSize, setProductSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(0);

  const getProductSizes = productVariants.filter(
    (variant) => variant.color === productColor
  );
  const sizes = getProductSizes.map((v) => ({
    size: v.size,
    stock: v.stock,
  }));

  const selectedSizeVariant = getProductSizes.find(
    (variant) => variant.size === productSize
  );

  const remainingProduct = selectedSizeVariant?.stock;

  return (
    <div className="space-y-3 xl:space-y-5">
      {/* Color button */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Select Color</h1>
        <div className="flex gap-1.5">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setProductColor(color as string)}
              className={`size-10 rounded-full overflow-hidden border-2 cursor-pointer hover:border-black ${
                productColor === color ? "border-black" : "border-transparent"
              } p-0.5`}
            >
              <div
                className="size-full rounded-full"
                style={{ backgroundColor: `#${color}` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Size button */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Select Size</h1>
        <div className="flex flex-wrap gap-1.5">
          {sizes.map((size, index) => (
            <button
              key={index}
              disabled={size.stock === 0}
              onClick={() => setProductSize(size.size as string)}
              className={`border duration-500 hover:border-black ${
                productSize === size.size
                  ? "bg-black text-white"
                  : "bg-accent text-black"
              } rounded font-medium w-16 md:w-20 lg:w-16 xl:w-20 text-center text-sm xl:text-base py-1.5 cursor-pointer
              disabled:cursor-not-allowed disabled:hover:border-accent disabled:border-accent overflow-hidden disabled:line-through disabled:text-gray-500`}
            >
              {size.size}
            </button>
          ))}
        </div>
      </div>

      <div>
        {remainingProduct && remainingProduct <= 10 && (
          <h1 className="text-sm font-semibold text-red-700">
            Only {remainingProduct} Unit Available
          </h1>
        )}
      </div>

      {/* Product Quantity */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Quantity</h1>
        <div className="flex items-center w-fit rounded">
          <div
            onClick={() =>
              setQuantity((quantity) => (quantity > 0 ? quantity - 1 : 0))
            }
            className="bg-black text-white cursor-pointer active:scale-95 duration-700 px-2 py-1 rounded-l"
          >
            <Minus />
          </div>
          <div className="text-xl font-semibold w-20 text-center">
            {quantity}
          </div>
          <div
            onClick={() => setQuantity(quantity + 1)}
            className="bg-black text-white cursor-pointer active:scale-95 duration-700 px-2 py-1 rounded-r"
          >
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductColorSizeAndQuantity;
