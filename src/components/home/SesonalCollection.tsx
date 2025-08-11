"use client";

import { useState } from "react";
import Container from "../reusable/Container";
import Headline from "../reusable/Headline";
import NewArrivalCard from "../reusable/NewArrivalCard";
import Button from "../reusable/Button";
import { TProduct } from "@/types/types";
import { smoochsans } from "@/styles/font";

const buttons = [
  { value: "all", label: "All" },
  { value: "cozy-knitwear", label: "Cozy Knitwear" },
  { value: "puffer-jackets", label: "Puffer Jackets" },
  { value: "wool-coats", label: "Wool Coats" },
  { value: "thermal-layers", label: "Thermal Layers" },
];

export const products: TProduct[] = [
  {
    _id: "1",
    title: "Classic White T-Shirt",
    thumbnail: "/images/products/13.jpg",
    images: ["/images/products/13.jpg", "/images/products/14.jpg"],
    price: 19.99,
  },
  {
    _id: "2",
    title: "Slim Fit Blue Jeans",
    thumbnail: "/images/products/15.jpg",
    images: ["/images/products/15.jpg", "/images/products/16.jpg"],
    price: 49.99,
  },
  {
    _id: "3",
    title: "Black Leather Jacket",
    thumbnail: "/images/products/17.jpg",
    images: ["/images/products/17.jpg", "/images/products/18.jpg"],
    price: 129.99,
  },
  {
    _id: "4",
    title: "Red Summer Dress",
    thumbnail: "/images/products/19.jpg",
    images: ["/images/products/19.jpg", "/images/products/20.jpg"],
    price: 59.99,
  },
  {
    _id: "5",
    title: "Sport Running Shoes",
    thumbnail: "/images/products/21.jpg",
    images: ["/images/products/21.jpg", "/images/products/22.jpg"],
    price: 79.99,
  },
  {
    _id: "6",
    title: "Formal White Shirt",
    thumbnail: "/images/products/23.jpg",
    images: ["/images/products/23.jpg", "/images/products/24.jpg"],
    price: 39.99,
  },
];

const SesonalCollection = () => {
  const [productCategory, setProductCategory] = useState<string>("all");

  return (
    <section>
      <div
        style={{ backgroundImage: `url('/images/categories/9.jpg')` }}
        className="h-[600px] md:h-[900px] bg-cover bg-center md:bg-fixed bg-scroll"
      />
      <Container>
        {/* Headline */}
        <div>
          <Headline
            title="Winter Collection 2025"
            description="Discover our curated winter wardrobe for men, women, and children — where timeless style meets seasonal warmth. Crafted for comfort, designed for elegance."
          />
        </div>

        {/* buttons */}
        <div className="my-10 lg:my-20 grid grid-cols-4 md:grid-cols-8 text-center gap-3 lg:w-[90%] xl:w-[60%]">
          {buttons.map((btn, index) => (
            <div
              onClick={() => setProductCategory(btn.value)}
              key={index}
              className={`p-0.5 border rounded active:scale-95 duration-500 ${
                btn.value === productCategory && "border-black"
              }`}
            >
              <button
                className={`${
                  smoochsans.className
                } cursor-pointer md:text-xl w-full font-bold rounded ${
                  btn.value === productCategory
                    ? "bg-black text-white"
                    : "bg-white"
                } py-1 md:py-2`}
              >
                {btn.label}
              </button>
            </div>
          ))}
        </div>

        {/* New arribal card */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 md:gap-4">
          {products.map((product) => (
            <NewArrivalCard key={product?._id} product={product} />
          ))}
        </div>

        {/* See more product button */}
          <div className="text-center mt-5 md:mt-10">
            <Button
              buttonTitle="Explore Collection"
              className="bg-black text-white hover:bg-accent hover:text-black"
            />
          </div>
      </Container>
    </section>
  );
};

export default SesonalCollection;
