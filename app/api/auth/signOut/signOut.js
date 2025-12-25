
"use client";

import { signOut } from "next-auth/react";


export default function SignOutButton() {

 const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // redirect manually
  };

  return (
    <button onClick={handleSignOut} className="text-red-500 hover:underline bg-gray-100 px-3 py-2 rounded cursor-pointer">
      Sign Out
    </button>
  );
}
