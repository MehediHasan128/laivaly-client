import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./app/middleware/auth";

export function middleware(req: NextRequest){
  const path = req.nextUrl.pathname;

  if (path.startsWith("/_next")) return NextResponse.next();

  const protectedRoutes = ["/my-account/overview", "/my-account/profile", "/my-account/orders", "/my-account/address", "/my-account/wishlist"];

  if (protectedRoutes.includes(path) && !isAuthenticated(req)) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
};
