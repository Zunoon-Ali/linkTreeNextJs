"use client";
import { useEffect, useState } from "react";

export default function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-sm mt-2">Role: {user.role}</p>
    </div>
  );
}
