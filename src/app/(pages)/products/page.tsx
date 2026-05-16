import { filters } from "@/components/pages/products/Filters.utils";
import ProductFilters from "@/components/pages/products/ProductFilters";
import ProductSection from "@/components/pages/products/ProductSection";
import ProductSkeleton from "@/components/pages/products/ProductSkeleton";
import { getAllProducts } from "@/lib/api/products/products";
import { TResponce, TSearchParamsProp } from "@/types/types";
import { rearrangeProducts } from "@/utils";
import { Suspense } from "react";

const ProductsPage = async ({ searchParams }: TSearchParamsProp) => {
  const resolvedSearchParams = searchParams ? await searchParams : {};

  

  const Filters = filters(resolvedSearchParams);

  const allProducts = (await getAllProducts(Filters)) as TResponce;
  const products = rearrangeProducts(allProducts.data);

  return (
    <main className="relative">
      <ProductFilters searchParams={resolvedSearchParams} />

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
