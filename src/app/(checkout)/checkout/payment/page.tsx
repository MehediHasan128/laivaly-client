import CartSummary from "@/components/cart/CartSummary";
import PaymentOptints from "@/components/payment/PaymentOptints";
import ProductCheckoutCard from "@/components/reusable/ProductCheckoutCard";
import { CalculateProductTotalPriceShippingAndTax } from "@/utils";
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
  openGraph: {
    title: "Laivaly Payment",
    description:
      "Select Stripe, PayPal, or Cash on Delivery to complete your purchase securely.",
    url: "https://laivaly.com/checkout/payment",
    siteName: "Laivaly",
    type: "website",
  },
};

const cartProducts = [
  {
    id: "01",
    productThumbnai: "/images/products/26.jpg",
    title: "Premium Breathable Linen Button-Down Shirt",
    productSKU: "LVP-R85W20",
    price: 49.99,
    color: "Red",
    size: "M",
    discount: 50,
    quantity: 1,
  },
  {
    id: "02",
    productThumbnai: "/images/products/25.jpg",
    title: "Premium Breathable Linen Button-Down Shirt",
    productSKU: "LVP-58GR23",
    price: 26.5,
    color: "Blue",
    size: "S",
    discount: 10,
    quantity: 2,
  },
];

const { subTotal, shippingCharge, tax, estimatedTotal } =
  CalculateProductTotalPriceShippingAndTax(cartProducts);

const PaymentPage = () => {
  return (
    <main className="p-3 xl:p-16">
      <div className="flex flex-col-reverse lg:flex-row xl:w-[90%] 2xl:w-[80%] gap-10 mx-auto">
        {/* address section */}
        <div className="lg:w-[60%] xl:w-[50%] 2xl:w-[60%] space-y-3 lg:space-y-5">
          <div className="space-y-5">
            <h1 className="md:text-xl font-medium">Shipping To,</h1>
            <div className="border-t" />
          </div>

          <div className="font-medium text-gray-600 text-sm">
            <p>Home</p>
            <h1>Mehedi Hasan</h1>
            <p>+658036520</p>
            <p>88 Apgar Rd #10-21 International Plaza</p>
            <p>Long Valley, NJ 07853-3001</p>
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
            <PaymentOptints />
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-[40%] xl:w-[50%] 2xl:w-[40%]">
          <div className="space-y-5 xl:px-20 xl:sticky xl:top-20">
            <CartSummary
              totalItems={cartProducts.length}
              subTotal={subTotal}
              shippingCharge={shippingCharge}
              tax={tax}
              estimatedTotal={estimatedTotal}
            />

            <div className="mt-5">
              <h1 className="text-sm font-medium">In your Shopping Bag</h1>

              <div className="flex flex-col gap-3 mt-5">
                {cartProducts.map((product) => (
                  <ProductCheckoutCard
                    key={product.id}
                    checkoutProduct={product}
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
