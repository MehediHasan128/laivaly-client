import ProductColorSizeAndQuantity from "@/components/productDetail/ProductColorSizeAndQuantity";
import ProductDescription from "@/components/productDetail/ProductDescription";
import ProductImages from "@/components/productDetail/ProductImages";
import Button from "@/components/reusable/Button";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";

const images = [
  "/images/products/10.jpg",
  "/images/products/11.jpg",
  "/images/products/12.jpg",
  "/images/products/13.jpg",
];

const colors = ["#FF7F50", "#1E3A8A", "#8B4513", "#000000"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductDetailsPage = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row">
        {/* Product Image */}
        <ProductImages images={images} />

        {/* Product Info */}
        <div className="h-[10%] lg:h-full p-3 md:p-5 lg:w-[45%] xl:w-[50vw] space-y-3 xl:space-y-5">
          
          <div className="space-y-2 md:space-y-3 xl:space-y-5">
            <div className="border rounded-full w-fit gray-text px-5 py-0.5">Coat</div>
            <h1 className="font-semibold text-xl md:font-bold md:text-2xl lg:text-xl 2xl:text-3xl">Premium Breathable Linen Button-Down Shirt</h1>
            <h1 className="text-xl md:text-2xl font-bold">$19.99 <span className="font-light line-through text-gray-500">$39.99</span> <sub className="text-red-700">20% off</sub></h1>
          </div>

          {/* Product Description */}
          <ProductDescription />

          <ProductColorSizeAndQuantity colors={colors} sizes={sizes} />


          <div className="mt-10 flex gap-3">
            <Button buttonTitle="Buy It Now" className="border w-full flex justify-center bg-black text-white rounded-full" />
            <Button buttonTitle="Add To Cart" className="border w-full flex justify-center rounded-full" />
            <Button buttonTitle="" buttonIcon={<Heart className="size-5" />} className="rounded-full" />
          </div>

        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
