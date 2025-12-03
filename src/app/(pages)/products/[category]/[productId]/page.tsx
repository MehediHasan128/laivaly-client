import ProductColorSizeAndQuantity from "@/components/pages/productDetail/ProductColorSizeAndQuantity";
import ProductDescriptionDrawer from "@/components/pages/productDetail/ProductDescriptionDrawer";
import ProductDetailsHeader from "@/components/pages/productDetail/ProductDetailsHeader";
import ProductImages from "@/components/pages/productDetail/ProductImages";
import ProductReviewDrawer from "@/components/pages/productDetail/ProductReviewDrawer";
import DiscoverMoreProductCard from "@/components/reusable/DiscoverMoreProductCard";
import { currentUser } from "@/lib/api/currentUser";
import { getAllProducts, getSingleProducts } from "@/lib/api/products/products";
import { getProductVariant } from "@/lib/api/productVariant/productVariant";
import { productExistToWishlist } from "@/lib/api/wishlist/wishlist";
import { TProduct, TVariants } from "@/types/product.type";
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
  const allVariants = (await getProductVariant(product?.productVariants)) as TResponce;
  const variants = allVariants?.data as TVariants[];

  let isProductExistToWishlist = false;
  if (user !== null) {
    const { data } = (await productExistToWishlist(product?._id)) as TResponce;
    isProductExistToWishlist = data;
  }

  return (
    <main>
      <ProductDetailsHeader
        product={product}
        user={user}
        variants={variants}
        isProductExistToWishlist={isProductExistToWishlist}
      />
    </main>
  );
};

export default ProductDetailsPage;
