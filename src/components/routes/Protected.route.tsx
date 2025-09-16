import { TUser } from "@/types/types";
import { decodedUserToken } from "@/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";


export const dynamic = "force-dynamic";

export const ProtectedRoute = async ({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const token = (await cookies()).get("accessToken");

  let userRole: string | undefined;
  if (token) {
    const userInfo = decodedUserToken(token?.value as string) as TUser;
    userRole = userInfo?.userRole;
  }

  if (!token || role !== userRole) {
    redirect("/login");
  }

  return children;
};