export interface TProductDescription {
  shortDescription: string;
  longDescription: string;
  material: string;
  careInstructions?: string;
  features?: string;
  productWeight?: number;
  countryOfOrigin?: string;
}

// Product variant
export interface TVariants {
  size?: string;
  color?: string;
  stock: number;
  SKU: string;
  _id: string;
}

export interface TProductVariant {
  _id: string;
  productId: string;
  variants: TVariants[] | [];
}

// Product Review
export interface Review {
  userId: string;
  rating?: number;
  comment?: string;
  pictures?: string[] | [];
}

export interface TReviews {
  _id: string;
  productId: string;
  reviews: Review[] | [];
}

// Product Interface

export interface TProduct {
  _id: string;
  highlightedProduct: boolean;
  parentProductId: string;
  title: string;
  description: TProductDescription;
  season?: string;
  productFor: string;
  productGroup: string;
  productCategory: string;
  productSubCategory: string;
  productVeriants: TProductVariant;
  price: number;
  discount: number;
  perUnitCost: number;
  productThumbnail: string;
  productImages: string[];
  productReviews: TReviews | string;
  isDeleted: boolean;
}

export type TPartialProductData = Pick<
  TProduct,
  | "_id"
  | "title"
  | "price"
  | "highlightedProduct"
  | "productFor"
  | "productThumbnail"
  | "discount"
>;
