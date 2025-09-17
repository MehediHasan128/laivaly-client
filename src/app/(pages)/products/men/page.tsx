import CategoryBanner from "@/components/pages/products/CategoryBanner";
import { filters } from "@/components/pages/products/Filters";
import ProductFilters from "@/components/pages/products/ProductFilters";
import ProductGrid from "@/components/pages/products/ProductGrid";
import { getAllProducts, TProductQueryParams } from "@/lib/api/products/products";
import { TResponce } from "@/types/types";
import { rearrangeProducts } from "@/utils";
import { Metadata } from "next";

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

export interface TSearchParamsProp {
  searchParams?: Record<string, string>;
}

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

const MenPage = async ({searchParams}: TSearchParamsProp) => {

  const Filters = filters('men', searchParams as Record<string, string>)

  const allProducts = (await getAllProducts(Filters)) as TResponce;

  const products = rearrangeProducts(allProducts.data);
  return (
    <main>
      <CategoryBanner
        bannerImage="/images/categories/men.jpg"
        imageAlt="men"
        sectionTitle="Men"
        sectionSubtitle="Explore premium men’s fashion for every occasion."
      />

      <ProductFilters filters={filtersData} totalProducts={products?.length} />

      <ProductGrid products={products} />
    </main>
  );
};

export default MenPage;
