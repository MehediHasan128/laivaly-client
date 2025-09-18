import { getAllProducts } from "@/lib/api/products/products";
import { filters } from "./Filters.utils";
import { TResponce } from "@/types/types";
import { rearrangeProducts } from "@/utils";
import ProductGrid from "./ProductGrid";

const ProductSection = async ({
  defaultField,
  productFor,
  searchParams,
}: {
  defaultField: "productFor" | "season" | "productGroup" | "searchTerm",
  productFor: string;
  searchParams: Record<string, string>;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));

  const Filters = filters(defaultField, productFor, searchParams as Record<string, string>);

  const allProducts = (await getAllProducts(Filters)) as TResponce;

  const products = rearrangeProducts(allProducts.data);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductSection;
