"use client";

import { TUser } from "@/types/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { ReactNode } from "react";
import { toast } from "sonner";
import { userLogout } from "@/lib/api/auth/auth";

const ProfileMenu = ({
  children,
  user,
}: {
  children: ReactNode;
  user: TUser;
}) => {
  
  const handleUserLogout = async () => {
    const toastId = toast.loading("Loading");

    await userLogout();

    toast.success("User logout succesfully!", { id: toastId });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>

        <DropdownMenuGroup>
          {user ? (
            <Link href="/my-account/overview">
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <DropdownMenuItem>
                  Login
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              <Link href="/signup">
                <DropdownMenuItem>
                  Signup
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
              </Link>
              
            </>
          )}
        </DropdownMenuGroup>

        {user && <DropdownMenuSeparator />}

        {user && (
          <DropdownMenuItem onClick={handleUserLogout}>
            Log out
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileMenu;
