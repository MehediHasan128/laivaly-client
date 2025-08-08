/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const images = [
  { index: 0, url: "/images/categories/male.jpg", name: "maleImage" },
  { index: 1, url: "/images/categories/female.jpg", name: "femaleImage" },
  { index: 2, url: "/images/categories/children.jpg", name: "childrenImage" },
];

const FeaturedCategories = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  console.log(hoverIndex);

  return (
    <section className="overflow-hidden mb-96">
      <div className="flex flex-col xl:flex-row overflow-hidden">
        {images.slice(0, 1).map((image) => (
          <div
            key={image.index}
            onMouseEnter={() => setHoverIndex(image.index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="xl:w-[50%] xl:h-[1200px] relative overflow-hidden cursor-pointer"
          >
            <img src={image.url} alt={image.name} />

            <div
              className={`absolute top-0 text-white w-full h-full flex justify-center items-end duration-500 ${
                hoverIndex === image.index ? "bg-black/60" : "bg-transparent"
              }`}
            >
              <div
                className={`transition-transform duration-1000 ${
                  hoverIndex === image.index
                    ? "-translate-y-0"
                    : "translate-y-[1000px]"
                } -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2`}
              >
                <h1>Hello everyone</h1>
                <h1>Hello everyone</h1>
                <h1>Hello everyone</h1>
                <h1>Hello everyone</h1>
                <h1>Hello everyone</h1>
                <h1>Hello everyone</h1>
              </div>
            </div>
          </div>
        ))}

        <div className="xl:w-[50%] xl:h-[1200px] overflow-hidden">
          {images.slice(1).map((image) => (
            <div
              key={image.index}
              onMouseEnter={() => setHoverIndex(image.index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="xl:h-[50%] relative overflow-hidden cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.name}
                className="h-full w-full object-cover"
              />
              <div
                className={`absolute top-0 text-white w-full h-full flex justify-center items-end duration-500 ${
                  hoverIndex === image.index ? "bg-black/60" : "bg-transparent"
                }`}
              >
                <div
                  className={`transition-transform duration-1000 ${
                    hoverIndex === image.index
                      ? "-translate-y-0"
                      : "translate-y-[1000px]"
                  } -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2`}
                >
                  <h1>Hello everyone</h1>
                  <h1>Hello everyone</h1>
                  <h1>Hello everyone</h1>
                  <h1>Hello everyone</h1>
                  <h1>Hello everyone</h1>
                  <h1>Hello everyone</h1>
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
