/* eslint-disable @typescript-eslint/no-unused-vars */
import CartSummary from "@/components/pages/cart/CartSummary";
import PaymentOptints from "@/components/pages/payment/PaymentOptints";
import ProductCheckoutCard from "@/components/reusable/ProductCheckoutCard";
import { TCartProduct } from "@/types/cart.type";
import { TOrderData } from "@/types/order.type";
import { cookies } from "next/headers";
import React from "react";

export const metadata = {
  title: "Payment",
  description:
    "Choose your preferred payment method - Stripe, PayPal, or Cash on Delivery. Secure payments guaranteed on Laivaly.",
  keywords: [
    "Laivaly payment",
    "Stripe payment",
    "PayPal payment",
    "Cash on delivery",
    "secure payment",
  ],
};

const PaymentPage = async () => {
  // Get order data from cookie
  const cookieStore = cookies();
  const rawData = (await cookieStore).get("orderData")?.value;

  if (!rawData) return null;
  let orderData;
  try {
    const decodedCookie = decodeURIComponent(rawData);
    orderData = JSON.parse(decodedCookie) as TOrderData;
  } catch (err) {
    return null;
  }

  const {
    orderItems,
    shippingCharge,
    grandTotal,
    shippingAddress,
    subTotal,
    tax,
  } = orderData as TOrderData;
  const {
    addressCategory,
    recipientsName,
    phoneNumber,
    address,
    city,
    postalCode,
    state,
    country,
  } = shippingAddress;

  return (
    <main className="p-3 xl:p-16">
      <div className="flex flex-col-reverse lg:flex-row xl:w-[90%] 2xl:w-[80%] gap-10 mx-auto">
        {/* address section */}
        <div className="lg:w-[60%] xl:w-[50%] 2xl:w-[60%] space-y-3 lg:space-y-5">
          <div className="space-y-5">
            <h1 className="md:text-xl font-medium">Shipping To,</h1>
            <div className="border-t" />
          </div>

          <div className="font-medium text-gray-600 text-sm md:text-base">
            <p>{addressCategory}</p>
            <h1>{recipientsName}</h1>
            <p>{phoneNumber}</p>
            <p>{address}</p>
            <p>
              {city}-{postalCode}
            </p>
            <p>
              {state}, {country}
            </p>
          </div>

          <div className="space-y-5 mt-10">
            <div className="space-y-0.5">
              <h1 className="text-lg md:text-2xl font-medium">Payment</h1>
              <p className="text-xs md:text-sm font-semibold text-gray-700">
                bayzidahmed467@gmail.com
              </p>
            </div>
          </div>

          <div className="mt-10 border-t">
            <PaymentOptints order={orderData} />
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[40%] xl:w-[50%] 2xl:w-[40%]">
          <div className="space-y-5 xl:px-20 xl:sticky xl:top-20">
            <CartSummary
              totalItems={orderItems?.length}
              subTotal={subTotal}
              shippingCharge={shippingCharge}
              tax={tax}
              grandTotal={grandTotal}
            />

            <div className="mt-5">
              <h1 className="text-sm font-medium">In your Shopping Bag</h1>

              <div className="flex flex-col gap-3 mt-5">
                {orderItems?.map((product, index) => (
                  <ProductCheckoutCard
                    key={product?.productId || index}
                    orderItems={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PaymentPage;
