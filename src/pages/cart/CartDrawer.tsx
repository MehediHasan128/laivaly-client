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
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const CartDrawer = ({ child }: { child: ReactNode }) => {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent className="w-[70%] md:w-[50%] xl:w-[30%] 2xl:w-[20%]">
        <DrawerHeader>
          {/* Nav items */}
          <DrawerTitle className="text-center">
            <h1 className="text-lg md:text-2xl">Shopping Cart</h1>
          </DrawerTitle>
        </DrawerHeader>

        <div className="h-full flex justify-center items-center">
          <div className="text-center">
            <IoBagHandleOutline className="text-[#31473A] text-6xl md:text-8xl xl:text-7xl 2xl:text-8xl mx-auto" />
            <h1 className="font-medium text-xl md:text-2xl 2xl:text-3xl my-1 md:my-2 2xl:my-3">
              Your cart in empty
            </h1>
            <DrawerClose asChild>
              <NavLink to="/newIn">
                <div className="bg-[#31473A] rounded-full text-white font-medium px-3 py-1 md:px-4 md:py-2 mt-3 cursor-pointer">
                  Shop Now
                </div>
              </NavLink>
            </DrawerClose>
          </div>
        </div>

        <DrawerFooter>

          <div className="space-y-1.5 md:space-y-2.5 xl:space-y-1.5 2xl:space-y-3 text-base md:text-lg xl:text-base font-medium">

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Sub Total:</span>{" "}
              <span>$0.00</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Shipping:</span>{" "}
              <span>$0.00</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Tax(15%):</span>{" "}
              <span>$0.00</span>
            </div>

          </div>

          {/* divider */}
          <div className="flex-grow border-t border-gray-300 my-1.5 md:my-2"></div>

          {/* total */}
          <div className="flex justify-between items-center text-lg md:text-xl font-medium md:font-semibold">
            <span>Total:</span> <span>$0.00</span>
          </div>

          <DrawerClose
            asChild
            className="bg-[#31473A] border border-[#31473A] text-center text-white rounded-lg overflow-hidden cursor-pointer hover:bg-[#101f16] duration-1000 py-1 md:py-2 md:mt-1.5"
          >
            <NavLink to="/cart">
              <div className="flex items-center justify-center gap-1.5">
                <IoBagHandleOutline className="text-xl" />
                View Cart
              </div>
            </NavLink>
          </DrawerClose>

        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
