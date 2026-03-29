import WishlistContainer from '@/components/pages/wishlist/WishlistContainer';
import { currentUser } from '@/lib/api/currentUser';
import { TUser } from '@/types/user';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Wishlist",
  description:
    "Discover the latest in fashion at Laivaly – your go-to destination for stylish, high-quality clothing for men, women, and kids. Enjoy fast delivery, secure checkout, and unbeatable prices.",
};

const WishlistPage = async() => {

  const user = await currentUser() as TUser | null;

  return (
    <div>
      <WishlistContainer user={user} />
    </div>
  );
};

export default WishlistPage;