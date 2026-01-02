"use client";

import {
  getAllProducts,
  TProductQueryParams,
} from "@/lib/api/products/products";
import { smoochsans } from "@/styles/font";
import { TProduct } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { Search } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SearchProductCard from "./SearchProductCard";

const SearchProducts = ({
  setSearchBarOpen,
}: {
  setSearchBarOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<TProduct[]>();

  useEffect(() => {
    const timeout = setTimeout(
      async () => {
        try {
          setLoading(true);

          const filters: TProductQueryParams[] = searchTerm.trim()
            ? [{ field: "searchTerm", value: searchTerm }]
            : [{ field: "limit", value: "12" }];

          const { data } = (await getAllProducts(filters)) as TResponce;
          setProducts(data);
        } finally {
          setLoading(false);
        }
      },
      searchTerm ? 500 : 0
    );

    return () => clearTimeout(timeout);
  }, [searchTerm]);

  return (
    <>
      <div className="w-[90%] md:w-[80%] lg:w-[60%] 2xl:w-[60%] mx-auto text-center">
        <h1 className={`${smoochsans.className} font-bold text-5xl`}>
          Laivaly
        </h1>
        <div className="relative mt-3">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            name="searchTerm"
            placeholder="Search for Pre Order"
            className="border rounded-full w-full outline-none focus:border-black text-sm px-6 py-3"
          />
          <span className="absolute top-0 right-0 flex items-center h-full px-5">
            <Search className="size-5 md:size-6" />
          </span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[80vh]">
          <span className="loader "></span>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-0.5 mt-5 md:mt-10 lg:mt-12 max-h-[80vh] overflow-y-scroll scrollbar-hide">
          <SearchProductCard
            products={products as TProduct[]}
            setSearchBarOpen={setSearchBarOpen}
          />
        </div>
      )}
    </>
  );
};

export default SearchProducts;
