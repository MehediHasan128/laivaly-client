import { TProduct } from "@/types/types";
import Container from "../reusable/Container";
import ProductCard from "../reusable/ProductCard";

interface TProductGrid {
  products: Pick<
    TProduct,
    "_id" | "title" | "price" | "thumbnail" | "isLarge"
  >[];
}

const ProductGrid = ({ products }: TProductGrid) => {
  return (
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense border-l border-t">
        {products?.map(
          (
            product: Pick<
              TProduct,
              "_id" | "title" | "price" | "thumbnail" | "isLarge"
            >
          ) => (
            <div
              key={product._id}
              className={`${
                product.isLarge ? "col-span-2" : ""
              } cursor-pointer overflow-hidden w-full border-b border-r`}
            >
              <ProductCard product={product} />
            </div>
          )
        )}
      </div>
    </Container>
  );
};

export default ProductGrid;
