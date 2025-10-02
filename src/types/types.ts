/* eslint-disable @typescript-eslint/no-explicit-any */


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

export interface TSearchParamsProp {
  searchParams?: Record<string, string>;
}
