import ProductColorSizeAndQuantity from "@/components/pages/productDetail/ProductColorSizeAndQuantity";
import ProductDescriptionDrawer from "@/components/pages/productDetail/ProductDescriptionDrawer";
import ProductImages from "@/components/pages/productDetail/ProductImages";
import ProductReviewDrawer from "@/components/pages/productDetail/ProductReviewDrawer";
import ProductGrid from "@/components/pages/products/ProductGrid";
import Button from "@/components/reusable/Button";
import Container from "@/components/reusable/Container";
import Ratings from "@/components/reusable/Ratings";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalculateAvgRatingAndPercentages } from "@/utils";
import { ArrowRight, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import { IoStar } from "react-icons/io5";

const allProducts = [
  {
    _id: "1",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "2",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "3",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "4",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
];

const images = [
  "/images/products/25.jpg",
  "/images/products/26.jpg",
  "/images/products/27.jpg",
  "/images/products/28.jpg",
];

const colors = ["#FF7F50", "#1E3A8A", "#8B4513", "#000000"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

//  sm:flex flex-col lg:flex-row

const ProductDetailsPage = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-[50vw]">
          <ProductImages images={images} />
        </div>

        <div className="lg:w-[50vw] px-3 py-5 md:px-20 md:py-10 lg:px-42 lg:py-16 relative">
          <div className="sticky top-10 space-y-3 xl:space-y-5">
            <div className="space-y-2 md:space-y-3 xl:space-y-5">
              <div className="border rounded-full w-fit gray-text px-5 py-0.5">
                Coat
              </div>
              <h1 className="font-semibold text-xl md:font-bold md:text-2xl lg:text-xl 2xl:text-3xl">
                Premium Breathable Linen Button-Down Shirt
              </h1>
              <h1 className="text-xl md:text-2xl font-bold">
                $19.99{" "}
                <span className="font-light line-through text-gray-500">
                  $39.99
                </span>{" "}
                <sub className="text-red-700">20% off</sub>
              </h1>
            </div>
            {/* Product Description */}
            <div className="space-y-3">
              <h1 className="font-semibold text-lg">Description:</h1>
              <p className="gray-text text-justify text-xs xl:text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laboriosam velit delectus quasi maiores? Repellat voluptatem
                consequuntur perspiciatis{" "}
                <ProductDescriptionDrawer>
                  <span className="text-blue-700 font-semibold cursor-pointer">
                    See More
                  </span>
                </ProductDescriptionDrawer>
              </p>
            </div>

            <ProductColorSizeAndQuantity colors={colors} sizes={sizes} />

            <div className="mt-10 flex gap-3">
              <Button
                buttonTitle="Buy It Now"
                className="border w-full flex justify-center bg-black text-white rounded"
              />
              <Button
                buttonTitle="Add To Cart"
                className="border w-full flex justify-center rounded hover:border-black"
              />
              <Button
                buttonTitle=""
                buttonIcon={<Heart className="size-5" />}
                className="rounded-full hover:border-black"
              />
            </div>

            <div className="mt-12">
              <div className="w-full border-b mb-5" />
              <ProductReviewDrawer>
                <div className="flex justify-between items-center text-lg font-semibold cursor-pointer">
                  <h1>Reviews</h1>
                  <span className="flex gap-2 items-center">
                    <h1>4.3/5</h1>
                    <ChevronRight />
                  </span>
                </div>
              </ProductReviewDrawer>
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

      <section className="mt-20 xl:mt-42">
        <h1 className="text-center text-xl md:text-3xl font-semibold">
          You might also like
        </h1>

        <div>
          <ProductGrid products={allProducts} category="men" />
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
