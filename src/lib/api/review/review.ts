import { baseApi } from "../baseApi/baseApi";

export const addProductReview = ({
  reviewId,
  formData,
}: {
  reviewId: string;
  formData: FormData;
}) => {
  return baseApi({
    endPoints: `/review/add-review/${reviewId}`,
    options: { method: "POST", body: formData },
  });
};


export const getProductReview = (productId: string) => {
  return baseApi({
    endPoints: `/review/${productId}`,
    options: { method: "GET" },
  });
};
