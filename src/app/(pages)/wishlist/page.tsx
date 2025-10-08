import Button from "@/components/reusable/Button";
import WishlistProductCard from "@/components/reusable/WishlistProductCard";
import { currentUser } from "@/lib/api/currentUser";
import { getAllProductFromWishlist } from "@/lib/api/wishlist/wishlist";
import { smoochsans } from "@/styles/font";
import { TProduct } from "@/types/product.type";
import { TResponce } from "@/types/types";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Livaly-Wishlist",
  description:
    "Discover the latest in fashion at Laivaly – your go-to destination for stylish, high-quality clothing for men, women, and kids. Enjoy fast delivery, secure checkout, and unbeatable prices.",
};

const WishlistPage = async () => {
  const user = (await currentUser()) as TResponce;

  const data = (await getAllProductFromWishlist()) as TResponce;
  const products = data?.data;

  return (
    <div>
      {!user && (
        <div className="text-center space-y-5 mt-10">
          <h1 className="text-3xl font-medium">Your Wishlist Awaits</h1>
          <p className="gray-text leading-7 ">
            Sign in to save the products you love — and find them anytime,
            anywhere. <br />
            Create your personal wishlist, track your favorites, and shop with
            ease. Don’t let your style get away.
          </p>
          <div className="flex justify-center">
            <Link href="/login">
              <Button
                buttonTitle="SignIn"
                className="bg-black text-white rounded flex justify-center"
              />
            </Link>
          </div>
        </div>
      )}

      <div className="my-10">
        <div className="px-5 space-y-3 md:space-y-5">
          <h1
            className={`${smoochsans.className} text-8xl md:text-9xl uppercase font-extrabold`}
          >
            favourites
          </h1>
          <p className="text-lg font-semibold">{products?.length} Items</p>
        </div>

        <div className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-5">
          {products.map((product: TProduct) => (
            <WishlistProductCard key={product?._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
