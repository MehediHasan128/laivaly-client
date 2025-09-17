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

const WomenPage = async () => {

  const allProducts = (await getAllProducts([
    { field: "productFor", value: "women" },
  ])) as TResponce;

  const products = rearrangeProducts(allProducts.data);
  return (
    <main>
      <CategoryBanner
        bannerImage="/images/categories/women.jpg"
        imageAlt="women"
        sectionTitle="Men"
        sectionSubtitle="Explore premium women’s fashion for every occasion."
      />

      <ProductFilters filters={filtersData} totalProducts={products?.length} />

      <ProductGrid products={products} />
    </main>
  );
};

export default WomenPage;
