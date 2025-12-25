import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(new URL("/Auth/login", req.url));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const role = decoded.role;
    if (pathname.startsWith("/admin") && role !== "admin") {
      return NextResponse.redirect(new URL("/user/dashboard", req.url))
    }
    if (pathname.startsWith("/user") && role !== "user") {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url))
    }

    return NextResponse.next();


  } catch (e) {
    return NextResponse.redirect(new URL("/Auth/login", req.url)).json({ message: "Invalid token" });
  }

}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*']
}












// // middleware.js
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(req) {
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });

//   const { pathname } = req.nextUrl;

//   // Allow public pages
//   if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
//     return NextResponse.next();
//   }

//   // If not logged in, redirect to login
//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   // Admin-only routes
//   if (pathname.startsWith("/admin") && token.role !== "admin") {
//     return NextResponse.redirect(new URL("/dashboard", req.url)); // redirect non-admins
//   }

//   // User-only routes
//   if (pathname.startsWith("/user") && token.role !== "user") {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   return NextResponse.next();
// }

// // Apply middleware only to dashboard routes
// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*", "/dashboard/:path*"],
// };
