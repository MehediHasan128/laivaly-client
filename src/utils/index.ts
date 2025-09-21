import { TCartProduct2, TProduct, TRatingData } from "@/types/types";
import { jwtDecode } from "jwt-decode";

// Decoded user token
export const decodedUserToken = (token: string) => {
  const tokenDecoded = jwtDecode(token);
  return tokenDecoded;
};

// Create cookie when user logout

export const rearrangeProducts = (
  productItems: Pick<
    TProduct,
    | "_id"
    | "title"
    | "price"
    | "productFor"
    | "productThumbnail"
    | "highlightedProduct"
  >[]
) => {
  const products: Pick<
    TProduct,
    | "_id"
    | "title"
    | "price"
    | "productFor"
    | "productThumbnail"
    | "highlightedProduct"
  >[] = [];
  let remaining = [...productItems];
  let placeLargeFirst = true;

  while (remaining.length > 0) {
    const group = remaining.slice(0, 4);
    const largeIndex = group.findIndex((item) => item.highlightedProduct);

    if (largeIndex === -1) {
      products.push(...group);
      remaining.splice(0, 4);
    } else {
      const largeItem = group[largeIndex];
      const smallItems = group
        .filter((item) => !item.highlightedProduct)
        .slice(0, 2);

      if (placeLargeFirst) {
        products.push(largeItem, ...smallItems);
      } else {
        products.push(...smallItems, largeItem);
      }

      placeLargeFirst = !placeLargeFirst;
      const takenIds = new Set([
        largeItem._id,
        ...smallItems.map((s) => s._id),
      ]);
      remaining = remaining.filter((item) => !takenIds.has(item._id));
    }
  }

  return products;
};

export const CalculateAvgRatingAndPercentages = (ratingData: TRatingData[]) => {
  let totalScore = 0;
  let totalCount = 0;

  for (const item of ratingData) {
    totalScore += item.rating * item.totalRating;
    totalCount += item.totalRating;
  }

  const avarageRating = (totalScore / totalCount).toFixed(1);

  const ratingPercentages = ratingData?.map((item: TRatingData) => ({
    rating: item.rating,
    percent: Math.round((Number(item.totalRating) / totalCount) * 100) + "%",
  }));

  return {
    avarageRating,
    ratingPercentages,
  };
};

export const CalculateProductTotalPriceShippingAndTax = (
  products: TCartProduct2[]
) => {
  let subTotal = 0;
  let shippingCharge = 9.95;

  for (const product of products) {
    const productTotalPrice = Number(
      (product.price * product.quantity).toFixed(2)
    );
    subTotal += productTotalPrice;
  }

  subTotal = Number(subTotal.toFixed(2));
  if (subTotal > 100) {
    shippingCharge = 0;
  }
  const tax = Number((subTotal * 0.1).toFixed(2));
  const estimatedTotal = Number((subTotal + shippingCharge + tax).toFixed(2));

  return {
    subTotal,
    shippingCharge,
    tax,
    estimatedTotal,
  };
};

export const generateDateAndYearOptions = (start: number, end: number) => {
  const options = [];

  if (start > end) {
    for (let i = start; i >= end; i--) {
      options.push({ label: i.toString(), value: i.toString() });
    }
  } else {
    for (let i = start; i <= end; i++) {
      options.push({ label: i.toString(), value: i.toString() });
    }
  }

  return options;
};
