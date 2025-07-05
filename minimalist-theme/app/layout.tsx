import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const crimsonText = Crimson_Text({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-crimson",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Minimalist Portfolio - Clean & Elegant Design",
  description: "A clean, minimalist portfolio showcasing modern design principles with focus on typography and white space.",
  keywords: ["Portfolio", "Minimalist", "Clean Design", "Typography", "Web Developer"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Minimalist Portfolio - Clean & Elegant Design",
    description: "A clean, minimalist portfolio showcasing modern design principles",
    url: "https://yourportfolio.com",
    siteName: "Minimalist Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Minimalist Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minimalist Portfolio - Clean & Elegant Design",
    description: "A clean, minimalist portfolio showcasing modern design principles",
    images: ["https://yourportfolio.com/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${crimsonText.variable}`}>
      <body className="bg-minimal-lighter text-minimal-primary antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} disableTransitionOnChange={false}>
          <div className="min-h-screen flex flex-col">
            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="flex-1">{children}</main>

            {/* Subtle Footer Line */}
            <div className="h-px bg-gradient-to-r from-transparent via-minimal-border to-transparent" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
