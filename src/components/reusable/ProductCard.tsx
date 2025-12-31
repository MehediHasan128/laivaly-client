import { TPartialProductData } from "@/types/product.type";
import Image from "next/image";

const ProductCard = ({ product }: { product: TPartialProductData }) => {
  const { title, productThumbnail, price, discount, highlightedProduct } =
    product;

  const discountPrice = (price - price * (discount / 100)).toFixed(2);

  return (
    <div className="group">
      <div className={`relative h-[250px] md:h-[450px] lg:h-[400px] xl:h-[450px] 2xl:h-[600px]`}>
        <Image
          src={productThumbnail}
          alt={title}
          quality={100}
          fill
          className="object-cover hover:scale-110 duration-500"
        />

        <div className="absolute bottom-0 py-5 px-2">
          <h1 className="text-xs font-medium">{title}</h1>
        </div>

        {discount !== 0 && !highlightedProduct && (
          <div className="absolute top-0 right-0 p-3 md:p-5 text-red-700 font-semibold text-xs md:text-sm">
            <h1>{discount}% Off</h1>
          </div>
        )}
        {!highlightedProduct && (
          <div className="hidden md:absolute bottom-0 p-3 text-sm font-semibold space-y-2">
            <h1>{title}</h1>
            <p>
              <span
                className={`${discount > 0 && "line-through text-gray-600"}`}
              >
                ${price.toFixed(2)}
              </span>{" "}
              {discount > 0 && <span>${discountPrice}</span>}{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
