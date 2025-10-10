"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../ui/drawer";
import { X } from "lucide-react";
import Ratings from "../../reusable/Ratings";
import ProductReview from "./ProductReview";
import WriteProductReviewDialog from "./WriteProductReviewDialog";
import { CalculateAvgRatingAndPercentages } from "@/utils";
import { IoStarSharp } from "react-icons/io5";
import { TReviews } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { getProductReview } from "@/lib/api/review/review";
import { TReviewData } from "@/types/review.type";

const isComment = true;

const ratingData = [
  { rating: 5, totalRating: 800 },
  { rating: 4, totalRating: 300 },
  { rating: 3, totalRating: 120 },
  { rating: 2, totalRating: 80 },
  { rating: 1, totalRating: 50 },
];

const ProductReviewDrawer = ({
  children,
  productId,
  productTitle,
  productImage,
  userId,
  productReviewId,
}: {
  children: ReactNode;
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

  useEffect(() => {
    const getProductReviews = async () => {
      const data = (await getProductReview(productId)) as TResponce;
      const reviewData = data?.data as TReviews;
      setProductReviews(reviewData?.reviews as TReviewData[]);
    };
    getProductReviews();
  }, [productId]);

  const { avarageRating, ratingPercentages } =
    CalculateAvgRatingAndPercentages(ratingData);

  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
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
                className={`${isComment && "hidden"} text-center text-gray-500`}
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
                        !isComment && "hidden"
                      } text-5xl text-gray-600`}
                    >
                      {avarageRating}
                      <span className="text-base">out of 5 star</span>
                    </h1>
                    <div className={`${!isComment && "hidden"}`}>
                      <Ratings value={5} readonly />
                    </div>
                  </div>
                  <div className="w-full md:w-[60%] lg:w-full">
                    {ratingPercentages.map((percent, index) => (
                      <div
                        key={index}
                        className="flex items-center font-semibold rounded-full space-y-1"
                      >
                        <IoStarSharp className="text-xl" />
                        <h1 className="w-8 text-center">{percent.rating}</h1>
                        <div className="h-1 w-full bg-accent">
                          <div
                            className="h-full bg-black rounded-full"
                            style={{ width: percent.percent }}
                          />
                        </div>
                      </div>
                    ))}
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
            <h1 className="text-base md:text-xl font-semibold">Review: {productReviews?.length}</h1>

            <div className="mt-10">
              {
                productReviews?.map((review: TReviewData) => <ProductReview key={review?._id} review={review} />)
              }
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductReviewDrawer;
