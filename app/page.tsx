import type { Metadata } from "next";
import HomeClient from "./HomeClient"; // Ensure path is correct

// ✅ Server Side Metadata (Yahan Error Nahi Aayega)
export const metadata: Metadata = {
  title: "SkillPhantom Technologies | Bridging the Industry-Academia Gap",
  description: "SkillPhantom Technologies provides industrial-grade training in Cybersecurity and Web Architecture.",
  openGraph: {
    title: "SkillPhantom Technologies",
    description: "Industrial training for the modern web.",
    // images: ['/your-image.jpg'], // Add image if you have one
  }
};

export default function HomePage() {
  return <HomeClient />;
}
