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
export interface TProductSizes {
  size?: string;
  stock: number;
  SKU: string;
}

export interface TVariants {
  color?: string;
  images: string[];
  sizes: TProductSizes[];
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
  productLayout: string;
  parentProductId: string;
  title: string;
  description: TProductDescription;
  season?: string;
  productFor: string;
  productGroup: string;
  productCategory: string;
  productSubCategory: string;
  productVariants: string;
  price: number;
  discount: number;
  perUnitCost: number;
  productThumbnail: string;
  productReviews: TReviews | string;
  isDeleted: boolean;
}

export type TPartialProductData = Pick<
  TProduct,
  | "_id"
  | "title"
  | "price"
  | "productLayout"
  | "productFor"
  | "productThumbnail"
  | "discount"
>;
