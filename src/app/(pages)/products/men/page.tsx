import Container from "@/components/reusable/Container";
import ProductCard from "@/components/reusable/ProductCard";
import { rearrangeProducts } from "@/utils";
import Image from "next/image";

export interface TProduct {
  id: number;
  url: string;
  title: string;
  price: number;
  isLarge: boolean;
};

const allProducts = [
    {id: 1, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 2, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 3, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 4, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 5, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 6, url: "/images/categories/big.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: true},
    {id: 7, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 8, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 9, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 10, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 11, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 12, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 13, url: "/images/categories/big.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: true},
    {id: 14, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 15, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 16, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 17, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 18, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
    {id: 19, url: "/images/categories/big.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: true},
    {id: 20, url: "/images/categories/p1.jpg", title: "Slim Fit Blue Jeans", price: 59.00, isLarge: false},
];


const products = rearrangeProducts(allProducts);


const MenPage = () => {
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
      </div>

      <div className="border-b p-5 md:p-10 xl:p-12">
        <h1>Filter</h1>
      </div>

      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense border-l border-t">
        {
            products?.map((product) => (
                <div key={product.id} className={`${product.isLarge ? "col-span-2" : ""} cursor-pointer overflow-hidden w-full border-b border-r`}>
                    <ProductCard product={product} />    
                </div>
            ))
        }
      </div>
      </Container>
    </main>
  );
};

export default MenPage;
