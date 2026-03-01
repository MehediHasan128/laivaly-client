import { baseApi } from "../baseApi/baseApi";

export interface TProductQueryParams {
  field:
    | "productFor"
    | "season"
    | "productGroup"
    | "productCategory"
    | "productSubCategory"
    | "searchTerm"
    | "limit";
  value: string | string[] | undefined;
}

export const getAllProducts = (args?: TProductQueryParams[]) => {
  const params = new URLSearchParams();

  if (params) {
    args?.forEach((item: TProductQueryParams) => {
      params.append(item.field, item.value as string);
    });
  }

  return baseApi({
    endPoints: `/products?${params}`,
    options: { method: "GET" },
  });
};

export const getSingleProducts = (productId: string) => {
  return baseApi({
    endPoints: `/products/${productId}`,
    options: { method: "GET" },
  });
};

export const handleProductAddToLocalStorage = (productId: string) => {
  const existingWishList = localStorage.getItem("guest_wishlist_items");
  const wishliastArray = existingWishList ? JSON.parse(existingWishList) : [];
  const id = productId.toString();

  if (!wishliastArray.includes(id)) {
    return new Promise((resolve) => {
      setTimeout(() => {
        wishliastArray.push(id);
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
  const newArry = wishliastArray.filter((item: string) => item !== productId);

  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("guest_wishlist_items", JSON.stringify(newArry));
      window.dispatchEvent(new Event("wishlist_updated"));
      resolve("");
    }, 2000);
  });
};

export const getProductIdFromLocalStorage = () => {
  const existingWishList = localStorage.getItem("guest_wishlist_items");
  return existingWishList ? JSON.parse(existingWishList) : [];
};
