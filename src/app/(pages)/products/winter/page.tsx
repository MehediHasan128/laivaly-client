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
  title: "Winter Collection",
  description:
    "Stay warm and stylish with Laivaly's Winter Collection. Shop jackets, coats, hoodies, sweaters, boots, and more for men, women, and kids with fast delivery and secure checkout.",
  keywords: [
    "Winter fashion",
    "Winter collection",
    "Winter jackets",
    "Winter coats",
    "Winter hoodies",
    "Winter boots",
    "Men's winter wear",
    "Women's winter fashion",
    "Kids' winter clothes",
    "Laivaly winter collection",
  ]
};


const WinterCollectionPage = async ({ searchParams }: TSearchParamsProp) => {

  const resolvedSearchParams = searchParams ? await searchParams : {};

  const Filters = filters(
    "season",
    "winter",
    resolvedSearchParams
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
          defaultField="season"
          productFor="winter"
          searchParams={resolvedSearchParams}
        />
      </Suspense>
    </main>
  );
};

export default WinterCollectionPage;
