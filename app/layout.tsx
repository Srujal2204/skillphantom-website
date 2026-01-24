import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./components/ClientLayout";
import { AppThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "SkillPhantom Technologies",
    template: "%s | SkillPhantom",
  },
  description:
    "SkillPhantom Technologies builds future-ready skills through internships, school programs, and industry-aligned training in Cybersecurity, AI/ML, Web Development, and more.",
  icons: {
    icon: "/favicon.ico",
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


