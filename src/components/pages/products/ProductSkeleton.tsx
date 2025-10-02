import Container from "@/components/reusable/Container";
import { Skeleton } from "@/components/ui/skeleton";
import { TProduct } from "@/types/product.type";


const ProductSkeleton = ({
  products,
}: {
  products: Pick<TProduct, "_id" | "highlightedProduct">[];
}) => {
  return (
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense gap-2">
        {products.map((product) => (
          <div
            key={product._id}
            className={`${
              product.highlightedProduct ? "col-span-2" : ""
            } cursor-pointer overflow-hidden w-full`}
          >
            <Skeleton>
              <div className={`h-[200px] md:h-[400px] 2xl:h-[500px]`}></div>
            </Skeleton>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductSkeleton;
