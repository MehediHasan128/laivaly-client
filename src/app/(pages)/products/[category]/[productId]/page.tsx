import Button from "@/components/reusable/Button";
import { Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";

const images = [
  "/images/products/10.jpg",
  "/images/products/10.jpg",
  "/images/products/10.jpg",
  "/images/products/10.jpg",
];

const colors = ["#FF7F50", "#1E3A8A", "#8B4513", "#000000"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const ProductDetailsPage = () => {
  return (
    <main>
      <section className="flex flex-col lg:flex-row h-[90vh] md:h-[100vh] lg:h-[70vh] xl:h-[80vh] border">
        {/* Product Image */}
        <div className="flex flex-col lg:flex-row-reverse gap-1.5 h-[90%] lg:h-full lg:w-[50vw]">
          {/* Thumbnail Images */}
          <div className="relative h-[80%] lg:h-full lg:w-[80%]">
            <Image
              src="/images/products/10.jpg"
              alt="img"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
          <div className="h-[20%] lg:h-full lg:w-[20%]">
            <div className="flex flex-row lg:flex-col gap-1.5 size-full">
              {images?.map((img, index) => (
                <div key={index} className="relative size-full">
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

        {/* Product Info */}
        <div className="h-[10%] lg:h-full p-5 lg:w-[50vw]">
          <h1>Product Info</h1>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
