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
