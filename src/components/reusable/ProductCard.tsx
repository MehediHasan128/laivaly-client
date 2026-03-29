"use client";

import { TPartialProductData } from "@/types/product.type";
import { TUser } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {
  getWishlistProductFromLocalStorage,
  handleProductAddToWishlist,
  handleProductRemoveToWishlist,
} from "@/services/wishlist";
import { ProductWishlistType } from "@/types/wishlist.type";


const ProductCard = ({
  product,
  user,
}: {
  product: TPartialProductData;
  user: TUser | null;
}) => {
  const { title, productThumbnail, productLayout, productFor, _id } = product;
  const [loading, setLoading] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<
    ProductWishlistType[] | []
  >([]);

  useEffect(() => {
    const fetchWishliat = () => {
      setWishlistItems(getWishlistProductFromLocalStorage());
    };

    fetchWishliat();
    window.addEventListener("wishlist_updated", fetchWishliat);

    return () => {
      window.removeEventListener("wishlist_updated", fetchWishliat);
    };
  }, []);

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

        <div className="absolute right-0 p-4">
          <button
            className="cursor-pointer"
            onClick={
              wishlistItems.some((product) => product?.id === _id)
                ? () =>
                    handleProductRemoveToWishlist(
                      _id,
                      productThumbnail,
                      setLoading,
                      user,
                    )
                : () =>
                    handleProductAddToWishlist(
                      _id,
                      productThumbnail,
                      title,
                      setLoading,
                      user,
                    )
            }
          >
            {loading ? (
              <Spinner isDark={false} className="size-4" />
            ) : wishlistItems.some((product) => product.id === _id) ? (
              <GoHeartFill className="size-5 text-gray-700" />
            ) : (
              <GoHeart className="size-5 text-gray-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
