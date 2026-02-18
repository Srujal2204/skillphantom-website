import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    // Cloudinary ke 'archive-2026' folder se photos mangwa raha hai
    const { resources } = await cloudinary.api.resources({
      type: 'upload',
      prefix: 'archive-2026', 
      max_results: 100,
    });

    return NextResponse.json(resources);
  } catch (error) {
    console.error("Cloudinary Fetch Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}