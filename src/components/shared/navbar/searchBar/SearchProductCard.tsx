import { TProduct } from "@/types/product.type";
import { capitalizeFirstLetter } from "@/utils";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const SearchProductCard = ({
  products,
  setSearchBarOpen,
}: {
  products: TProduct[];
  setSearchBarOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {products?.map((product: TProduct) => (
        <div key={product?._id}>
          <div className="cursor-pointer overflow-hidden">
            <div className="relative h-60 md:h-80 xl:h-[400px] 2xl:h-96">
              <Link
                href={`/products/${product?.productFor}/${product?._id}`}
                onClick={() => setSearchBarOpen?.(false)}
              >
                <Image
                  src={product?.productThumbnail}
                  alt={product?.title}
                  quality={100}
                  fill
                  className="hover:scale-110 duration-700"
                />
              </Link>
              <div className="absolute top-0 right-0 p-3 md:p-5">
                <Heart className="size-5" />
              </div>
              <Link
                href={`/products/${product?.productFor}/${product?._id}`}
                className="hidden md:block absolute bottom-0 px-3 py-5"
              >
                <p className="text-xs font-medium text-gray-500">
                  {capitalizeFirstLetter(product?.productCategory)}
                </p>
                <h2 className="text-xs">{product?.title}</h2>
              </Link>
            </div>
            <Link
              href={`/products/${product?.productFor}/${product?._id}`}
              className="md:hidden px-2 py-3"
            >
              <p className="text-xs font-medium text-gray-500">
                {capitalizeFirstLetter(product?.productCategory)}
              </p>
              <h2 className="text-xs">{product?.title}</h2>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchProductCard;
