"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import SignOutButton from "@/app/Components/SignOutButton";
import "@/app/globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function AdminDashboardLayout({ children }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") router.push("/Auth/login");
    if (status === "authenticated" && session?.user?.role !== "admin")
      router.push("/user/dashboard");
  }, [status, session]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
          <ul>
            <li>
              <Link href="/admin/dashboard/homepage">Home</Link>
            </li>
            <li>
              <Link href="/admin/dashboard/profile">Profile</Link>
            </li>
            <li>
              <Link href="/admin/dashboard/settings">Settings</Link>
            </li>
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
