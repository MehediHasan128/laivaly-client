import CartSummary from "@/components/pages/cart/CartSummary";
import Button from "@/components/reusable/Button";
import CartProductCard from "@/components/reusable/CartProductCard";
import Container from "@/components/reusable/Container";
import DiscoverMoreProductCard from "@/components/reusable/DiscoverMoreProductCard";
import HorizontalDivider from "@/components/reusable/HorizontalDivider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { smoochsans } from "@/styles/font";
import { CalculateProductTotalPriceShippingAndTax } from "@/utils";
import { MessageCircleWarning } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Your Shopping Cart",
  description:
    "Review and manage the items in your Laivaly shopping cart. Update quantities, remove products, and proceed to secure checkout with Stripe, PayPal, or Cash on Delivery.",
  keywords: [
    "Laivaly cart",
    "Laivaly shopping cart",
    "Laivaly checkout",
    "fashion cart",
    "Laivaly order",
    "Laivaly payment",
  ],
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

const haveProduct = true;

const CartPage = () => {
  const { subTotal, shippingCharge, tax, estimatedTotal } =
    CalculateProductTotalPriceShippingAndTax(cartProducts);

  return (
    <>
      {!haveProduct && (
        <div className="flex items-center min-h-screen">
          <div className="w-full space-y-32 md:space-y-5 lg:space-y-0">
            <div className="text-center space-y-5">
              <h1 className="text-2xl md:text-3xl font-medium">
                Your shopping bag is empty
              </h1>
              <div className="flex justify-center">
                <Link href="/men">
                  <Button
                    buttonTitle="Continue Shopping"
                    className="bg-black text-white rounded flex justify-center"
                  />
                </Link>
              </div>
            </div>

            <Container>
              <h1 className="text-2xl font-bold">Discover More</h1>
              <div className="mt-10 relative">
                <Carousel>
                  <CarouselContent>
                    {Array.from({ length: 20 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="basis-[50%] md:basis-[35%] xl:basis-[25%] 2xl:basis-[20%]"
                      >
                        <DiscoverMoreProductCard />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute -top-8 right-14 border flex flex-col">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
            </Container>
          </div>
        </div>
      )}

      {haveProduct && (
        <Container>
          <div className="w-[90%] mx-auto space-y-10">
            <div className="space-y-2">
              <p className="flex items-center gap-1 text-sm font-semibold gray-text">
                Free shipping on orders of $100+
              </p>
              <h1
                className={`${smoochsans.className} text-5xl uppercase font-bold`}
              >
                shopping bag{" "}
                <span className="text-lg lowercase gray-text font-bold">
                  ({cartProducts.length} item)
                </span>
              </h1>
              <p className="flex items-center gap-1 text-xs md:text-sm font-semibold gray-text">
                <span>
                  <MessageCircleWarning className="size-4" />
                </span>
                Items in bag are not reserved and may sell out. Order now.
              </p>
            </div>

            <div className="flex flex-col xl:flex-row gap-10 xl:gap-0">
              <div className="xl:w-[65%] border-t">
                {cartProducts.map((product) => (
                  <CartProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Cart Summary */}
              <div className="xl:w-[35%] relative">
                <div className="space-y-5 xl:px-20 xl:sticky xl:top-20">
                  <CartSummary
                    totalItems={cartProducts.length}
                    subTotal={subTotal}
                    shippingCharge={shippingCharge}
                    tax={tax}
                    estimatedTotal={estimatedTotal}
                  />

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
                        <Image
                          src="/images/icon/stripe.png"
                          alt="stripe"
                          fill
                        />
                      </div>
                    </button>
                    <button className="border w-full flex justify-center cursor-pointer rounded hover:border-black duration-500">
                      <div className="relative w-16 h-14">
                        <Image
                          src="/images/icon/klarna.png"
                          alt="stripe"
                          fill
                        />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default CartPage;
