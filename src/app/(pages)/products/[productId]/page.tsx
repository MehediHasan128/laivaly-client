import ProductDetailsHeader from "@/components/pages/productDetail/ProductDetailsHeader";
import ProductCard from "@/components/reusable/ProductCard";
import { currentUser } from "@/lib/api/currentUser";
import { getAllProducts, getSingleProducts } from "@/lib/api/products/products";
import { getProductVariant } from "@/lib/api/productVariant/productVariant";
import { productExistToWishlist } from "@/lib/api/wishlist/wishlist.api";
import { TPartialProductData, TProduct, TVariants } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { TUser } from "@/types/user";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const data = (await getSingleProducts(productId)) as TResponce;
  const product = data?.data as TProduct;

  return {
    title: `${product?.title}`,
    description: product?.description?.shortDescription,
  };
}

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  // Get user data
  const user = (await currentUser()) as TUser;

  const { productId } = await params;

  // Get single Product
  const data = (await getSingleProducts(productId)) as TResponce;
  const product = data?.data as TProduct;

  // Get Product variants
  const allVariants = (await getProductVariant(
    product?.productVariants,
  )) as TResponce;
  const variants = allVariants?.data as TVariants[];

  let isProductExistToWishlist = false;
  if (user !== null) {
    const { data } = (await productExistToWishlist(product?._id)) as TResponce;
    isProductExistToWishlist = data;
  }

  const getSimilerProducts = await getAllProducts([
    { field: "limit", value: "4" },
    { field: "productFor", value: product?.productFor },
  ]) as TResponce;

  const similerProducts = getSimilerProducts?.data;

  return (
    <main>
      <ProductDetailsHeader
        product={product}
        user={user}
        variants={variants}
        isProductExistToWishlist={isProductExistToWishlist}
      />

      <section>
        <div className="p-16 text-sm font-medium">
          <h1>You May Also Like</h1>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-dense">
          {similerProducts?.map((product: TPartialProductData) => (
            <div key={product._id}>
              <ProductCard product={product} user={user} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
