"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
  
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//  export const metadata = {
//     title: "Dashboard",
//     description: "Dashboard Layout",
//   };

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <main>{children}</main>
    </div>
  );
}
