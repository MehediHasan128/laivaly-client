"use client";

import { useState } from "react";
import Container from "../reusable/Container";
import Headline from "../reusable/Headline";
import { smoochsans } from "../styles/font";
import NewArrivalCard from "../reusable/NewArrivalCard";
import { TProduct } from "../types/types";
import Button from "../reusable/Button";
import { ArrowRight } from "lucide-react";

const buttons = [
  { value: "all", label: "All" },
  { value: "t-shirt", label: "T-Shirts" },
  { value: "shirts", label: "Shirts" },
  { value: "bottoms", label: "Bottoms" },
  { value: "jackets", label: "Jackets" },
  { value: "hoodies & sweatshirts", label: "Hoodies" },
  { value: "bags", label: "Bags" },
  { value: "shoes", label: "Shoes" },
];

export const products: TProduct[] = [
  {
    _id: "1",
    title: "Classic White T-Shirt",
    thumbnail: "/images/products/1.jpg",
    images: ["/images/products/1.jpg", "/images/products/2.jpg"],
    price: 19.99,
  },
  {
    _id: "2",
    title: "Slim Fit Blue Jeans",
    thumbnail: "/images/products/3.jpg",
    images: ["/images/products/3.jpg", "/images/products/4.jpg"],
    price: 49.99,
  },
  {
    _id: "3",
    title: "Black Leather Jacket",
    thumbnail: "/images/products/5.jpg",
    images: ["/images/products/5.jpg", "/images/products/6.jpg"],
    price: 129.99,
  },
  {
    _id: "4",
    title: "Red Summer Dress",
    thumbnail: "/images/products/7.jpg",
    images: ["/images/products/7.jpg", "/images/products/8.jpg"],
    price: 59.99,
  },
  {
    _id: "5",
    title: "Sport Running Shoes",
    thumbnail: "/images/products/9.jpg",
    images: ["/images/products/9.jpg", "/images/products/10.jpg"],
    price: 79.99,
  },
  {
    _id: "6",
    title: "Formal White Shirt",
    thumbnail: "/images/products/11.jpg",
    images: ["/images/products/11.jpg", "/images/products/12.jpg"],
    price: 39.99,
  },
];

const NewArrival = () => {
  const [productCategory, setProductCategory] = useState<string>("all");

  return (
    <section>
      <Container>
        <div>
          {/* Heading secrion */}
          <div>
            <Headline
              title="New Arrivals – Fresh Styles Just For You"
              description="Step into the season with our latest collection of fashion-forward
          styles, curated to bring you the perfect blend of trend and comfort.
          From everyday essentials to statement pieces, discover outfits that
          let you express your personality and stay ahead in style."
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
              buttonTitle="Explore All Product"
              className="bg-black text-white hover:bg-accent hover:text-black"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
