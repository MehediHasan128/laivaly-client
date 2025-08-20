import PromoCodeForm from "@/components/cart/PromoCodeForm";
import Button from "@/components/reusable/Button";
import Container from "@/components/reusable/Container";
import DiscoverMoreProductCard from "@/components/reusable/DiscoverMoreProductCard";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { smoochsans } from "@/styles/font";
import { MessageCircleWarning } from "lucide-react";
import Link from "next/link";
import React from "react";

const haveProduct = true;

const CartPage = () => {


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
              <h1
                className={`${smoochsans.className} text-5xl uppercase font-bold`}
              >
                shopping bag{" "}
                <span className="text-lg lowercase gray-text font-bold">
                  (1 item)
                </span>
              </h1>
              <p className="flex items-center gap-1 text-sm font-semibold gray-text">
                <span>
                  <MessageCircleWarning className="size-4" />
                </span>
                Items in bag are not reserved and may sell out. Order now.
              </p>
            </div>
            <div className="flex">
              <div className="w-[65%] border"></div>
              <div className="w-[35%] border-black px-10">
                <div>
                  <div className="border-y px-5">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      defaultValue=""
                    >
                      <AccordionItem value="couponCode">
                        <AccordionTrigger className="font-semibold hover:no-underline cursor-pointer">Have A Promo Code?</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 text-balance">
                          <PromoCodeForm />
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
