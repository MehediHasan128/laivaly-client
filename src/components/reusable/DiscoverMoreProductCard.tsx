import { TProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const DiscoverMoreProductCard = ({ product }: { product: TProduct }) => {
  const { title, productThumbnail, price, discount, productFor, _id } = product;

  const discountPrice = (price - price * (discount / 100)).toFixed(2);

  return (
    <Link href={`/products/${productFor}/${_id}`}>
      <div className="relative h-[250px] md:h-[400px] w-full border-y border-l">
        <Image
          src={productThumbnail}
          alt="product"
          quality={100}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="mt-2 space-y-2 px-1">
        <p className="text-xs font-semibold gray-text">{title}</p>
        <p className="text-xs font-semibold">
          <span className="line-through">${price.toFixed(2)}</span>{" "}
          <span>${discountPrice}</span>{" "}
          <span className="text-red-700">
            {discount > 0 && `${discount}% off`}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default DiscoverMoreProductCard;
