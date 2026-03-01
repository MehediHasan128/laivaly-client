import { TPartialProductData } from "@/types/product.type";
import ProductCard from "../../reusable/ProductCard";
import { TUser } from "@/types/user";
import { currentUser } from "@/lib/api/currentUser";

const ProductGrid = async ({
  products,
}: {
  products: TPartialProductData[];
  }) => {
  
  const user = (await currentUser()) as TUser;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense">
      {products?.map((product: TPartialProductData) => (
        <div
          key={product._id}
          className={`${
            product.productLayout === "vertical" ? "col-span-2 row-span-2" : ""
          } cursor-pointer overflow-hidden w-full`}
        >
          <ProductCard product={product} user={user} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
