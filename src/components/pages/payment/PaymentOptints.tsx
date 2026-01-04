"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import Image from "next/image";
import { TError, TResponce } from "@/types/types";
import { placeOrderByCOD, placeOrderByKlarna } from "@/lib/api/orders/orders";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Spinner from "@/components/reusable/Spinner";
import { TOrderData } from "@/types/order.type";

const PaymentOptints = ({ order }: { order: TOrderData }) => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const orderData = {
    ...order,
    paymentMethod,
  };

  const handlePlaceOrderWithKlarnaPayment = async (orderData: TOrderData) => {
    const toastId = toast.loading("Loading");
    try {
      const res = (await placeOrderByKlarna(orderData)) as TResponce;
      toast.success(res?.message, { id: toastId });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, { id: toastId });
    }
  };

  const handlePlaceOrderInCOD = async (orderData: TOrderData) => {
    setLoading(true);
    const toastId = toast.loading("Loading...");
    try {
      const res = (await placeOrderByCOD(orderData as TOrderData)) as TResponce;
      toast.success(res.message, { id: toastId });
       router.push("/my-account/orders");
      setLoading(false);
    } catch (err) {
      const error = err as TError;
      toast.error(error.data.message, { id: toastId });
      setLoading(false);
    }
  };

  const paymentMethods = [
    {
      paymentIcon: "/images/icon/stripe.png",
      method: "Stripe",
      value: "stripe",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            {[
              "/images/icon/visa.ico",
              "/images/icon/masterCard.ico",
              "/images/icon/americamExpress.ico",
              "/images/icon/jcb.ico",
              "/images/icon/discover.ico",
            ].map((icon, index) => (
              <div key={index} className="relative size-10">
                <Image src={icon} alt="icon" fill quality={100} />
              </div>
            ))}
          </div>
          <div className="text-xs font-semibold space-y-1 text-gray-600">
            <h1>Stripe accepts all major debit & credit cards.</h1>
            <h1>
              We do not charge any additional fees for payments made through
              Stripe
            </h1>
          </div>
          <button className="border w-full rounded flex justify-center cursor-pointer bg-[#e5e8ff] border-[#aeb8fb] hover:border-[#5167FC] duration-500 mt-6 active:scale-95">
            <div className="relative size-12 md:size-14">
              <Image
                src="/images/icon/stripe.png"
                alt="stripe"
                fill
                quality={100}
              />
            </div>
          </button>
        </div>
      ),
    },
    {
      paymentIcon: "/images/icon/klarna.png",
      method: "klarna",
      value: "klarna",
      content: (
        <div className="space-y-3">
          <div className="text-xs font-semibold space-y-1 text-gray-600">
            <h1>Split your purchase into 3 or 4 interest-free payments.</h1>
            <h1>Pay later within 30 days after delivery.</h1>
          </div>
          <button
            onClick={() =>
              handlePlaceOrderWithKlarnaPayment(orderData as TOrderData)
            }
            className="border w-full rounded flex justify-center cursor-pointer bg-[#e5e5e5] border-[#c6c6c6] hover:border-black duration-500 mt-6 active:scale-95"
          >
            <div className="relative size-12 md:size-14">
              <Image
                src="/images/icon/klarna.png"
                alt="stripe"
                fill
                quality={100}
              />
            </div>
          </button>
        </div>
      ),
    },
    {
      method: "Cash On Delivery",
      value: "cod",
      content: (
        <div className="space-y-3">
          <div className="text-xs font-semibold space-y-1 text-gray-600">
            <h1>
              Pay with cash when your order is delivered to your doorstep.
            </h1>
            <h1>No advance payment required.</h1>
          </div>
          <button
            onClick={() => handlePlaceOrderInCOD(orderData as TOrderData)}
            className="border w-full rounded flex justify-center cursor-pointer bg-black text-white mt-6 py-5 font-semibold active:scale-95 duration-500"
          >
            {loading ? <Spinner /> : "Place Order"}
          </button>
        </div>
      ),
    },
  ];

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={paymentMethod}
      value={paymentMethod}
      onValueChange={setPaymentMethod}
    >
      {paymentMethods.map((m, index) => (
        <div key={index} className="border-b py-3">
          <AccordionItem value={m.value}>
            <AccordionTrigger className="hover:no-underline cursor-pointer flex items-center">
              <div className="flex items-center gap-3">
                <div className="border border-black size-4 rounded-full p-0.5">
                  <div
                    className={`${
                      paymentMethod === m.value ? "bg-black" : "bg-transparent"
                    } size-full rounded-full`}
                  />
                </div>
                {m.paymentIcon ? (
                  <div className="relative size-14">
                    <Image
                      src={m.paymentIcon}
                      alt={m.method}
                      fill
                      quality={100}
                    />
                  </div>
                ) : (
                  <h1 className="text-lg font-semibold">{m.method}</h1>
                )}
              </div>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div>{m.content}</div>
            </AccordionContent>
          </AccordionItem>
        </div>
      ))}
    </Accordion>
  );
};

export default PaymentOptints;
