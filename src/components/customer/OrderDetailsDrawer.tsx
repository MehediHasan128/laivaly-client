"use client";

import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { TOrderData } from "@/types/order.type";
import OrderDetils from "./OrderDetils";

const OrderDetailsDrawer = ({ order }: { order: TOrderData }) => {
  const [direction, setDirection] = useState<"right" | "bottom">("bottom");
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  //   const getOrderDetails = async () => {
  //     const data = (await getSingleOrdersByUserId(orderId)) as TResponce;
  //     setOrderDetails(data?.data as TOrderData);
  //   };

  //   getOrderDetails();
  // }, [orderId]);

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
    <Drawer
      direction={direction}
      open={openDrawer}
      onOpenChange={setOpenDrawer}
    >
      <DrawerTrigger asChild>
        <button className="btn py-2.5">Order Details</button>
      </DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-xl">
        <DrawerHeader>
          <DrawerTitle className="text-center">Order Details</DrawerTitle>
        </DrawerHeader>

        <div className="h-full overflow-scroll scrollbar-hide">
          {order && <OrderDetils order={order as TOrderData} />}
        </div>

        <DrawerFooter>
          <DrawerClose asChild></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default OrderDetailsDrawer;
