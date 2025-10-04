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
import { getSingleOrdersByUserId } from "@/lib/api/orders/orders";
import { TResponce } from "@/types/types";
import { TOrderData } from "@/types/order.type";
import OrderDetils from "./OrderDetils";

const OrderDetailsDrawer = ({ orderId }: { orderId: string }) => {
  const [orderDetails, setOrderDetails] = useState<TOrderData>();

  useEffect(() => {
    const getOrderDetails = async () => {
      const data = (await getSingleOrdersByUserId(orderId)) as TResponce;
      setOrderDetails(data?.data as TOrderData);
    };

    getOrderDetails();
  }, [orderId]);

  console.log(orderDetails);

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="btn py-2.5">Order Details</button>
      </DrawerTrigger>
      <DrawerContent className="data-[vaul-drawer-direction=right]:sm:max-w-xl">
        <DrawerHeader>
          <DrawerTitle className="text-center">Order Details</DrawerTitle>
        </DrawerHeader>

        <div className="h-full">
          {orderDetails && <OrderDetils order={orderDetails as TOrderData} />}
        </div>

        <DrawerFooter>
          <DrawerClose asChild></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default OrderDetailsDrawer;
