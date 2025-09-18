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
  {
    title: "Price",
    field: "price",
    options: [
      { value: "summer", label: "Summer" },
      { value: "winter", label: "Winter" },
      { value: "all-season", label: "All Season" },
    ],
  },
];

export const metadata: Metadata = {
  title: "New Collections",
  description:
    "Discover Laivaly's curated collections featuring premium fashion for men, women, and kids. Shop seasonal styles, trendy outfits, and must-have essentials with fast delivery and secure checkout.",
  keywords: [
    "Fashion collections",
    "Men's collections",
    "Women's collections",
    "Kids' collections",
    "Seasonal fashion",
    "Trendy outfits",
    "Laivaly",
  ],
};

const NewCollectionPage = async ({ searchParams }: TSearchParamsProp) => {
  const Filters = filters(
    "searchTerm",
    "",
    searchParams as Record<string, string>
  );

  const allProducts = (await getAllProducts(Filters)) as TResponce;

  const products = rearrangeProducts(allProducts.data);
  return (
    <main>
      <ProductFilters filters={filtersData} totalProducts={products.length} />

      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<ProductSkeleton products={products} />}
      >
        <ProductSection
          defaultField="searchTerm"
          productFor=""
          searchParams={searchParams as Record<string, string>}
        />
      </Suspense>
    </main>
  );
};

export default NewCollectionPage;
