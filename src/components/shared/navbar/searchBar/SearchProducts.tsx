"use client";

import { getAllProducts } from "@/lib/api/products/products";
import { smoochsans } from "@/styles/font";
import { TProduct } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SearchProductCard from "./SearchProductCard";

const SearchProducts = ({setSearchBarOpen}: {setSearchBarOpen?: Dispatch<SetStateAction<boolean>>;}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<TProduct[]>();
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = (await getAllProducts([
        { field: "searchTerm", value: searchTerm },
      ])) as TResponce;
      setProducts(data);
    };

    fetchProducts();
  }, [searchTerm]);

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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-0.5 mt-5 md:mt-10 lg:mt-12 max-h-[80vh] overflow-y-scroll scrollbar-hide">
        <SearchProductCard products={products as TProduct[]} setSearchBarOpen={setSearchBarOpen}/>
      </div>
    </>
  );
};

export default SearchProducts;
