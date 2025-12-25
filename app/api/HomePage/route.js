import { NextResponse } from "next/server";
import connectDB from "@/app/lib/db";
import HomePage from "@/app/models/HomePage";

export async function GET() {
  await connectDB();

  const data = await HomePage.findOne();
  return NextResponse.json(data);
}
