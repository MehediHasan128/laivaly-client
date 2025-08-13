"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../reusable/Button";

const images = [
  {
    index: 0,
    url: "/images/categories/male.jpg",
    name: "maleImage",
    sectionTitle: "Men’s Collection",
    path: "/",
  },
  {
    index: 1,
    url: "/images/categories/female.jpg",
    name: "femaleImage",
    sectionTitle: "Women’s Collection",
    path: "/",
  },
  {
    index: 2,
    url: "/images/categories/children.jpg",
    name: "childrenImage",
    sectionTitle: "Kid’s Collection",
    path: "/",
  },
];

const FeaturedCategories = () => {

  return (
    <section className="overflow-hidden">
      <div className="flex flex-col md:flex-row overflow-hidden">
        {images.slice(0, 1).map((image) => (
          <div
            key={image.index}
            className="md:w-[50%] h-[500px] md:h-[600px] xl:h-[1000px] relative overflow-hidden cursor-pointer"
          >
            <Image
              src={image.url}
              alt={image.name}
              quality={100}
              fill
              className="h-full object-cover"
            />

            <div className="absolute top-0 text-white w-full h-full flex justify-center items-end duration-500 bg-gradient-to-t from-[#000000b4] to-transparent">
              <div
                className={`transition-transform duration-700 text-center space-y-2 lg:space-y-3 xl:space-y-4 w-[90%] xl:w-[70%] 2xl:w-[50%] py-5 lg:py-10`}
              >
                <h1 className="text-2xl font-bold">
                  {image.sectionTitle}
                </h1>
                <Link href={image.path}>
                  <Button
                    buttonTitle="Shop Now"
                    className="bg-[#00000012] backdrop-blur border-white rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}

        <div className="md:w-[50%] h-[600px] xl:h-[1000px] overflow-hidden">
          {images.slice(1).map((image) => (
            <div
              key={image.index}
              className="h-[50%] relative overflow-hidden cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.name}
                quality={100}
                fill
                className={`object-cover ${image.index === 1 && "object-top"}`}
              />
              <div className="absolute top-0 text-white w-full h-full flex justify-center items-end duration-500 bg-gradient-to-t from-[#000000b4] to-transparent">
                <div
                  className={`transition-transform duration-700 text-center space-y-2 lg:space-y-3 xl:space-y-4 w-[90%] xl:w-[70%] 2xl:w-[50%] py-5 lg:py-10`}
                >
                  <h1 className="text-2xl font-bold">
                    {image.sectionTitle}
                  </h1>
                  <Link href={image.path}>
                    <Button
                      buttonTitle="Shop Now"
                      className="bg-[#00000012] backdrop-blur border-white rounded"
                    />
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
