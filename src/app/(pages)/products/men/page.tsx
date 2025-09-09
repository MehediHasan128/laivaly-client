import CategoryBanner from "@/components/pages/products/CategoryBanner";
import ProductFilters from "@/components/pages/products/ProductFilters";
import ProductGrid from "@/components/pages/products/ProductGrid";
import { getAllProducts } from "@/lib/api/products/products";
import { TResponce } from "@/types/types";
import { rearrangeProducts } from "@/utils";
import { Metadata } from "next";

const filtersData = [
  {
    title: "Category",
    options: [
      { value: "black t-shirt", label: "Black T-Shirt" },
      { value: "white t-shirt", label: "White T-Shirt" },
    ],
  },
  {
    title: "Price",
    options: [
      { value: "10.00 - 20.00", label: "$10.00 - $20.00" },
      { value: "20.00 - 30.00", label: "$20.00 - $30.00" },
    ],
  },
  {
    title: "Size",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "xxl", label: "XXL" },
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

const MenPage = async () => {
  const allProducts = (await getAllProducts()) as TResponce;

  const products = rearrangeProducts(allProducts.data);
  return (
    <main>
      <CategoryBanner
        bannerImage="/images/categories/men.jpg"
        imageAlt="men"
        sectionTitle="Men"
        sectionSubtitle="Explore premium men’s fashion for every occasion."
      />

      <ProductFilters filters={filtersData} />

      <ProductGrid products={products} category="men" />
    </main>
  );
};

export default MenPage;
