import Button from "@/components/reusable/Button";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";

const images = [
  "/images/products/6.jpg",
  "/images/products/6.jpg",
  "/images/products/6.jpg",
  "/images/products/6.jpg",
];

const colors = ["#FF7F50", "#1E3A8A", "#8B4513", "#000000"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductDetailsPage = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row gap-3 xl:gap-5">
        {/* Product image */}
        <div className="flex flex-col md:flex-row lg:flex-col gap-1.5 w-full h-[70vh] lg:h-[80vh] xl:h-[100vh] lg:w-[50%] xl:w-[50%] p-0 lg:p-2">
          {/* Thumbnail Image */}
          <div className="h-[80%] md:h-full md:w-[80%] lg:w-full lg:h-[80%] lg:rounded-t-lg xl:rounded-t-2xl overflow-hidden">
            <div className="relative size-full">
              <Image
                src="/images/products/6.jpg"
                alt="img"
                quality={100}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* All Images */}
          <div className="h-[20%] md:h-full md:w-[20%] lg:w-full lg:h-[20%] lg:rounded-b-lg xl:rounded-b-2xl overflow-hidden">
            <div className="h-full flex md:flex-col lg:flex-row gap-1.5">
              {images.map((img, index) => (
                <div key={index} className="relative size-full cursor-pointer">
                  <Image
                    src={img}
                    alt="img"
                    quality={100}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="lg:w-[50%] xl:w-[50%] px-5 lg:p-5 space-y-6 xl:space-y-10">
          {/* Product title price */}
          <div className="space-y-2 lg:space-y-3 xl:space-y-5">
            <div className="flex flex-row-reverse lg:flex-col gap-2 items-start">
              <div className="border rounded-full text-sm font-semibold w-fit px-3 py-1.5 whitespace-nowrap">
                Men Fashion
              </div>
              <h1 className="text-xl md:text-2xl xl:text-3xl font-bold lg:font-extrabold w-full">
                Loose Fit Jacket
              </h1>
            </div>
            <h2 className="text-xl font-semibold">
              <span>$39.99</span>{" "}
              <span className="line-through text-gray-600 font-light">
                $59.99
              </span>{" "}
              <sub className="text-base text-red-700">30% off</sub>
            </h2>
          </div>

          {/* Size, color and quantity selection */}
          <div className="space-y-3.5">
            <div className="space-y-3">
              <h1 className="text-xs lg:text-sm font-semibold">Select Color</h1>
              <div className="flex gap-1.5">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className={`border size-8 lg:size-10 rounded-full`}
                    style={{ backgroundColor: `${color}` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-xs lg:text-sm font-semibold">Select Size</h1>
              <div className="flex gap-1.5 flex-wrap">
                {sizes.map((size, index) => (
                  <div
                    key={index}
                    className="border bg-accent rounded-full px-8 xl:px-10 py-1 md:py-2 font-semibold cursor-pointer"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-xs lg:text-sm font-semibold">
                Product Quantity
              </h1>
              <div className="flex items-center gap-5">
                <div className="bg-black text-white rounded-full flex justify-center items-center cursor-pointer active:scale-95 duration-700 size-8">
                  <Minus />
                </div>
                <div className="w-20 text-center text-xl font-semibold border-x">
                  0
                </div>
                <div className="bg-black text-white rounded-full flex justify-center items-center cursor-pointer active:scale-95 duration-700 size-8">
                  <Plus />
                </div>
              </div>
            </div>
          </div>

          {/* Add to cart and wishlist button */}
          <div className="2xl:w-[70%] flex gap-2.5">
            <Button
              buttonTitle="Buy It Now"
              className="bg-black text-white rounded-full cursor-pointer w-full flex justify-center py-2.5"
            />
            <Button
              buttonTitle="Add to Cart"
              className="rounded-full cursor-pointer w-full flex justify-center py-2.5"
            />
            <button className="border rounded-full p-2 lg:px-3 cursor-pointer bg-accent active:scale-95 duration-700">
              <Heart />
            </button>
          </div>

          {/* Product Description */}
          <div className="2xl:w-[70%] border p-5 rounded-xl space-y-3.5">
            <h1 className="text-lg md:text-xl font-semibold md:font-bold">
              Product Description
            </h1>
            <p className="text-justify gray-text font-semibold0">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate dicta maiores perferendis reprehenderit ex molestiae
              harum iusto voluptate veniam voluptatem itaque at eos, eum commodi
              non blanditiis delectus consequatur quas enim voluptatum,
              consequuntur amet iste molestias natus! Illum asperiores cumque,
              molestias, dolorum magni dolorem eaque natus accusantium, officiis
              architecto rem a ad necessitatibus esse commodi. Ratione vitae
              fugiat, repellat iste ullam incidunt labore saepe veritatis
              commodi architecto inventore fuga dolore similique explicabo,
              tenetur consectetur accusamus possimus hic beatae expedita
              delectus totam nisi perspiciatis. Ut consequatur maiores molestiae
              sequi? Fugit consequuntur vitae voluptas qui eos, asperiores
              quibusdam perspiciatis explicabo hic rerum.
            </p>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
};

export default ProductDetailsPage;
