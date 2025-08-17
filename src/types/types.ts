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
