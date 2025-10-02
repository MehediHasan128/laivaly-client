import ProductColorSizeAndQuantity from "@/components/pages/productDetail/ProductColorSizeAndQuantity";
import ProductDescriptionDrawer from "@/components/pages/productDetail/ProductDescriptionDrawer";
import ProductImages from "@/components/pages/productDetail/ProductImages";
import ProductReviewDrawer from "@/components/pages/productDetail/ProductReviewDrawer";
import DiscoverMoreProductCard from "@/components/reusable/DiscoverMoreProductCard";
import { getAllProducts, getSingleProducts } from "@/lib/api/products/products";
import { TProduct } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { ChevronRight } from "lucide-react";
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
  const { productId } = await params;

  const data = (await getSingleProducts(productId)) as TResponce;
  const product = data?.data as TProduct;

  const { season, productGroup, productCategory, productSubCategory } = product;

  const relatedProducts = (await getAllProducts([
    { field: "limit", value: "6" },
    { field: "season", value: season as string },
    { field: "productGroup", value: productGroup as string },
    { field: "productCategory", value: productCategory as string },
    { field: "productSubCategory", value: productSubCategory as string },
  ])) as TResponce;
  const products = relatedProducts?.data;

  const discountPrice = (
    product?.price -
    product?.price * (product?.discount / 100)
  ).toFixed(2);

  return (
    <main>
      <section className="flex flex-col lg:flex-row">
        <div className="lg:w-[50vw]">
          <ProductImages images={product?.productImages} />
        </div>

        <div className="lg:w-[50vw] px-3 py-5 md:px-10 md:py-10 lg:px-10 xl:px-15 2xl:px-42 lg:py-16 relative">
          <div className="sticky top-10 space-y-3 xl:space-y-5">
            <div className="space-y-2 md:space-y-3 xl:space-y-5">
              <div className="border rounded-full w-fit gray-text px-5 py-0.5">
                {product?.productCategory}
              </div>
              <h1 className="font-semibold text-xl md:font-bold md:text-2xl lg:text-xl 2xl:text-3xl">
                {product?.title}
              </h1>
              <h1 className="text-xl md:text-2xl font-bold">
                ${discountPrice}{" "}
                {product?.discount > 0 && (
                  <>
                    <span className="font-light line-through text-gray-500">
                      ${product?.price}
                    </span>{" "}
                    <sub className="text-red-700">{product?.discount}% off</sub>
                  </>
                )}
              </h1>
            </div>
            {/* Product Description */}
            <div className="space-y-3">
              <h1 className="font-semibold text-lg">Description:</h1>
              <p className="gray-text text-justify text-xs xl:text-sm">
                {product?.description?.shortDescription}{" "}
                <ProductDescriptionDrawer
                  productDescriptions={product?.description}
                >
                  <span className="text-blue-700 font-semibold cursor-pointer">
                    See More
                  </span>
                </ProductDescriptionDrawer>
              </p>
            </div>

            <ProductColorSizeAndQuantity product={product} />

            <div className="mt-12">
              <div className="w-full border-b mb-5" />
              <ProductReviewDrawer>
                <div className="flex justify-between items-center text-lg font-semibold cursor-pointer">
                  <h1>Reviews</h1>
                  <span className="flex gap-2 items-center">
                    <h1>4.3/5</h1>
                    <ChevronRight />
                  </span>
                </div>
              </ProductReviewDrawer>
              <div className="w-full border-b my-5" />
              <div className="flex justify-between items-center text-lg font-semibold cursor-pointer">
                <h1>Shipping & Return</h1>
                <ChevronRight />
              </div>
              <div className="w-full border-b mt-5" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 xl:mt-42">
        <h1 className="text-center text-xl md:text-3xl font-semibold">
          You might also like
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 my-20 gap-y-5">
          {products?.map((product: TProduct) => (
            <div
              key={product?._id}
              className="basis-[50%] md:basis-[35%] xl:basis-[25%] 2xl:basis-[20%]"
            >
              <DiscoverMoreProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsPage;
