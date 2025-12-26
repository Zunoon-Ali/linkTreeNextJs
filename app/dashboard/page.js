"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardDispatcher() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/Auth/login");
      return;
    }

    if (session.user.role === "admin") {
      router.push("/admin/dashboard");
    } else if (session.user.role === "user") {
      router.push("/user/dashboard");
    } else {
      router.push("/");
    }
  }, [session, status, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting...</p>
    </div>
  );
}
