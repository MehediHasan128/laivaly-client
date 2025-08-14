import Container from "@/components/reusable/Container";
import ProductCard from "@/components/reusable/ProductCard";
import { rearrangeProducts } from "@/utils";
import { Metadata } from "next";
import Image from "next/image";

const allProducts = [
  {
    id: 1,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 2,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 3,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 4,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 5,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 6,
    url: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    id: 7,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 8,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 9,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 10,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 11,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 12,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 13,
    url: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    id: 14,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 15,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 16,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 17,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 18,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 19,
    url: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    id: 20,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 21,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 22,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 23,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 24,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 25,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 26,
    url: "/images/categories/big.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: true,
  },
  {
    id: 27,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 28,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 29,
    url: "/images/categories/p2.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
  {
    id: 30,
    url: "/images/categories/p1.jpg",
    title: "Slim Fit Blue Jeans",
    price: 59.0,
    isLarge: false,
  },
];

export const metadata: Metadata = {
  title: "Men's Fashion",
  description:
    "Explore the latest trends in men's fashion at Laivaly. Shop high-quality clothing, accessories, and footwear for men with fast delivery and secure checkout.",
  keywords: ["Men's clothing", "Men's fashion", "Men's accessories", "Laivaly", "Trendy men's wear", "Men's shoes"],
};

const MenPage = () => {
  const products = rearrangeProducts(allProducts);
  return (
    <main>
      <div className="relative h-[250px] md:h-[500px] lg:h-[600px] 2xl:h-[800px] w-full">
        <Image
          src="/images/categories/men.jpg"
          alt="men"
          quality={100}
          fill
          className="object-cover object-top"
        />
        <div className="absolute top-0 w-full h-full flex justify-center items-end bg-gradient-to-t from-[#00000058] to-[#00000058]">
            <div className="text-center text-sm md:text-base xl:text-lg font-light space-y-1 xl:space-y-3 2xl:space-y-5 text-white py-5 xl:py-10">
              <p>New In</p>
              <h1 className="text-2xl md:text-4xl xl:text-6xl font-semibold">Men</h1>
              <p>Explore premium men’s fashion for every occasion.</p>
            </div>
        </div>
      </div>

      <div className="border-b p-5 md:p-10 xl:p-12">
        <h1>Filter</h1>
      </div>

      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense border-l border-t">
          {products?.map((product) => (
            <div
              key={product.id}
              className={`${
                product.isLarge ? "col-span-2" : ""
              } cursor-pointer overflow-hidden w-full border-b border-r`}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default MenPage;
