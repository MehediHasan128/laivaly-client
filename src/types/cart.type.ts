import { TProduct } from "./product.type";

export interface TCreateCartData {
  productId: string;
  quantity: number;
  selectedVariant: {
    color?: string | null;
    size?: string | null;
    SKU: string;
  };
}



export interface TCartProduct {
  _id: string;
  productId: Pick<
    TProduct,
    "_id" | "title" | "productFor" | "price" | "discount" | "productImages"
  >;
  quantity: number;
  selectedVariant: {
    color?: string | null;
    size?: string | null;
    SKU: string;
  };
}
