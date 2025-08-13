import { TCardProductProps } from "@/types/types";

export const rearrangeProducts = (productItems: TCardProductProps[]) => {
  const products: TCardProductProps[] = [];
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
      const takenIds = new Set([largeItem.id, ...smallItems.map((s) => s.id)]);
      remaining = remaining.filter((item) => !takenIds.has(item.id));
    }
  }

  return products;
};
