"use client";

import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import { ChevronRight, X } from "lucide-react";
import Ratings from "../../reusable/Ratings";
import ProductReview from "./ProductReview";
import WriteProductReviewDialog from "./WriteProductReviewDialog";
import { CalculateAvgRatingAndPercentages } from "@/utils";
import { IoStarSharp } from "react-icons/io5";
import { TReviews } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { getProductReview } from "@/lib/api/review/review";
import { TReviewData } from "@/types/review.type";

const ratings = [5, 4, 3, 2, 1];

const ProductReviewDrawer = ({
  productId,
  productTitle,
  productImage,
  userId,
  productReviewId,
}: {
  productId: string;
  productTitle: string;
  productImage: string;
  userId: string;
  productReviewId: string;
}) => {
  const [direction, setDirection] = useState<"right" | "bottom">("bottom");
  useEffect(() => {
    const updateDirection = () => {
      if (window.innerWidth >= 1024) {
        setDirection("right");
      } else {
        setDirection("bottom");
      }
    };

    updateDirection();

    window.addEventListener("resize", updateDirection);

    return () => window.removeEventListener("resize", updateDirection);
  }, []);


  
  const [productReviews, setProductReviews] = useState<TReviewData[] | null>(
    null
  );

  const hasProductReviews = productReviews?.length;

  useEffect(() => {
    const getProductReviews = async () => {
      const data = (await getProductReview(productId)) as TResponce;
      const reviewData = data?.data as TReviews;
      setProductReviews(reviewData?.reviews as TReviewData[]);
    };
    getProductReviews();
  }, [productId]);

  const ratingCount = productReviews?.reduce<Record<number, number>>(
    (acc, curr) => {
      acc[curr.rating] = (acc[curr.rating] || 0) + 1;
      return acc;
    },
    {}
  );

  const ratingData = ratingCount
    ? Object.entries(ratingCount)
        .map(([rating, totalRating]) => ({
          rating: Number(rating),
          totalRating,
        }))
        .sort((a, b) => b.rating - a.rating)
    : [];

  const { avarageRating, ratingPercentages } =
    CalculateAvgRatingAndPercentages(ratingData);

  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>
        <div className="flex justify-between items-center text-lg font-semibold cursor-pointer">
          <h1>Reviews</h1>
          <span className="flex gap-2 items-center">
            {
              Number(avarageRating) > 0 && <h1>{avarageRating}/5</h1>
            }
            <ChevronRight />
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-4xl">
        <DrawerHeader className="relative">
          <DrawerTitle className="text-center py-5">Product Review</DrawerTitle>
          <DrawerClose className="absolute top-0 right-0 p-5 cursor-pointer">
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="px-4 overflow-scroll scrollbar-hide">
          <div className="border-y">
            <div className="lg:w-[90%] mx-auto py-10 2xl:py-16">
              <h1
                className={`${hasProductReviews && "hidden"} text-center text-gray-500`}
              >
                Be the first to review this item
              </h1>

              {/* Product Rating and add review button */}
              <div className="space-y-5">
                {/* Product rating */}
                <div className="flex flex-col md:flex-row gap-5 md:gap-20 md:items-center">
                  <div className="whitespace-nowrap">
                    <h1
                      className={`${
                        !hasProductReviews && "hidden"
                      } text-5xl text-gray-600`}
                    >
                      {avarageRating}
                      <span className="text-base">out of 5 star</span>
                    </h1>
                    <div className={`${!hasProductReviews && "hidden"}`}>
                      <Ratings value={Number(avarageRating)} readonly />
                    </div>
                  </div>
                  <div className="w-full md:w-[60%] lg:w-full">
                    {ratings.map((rating) => {
                      const ratingData = ratingPercentages.find(
                        (r) => r.rating === rating
                      );
                      const percent = ratingData ? ratingData.percent : "0%";

                      return (
                        <div
                          key={rating}
                          className="flex items-center font-semibold rounded-full space-y-1"
                        >
                          <IoStarSharp className="text-xl" />
                          <h1 className="w-8 text-center">{rating}</h1>
                          <div className="h-1 w-full bg-accent">
                            <div
                              className="h-full bg-black rounded-full"
                              style={{ width: percent }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Review Button */}
                <WriteProductReviewDialog
                  productTitle={productTitle}
                  productImage={productImage}
                  userId={userId}
                  productReviewId={productReviewId}
                >
                  <div className="w-full border border-black cursor-pointer flex justify-center rounded bg-black text-white lg:bg-white lg:text-black lg:hover:bg-black lg:hover:text-white duration-500 font-medium py-3 md:py-4">
                    Write a Review
                  </div>
                </WriteProductReviewDialog>
              </div>
            </div>
          </div>

          <div className="lg:w-[90%] mx-auto py-10 2xl:py-16">
            <h1 className="text-base md:text-xl font-semibold">
              Review: {productReviews?.length}
            </h1>

            <div className="mt-10">
              {productReviews?.map((review: TReviewData) => (
                <ProductReview key={review?._id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductReviewDrawer;
