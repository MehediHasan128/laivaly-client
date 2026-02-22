"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../../ui/carousel";
import { useState } from "react";
import { Heart } from "lucide-react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [imgIndex, setImageIndex] = useState<number>(0);

  return (
    <>
      {/* Picture for large device */}
      <div className="hidden lg:block">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full lg:h-[100vh] xl:h-[150vh]"
          >
            <Image
              src={image}
              alt="product"
              quality={100}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Picture for medium or small device */}
      <div className="block lg:hidden">
        <Carousel
          setApi={(api) => {
            if (!api) return;
            api.on("select", () => {
              setImageIndex(api.selectedScrollSnap());
            });
          }}
        >
          <div className="relative">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div
                    key={index}
                    className="relative w-full h-[70vh] md:h-screen"
                  >
                    <Image
                      src={image}
                      alt="product"
                      quality={100}
                      fill
                      className="object-cover md:object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute top-0 right-0 p-6 md:p-10">
              <button>
                <Heart />
              </button>
            </div>
          </div>
        </Carousel>
        <div>
          <div className="relative w-full flex">
            {/* background bars */}
            {images.map((_, index) => (
              <div key={index} className="h-1 w-full bg-gray-200" />
            ))}

            <div
              className="absolute top-0 left-0 h-1 bg-black transition-all duration-500"
              style={{
                width: `${100 / images.length}%`,
                transform: `translateX(${imgIndex * 100}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImages;
