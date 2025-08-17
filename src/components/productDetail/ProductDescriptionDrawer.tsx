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
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-2xl">
        <DrawerHeader className="relative">
          <DrawerTitle className="text-center py-5 2xl:py-10">
            Product Description
          </DrawerTitle>
          <DrawerClose className="absolute top-0 right-0 p-5 cursor-pointer">
            <X />
          </DrawerClose>
        </DrawerHeader>

        <div className="px-10 overflow-scroll scrollbar-hide space-y-3">
          <h1 className="font-semibold">Description:</h1>
          <p className="text-justify text-xs md:text-sm text-gray-600 font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus quisquam distinctio magni quaerat neque eligendi ut odio, vero rerum quis, facere labore sed maxime molestiae omnis eum! Fugiat quaerat fugit numquam possimus ut odio voluptates id minus vitae dolor accusantium similique soluta, perspiciatis accusamus voluptate aliquam voluptas laudantium aut. Dolorum.</p>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDescriptionDrawer;
