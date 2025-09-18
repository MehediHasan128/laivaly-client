import CategoryBanner from "@/components/pages/products/CategoryBanner";
import { filters } from "@/components/pages/products/Filters.utils";
import ProductFilters from "@/components/pages/products/ProductFilters";
import ProductGrid from "@/components/pages/products/ProductGrid";
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
    value: "productCategory",
    options: [
      { value: "Tops", label: "Tops" },
      { value: "Bottoms", label: "Bottoms" },
    ],
  },
  {
    title: "Season",
    value: "season",
    options: [
      { value: "summer", label: "Summer" },
      { value: "winter", label: "Winter" },
      { value: "all-season", label: "All Season" },
    ],
  },
];

export const metadata: Metadata = {
  title: "Women's Fashion",
  description:
    "Explore the latest trends in women's fashion at Laivaly. Shop high-quality clothing, accessories, and footwear for women with fast delivery and secure checkout.",
  keywords: [
    "Women's clothing",
    "Women's fashion",
    "Women's accessories",
    "Laivaly",
    "Trendy women's wear",
    "Women's shoes",
  ],
};

const WomenPage = async ({ searchParams }: TSearchParamsProp) => {
  const Filters = filters("women", searchParams as Record<string, string>);

  const allProducts = (await getAllProducts(Filters)) as TResponce;

  const products = rearrangeProducts(allProducts.data);
  return (
    <main>
      <CategoryBanner
        bannerImage="/images/categories/women.jpg"
        imageAlt="women"
        sectionTitle="Men"
        sectionSubtitle="Explore premium women’s fashion for every occasion."
      />

      <ProductFilters filters={filtersData} totalProducts={products.length} />

      <Suspense
        key={JSON.stringify(searchParams)}
        fallback={<ProductSkeleton products={products} />}
      >
        <ProductSection
          productFor="women"
          searchParams={searchParams as Record<string, string>}
        />
      </Suspense>
    </main>
  );
};

export default WomenPage;
