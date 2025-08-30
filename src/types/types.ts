/* eslint-disable @typescript-eslint/no-explicit-any */
// Auth types

interface TUserName {
  firstName: string;
  lastName: string;
}

interface TShippingAddress {
  addressCategory: string;
  recipientsName: string;
  phoneNumber: string;
  address: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
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

export interface TProduct {
  _id: string;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  isLarge: boolean;
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
