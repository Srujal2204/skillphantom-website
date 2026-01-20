import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./components/ClientLayout";
import { AppThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "SkillPhantom Technology Pvt Ltd",   
    template: "%s | SkillPhantom",
  },
  description:
    "SkillPhantom is a skill development platform offering practical internships and school-level programs in Web Development, AI, Networking, Cybersecurity, and Programming.",
  keywords: [
    "SkillPhantom",
    "Internship Platform",
    "Skill Development",
    "Cybersecurity Internship",
    "Web Development Training",
    "School Skill Program",
  ],
  openGraph: {
    title: "SkillPhantom",
    description:
      "Practical skill development through internships and school programs.",
    url: "https://skillphantomtechnologies.in",
    siteName: "SkillPhantom",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </AppThemeProvider>
      </body>
    </html>
  );
}