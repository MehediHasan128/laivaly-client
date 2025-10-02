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
import { TProductDescription } from "@/types/product.type";

const ProductDescriptionDrawer = ({ children, productDescriptions }: { children: ReactNode; productDescriptions: TProductDescription }) => {

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
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-3xl pb-10 xl:pb-20">
        <DrawerHeader className="relative">
          <DrawerTitle className="text-center py-3 md:py-5">
            Product Description
          </DrawerTitle>
          <DrawerClose className="absolute top-0 right-0 p-5 cursor-pointer">
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="px-5 md:px-20 space-y-5 md:space-y-10 overflow-scroll scrollbar-hide">
          <div className="space-y-3">
            <h1 className="text-xl md:text-3xl font-semibold">About</h1>
            <p className="gray-text font-semibold text-xs md:text-sm text-justify">
              {productDescriptions?.shortDescription}
            </p>
          </div>

          <div className="space-y-3">
            <h1 className="text-xl md:text-3xl font-semibold">Details</h1>
            <p className="gray-text font-semibold text-xs md:text-sm text-justify">
              {productDescriptions?.longDescription}
            </p>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Features</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">
              {productDescriptions?.features}
            </p>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Material</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">
              {productDescriptions?.material}
            </p>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Care</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">
              {productDescriptions?.careInstructions}
            </p>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Weight</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">
              {productDescriptions?.productWeight}
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDescriptionDrawer;
