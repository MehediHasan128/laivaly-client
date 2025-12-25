/* eslint-disable @typescript-eslint/no-unused-vars */
import Checkout from "@/components/pages/checkout/Checkout";
import { getAllProductFromCart } from "@/lib/api/cart/cart";
import { getUserProfile } from "@/lib/api/user/user";
import { TCartProduct } from "@/types/cart.type";
import { TCheckoutProduct } from "@/types/checkout.type";
import { TCustomerProfile } from "@/types/customer.type";
import { TResponce } from "@/types/types";
import { cookies } from "next/headers";

export const metadata = {
  title: "Checkout",
  description:
    "Complete your purchase on Laivaly. Review your cart, add shipping details, and move to secure payment.",
  keywords: [
    "Laivaly checkout",
    "secure checkout",
    "online shopping",
    "fashion checkout",
    "Laivaly order",
  ],
};

const CheckOutPage = async () => {

  // Get User data from db
  const user = (await getUserProfile()) as TResponce;
  const userData = user?.data as TCustomerProfile;


  // Declear a veriable where store cart products or single buy product
  let orderProducts: TCheckoutProduct[] = [];

  // Get single product from cookie
  const cookieStore = cookies();
  const rawData = (await cookieStore).get("buySingleProduct")?.value;

  // Check if get single product cookie then store the single product
  if (rawData) {
    try {
      const decodedCookie = decodeURIComponent(rawData);
      orderProducts = JSON.parse(decodedCookie) as TCheckoutProduct[];
    } catch (err) {
      orderProducts = [];
    }
  } else {
    const cartData = (await getAllProductFromCart()) as TResponce;
    const items = cartData?.data;
    orderProducts = items || [];
  };

  console.log(orderProducts);

  return (
    <main className="p-3 xl:p-16">
      <div className="flex flex-col-reverse lg:flex-row xl:w-[90%] 2xl:w-[80%] gap-10 mx-auto">
        <Checkout products={orderProducts} userData={userData} />
      </div>
    </main>
  );
};

export default CheckOutPage;
