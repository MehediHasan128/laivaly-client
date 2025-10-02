"use client";

import { useState } from "react";
import Container from "../../reusable/Container";
import Headline from "../../reusable/Headline";
import NewArrivalCard from "../../reusable/NewArrivalCard";
import Button from "../../reusable/Button";
import { smoochsans } from "@/styles/font";
import Link from "next/link";
import HomePageProductNotFound from "@/components/reusable/HomePageProductNotFound";
import { TProduct } from "@/types/product.type";

const buttons = [
  { value: "", label: "All" },
  { value: "Jacket", label: "Jacket" },
  { value: "Coat", label: "Coat" },
  { value: "Hoodie", label: "Hoodie" },
  { value: "Blazer", label: "Blazer" },
  { value: "Cardigan", label: "Cardigan" },
  { value: "Ankle Boots", label: "Ankle Boots" },
  { value: "Chelsea Boots", label: "Chelsea Boots" },
];

const SesonalCollection = ({
  winterProducts,
}: {
  winterProducts: TProduct[];
}) => {
  const [productCategory, setProductCategory] = useState<string>("");

  const selectedProducts = winterProducts?.filter(
    (product: TProduct) => product.productSubCategory === productCategory
  );

  const products = productCategory === "" ? winterProducts : selectedProducts;

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

        {!products.length && <HomePageProductNotFound />}

        {/* See more product button */}
        <div className="flex justify-center mt-5 md:mt-10">
          <Link href="/products/winter">
            <Button
              buttonTitle="Explore Winter Collection"
              className="bg-black text-white hover:bg-accent hover:text-black"
            />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SesonalCollection;
