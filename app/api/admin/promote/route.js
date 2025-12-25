import connectDB from "@/app/lib/db";
import User from "@/app/models/User";

export async function POST(req) {
  await connectDB();

  try {
    const { email } = await req.json();

    const result = await User.updateOne(
      { email },
      { role: "admin" }
    );

    if (result.matchedCount) {
      return new Response(
        JSON.stringify({ message: `User ${email} promoted to admin` }),
        { status: 200 }
      );
    } else {
      return new Response(
        JSON.stringify({ error: `User ${email} not found` }),
        { status: 404 }
      );
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
