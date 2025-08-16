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

          <div className="space-y-3">

              {/* Color button */}
              <div className="space-y-2">
                <h1 className="font-semibold text-sm md:text-base">Select Color</h1>
                <div className="flex gap-1.5">
                  {
                    colors.map((color, index) => (
                      <div key={index} className="size-8 md:size-10 rounded-full overflow-hidden border-2 border-black p-0.5">
                        <div className="size-full rounded-full" style={{backgroundColor: `${color}`}} />
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* Color button */}
              <div className="space-y-2">
                <h1 className="font-semibold text-sm md:text-base">Select Size</h1>
                <div className="flex flex-wrap gap-1.5">
                  {
                    sizes.map((size, index) => (
                      <div key={index} className="border bg-accent rounded-full font-medium w-16 md:w-20 lg:w-16 xl:w-20 text-center text-sm xl:text-base py-1 md:py-1.5">
                        {size}
                      </div>
                    ))
                  }
                </div>
              </div>

              {/* Product Quantity */}
              <div className="space-y-2">
                <h1 className="font-semibold text-sm md:text-base">Quantity</h1>
                <div className="flex items-center w-fit rounded">
                  <div className="bg-black text-white cursor-pointer active:scale-95 duration-700 px-2 py-1 rounded-l"><Minus /></div>
                  <div className="text-xl font-semibold px-8">
                    0
                  </div>
                  <div className="bg-black text-white cursor-pointer active:scale-95 duration-700 px-2 py-1 rounded-r"><Plus /></div>
                </div>
              </div>
            
          </div>


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
