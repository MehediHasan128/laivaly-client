import { productRemoveToWishlist } from "@/lib/api/wishlist/wishlist.api";
import { TResponce } from "@/types/types";
import { TUser } from "@/types/user";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "sonner";

export const showToastMessage = (title: string, productImage: string) => {
  toast.success(title, {
    unstyled: true,
    classNames: {
      toast:
        "bg-white shadow-lg rounded-2xl flex gap-2 w-[420px] justify-between items-center border",
      title: "text-sm font-semibold",
      description: "text-[13px] font-semibold text-gray-600 underline ",
      actionButton: "text-2xl font-bold p-3 cursor-pointer ",
    },
    icon: (
      <div className="relative h-20 w-16 rounded-l-lg overflow-hidden">
        <Image src={productImage} alt="" fill className="scale-125" />
      </div>
    ),
    description: (
      <div>
        <Link href={"/wishlist"}>Access your wishlist</Link>
      </div>
    ),
    action: {
      label: <RxCross2 />,
      onClick: () => {},
    },
    duration: 8000,
  });
};

export const handleProductAddToLocalStorage = (
  productId: string,
  productImage: string,
  productTitle: string,
) => {
  const existingWishList = localStorage.getItem("guest_wishlist_items");
  const wishliastArray = existingWishList ? JSON.parse(existingWishList) : [];

  const product = {
    _id: productId.toString(),
    productThumbnail: productImage.toString(),
    title: productTitle.toString(),
  };

  if (!wishliastArray.includes(product)) {
    return new Promise((resolve) => {
      setTimeout(() => {
        wishliastArray.push(product);
        localStorage.setItem(
          "guest_wishlist_items",
          JSON.stringify(wishliastArray),
        );
        window.dispatchEvent(new Event("wishlist_updated"));
        resolve("");
      }, 2000);
    });
  } else {
    return null;
  }
};

export const handleProductRemoveToLocalStorage = (productId: string) => {
  const existingWishList = localStorage.getItem("guest_wishlist_items");
  const wishliastArray = existingWishList ? JSON.parse(existingWishList) : [];
  const newArry = wishliastArray.filter(
    (item: { _id: string }) => item._id !== productId,
  );

  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("guest_wishlist_items", JSON.stringify(newArry));
      window.dispatchEvent(new Event("wishlist_updated"));
      resolve("");
    }, 2000);
  });
};

export const getWishlistProductFromLocalStorage = () => {
  if (typeof window === "undefined") return [];

  const existingWishList = localStorage.getItem("guest_wishlist_items");
  return existingWishList ? JSON.parse(existingWishList) : [];
};

export const handleProductAddToWishlist = async (
  productId: string,
  productImage: string,
  productTitle: string,
  loading: Dispatch<SetStateAction<boolean>>,
  user: TUser | null,
) => {
  loading(true);
  if (user) {
    console.log(5);
  } else {
    await handleProductAddToLocalStorage(productId, productImage, productTitle);
    loading(false);
    showToastMessage(
      "This product has been added to your wishlist",
      productImage,
    );
  }
};

export const handleProductRemoveToWishlist = async (
  productId: string,
  productImage: string,
  loading: Dispatch<SetStateAction<boolean>>,
  user: TUser | null,
  router?: AppRouterInstance,
) => {
  loading(true);
  if (user) {
    const res = (await productRemoveToWishlist(productId)) as TResponce;
    if (res.success) {
      loading(false);
      showToastMessage(
        "This product has been removed from your wishlist",
        productImage,
      );
      router?.refresh();
    }
  } else {
    await handleProductRemoveToLocalStorage(productId);
    loading(false);
    showToastMessage(
      "This product has been removed from your wishlist",
      productImage,
    );
  }
};

// export const handleProductAddOrRemoveFromWishlist = async () => {

// }
