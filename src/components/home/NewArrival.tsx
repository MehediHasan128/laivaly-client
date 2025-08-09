"use client";

import { useState } from "react";
import Container from "../reusable/Container";
import Headline from "../reusable/Headline";
import { smoochsans } from "../styles/font";

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
          <div className="my-10 md:my-20 grid grid-cols-4 md:grid-cols-8 text-center gap-3 md:w-[70%]">
            {buttons.map((btn, index) => (
              <div
                onClick={() => setProductCategory(btn.value)}
                key={index}
                className={`p-0.5 border rounded active:scale-95 duration-500 ${btn.value === productCategory && "border-black"}`}
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
          <div>
            
            {/* Card-1 */}
            <div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default NewArrival;
