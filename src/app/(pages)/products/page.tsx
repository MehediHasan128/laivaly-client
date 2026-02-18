import { filters } from "@/components/pages/products/Filters.utils";
import ProductFilters from "@/components/pages/products/ProductFilters";
import ProductSection from "@/components/pages/products/ProductSection";
import ProductSkeleton from "@/components/pages/products/ProductSkeleton";
import { getAllProducts } from "@/lib/api/products/products";
import { TResponce, TSearchParamsProp } from "@/types/types";
import { rearrangeProducts } from "@/utils";
import React, { Suspense } from "react";

const filtersData = [
  {
    title: "Category",
    field: "productCategory",
    options: [
      { value: "Tops", label: "Tops" },
      { value: "Bottoms", label: "Bottoms" },
    ],
  },
  {
    title: "Season",
    field: "season",
    options: [
      { value: "summer", label: "Summer" },
      { value: "winter", label: "Winter" },
      { value: "all-season", label: "All Season" },
    ],
  },
];

const ProductsPage = async ({ searchParams }: TSearchParamsProp) => {
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const Filters = filters(resolvedSearchParams);

  console.log(Filters);

  const allProducts = (await getAllProducts(Filters)) as TResponce;
  const products = rearrangeProducts(allProducts.data);

  return (
    <main className="bg-red-400">
      <ProductFilters filters={filtersData} totalProducts={products.length} />

      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<ProductSkeleton products={products} />}
      >
        <ProductSection searchParams={resolvedSearchParams} />
      </Suspense>
    </main>
  );
};

export default ProductsPage;
