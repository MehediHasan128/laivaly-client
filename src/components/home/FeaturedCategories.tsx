"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
  {
    index: 0,
    url: "/images/categories/male.jpg",
    name: "maleImage",
    sectionTitle: "Men’s Collection",
    description:
      "Stylish and timeless apparel crafted for modern men seeking elegance, comfort, and confidence daily.",
    path: "/",
  },
  {
    index: 1,
    url: "/images/categories/female.jpg",
    name: "femaleImage",
    sectionTitle: "Women’s Collection",
    description:
      "Elegant, versatile fashion for women, blending comfort, beauty, and style for every special occasion.",
    path: "/",
  },
  {
    index: 2,
    url: "/images/categories/children.jpg",
    name: "childrenImage",
    sectionTitle: "Kid’s Collection",
    description:
      "Fun and colorful outfits designed for kids, ensuring comfort, durability, and joy in every adventure.",
    path: "/",
  },
];

const FeaturedCategories = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col md:flex-row overflow-hidden">
        {images.slice(0, 1).map((image) => (
          <div
            key={image.index}
            onMouseEnter={() => setHoverIndex(image.index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="md:w-[50%] h-[500px] md:h-[600px] xl:h-[1000px] relative overflow-hidden cursor-pointer"
          >
            <Image
              src={image.url}
              alt={image.name}
              quality={100}
              fill
              className="h-full object-cover"
            />

            <div
              className={`absolute top-0 text-white w-full h-full flex justify-center items-end duration-500 ${
                hoverIndex === image.index
                  ? "bg-black/30 lg:bg-black/70"
                  : "bg-black/30 lg:bg-transparent"
              }`}
            >
              <div
                className={`transition-transform duration-1000 text-center space-y-2 lg:space-y-5 w-[90%] xl:w-[70%] 2xl:w-[50%] py-5 lg:py-10 ${
                  hoverIndex === image.index
                    ? "-translate-y-0"
                    : "-translate-y-0 lg:translate-y-[1000px]"
                }`}
              >
                <h1 className="text-xl lg:text-4xl font-medium">
                  {image.sectionTitle}
                </h1>
                <p className="text-[11px] lg:text-xs">{image.description}</p>
                <Link href={image.path}>
                  <div className="border w-fit mx-auto bg-white text-black font-medium rounded-full cursor-pointer text-xs xl:text-sm flex justify-center items-center gap-1 px-5 py-1.5 lg:py-2.5 active:scale-95 duration-500">
                    Shop Now <ArrowRight size={18} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="md:w-[50%] h-[600px] xl:h-[1000px] overflow-hidden">
          {images.slice(1).map((image) => (
            <div
              key={image.index}
              onMouseEnter={() => setHoverIndex(image.index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="h-[50%] relative overflow-hidden cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.name}
                quality={100}
                fill
                className="object-cover"
              />
              <div
                className={`absolute top-0 text-white w-full h-full flex justify-center items-end duration-500 ${
                  hoverIndex === image.index
                    ? "bg-black/30 lg:bg-black/70"
                    : "bg-black/30 lg:bg-transparent"
                }`}
              >
                <div
                  className={`transition-transform duration-1000 text-center space-y-2 lg:space-y-5 w-[90%] xl:w-[70%] 2xl:w-[50%] py-5 lg:py-10 ${
                    hoverIndex === image.index
                      ? "-translate-y-0"
                      : "-translate-y-0 lg:translate-y-[1000px]"
                  }`}
                >
                  <h1 className="text-xl lg:text-4xl font-medium">
                    {image.sectionTitle}
                  </h1>
                  <p className="text-[11px] lg:text-xs">{image.description}</p>
                  <Link href={image.path}>
                    <div className="border w-fit mx-auto bg-white text-black font-medium rounded-full cursor-pointer text-xs xl:text-sm flex justify-center items-center gap-1 px-5 py-1.5 lg:py-2.5 active:scale-95 duration-500">
                      Shop Now <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
