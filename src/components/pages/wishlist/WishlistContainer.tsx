"use client";

import Button from "@/components/reusable/Button";
import WishlistProductCard from "@/components/reusable/WishlistProductCard";
import { getWishlistProductFromLocalStorage } from "@/services/wishlist";
import { TUser } from "@/types/user";
import { ProductWishlistType } from "@/types/wishlist.type";
import Link from "next/link";
import { useEffect, useState } from "react";

const WishlistContainer = ({ user }: { user: TUser | null }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    if(!user) {
      const fetchWishlistProducts = () => {
        setProducts(getWishlistProductFromLocalStorage());
      }
      fetchWishlistProducts();
      window.addEventListener("wishlist_updated", fetchWishlistProducts);
      return () => {
        window.removeEventListener("wishlist_updated", fetchWishlistProducts);
      }
    }
  }, [user])

  return (
    <div className="min-h-screen">
      <div className="text-center py-5 md:py-8 space-y-5">
        <h1 className="text-xl md:text-2xl font-light">
          {products.length > 0
            ? !user && "Don’t lose your favorites anymore"
            : "Your wishlist is empty"}
        </h1>
        <p className="text-xs font-medium md:text-sm text-gray-600">
          {products.length > 0
            ? "Sign In or Create an account to save your selection"
            : "Add your favorite items and share them."}
        </p>
        {user ? null : (
          <Link href={"/login"}>
            <Button
              buttonTitle="Sign In"
              className="bg-black rounded-full text-white md:text-sm"
            />
          </Link>
        )}
      </div>

      <div className="p-3 text-xl">
        {products.length !== 0 && <h1>My Wishlist ({products.length})</h1>}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 bg-gray-100">
        {/* Wishlist products will be rendered here */}
        {products.map((product: ProductWishlistType) => (
          <WishlistProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default WishlistContainer;
