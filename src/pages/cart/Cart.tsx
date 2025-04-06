import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode } from "react";
import { IoBagHandleOutline } from "react-icons/io5";

const Cart = ({ child }: { child: ReactNode }) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>        
          {/* Nav items */}
          <DrawerTitle className="px-16 md:px-24">
            <div className="flex items-center justify-between w-full gap-10">
              <h1 className="text-xl w-full">Shopping Cart</h1>
            </div>
          </DrawerTitle>
        </DrawerHeader>

        <div className="h-full flex justify-center items-center">
          <div className="text-center">
            <IoBagHandleOutline className="text-8xl md:text-[140px] text-[#31473A] mx-auto" />
            <h1 className="text-xl md:text-2xl">Your cart in empty</h1>
            <button className="mt-5 md:mt-10 border-2 border-[#31473A] px-4 md:px-5 py-1.5 md:py-2 rounded-full font-semibold hover:bg-[#31473A] hover:text-white duration-500 cursor-pointer">Shop Now</button>
          </div>
        </div>

        <DrawerFooter>
          <div className="space-y-3 px-3 md:text-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Sub total:</span>{" "}
              <span>$0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Shipping:</span>{" "}
              <span>$0.00</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax(15%):</span>{" "}
              <span>$0.00</span>
            </div>
          </div>
          {/* divider */}
          <div className="flex-grow border-t border-gray-300 my-3 md:my-5"></div>
          {/* total */}
          <div className="flex justify-between items-center text-xl md:text-2xl px-3 font-semibold">
            <span>Total:</span> <span>$0.00</span>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;
