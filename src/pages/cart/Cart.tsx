import LForm from "@/components/form/LForm";
import LInput from "@/components/form/LInput";
import CartCard from "@/components/reusable/CartCard";
import Container from "@/components/reusable/Container";
import { FieldValues } from "react-hook-form";
import CartPricingDrawer from "./CartPricingDrawer";
import CartCardForMoile from "@/components/reusable/CartCardForMoile";
import { useGetAllProductFromCartQuery } from "@/redux/features/cart/cartApi";
import { useAppSelector } from "@/redux/hook";
import { currentUser } from "@/redux/features/auth/authSlice";
import { TCartProduct } from "@/types";

const Cart = () => {
  const handleApplyCouponCode = (data: FieldValues) => {
    console.log(data);
  };

  // Get user id
  const user = useAppSelector(currentUser);
  const userId = user?.userId;

  // Cart product
  const { data: cartData, refetch } = useGetAllProductFromCartQuery(userId);
  const cartProducts = cartData?.data[0]?.items;


  // Calculate product costing
  const totalPrice = cartProducts?.reduce((total: number, item: TCartProduct) => total + Number(item?.productId?.price) * Number(item.quantity), 0);
  const totalWeight = cartProducts?.reduce((total: number, item: TCartProduct) => total + Number((item.productId.weight).replace("kg", "")) * Number(item.quantity), 0);
  const calculateTax = Number(((totalPrice + Number(totalWeight*5))*0.15).toFixed(2));
  const finalPrice = Number((totalPrice + (totalWeight*5) + calculateTax ).toFixed(2))

  

  return (
    <div className="min-h-screen pb-32">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 2xl:gap-16 py-5 md:py-10">
          <div className="xl:w-[70%] 2xl:w-[75%]">
            <h1 className="text-2xl md:text-3xl font-bold">Shopping Cart</h1>

            {/* Card container */}
            <div className="mt-5 md:mt-10 hidden md:block">
              {
                cartProducts?.map((product: TCartProduct) => <CartCard key={product?._id} product={product} refetch={refetch} />)
              }
            </div>

            <div className="mt-5 md:mt-10 block md:hidden">
              <CartCardForMoile />
              <CartCardForMoile />
              <CartCardForMoile />
              <CartCardForMoile />
            </div>
          </div>

          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%] py-[60px]">
            <div>
              <h1 className="text-xl 2xl:text-3xl font-semibold">Summary</h1>

              <div className="my-5 2xl:my-10">
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
                      className="absolute right-0 border border-[#31473A]  bg-[#31473A] font-semibold py-2.5 px-5 text-white rounded-r-lg cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </LForm>
              </div>

              <div className="text-base 2xl:text-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">
                      Sub Total:
                    </span>
                    <span className="text-base 2xl:text-xl font-semibold">
                      ${totalPrice? totalPrice : '0.00'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">
                      Estimated Shipping & Handling:
                    </span>
                    <span className="text-base 2xl:text-xl font-semibold">
                      ${totalWeight ? (totalWeight*5).toFixed(2) : '0.00'}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">
                      Estimated Tax:
                    </span>
                    <span className="text-base 2xl:text-xl font-semibold">
                      ${calculateTax? calculateTax : '0.00'}
                    </span>
                  </div>
                </div>

                <div className="border-b border-gray-300 my-5"></div>

                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600 text-xl">
                      Total:
                    </span>
                    <span className="text-2xl font-medium">${finalPrice? finalPrice : '0.00'}</span>
                  </div>
                </div>
              </div>

              <div className="mt-10 space-y-3.5">
                <button className="border border-[#31473A] bg-[#31473A] w-full py-2 2xl:py-3 rounded-lg font-medium text-white cursor-pointer hover:bg-[#1e3327] duration-700">
                  Check Out
                </button>
                <button className="border border-[#03399e] w-full py-2 2xl:py-3 rounded-lg font-extrabold cursor-pointer italic">
                  <span className="text-[#03399e]">Pay</span>
                  <span className="text-[#009cde]">Pal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CartPricingDrawer
        child={
          <div className="bg-gray-700 fixed bottom-0 w-full lg:hidden flex justify-center p-5 pt-2 text-white rounded-t-xl">
            <div className="border-2 rounded-full w-[20%]"></div>
          </div>
        }
      />
    </div>
  );
};

export default Cart;
