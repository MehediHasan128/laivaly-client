"use client";

import { TProduct } from "@/types/types";
import Container from "../reusable/Container";
import ProductCard from "../reusable/ProductCard";
import { useState } from "react";
import Link from "next/link";

interface TProductGrid {
  products: Pick<
    TProduct,
    "_id" | "title" | "price" | "thumbnail" | "isLarge"
  >[];
  category: string;
}

const ProductGrid = ({ products, category }: TProductGrid) => {
  const [fav, setFav] = useState<boolean>(false);

  const handleAddProductToWishlist = async (id: string) => {
    console.log(id);
    setFav(!fav);
    console.log(fav);
  };

  return (
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense border-l border-t">
        {products?.map(
          (
            product: Pick<
              TProduct,
              "_id" | "title" | "price" | "thumbnail" | "isLarge"
            >
          ) => (
            <Link
              key={product._id}
              href={`/products/${category}/${product._id}`}
              className={`${
                product.isLarge ? "col-span-2" : ""
              } cursor-pointer overflow-hidden w-full border-b border-r`}
            >
              <div>
                <ProductCard
                  product={product}
                  handleAddProductToWishlist={handleAddProductToWishlist}
                />
              </div>
            </Link>
          )
        )}
      </div>
    </Container>
  );
};

export default ProductGrid;
