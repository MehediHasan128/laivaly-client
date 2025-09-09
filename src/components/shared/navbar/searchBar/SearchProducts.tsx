"use client";

import { getAllProducts } from "@/lib/api/products/products";
import { smoochsans } from "@/styles/font";
import { TProduct, TResponce } from "@/types/types";
import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const SearchProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<TProduct[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = (await getAllProducts()) as TResponce;
      setProducts(data)
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] 2xl:w-[45%] mx-auto text-center">
        <h1 className={`${smoochsans.className} font-bold text-5xl`}>
          Laivaly
        </h1>
        <div className="relative mt-3">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            name="searchTerm"
            placeholder="Search for Pre Order"
            className="border rounded-full w-full outline-none focus:border-black text-sm md:text-base px-5 py-3"
          />
          <span className="absolute top-0 right-0 flex items-center h-full px-5">
            <Search />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-20 border-y">
        {
            products?.map((product: TProduct) => (
                <div key={product?._id} className="border-r cursor-pointer overflow-hidden">
                    <div className="relative h-96">
                        <Image src={product?.productThumbnail} alt={product?.title} quality={100} fill className="hover:scale-110 duration-700" />
                    </div>
                </div>
            ))
        }
      </div>
    </>
  );
};

export default SearchProducts;
