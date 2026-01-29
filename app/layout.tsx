import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "./components/ClientLayout";
import { AppThemeProvider } from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: 'SkillPhantom Technologies | Bridging the Industry-Academia Gap',
  description: 'SkillPhantom Technologies provides industrial-grade training in Cybersecurity and Web Architecture.',
  openGraph: {
    title: 'SkillPhantom Technologies - Official',
    description: 'Master industrial skills with expert-led training.',
    url: 'https://skillphantomtechnologies.in/',
    siteName: 'SkillPhantom Technologies',
    images: [{ url: '/logo.png' }],
  },
}

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


