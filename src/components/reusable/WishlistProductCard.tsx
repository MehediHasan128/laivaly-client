import Image from "next/image";
import { Label } from "../ui/label";
import { Heart } from "lucide-react";

const WishlistProductCard = () => {
  return (
    <div className="space-y-3 w-full cursor-pointer">
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] xl:h-[55vh] 2xl:h-[65vh] w-full">
        <Image
          src="/images/products/5.jpg"
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
        <Label className="text-xs md:text-sm xl:text-lg">
          Fringe-trimmed loafers
        </Label>
        <Label className="text-xs md:text-sm xl:text-lg whitespace-nowrap">
          $29.99
        </Label>
      </div>
    </div>
  );
};

export default WishlistProductCard;
