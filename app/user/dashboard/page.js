"use client";
import { useSession } from "next-auth/react";

export default function UserDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (!session?.user) return <p>Please log in.</p>;

  // Use session.user data
  const { user } = session;

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-sm mt-2">Role: {user.role}</p>
    </div>
  );
}
