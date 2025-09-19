"use client";

import { useState } from "react";
import Container from "../../reusable/Container";
import Headline from "../../reusable/Headline";
import NewArrivalCard from "../../reusable/NewArrivalCard";
import Button from "../../reusable/Button";
import { smoochsans } from "@/styles/font";
import { TProduct } from "@/types/types";
import Link from "next/link";
import HomePageProductNotFound from "@/components/reusable/HomePageProductNotFound";

const buttons = [
  { value: "", label: "All" },
  { value: "Tops", label: "Tops" },
  { value: "Bottoms", label: "Bottoms" },
  { value: "Outerwear", label: "Outerwear" },
  { value: "Bags", label: "Bags" },
  { value: "Sneakers", label: "Sneakers" },
  { value: "Boots", label: "Boots" },
  { value: "Perfume", label: "Perfume" },
];

const NewArrival = ({
  newArrivalProducts,
}: {
  newArrivalProducts: TProduct[];
}) => {
  const [productCategory, setProductCategory] = useState<string>("");

  const selectedProducts = newArrivalProducts?.filter(
    (product: TProduct) => product.productCategory === productCategory
  );

  const products =
    productCategory === "" ? newArrivalProducts : selectedProducts;

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
            {products.slice(0, 12).map((product) => (
              <NewArrivalCard key={product?._id} product={product} />
            ))}
          </div>

          {!products.length && <HomePageProductNotFound />}

          {/* See more product button */}
          <div className="flex justify-center mt-5 md:mt-10">
            <Link href="/products/new">
              <Button
                buttonTitle="Explore All Product"
                className="bg-black text-white hover:bg-accent hover:text-black"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
