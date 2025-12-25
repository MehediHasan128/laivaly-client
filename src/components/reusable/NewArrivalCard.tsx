"use client";

import { TProduct } from "@/types/product.type";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NewArrivalCard = ({
  product,
}: {
  product: Pick<TProduct, "_id" | "title" | "productThumbnail" | "price" | "productFor">;
}) => {
  const [productThumbnail, setProductThumbnail] = useState<string>(
    product?.productThumbnail
  );

  return (
    <Link href={`/products/${product?.productFor}/${product?._id}`} className="rounded-lg overflow-hidden">
      {/* Product Image */}
      <div
        className="h-48 md:h-56 lg:h-72 2xl:h-80 cursor-pointer"
        onMouseEnter={() => setProductThumbnail(product?.productThumbnail)}
        onMouseLeave={() => setProductThumbnail(product?.productThumbnail)}
      >
        <div className="relative h-full">
          <Image
            src={productThumbnail}
            alt={product?.title}
            fill
            className="rounded-lg border object-cover"
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-2 font-semibold flex justify-between items-start text-xs md:text-sm">
        {product?.title.length === 20 ? (
          <h1>{product?.title}</h1>
        ) : (
          <h1>
            {product?.title.slice(0, 21)}
            <span className="bg-gradient-to-r from-[#000000d4] to-transparent bg-clip-text text-transparent">
              {product?.title.slice(21, 30)}
            </span>
          </h1>
        )}
        <h1>${product?.price}</h1>
      </div>
    </Link>
  );
};

export default NewArrivalCard;
