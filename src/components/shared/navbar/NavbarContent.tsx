/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Handbag, Heart, Search, UserRound } from "lucide-react";
import Searchbar from "./searchBar/Searchbar";
import SidebarButton from "./sideBar/SidebarButton";
import Link from "next/link";
import { smoochsans } from "@/styles/font";
import ProfileMenu from "@/components/customer/ProfileMenu";
import { TUser } from "@/types/user";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavbarContent = ({ user }: { user: TUser }) => {
  const [scrollDown, setScrollDown] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDown(true);
      } else if (currentScrollY === 0) {
        setScrollDown(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const path = usePathname();

  const isProductDetailsPage = path.startsWith("/products");

  return (
    <header className={`sticky top-0 ${isProductDetailsPage ? "sticky top-0" : "lg:fixed lg:w-full"} z-10 group`}>
      <div
        className={`flex justify-between items-center px-4 md:px-10 lg:px-16 py-3 group-hover:shadow duration-500 ${
          scrollDown
            ? `bg-white ${
                isProductDetailsPage &&
                "group-hover:bg-white lg:bg-transparent text-black"
              }`
            : `group-hover:bg-white ${
                isProductDetailsPage
                  ? "text-black"
                  : "lg:text-white group-hover:text-black"
              }`
        }`}
      >
        <div className="flex items-center gap-5 font-semibold w-28 lg:w-auto">
          <SidebarButton
            className={`duration-500 ${
              scrollDown
                ? `bg-black`
                : `${
                    isProductDetailsPage
                      ? "bg-black"
                      : "bg-black lg:bg-white lg:group-hover:bg-black"
                  }`
            }`}
          />
          <Searchbar searchBarOpen={searchBarOpen} setSearchBarOpen={setSearchBarOpen}>
            <div
              className={`hidden lg:flex items-center gap-1.5 cursor-pointer text-sm xl:text-base`}
            >
              <Search />
              <h1>Search</h1>
            </div>
          </Searchbar>
          <Searchbar searchBarOpen={searchBarOpen} setSearchBarOpen={setSearchBarOpen}>
            <div className="lg:hidden">
              <Search
                className={`${
                  scrollDown || isProductDetailsPage ? "flex" : "hidden"
                }`}
              />
            </div>
          </Searchbar>
        </div>

        <Link href="/home" className="w-full text-center">
          {/* <div className="relative size-8 md:size-12">
            <Image
              src="/images/logo/logo.png"
              alt="Laivaly-logo"
              quality={100}
              fill
            />
          </div> */}
          <div>
            <h1
              className={`${smoochsans.className} text-4xl md:text-5xl 2xl:text-6xl font-bold`}
            >
              Laivaly
            </h1>
          </div>
        </Link>

        <div className="flex items-center gap-3 md:gap-5 2xl:gap-6">
          <Link href="/wishlist" className="hidden lg:block">
            <Heart className="cursor-pointer size-5 2xl:size-6" />
          </Link>
          <Link href="/cart">
            <Handbag className="cursor-pointer size-5 2xl:size-6" />
          </Link>
          <ProfileMenu user={user}>
            <UserRound className="cursor-pointer size-5 2xl:size-6" />
          </ProfileMenu>
        </div>
      </div>
    </header>
  );
};

export default NavbarContent;
