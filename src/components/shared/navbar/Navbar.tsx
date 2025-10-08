import { Handbag, Heart, Search, UserRound } from "lucide-react";
import Image from "next/image";
import SidebarButton from "./sideBar/SidebarButton";
import Link from "next/link";
import Searchbar from "./searchBar/Searchbar";
import ProfileMenu from "@/components/customer/ProfileMenu";
import { currentUser } from "@/lib/api/currentUser";
import { TUser } from "@/types/user";

const Navbar = async () => {
  const user = (await currentUser()) as TUser;

  return (
    <header>
      <div className="flex justify-between items-center px-8 md:px-16 py-5 border-b">
        <div className="flex items-center gap-5 font-semibold">
          <SidebarButton />
          <Searchbar>
            <div className="hidden lg:flex items-center gap-1.5 cursor-pointer">
              <Search />
              <h1>Search</h1>
            </div>
          </Searchbar>
        </div>

        <Link href="/home">
          <div className="relative size-8 md:size-12">
            <Image
              src="/images/logo/logo.png"
              alt="Laivaly-logo"
              quality={100}
              fill
            />
          </div>
        </Link>

        <div className="flex items-center gap-3 md:gap-5 2xl:gap-6">
          <Link href="/wishlist">
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

export default Navbar;
