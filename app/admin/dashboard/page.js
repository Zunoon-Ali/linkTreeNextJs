import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== "admin") {
    return <p>Access Denied</p>; // or redirect to login
  }

  return <h1>Welcome Admin</h1>;
}
