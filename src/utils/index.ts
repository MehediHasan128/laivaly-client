import { TProduct } from "@/types/types";

export const rearrangeProducts = (productItems: Pick<TProduct, "_id" | "title" | "price" | "thumbnail" | "isLarge">[]) => {
  const products: Pick<TProduct, "_id" | "title" | "price" | "thumbnail" | "isLarge">[] = [];
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
      const takenIds = new Set([largeItem._id, ...smallItems.map((s) => s._id)]);
      remaining = remaining.filter((item) => !takenIds.has(item._id));
    }
  }

  return products;
};
