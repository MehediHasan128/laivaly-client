import { TPartialProductData } from "@/types/product.type";
import Container from "../../reusable/Container";
import ProductCard from "../../reusable/ProductCard";
import Link from "next/link";

const ProductGrid = ({ products }: { products: TPartialProductData[] }) => {

  return (
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense border-l border-t">
        {products?.map((product: TPartialProductData) => (
          <Link
            key={product._id}
            href={`/products/${product.productFor}/${product._id}`}
            className={`${
              product.highlightedProduct ? "col-span-2" : ""
            } cursor-pointer overflow-hidden w-full border-b border-r`}
          >
            <div>
              <ProductCard product={product} />
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductGrid;
