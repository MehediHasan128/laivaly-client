import { filters } from "@/components/pages/products/Filters.utils";
import ProductFilters from "@/components/pages/products/ProductFilters";
import ProductSection from "@/components/pages/products/ProductSection";
import ProductSkeleton from "@/components/pages/products/ProductSkeleton";
import { getAllProducts } from "@/lib/api/products/products";
import { TResponce, TSearchParamsProp } from "@/types/types";
import { rearrangeProducts } from "@/utils";
import { Metadata } from "next";
import { Suspense } from "react";

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

export const metadata: Metadata = {
  title: "Men's Fashion",
  description:
    "Explore the latest trends in men's fashion at Laivaly. Shop high-quality clothing, accessories, and footwear for men with fast delivery and secure checkout.",
  keywords: [
    "Men's clothing",
    "Men's fashion",
    "Men's accessories",
    "Laivaly",
    "Trendy men's wear",
    "Men's shoes",
  ],
};

const MenPage = async ({ searchParams }: TSearchParamsProp) => {
  const Filters = filters(
    "productFor",
    "men",
    searchParams as Record<string, string>
  );
  const allProducts = (await getAllProducts(Filters)) as TResponce;
  const products = rearrangeProducts(allProducts.data);

  return (
    <main className="relative">
      <ProductFilters filters={filtersData} totalProducts={products.length} />

      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<ProductSkeleton products={products} />}
      >
        <ProductSection
          defaultField="productFor"
          productFor="men"
          searchParams={searchParams as Record<string, string>}
        />
      </Suspense>
    </main>
  );
};

export default MenPage;
