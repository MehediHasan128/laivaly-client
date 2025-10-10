"use client";

import Image from "next/image";
import { Label } from "../ui/label";
import { Heart } from "lucide-react";
import { TProduct } from "@/types/product.type";
import Link from "next/link";
import { toast } from "sonner";
import { productRemoveToWishlist } from "@/lib/api/wishlist/wishlist";
import { TError, TResponce } from "@/types/types";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./Spinner";

const WishlistProductCard = ({ product }: { product: TProduct }) => {
  const { _id, title, price, discount, productFor, productImages } = product;

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handelRemoveProductFronWishlist = async (productId: string) => {
    setLoading(true);
    const toastId = toast.loading("Loading");
    try {
      const res = (await productRemoveToWishlist(productId)) as TResponce;
      toast.success(res?.message, { id: toastId });
      router.refresh();
      setLoading(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3 w-full cursor-pointer">
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[55vh] 2xl:h-[50vh] w-full border-r">
        <Link href={`/products/${productFor}/${_id}`}>
          <Image
            src={productImages[0]}
            alt="product"
            quality={100}
            fill
            className="object-cover"
          />
        </Link>
        <div
          onClick={() => handelRemoveProductFronWishlist(_id)}
          className="absolute top-0 right-0 p-2 md:p-3 xl:p-5 cursor-pointer"
        >
          {loading ? (
            <Spinner isDark={false} />
          ) : (
            <Heart className="size-5 xl:size-6 text-red-700" />
          )}
        </div>
      </div>
      <div className="flex items-start justify-between gap-1.5 md:gap-3 xlg:gap-5 px-1 md:px-3">
        <Label className="text-xs font-semibold">{title}</Label>
        <Label className="text-xs whitespace-nowrap font-semibold">
          ${price}
        </Label>
      </div>
      <div className="px-1 md:px-3">
        <Label className="text-xs font-semibold text-red-700">
          {discount !== 0 && discount} {discount !== 0 && "% off"}
        </Label>
      </div>
    </div>
  );
};

export default WishlistProductCard;
