import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { currentUser } from "@/redux/features/auth/authSlice";
import { useGetAllProductFromCartQuery } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

type TCartProduct = {
  productId: {
    thumbnail: string;
    price: number;
    weight: string
  };
  quantity: number;
};

const CartDrawer = ({ child }: { child: ReactNode }) => {
  // Get user id
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  // Get all product from cart
  const { data: cartData } = useGetAllProductFromCartQuery(userId);
  const cartProducts = cartData?.data[0]?.items;
  
  const totalPrice = cartProducts?.reduce((total: number, item: TCartProduct) => total + Number(item?.productId?.price) * Number(item.quantity), 0);
  const totalWeight = cartProducts?.reduce((total: number, item: TCartProduct) => total + Number((item.productId.weight).replace("kg", "")) * Number(item.quantity), 0);
  const calculateTax = Number(((totalPrice + Number(totalWeight*5))*0.15).toFixed(2));
  const finalPrice = Number((totalPrice + (totalWeight*5) + calculateTax ).toFixed(2))

  return (
    <Drawer direction="right">
      <DrawerTrigger className="flex">{child}</DrawerTrigger>

      <DrawerContent className="w-[70%] md:w-[50%] xl:w-[30%] 2xl:w-[20%] flex flex-col">
        <DrawerHeader className="border-b border-gray-200">
          {/* Nav items */}
          <DrawerTitle className="text-center">
            <h1 className="text-lg md:text-2xl">Shopping Cart</h1>
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex-grow overflow-hidden">
          <div className="h-full">
            <ScrollArea className="w-full h-full">
              {cartProducts?.length > 0 ? (
                <>
                  <div>
                    {cartProducts?.map((product: TCartProduct, idx: number) => (
                      <div
                        key={idx}
                        className="flex gap-2.5 px-5 py-2 border-b border-gray-200"
                      >
                        <div>
                          <img
                            className="w-14"
                            src={product?.productId.thumbnail}
                            alt=""
                          />
                        </div>
                        <div>
                          <h1 className="text-base font-medium">
                            Drop Shoulder Top
                          </h1>
                          <h2 className="text-sm font-medium">
                            <span className="text-gray-600">Quantity:</span>{" "}
                            {product?.quantity}
                          </h2>
                          <h2 className="text-sm font-medium">
                            <span className="text-gray-600">Price:</span> $
                            {product?.quantity * product?.productId.price}
                          </h2>
                        </div>
                        <div className="flex-grow flex justify-end items-center">
                          <div className="bg-gray-300 w-fit text-2xl p-1 rounded-full cursor-pointer active:scale-95 transition transform duration-200">
                            <RxCross2 />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-center items-center h-[600px]">
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
                </>
              )}
            </ScrollArea>
          </div>
        </div>

        <DrawerFooter>
          <div className="space-y-1.5 md:space-y-2.5 xl:space-y-1.5 2xl:space-y-3 text-base md:text-lg xl:text-base font-medium">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Sub Total:</span>{" "}
              <span>${totalPrice? (totalPrice).toFixed(2) : '0.00'}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Shipping ($5 kg):</span>{" "}
              <span>${totalWeight ? (totalWeight*5).toFixed(2) : '0.00'}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated Tax(15%):</span>{" "}
              <span>${calculateTax? calculateTax : '0.00'}</span>
            </div>
          </div>

          {/* divider */}
          <div className="flex-grow border-t border-gray-300 my-1.5 md:my-2"></div>

          {/* total */}
          <div className="flex justify-between items-center text-lg md:text-xl font-medium md:font-semibold">
            <span>Total:</span> <span>${finalPrice? finalPrice : '0.00'}</span>
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
