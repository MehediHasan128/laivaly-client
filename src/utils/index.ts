import { TCartProduct, TProduct, TRatingData } from "@/types/types";

export const rearrangeProducts = (
  productItems: Pick<
    TProduct,
    "_id" | "title" | "price" | "thumbnail" | "isLarge"
  >[]
) => {
  const products: Pick<
    TProduct,
    "_id" | "title" | "price" | "thumbnail" | "isLarge"
  >[] = [];
  let remaining = [...productItems];
  let placeLargeFirst = true;

  while (remaining.length > 0) {
    const group = remaining.slice(0, 4);
    const largeIndex = group.findIndex((item) => item.isLarge);

    if (largeIndex === -1) {
      products.push(...group);
      remaining.splice(0, 4);
    } else {
      const largeItem = group[largeIndex];
      const smallItems = group.filter((item) => !item.isLarge).slice(0, 2);

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

export const CalculateProductTotalPriceShippingAndTax = (products: TCartProduct[]) => {
  
  let subTotal = 0;
  let shippingCharge = 9.95;


  for(const product of products){
    const productTotalPrice = Number((product.price * product.quantity).toFixed(2));
    subTotal += productTotalPrice;
  };

  subTotal = Number(subTotal.toFixed(2));
  if(subTotal > 100){
    shippingCharge = 0
  }
  const tax = Number((subTotal * 0.1).toFixed(2));
  const estimatedTotal = (subTotal + shippingCharge + tax).toFixed(2)


  return {
    subTotal,
    shippingCharge,
    tax,
    estimatedTotal
  }

}
