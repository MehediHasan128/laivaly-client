"use client";

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

interface TProductColorSizeAndQuantityProps {
  colors: string[];
  sizes: string[];
}

const ProductColorSizeAndQuantity = ({
  colors,
  sizes,
}: TProductColorSizeAndQuantityProps) => {
  const [productColor, setProductColor] = useState<string | null>(null);
  const [productSize, setProductSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className="space-y-3">
      {/* Color button */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Select Color</h1>
        <div className="flex gap-1.5">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setProductColor(color)}
              className={`size-10 rounded-full overflow-hidden border-2 cursor-pointer hover:border-black ${
                productColor === color ? "border-black" : "border-transparent"
              } p-0.5`}
            >
              <div
                className="size-full rounded-full"
                style={{ backgroundColor: `${color}` }}
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
            <div
              key={index}
              onClick={() => setProductSize(size)}
              className={`border duration-500 hover:border-black ${
                productSize === size
                  ? "bg-black text-white"
                  : "bg-accent text-black"
              } rounded font-medium w-16 md:w-20 lg:w-16 xl:w-20 text-center text-sm xl:text-base py-1.5 cursor-pointer`}
            >
              {size}
            </div>
          ))}
        </div>
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
