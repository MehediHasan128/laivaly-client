import { getAllProducts } from "@/lib/api/products/products";
import { filters } from "./Filters.utils";
import { TResponce } from "@/types/types";
import { rearrangeProducts } from "@/utils";
import ProductGrid from "./ProductGrid";

const ProductSection = async ({
  searchParams,
}: {
  searchParams: Record<string, string | string[] | undefined>;
}) => {
  const Filters = filters(searchParams as Record<string, string>);

  const allProducts = (await getAllProducts(Filters)) as TResponce;
  const products = rearrangeProducts(allProducts.data);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductSection;
