import Button from "@/components/reusable/Button";
import Container from "@/components/reusable/Container";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Livaly-Wishlist",
  description:
    "Discover the latest in fashion at Laivaly – your go-to destination for stylish, high-quality clothing for men, women, and kids. Enjoy fast delivery, secure checkout, and unbeatable prices.",
};

const WishlistPage = () => {
  const user = false;

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
          <div>
            <Button buttonTitle="SignIn" />
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
