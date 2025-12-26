import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import HomePage from "@/app/models/HomePage";

export async function GET() {
  await connectDB();

  const data = await HomePage.findOne();
  return NextResponse.json(data);
}
export async function PUT(req) {
  try {
    await connectDB();
    const body = await req.json();

    const data = await HomePage.findOneAndUpdate({}, { $set: body }, { new: true, upsert: true });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
