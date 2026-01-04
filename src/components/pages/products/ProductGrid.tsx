import { TPartialProductData } from "@/types/product.type";
import ProductCard from "../../reusable/ProductCard";
import Link from "next/link";

const ProductGrid = ({ products }: { products: TPartialProductData[] }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense gap-0.5">
      {products?.map((product: TPartialProductData) => (
        <Link
          key={product._id}
          href={`/products/${product.productFor}/${product._id}`}
          className={`${
            product.productLayout === "vertical" ? "col-span-2 row-span-2" : ""
          } cursor-pointer overflow-hidden w-full`}
        >
          <div>
            <ProductCard product={product} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
