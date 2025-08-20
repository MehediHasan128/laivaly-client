import Button from "@/components/reusable/Button";
import Container from "@/components/reusable/Container";
import DiscoverMoreProductCard from "@/components/reusable/DiscoverMoreProductCard";
import WishlistProductCard from "@/components/reusable/WishlistProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { smoochsans } from "@/styles/font";
import Link from "next/link";
import React from "react";

const haveProduct = false;

const CartPage = () => {
  return (
    <>
      <div className="flex items-center min-h-screen">
        <div className="w-full space-y-32 md:space-y-5 lg:space-y-0">
          {!haveProduct && (
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
          )}

          {!haveProduct && (
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
          )}
        </div>
      </div>

      {haveProduct && (
        <div className="px-5 space-y-3 md:space-y-5">
          <h1
            className={`${smoochsans.className} text-6xl uppercase font-extrabold`}
          >
            shopping bag
          </h1>
        </div>
      )}
    </>
  );
};

export default CartPage;
