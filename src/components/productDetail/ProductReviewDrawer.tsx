"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { X } from "lucide-react";
import Button from "../reusable/Button";
import Ratings from "../reusable/Ratings";
import ProductReview from "./ProductReview";
import WriteProductReviewDialog from "./WriteProductReviewDialog";

const isComment = true;

const ProductReviewDrawer = ({ children }: { children: ReactNode }) => {
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

  return (
    <Drawer direction={direction}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-4xl">
        <DrawerHeader className="relative">
          <DrawerTitle className="text-center py-5 2xl:py-10">
            Product Review
          </DrawerTitle>
          <DrawerClose className="absolute top-0 right-0 p-5 cursor-pointer">
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="px-4 overflow-scroll scrollbar-hide">
          <div className="border-y">
            <div className="lg:w-[90%] mx-auto py-10 2xl:py-16">
              <div className="space-y-5">
                <h1
                  className={`${
                    isComment && "hidden"
                  } text-center text-gray-500`}
                >
                  Be the first to review this item
                </h1>
                <div className="space-y-5">
                  <h1
                    className={`${
                      !isComment && "hidden"
                    } text-5xl text-gray-600`}
                  >
                    5.0<span className="text-base">out of 5 star</span>
                  </h1>
                  <div className={`${!isComment && "hidden"}`}>
                    <Ratings value={5} readonly />
                  </div>
                  <WriteProductReviewDialog>
                    <div className="w-full border border-black cursor-pointer flex justify-center rounded bg-black text-white lg:bg-white lg:text-black lg:hover:bg-black lg:hover:text-white duration-500 font-medium py-3 md:py-4">
                      Write a Review
                    </div>
                  </WriteProductReviewDialog>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[90%] mx-auto py-10 2xl:py-16">
            <h1 className="text-base md:text-xl font-semibold">Review: 1</h1>

            <div className="mt-10">
              <ProductReview />
              <ProductReview />
              <ProductReview />
              <ProductReview />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductReviewDrawer;
