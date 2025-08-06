import Button from "@/components/reusable/Button";
import Container from "@/components/reusable/Container";
import React from "react";

const WishlistPage = () => {
  const user = false;

  return (
    <div>
      <Container>
        {!user && (
          <div className="text-center space-y-5">
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
      </Container>
    </div>
  );
};

export default WishlistPage;
