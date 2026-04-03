"use client";

import { handleProductRemoveToWishlist } from "@/services/wishlist";
import { ProductWishlistType } from "@/types/wishlist.type";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Spinner from "./Spinner";
import Alert from "./Alert";

const WishlistProductCard = ({ product }: { product: ProductWishlistType }) => {
  const { id, image, title } = product;
  const [loading, setLoading] = useState(false);

  return (
    <div className="relative">
      {/* Wishlist product card content will go here */}
      <div className="relative h-52 md:h-80 lg:h-[400px] xl:h-[450px] 2xl:h-[500px] w-full">
        <Link href={`/products/${id}`}>
          <Image src={image} alt={title} fill className="object-cover" />
        </Link>
      </div>
      <div className="absolute top-0 right-0 p-2 lg:p-3 cursor-pointer">
        {loading ? (
          <Spinner isDark={false} />
        ) : (
          <Alert
            btn={<X className="size-5 lg:size-6" />}
            actionBtn="Remove"
            action={() =>
              handleProductRemoveToWishlist(id, image, setLoading, null)
            }
          />
        )}
      </div>
      <div className="md:absolute md:bottom-0 text-xs lg:text-sm text-gray-600 font-medium p-2 lg:p-3">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default WishlistProductCard;