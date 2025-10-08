import Image from "next/image";
import { Label } from "../ui/label";
import { Heart } from "lucide-react";
import { TProduct } from "@/types/product.type";
import Link from "next/link";

const WishlistProductCard = ({ product }: { product: TProduct }) => {
  const { _id, title, price, discount, productFor, productImages } = product;

  return (
    <Link
      href={`/products/${productFor}/${_id}`}
      className="space-y-3 w-full cursor-pointer"
    >
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[55vh] 2xl:h-[50vh] w-full border-r">
        <Image
          src={productImages[0]}
          alt="product"
          quality={100}
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 p-2 md:p-3 xl:p-5 cursor-pointer">
          <Heart className="size-5 xl:size-6" />
        </div>
      </div>
      <div className="flex items-start justify-between gap-1.5 md:gap-3 xlg:gap-5 px-1 md:px-3">
        <Label className="text-xs font-semibold">{title}</Label>
        <Label className="text-xs whitespace-nowrap font-semibold">${price}</Label>
      </div>
      <div className="px-1 md:px-3">
        <Label className="text-xs font-semibold text-red-700">
          {discount !== 0 && discount} {discount !== 0 && "% off"}
        </Label>
      </div>
    </Link>
  );
};

export default WishlistProductCard;
