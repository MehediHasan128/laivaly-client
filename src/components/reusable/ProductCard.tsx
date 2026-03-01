"use client";

import { handleProductAddToLocalStorage } from "@/lib/api/products/products";
import { TPartialProductData } from "@/types/product.type";
import { TUser } from "@/types/user";
import { Check, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Spinner from "./Spinner";

const ProductCard = ({
  product,
  user,
}: {
  product: TPartialProductData;
  user: TUser | null;
}) => {
  const { title, productThumbnail, productLayout, productFor, _id } = product;
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const showSuccessTick = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 1000);
  }

  const handleProductAddToWishlist = async (productId: string) => {
    setLoading(true);
    setIsSuccess(false);
    if (user) {
      console.log(5);
    } else {
      await handleProductAddToLocalStorage(productId);
      setLoading(false);
      showSuccessTick();
    }
  };


  return (
    <div className="group">
      <div
        className={`relative h-[250px] md:h-[450px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px] ${
          productLayout === "vertical" &&
          "h-[480px] md:h-[900px] lg:h-[800px] xl:h-[900px] 2xl:h-[1200px]"
        }`}
      >
        <Link href={`/products/${productFor}/${_id}`}>
          <Image
            src={productThumbnail}
            alt={title}
            quality={100}
            fill
            className="object-cover"
          />

          {productLayout === "fixed" && (
            <div className="absolute bottom-0 py-5 px-2">
              <h1 className="text-[10px] md:text-xs font-medium">{title}</h1>
            </div>
          )}
        </Link>

        <div className="absolute right-0 p-4 md:p-6">
          <button
            className="cursor-pointer"
            onClick={() => handleProductAddToWishlist(_id)}
          >
            {loading ? (
              <Spinner isDark={false} />
            ) : isSuccess ? (
              <Check className="size-5 md:size-6 text-green-600" />
            ) : (
              <Heart className="size-5 md:size-6" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
