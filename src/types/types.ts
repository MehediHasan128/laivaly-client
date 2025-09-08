/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth types

interface TUserName {
  firstName: string;
  lastName: string;
}

export interface TShippingAddress {
  _id: string;
  addressCategory: string;
  recipientsName: string;
  phoneNumber: string;
  address: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
  defaultAddress: boolean;
}

export interface TUser {
  id: string;
  userName: TUserName;
  userEmail: string;
  userProfileURL: string;
  userRole: string;
}

export interface TCustomerProfile {
  _id: string;
  customerId: string;
  userName: TUserName;
  userEmail: string;
  phoneNumber: string;
  dateOfBirth: string | null;
  gender: string | null;
  shippingAddress: TShippingAddress[] | [];
}

// Products type
interface TProductDescription {
  shortDescription: string;
  longDescription: string;
  material: string;
  careInstructions?: string;
  features?: string;
  productWeight?: number;
  countryOfOrigin?: string;
}

interface TVariants {
  size?: string;
  color?: string;
  stock: number;
  SKU: string;
}

interface Review {
  userId: string;
  rating?: number;
  comment?: string;
  pictures?: string[] | [];
}

interface TProductVariant {
  _id: string;
  productId: string;
  variants: TVariants[] | [];
}

interface TReviews {
  _id: string;
  productId: string;
  reviews: Review[] | [];
}

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
  productReviews: TReviews;
  isDeleted: boolean;
}

// Req & Res type
export interface TResponce {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
}

export interface TError {
  status: number;
  data: {
    success: boolean;
    message: string;
    errorSource: {
      path: string;
      message: string;
    }[];
  };
}

export interface TRatingData {
  rating: number;
  totalRating: number;
}

export interface TCartProduct {
  id: string;
  productThumbnai: string;
  title: string;
  productSKU: string;
  price: number;
  color: string;
  size: string;
  discount?: number;
  quantity: number;
}
