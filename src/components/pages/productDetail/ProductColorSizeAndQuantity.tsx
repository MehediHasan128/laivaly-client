"use client";

import Spinner from "@/components/reusable/Spinner";
import { addProductToCart } from "@/lib/api/cart/cart";
import { buySingleProduct, removeOrderData } from "@/lib/api/orders/orders";
import { TError, TProduct, TProductVariant, TResponce } from "@/types/types";
import { authGuard } from "@/utils/authGuard";
import { CircleAlert, Heart, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

interface TProductColorSizeAndQuantityProps {
  product: TProduct;
}

const ProductColorSizeAndQuantity = ({
  product,
}: TProductColorSizeAndQuantityProps) => {
  // User router
  const router = useRouter();
  // Find product variants
  const productVeriants = product.productVeriants as TProductVariant;
  const allVariants = productVeriants?.variants;

  // Set product color in array
  const getProductColors = new Set(allVariants.map((variant) => variant.color));
  const colors = Array.from(getProductColors);

  // product color size and quantity state
  const [productColor, setProductColor] = useState<string>(colors[0] as string);
  const [productSize, setProductSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [productSKU, setProductSKU] = useState<string | null>(null);
  const [warning, setWarning] = useState<boolean>(false);
  const [buyLoading, setBuyLoading] = useState<boolean>(false);
  const [cartLoading, setCartLoading] = useState<boolean>(false);

  // set product sizes and stock in array
  const getProductSizes = allVariants.filter(
    (variant) => variant.color === productColor
  );
  const sizes = getProductSizes.map((v) => ({
    size: v.size,
    stock: v.stock,
    sku: v.SKU,
  }));

  const selectedSizeVariant = getProductSizes.find(
    (variant) => variant.size === productSize
  );

  const remainingProduct = selectedSizeVariant?.stock;

  useEffect(() => {
    if (productSize) {
      setWarning(false);
    }
  }, [productSize]);

  const productData = {
    productId: product?._id,
    productTitle: product?.title,
    productThumbnail: product?.productImages[0],
    quantity,
    selectedVariant: {
      color: productColor && productColor,
      size: productSize && productSize,
      SKU: productSKU as string,
    },
    totalPrice: Number(
      (
        (product?.price - product?.price * (product?.discount / 100)) *
        quantity
      ).toFixed(2)
    ),
  };

  const handleBuySingleProduct = async () => {
    await authGuard();

    if (!productSize) {
      setWarning(true);
    }

    if (productSize && quantity) {
      setBuyLoading(true);
      try {
        const res = (await buySingleProduct(productData)) as TResponce;
        if (res.success) {
          router.push("/checkout");
        }
        setBuyLoading(false);
      } catch (err) {
        const toastId = toast.loading("Loading");
        const error = err as TError;
        toast.error(error?.data?.message, { id: toastId });
        setBuyLoading(false);
      }
    }
  };

  const handleProductAddToCart = async () => {
    await authGuard();

    if (!productSize) {
      setWarning(true);
    }

    if (productSize && quantity) {
      const toastId = toast.loading("Loading");
      setCartLoading(true);
      try {
        const res = (await addProductToCart(productData)) as TResponce;
        toast.success(res.message, { id: toastId });
        setCartLoading(false);
      } catch (err) {
        const error = err as TError;
        toast.error(error?.data?.message, { id: toastId });
        setCartLoading(false);
      }
    }
  };

  useEffect(() => {
    const data = async () => {
      try {
        removeOrderData("buySingleProduct");
      } catch (err) {
        return err
      }
    };
    data();
  }, []);

  return (
    <div className="space-y-3 xl:space-y-5">
      {/* Color button */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Select Color</h1>
        <div className="flex gap-1.5">
          {colors.map((color, index) => (
            <div
              key={index}
              onClick={() => setProductColor(color as string)}
              className={`size-10 rounded-full overflow-hidden border-2 cursor-pointer hover:border-black ${
                productColor === color ? "border-black" : "border-transparent"
              } p-0.5`}
            >
              <div
                className="size-full rounded-full"
                style={{ backgroundColor: `#${color}` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Size button */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Select Size</h1>
        <div className="flex flex-wrap gap-1.5">
          {sizes.map((size, index) => (
            <button
              key={index}
              disabled={size.stock === 0}
              onClick={() => {
                setProductSize(size.size as string);
                setProductSKU(size.sku);
              }}
              className={`border duration-500 hover:border-black ${
                productSize === size.size
                  ? "bg-black text-white"
                  : "bg-accent text-black"
              } ${
                warning && "border-red-600 "
              } rounded font-medium w-16 md:w-20 lg:w-16 xl:w-20 text-center text-sm xl:text-base py-1.5 cursor-pointer
              disabled:cursor-not-allowed disabled:hover:border-accent disabled:border-accent overflow-hidden disabled:line-through disabled:text-gray-500`}
            >
              {size.size}
            </button>
          ))}
        </div>
      </div>

      <div>
        {warning && (
          <h1 className="flex items-center gap-1 font-medium text-sm text-red-700">
            <CircleAlert className="size-5" /> Please select a size
          </h1>
        )}

        {remainingProduct && remainingProduct <= 10 && (
          <h1 className="text-sm font-medium text-red-700">
            Only {remainingProduct} Unit Available
          </h1>
        )}
      </div>

      {/* Product Quantity */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Quantity</h1>
        <div className="flex items-center w-fit rounded">
          <button
            disabled={quantity === 0}
            onClick={() =>
              setQuantity((quantity) => (quantity > 0 ? quantity - 1 : 0))
            }
            className="bg-black text-white cursor-pointer active:scale-95 duration-700 px-2 py-1 rounded-l disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus />
          </button>
          <div className="text-xl font-semibold w-20 text-center">
            {quantity}
          </div>
          <button
            disabled={
              quantity >= 5 || quantity === remainingProduct || !productSize
            }
            onClick={() => {
              setQuantity((quantity) =>
                quantity <= 5 ? quantity + 1 : quantity
              );
            }}
            className="bg-black text-white cursor-pointer active:scale-95 duration-700 px-2 py-1 rounded-r disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Plus />
          </button>
        </div>
        {quantity === 5 && (
          <p className="text-sm font-medium text-red-700">
            A user cannot purchase more than 5 products.
          </p>
        )}
      </div>

      <div className="mt-10 flex gap-3">
        <button
          onClick={handleBuySingleProduct}
          className="btn border border-black "
        >
          {buyLoading ? <Spinner /> : "Buy It Now"}
        </button>
        <button
          onClick={handleProductAddToCart}
          className="btn bg-white border text-black"
        >
          {cartLoading ? <Spinner isDark={false} /> : "Add To Cart"}
        </button>
        <button className="btn rounded-full w-fit px-5 bg-white border text-black">
          <Heart className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductColorSizeAndQuantity;
