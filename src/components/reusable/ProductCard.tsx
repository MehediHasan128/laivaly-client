"use client";

import {
  getProductIdFromLocalStorage,
  handleProductAddToLocalStorage,
  handleProductRemoveToLocalStorage,
} from "@/lib/api/products/products";
import { TPartialProductData } from "@/types/product.type";
import { TUser } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";

const ProductCard = ({
  product,
  user,
}: {
  product: TPartialProductData;
  user: TUser | null;
}) => {
  const { title, productThumbnail, productLayout, productFor, _id } = product;
  const [loading, setLoading] = useState(false);
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);

  useEffect(() => {
    const fetchWishliat = () => {
      setWishlistItems(getProductIdFromLocalStorage());
    };

    fetchWishliat();
    window.addEventListener("wishlist_updated", fetchWishliat);

    return () => {
      window.removeEventListener("wishlist_updated", fetchWishliat);
    };
  }, []);

  const handleProductAddToWishlist = async (
    productId: string,
    productImage: string,
  ) => {
    setLoading(true);
    if (user) {
      console.log(5);
    } else {
      await handleProductAddToLocalStorage(productId);
      toast.success("This product has been added to your wishlist", {
        unstyled: true,
        classNames: {
          toast:
            "bg-white shadow-lg rounded-2xl flex gap-2 w-[420px] justify-between items-center border",
          title: "text-sm font-semibold",
          description: "text-[13px] font-semibold text-gray-600 underline ",
          actionButton: "text-2xl font-bold p-3 cursor-pointer "
        },
        icon: (
          <div className="relative h-20 w-16 rounded-l-lg overflow-hidden">
            <Image src={productImage} alt="" fill className="scale-125" />
          </div>
        ),
        description: (
          <div>
            <Link href={"/wishlist"}>Access your wishlist</Link>
          </div>
        ),
        action: {
          label: <RxCross2 />,
          onClick: () => {},
        },
        duration: 1000000,
      });
      setLoading(false);
    }
  };

  const handleProductRemoveToWishlist = async (productId: string) => {
    setLoading(true);
    if (user) {
      console.log(5);
    } else {
      await handleProductRemoveToLocalStorage(productId);
      setLoading(false);
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

        <div className="absolute right-0 p-4">
          <button
            className="cursor-pointer"
            onClick={
              wishlistItems.includes(_id)
                ? () => handleProductRemoveToWishlist(_id)
                : () => handleProductAddToWishlist(_id, productThumbnail)
            }
          >
            {loading ? (
              <Spinner isDark={false} className="size-4" />
            ) : wishlistItems.includes(_id) ? (
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
