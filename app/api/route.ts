import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  console.log("New Lead Received:", body);

  // Future:
  // Save to MongoDB
  // Send email / WhatsApp notification

  return NextResponse.json(
    { message: "Lead received successfully" },
    { status: 200 }
  );
}
