import { TPartialProductData } from "@/types/product.type";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: TPartialProductData }) => {
  const { title, productThumbnail, productLayout, productFor, _id } = product;

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

        <div className="absolute right-0 p-6 cursor-pointer">
          <button className="cursor-pointer">
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
