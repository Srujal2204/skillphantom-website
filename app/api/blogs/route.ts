import { connectDB } from '../../../lib/mongodb';
import { Blog } from '../../../models/Blog';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';

export async function GET() {
  // try {
  //   await connectDB();
  //   const blogs = await Blog.find().sort({ createdAt: -1 }); // Latest blogs first
  //   return NextResponse.json(blogs);
  // } catch (error) {
  //   return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  // }
  try {
    console.log("Connecting to MongoDB..."); // Debugging ke liye
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return NextResponse.json(blogs);
  } catch (error: any) {
    console.error("DATABASE ERROR:", error.message); // Ye terminal mein check karo
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// app/api/blogs/route.ts ke andar GET ke neeche ye add karo:

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, description, image, category } = body;

    const newBlog = await Blog.create({
      title,
      description,
      image,
      category,
    });

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Blog post nahi ho paya" }, { status: 500 });
  }
}