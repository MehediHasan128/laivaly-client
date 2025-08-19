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

const ProductDescriptionDrawer = ({ children }: { children: ReactNode }) => {
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
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-3xl pb-10 xl:pb-0">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              esse dolorem asperiores beatae omnis dignissimos vero? Molestias
              ipsa rerum suscipit?
            </p>
          </div>

          <div className="space-y-3">
            <h1 className="text-xl md:text-3xl font-semibold">Details</h1>
            <ul className="gray-text font-semibold text-xs md:text-sm text-justify list-disc space-y-3">
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam in expedita doloremque nobis eligendi vel est
                assumenda dignissimos vero iure!
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum,
                minus?
              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore iste natus dolor molestiae. Debitis, neque.
              </li>
            </ul>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Fit</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt reiciendis, rem tempora aut odit?</p>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Composition</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">98% organic cotton, 2% elastane.</p>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Care</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">Machine washable.</p>
          </div>

          <div className="w-full border-b" />

          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2.5">
            <h1 className="text-base font-semibold">Style</h1>
            <p className="md:w-[70%] text-xs md:text-sm text-justify font-medium gray-text">56R2We-LVP</p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDescriptionDrawer;
