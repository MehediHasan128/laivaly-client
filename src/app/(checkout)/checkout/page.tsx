/* eslint-disable @typescript-eslint/no-unused-vars */
import Checkout from "@/components/pages/checkout/Checkout";
import { getUserProfile } from "@/lib/api/user/user";
import { TCartProduct, TCustomerProfile, TResponce } from "@/types/types";
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
  const cookieStore = cookies();
  const rawData = (await cookieStore).get("buySingleProduct")?.value;

  if (!rawData) return [];
  let singleProduct;
  try {
    const decodedCookie = decodeURIComponent(rawData);
    singleProduct = JSON.parse(decodedCookie) as TCartProduct[];
  } catch (err) {
    return [];
  }

  const user = (await getUserProfile()) as TResponce;
  const userData = user?.data as TCustomerProfile;

  return (
    <main className="p-3 xl:p-16">
      <div className="flex flex-col-reverse lg:flex-row xl:w-[90%] 2xl:w-[80%] gap-10 mx-auto">
        <Checkout products={singleProduct} userData={userData} />
      </div>
    </main>
  );
};

export default CheckOutPage;
