"use client";

import Image from "next/image";
import { TProduct } from "../types/types";
import { useState } from "react";
import { Handbag, Heart } from "lucide-react";

const NewArrivalCard = ({ product }: { product: TProduct }) => {
  const [productThumbnail, setProductThumbnail] = useState<string>(
    product?.thumbnail
  );

  return (
    <div className="rounded-lg overflow-hidden">
      {/* Product Image */}
      <div
        className="h-42 xl:h-72 2xl:h-80 cursor-pointer"
        onMouseEnter={() => setProductThumbnail(product?.images[1])}
        onMouseLeave={() => setProductThumbnail(product?.thumbnail)}
      >
        <div className="relative h-full">
          <Image
            src={productThumbnail}
            alt={product?.title}
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute top-0 w-full flex justify-between md:justify-end p-2.5 md:p-4 md:gap-5">
            <Handbag className="size-4 md:size-5" />
            <Heart className="size-4 md:size-5" />
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-2 font-semibold flex justify-between items-start text-xs md:text-sm lg:text-xs xl:text-base">
        <h1>{product?.title}</h1>
        <h1>${product?.price}</h1>
      </div>
    </div>
  );
};

export default NewArrivalCard;
