// app/user/dashboard/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import SignOutButton from "@/app/api/auth/signOut/signOut";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard Layout",
};

export default function AdminDashboardLayout({ children }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {/* Sidebar or custom dashboard wrapper */}
      <div className="flex min-h-screen">
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-xl font-bold mb-4">Admin Menu</h2>
          <ul>
            <li><Link href="/admin/dashboard/homepage">Home</Link></li>
            <li><Link href="/admin/dashboard/">Profile</Link></li>
            <li><Link href="/admin/dashboard/">Settings</Link></li>
            <li><SignOutButton /></li>
          </ul>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}
