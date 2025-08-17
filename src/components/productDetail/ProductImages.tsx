"use client"

import Image from "next/image";
import { useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {

    const [thumbnail, setThaumbnail] = useState<string>("/images/products/10.jpg");

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-1.5 h-[80vh] md:h-[90vh] lg:h-[80vh] xl:h-[100vh] lg:w-[55%] xl:w-[50vw]">
      {/* Thumbnail Images */}
      <div className="relative h-[85%] md:h-[80%] lg:h-full lg:w-[80%]">
        <Image
          src={thumbnail}
          alt="img"
          quality={100}
          fill
          className="object-cover"
        />
      </div>
      <div className="h-[15%] md:h-[20%] lg:h-full lg:w-[20%]">
        <div className="flex flex-row lg:flex-col gap-1.5 size-full">
          {images?.map((img, index) => (
            <div key={index} onClick={() => setThaumbnail(img)} className={`relative size-full cursor-pointer border-2 ${thumbnail === img ? "border-black" : "border-transparent"}`}>
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
  );
};

export default ProductImages;
