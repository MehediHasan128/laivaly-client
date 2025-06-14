/* eslint-disable @typescript-eslint/no-explicit-any */
export type TError = {
  status: number;
  data: {
    success: boolean;
    message: string;
    errorSource: {
      path: string;
      message: string;
    }[];
  };
};

export type TResponce = {
  statusCode: number;
  success: boolean;
  message: string;
  data: any;
};

export type TProductData = {
  _id: string;
  title: string;
  description: string;
  group: string;
  category: string;
  subCategory: string;
  targetAudience: string;
  price: number;
  discount: number;
  quantity: number;
  inStock: boolean;
  colors: string[];
  sizes: string[];
  images: string[];
  thumbnail: string;
  SKU: string;
  weight: string;
  isDeleted: boolean;
  createdAt: string; // or Date if you will parse it
  updatedAt: string; // or Date if you will parse it
  __v: number;
};

export type TUserReview = {
  customerId: {
    userName: {
      firstName: string;
      lastName: string;
    };
    profileImage: string;
  };
  rating: number;
  comment: string;
};

export type TSearch = {
  field: string;
  value: string;
};

export type TCartProduct = {
  productId: TProductData;
  color: string;
  size: string;
  quantity: number;
  _id: string;
};

export type TShippingAddress = {
  _id: string;
  addressCategory: string;
  recipientsName: string;
  phoneNumber: string;
  address: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
};

export type TOrder = {
  _id: string;
  userId: {
    _id: string;
    userName: {
      firstName: string;
      lastName: string;
    };
    profileImage: string;
  };
  products: {
    productId: TProductData;
    quantity: number;
    color: string;
    size: string;
  }[];
  shippingAddress: TShippingAddress;
  paymentMethod: string;
  orderDate: Date;
  totalAmount: number;
  paymentStatus: string;
  status: string;
};
