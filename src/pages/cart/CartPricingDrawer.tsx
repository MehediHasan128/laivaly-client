import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
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
import { FieldValues } from "react-hook-form";

const CartPricingDrawer = ({ child }: { child: ReactNode }) => {
  const handleApplyCouponCode = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent>
        <DrawerClose>
          <div className="border-2 rounded-full w-[20%] mx-auto"></div>
        </DrawerClose>
        <DrawerHeader>
          <DrawerTitle>
            <h1 className="text-2xl md:text-3xl font-semibold md:w-[80%] md:mx-auto text-left">
              Summary
            </h1>
          </DrawerTitle>
        </DrawerHeader>

        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="my-5 md:my-10">
            <p className="mb-3 font-medium">Do you have any coupon code?</p>
            <LForm onSubmit={handleApplyCouponCode}>
              <div className="flex items-center gap-3 w-full relative">
                <LInput
                  type="text"
                  name="coupponCode"
                  placeholder="Enter coupon code"
                  icon={false}
                />
                <button
                  type="submit"
                  className="absolute right-0 border border-[#31473A]  bg-[#31473A] font-semibold py-3.5 md:py-2.5 px-5 text-white rounded-r-lg cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </LForm>
          </div>

          <div className="text-base md:text-lg">
            <div className="space-y-2 md:space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Sub Total:</span>
                <span className="text-lg md:text-2xl font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">
                  Estimated Shipping & Handling:
                </span>
                <span className="text-lg md:text-2xl font-semibold">$0.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">
                  Estimated Tax:
                </span>
                <span className="text-lg md:text-2xl font-semibold">$0.00</span>
              </div>
            </div>

            <div className="border-b border-gray-300 my-3 md:my-5"></div>

            <div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600 text-lg md:text-xl">
                  Total:
                </span>
                <span className="text-xl md:text-3xl font-medium">$0.00</span>
              </div>
            </div>
          </div>

          <div className="mt-5 md:mt-10 flex items-center gap-3.5">
            <button className="border border-[#31473A] bg-[#31473A] w-full py-3 rounded-lg text-lg font-medium text-white cursor-pointer hover:bg-[#1e3327] duration-700">
              Check Out
            </button>
            <button className="border border-[#03399e] w-full py-3 rounded-lg text-lg font-extrabold cursor-pointer italic">
              <span className="text-[#03399e]">Pay</span>
              <span className="text-[#009cde]">Pal</span>
            </button>
          </div>
        </div>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartPricingDrawer;
