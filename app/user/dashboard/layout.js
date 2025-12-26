"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import "@/app/globals.css";
import SignOutButton from "@/app/Components/SignOutButton";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function UserDashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/Auth/login");
    if (status === "authenticated" && session?.user?.role !== "user")
      router.push("/admin/dashboard");
  }, [status, session]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">User Menu</h2>
          <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
