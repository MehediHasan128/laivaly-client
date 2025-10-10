import { TUser } from "./user";

export interface TReviewData {
  userId: TUser | string;
  rating: number;
  comment?: string;
  pictures?: string[];
  _id: string;
}

export interface TReviews {
    productId: string,
    reviews: TReviewData[] | [];
}
