import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";



export async function middleware(req) {

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const pathname = req.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL("/Auth/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.redirect(new URL("/user/dashboard", req.url));
  }
  if (req.nextUrl.pathname.startsWith("/user") && token.role !== "user") {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}


export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};