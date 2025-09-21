import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import PromoCodeForm from "./PromoCodeForm";

interface TCartSummayProps {
  totalItems: number;
  subTotal: number;
  shippingCharge: number;
  tax: number;
  estimatedTotal: number;
}

const CartSummary = ({
  totalItems,
  subTotal,
  shippingCharge,
  tax,
  estimatedTotal,
}: TCartSummayProps) => {
  return (
    <>
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
                "$" + shippingCharge.toFixed(2)
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
          <p>${estimatedTotal.toFixed(2)}</p>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
