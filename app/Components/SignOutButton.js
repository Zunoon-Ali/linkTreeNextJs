"use client";

import { signOut, useSession } from "next-auth/react";

export default function SignOutButton() {
    const { data: session } = useSession();
    if (!session) return null;

    return (
        <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-red-500 hover:underline bg-gray-100 px-3 py-2 rounded cursor-pointer"
        >
            Sign Out
        </button>
    );
}
