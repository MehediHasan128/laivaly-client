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
  title: "Kids' Fashion",
  description:
    "Discover the cutest and trendiest fashion for kids at Laivaly. Shop high-quality, comfortable, and stylish clothing, footwear, and accessories for children with fast delivery and secure checkout.",
  keywords: [
    "Kids' clothing",
    "Kids' fashion",
    "Kids' wear",
    "Children's apparel",
    "Laivaly",
    "Kids' shoes",
    "Infant clothing",
    "Toddler fashion",
  ],
};

const KidsPage = async ({ searchParams }: TSearchParamsProp) => {

  const resolvedSearchParams = searchParams ? await searchParams : {};

  const Filters = filters(
    "productFor",
    "kids",
    resolvedSearchParams
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
          productFor="kids"
          searchParams={resolvedSearchParams}
        />
      </Suspense>
    </main>
  );
};

export default KidsPage;
