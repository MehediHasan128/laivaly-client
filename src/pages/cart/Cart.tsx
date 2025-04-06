import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

const Cart = ({ child }: { child: ReactNode }) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          {/* Close button */}
          <DrawerClose className="w-full px-5 text-xl cursor-pointer">
            <FaArrowLeftLong />
          </DrawerClose>
          {/* Nav items */}
          <DrawerTitle className="px-24">
            <div className="flex items-center justify-between w-full gap-10">
              <h1 className="text-xl">Shopping Cart</h1>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <DrawerFooter>
          <div className="space-y-3 px-3">
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Sub total:</span>{" "}
              <span>$250.00</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Shipping:</span>{" "}
              <span>$25.00</span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-600">Tax(15%):</span>{" "}
              <span>$35.00</span>
            </div>
          </div>
          <div className="flex-grow border-t border-gray-300 my-5"></div>
          <div className="flex justify-between items-center text-2xl px-3 font-semibold">
            <span>Total:</span> <span>$305.00</span>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
