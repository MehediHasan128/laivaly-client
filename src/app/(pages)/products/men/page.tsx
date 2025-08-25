import CategoryBanner from "@/components/pages/products/CategoryBanner";
import ProductFilters from "@/components/pages/products/ProductFilters";
import ProductGrid from "@/components/pages/products/ProductGrid";
import { rearrangeProducts } from "@/utils";
import { Metadata } from "next";

const allProducts = [
  {
    _id: "1",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "2",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "3",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "4",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "5",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "6",
    thumbnail: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    _id: "7",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "8",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "9",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "10",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "11",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "12",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "13",
    thumbnail: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    _id: "14",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "15",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "16",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "17",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "18",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "19",
    thumbnail: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    _id: "20",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "21",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "22",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "23",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "24",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "25",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "26",
    thumbnail: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    _id: "27",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "28",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "29",
    thumbnail: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    _id: "30",
    thumbnail: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
];

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

const MenPage = () => {
  const products = rearrangeProducts(allProducts);
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
