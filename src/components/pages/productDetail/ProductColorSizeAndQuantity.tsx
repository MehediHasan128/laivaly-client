"use client";

import Spinner from "@/components/reusable/Spinner";
import { addProductToCart } from "@/lib/api/cart/cart";
import { buySingleProduct, removeOrderData } from "@/lib/api/orders/orders";
import { addProductToWishlist } from "@/lib/api/wishlist/wishlist";
import { TCreateCartData, TCartProduct } from "@/types/cart.type";
import { TProduct, TVariants } from "@/types/product.type";
import { TError, TResponce } from "@/types/types";
import { TUser } from "@/types/user";
import { authGuard } from "@/utils/authGuard";
import { CircleAlert, Heart, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "sonner";
import { GetColorName } from "hex-color-to-color-name";

interface TProductColorSizeAndQuantityProps {
  product: TProduct;
  user: TUser | null;
  variants: TVariants[];
  isProductExistToWishlist: boolean;
  setImages: Dispatch<SetStateAction<string[]>>;
}

const ProductColorSizeAndQuantity = ({
  product,
  user,
  variants,
  isProductExistToWishlist,
  setImages,
}: TProductColorSizeAndQuantityProps) => {
  const { _id, title, price, discount, productFor, productThumbnail } = product;
  // User router
  const router = useRouter();
  // Set product color in array

  // product color size and quantity state
  const [productColor, setProductColor] = useState<string>(
    variants[0].color as string
  );
  const [productSize, setProductSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [productSKU, setProductSKU] = useState<string | null>(null);
  const [warning, setWarning] = useState<boolean>(false);
  const [buyLoading, setBuyLoading] = useState<boolean>(false);
  const [cartLoading, setCartLoading] = useState<boolean>(false);

  // set product sizes and stock in array
  const getProductVariants = variants.find(
    (variant) => variant.color === productColor
  );
  const sizes = getProductVariants?.sizes;
  const images = getProductVariants?.images;

  const selectedSizeVariant = sizes!.find(
    (variant) => variant.size === productSize
  );
  const remainingProduct = selectedSizeVariant?.stock;

  useEffect(() => {
    if (images) {
      setImages(images);
    }
  }, [images, setImages]);

  useEffect(() => {
    if (productSize) {
      setWarning(false);
    }
  }, [productSize]);

  // Single product data
  const singleProductData = {
    productId: {
      _id,
      title,
      productFor,
      price,
      discount
    },
    quantity,
    selectedVariant: {
      color: productColor,
      size: productSize,
      SKU: productSKU,
      productImage: images?.[0]
    },
  };

  const handleBuySingleProduct = async () => {
    await authGuard();

    if (!productSize) {
      setWarning(true);
    }

    if (productSize && quantity) {
      setBuyLoading(true);

      try {
        const res = (await buySingleProduct(
          singleProductData as TCartProduct
        )) as TResponce;
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

    // if (productSize && quantity) {
    //   setBuyLoading(true);
    //   try {
    //     const res = (await buySingleProduct(
    //       singleProductData as TCartProduct
    //     )) as TResponce;
    //     if (res.success) {
    //       router.push("/checkout");
    //     }
    //     setBuyLoading(false);
    //   } catch (err) {
    //     const toastId = toast.loading("Loading");
    //     const error = err as TError;
    //     toast.error(error?.data?.message, { id: toastId });
    //     setBuyLoading(false);
    //   }
    // }
  };

  const cartData = {
    productId: product?._id,
    quantity,
    selectedVariant: {
      color: productColor && productColor,
      size: productSize && productSize,
      SKU: productSKU as string,
      productImage: images?.[0],
    },
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
        const res = (await addProductToCart(
          cartData as TCreateCartData
        )) as TResponce;
        toast.success(res.message, { id: toastId });
        setCartLoading(false);
      } catch (err) {
        const error = err as TError;
        toast.error(error?.data?.message, { id: toastId });
        setCartLoading(false);
      }
    }
  };

  // const handleProductAddToWishlist = async (productId: string) => {
  //   await authGuard();
  //   const toastId = toast.loading("Loading");
  //   try {
  //     const res = (await addProductToWishlist(productId)) as TResponce;
  //     toast.success(res.message, { id: toastId });
  //     router.refresh();
  //   } catch (err) {
  //     const error = err as TError;
  //     toast.error(error?.data?.message, { id: toastId });
  //   }
  // };

  // const handleAddProductToLocaStorageWishlist = () => {
  //   console.log(5);
  // };

  useEffect(() => {
    const data = async () => {
      try {
        removeOrderData("buySingleProduct");
      } catch (err) {
        return err;
      }
    };
    data();
  }, []);

  return (
    <div className="space-y-3 xl:space-y-5">
      {/* Color button */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">
          Color: {GetColorName(productColor)}
        </h1>
        <div className="flex gap-1.5">
          {variants.map((color, index) => (
            <div
              key={index}
              onClick={() => {
                setProductColor(color?.color as string);

                const foundSize = color.sizes.find(
                  (s) => s.size === productSize
                );

                if (foundSize) {
                  setProductSize(foundSize.size as string);
                  setProductSKU(foundSize.SKU);
                }
              }}
              className={`size-10 rounded-full overflow-hidden border-2 cursor-pointer hover:border-black ${
                productColor === color?.color
                  ? "border-black"
                  : "border-transparent"
              } p-0.5`}
            >
              <div
                className="size-full rounded-full"
                style={{ backgroundColor: `${color?.color}` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Size button */}
      <div className="space-y-2">
        <h1 className="font-semibold text-sm md:text-base">Select Size</h1>
        <div className="flex flex-wrap gap-1.5">
          {sizes!.map((size, index) => (
            <button
              key={index}
              disabled={size.stock === 0}
              onClick={() => {
                setProductSize(size.size as string);
                setProductSKU(size.SKU);
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

      {/* Buy, add to cart and add to wishlist button */}
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
        <button
          onClick={() => {
            if (user) {
              //handleProductAddToWishlist(_id);
            } else {
              //handleAddProductToLocaStorageWishlist();
            }
          }}
          className={`btn rounded-full w-fit px-5 bg-white border text-black ${
            isProductExistToWishlist && "border-red-700 text-red-700"
          }`}
        >
          <Heart className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default ProductColorSizeAndQuantity;
