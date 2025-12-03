"use client";

import { TProduct, TVariants } from "@/types/product.type";
import ProductImages from "./ProductImages";
import ProductDescriptionDrawer from "./ProductDescriptionDrawer";
import ProductColorSizeAndQuantity from "./ProductColorSizeAndQuantity";
import { ChevronRight } from "lucide-react";
import { TUser } from "@/types/user";
import { useState } from "react";
import ProductReviewDrawer from "./ProductReviewDrawer";

interface TProps {
  product: TProduct;
  user: TUser;
  variants: TVariants[];
  isProductExistToWishlist: boolean
}

const ProductDetailsHeader = ({ product, user, isProductExistToWishlist, variants }: TProps) => {

    const [images, setImages] = useState(variants[0].images);

  const {
    _id,
    title,
    description,
    season,
    productGroup,
    productCategory,
    productSubCategory,
    productReviews,
    productVariants,
    productThumbnail,
    price,
    discount,
  } = product;

  // Calculate disscount price
  const discountPrice = (price - price * (discount / 100)).toFixed(2);

  return (
    <section className="flex flex-col lg:flex-row">
      <div className="lg:w-[50vw]">
        <ProductImages images={images} />
      </div>

      <div className="lg:w-[50vw] px-3 py-5 md:px-10 md:py-10 lg:px-10 xl:px-15 2xl:px-42 lg:py-16 relative">
        <div className="sticky top-10 space-y-3 xl:space-y-5">
          <div className="space-y-2 md:space-y-3 xl:space-y-5">
            <div className="border rounded-full w-fit gray-text px-5 py-0.5">
              {productCategory}
            </div>
            <h1 className="font-semibold text-xl md:font-bold md:text-2xl lg:text-xl 2xl:text-3xl">
              {title}
            </h1>
            <h1 className="text-xl md:text-2xl font-bold">
              ${discountPrice}{" "}
              {discount > 0 && (
                <>
                  <span className="font-light line-through text-gray-500">
                    ${price}
                  </span>{" "}
                  <sub className="text-red-700">{discount}% off</sub>
                </>
              )}
            </h1>
          </div>

          {/* Product Description */}
          <div className="space-y-3">
            <h1 className="font-semibold text-lg">Description:</h1>
            <p className="gray-text text-justify text-xs xl:text-sm">
              {description?.shortDescription}{" "}
              <ProductDescriptionDrawer productDescriptions={description}>
                <span className="text-blue-700 font-semibold cursor-pointer">
                  See More
                </span>
              </ProductDescriptionDrawer>
            </p>
          </div>

          <ProductColorSizeAndQuantity
            product={product}
            user={user}
            isProductExistToWishlist={isProductExistToWishlist}
            variants={variants}
            setImages={setImages}
          />

          <div className="mt-12">
            <div className="w-full border-b mb-5" />
            <ProductReviewDrawer
                productId={_id}
                productTitle={title}
                productImage={productThumbnail}
                userId={user?.userId}
                productReviewId={productReviews as string}
              />
            <div className="w-full border-b my-5" />
            <div className="flex justify-between items-center text-lg font-semibold cursor-pointer">
              <h1>Shipping & Return</h1>
              <ChevronRight />
            </div>
            <div className="w-full border-b mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsHeader;
