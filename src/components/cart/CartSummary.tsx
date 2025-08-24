import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import PromoCodeForm from "./PromoCodeForm";
import Link from "next/link";
import HorizontalDivider from "../reusable/HorizontalDivider";
import Image from "next/image";

interface TCartSummayProps {
    totalItems: number;
    subTotal: number;
    shippingCharge: number;
    tax: number;
    estimatedTotal: number;
}

const CartSummary = ({totalItems, subTotal, shippingCharge, tax, estimatedTotal}: TCartSummayProps) => {
  return (
    <div className="space-y-5 xl:px-20 xl:sticky xl:top-20">
      {/* Promo Code */}
      <div className="border-y">
        <Accordion type="single" collapsible className="w-full" defaultValue="">
          <AccordionItem value="couponCode">
            <AccordionTrigger className="font-semibold hover:no-underline cursor-pointer">
              Have A Promo Code?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <PromoCodeForm />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Order Summary */}
      <div className="space-y-5">
        <div className="flex justify-between font-semibold">
          <h1 className="text-xl">Order Summary</h1>
          <p>{totalItems} items</p>
        </div>
        <div className="space-y-2 text-sm gray-text font-medium">
          <div className="flex justify-between">
            <h1>Subtotal</h1>
            <p>${subTotal}</p>
          </div>
          <div className="flex justify-between">
            <h1>Shipping</h1>
            <p>
              {shippingCharge === 0 ? (
                <span className="text-red-700">Free</span>
              ) : (
                "$" + shippingCharge
              )}
            </p>
          </div>
          <div className="flex justify-between">
            <h1>Tax</h1>
            <p>${tax}</p>
          </div>
        </div>
        <div className="w-full border-t border-black" />
        <div className="flex justify-between text-sm font-semibold">
          <h1>Estimated Total</h1>
          <p>${estimatedTotal}</p>
        </div>
      </div>

      {/* Checkout link */}
      <div>
        <Link href="/checkout">
          <button className="border w-full cursor-pointer bg-black text-white font-medium rounded active:scale-95 duration-500 py-3">
            Start Checkout
          </button>
        </Link>
      </div>

      <HorizontalDivider
        title="or check out with"
        className="text-gray-600 text-xs"
      />

      <div className="flex gap-5">
        <button className="border w-full flex justify-center cursor-pointer rounded hover:border-black duration-500">
          <div className="relative w-16 h-14">
            <Image src="/images/icon/stripe.ico" alt="stripe" fill />
          </div>
        </button>
        <button className="border w-full flex justify-center cursor-pointer rounded hover:border-black duration-500">
          <div className="relative w-16 h-14">
            <Image src="/images/icon/paypal.ico" alt="stripe" fill />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
