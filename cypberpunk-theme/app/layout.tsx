import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { MatrixBackground } from "@/components/matrix-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyber Portfolio - Next.js Developer",
  description: "A cyberpunk-themed portfolio showcasing modern web development with Next.js and cutting-edge animations.",
  keywords: ["Next.js", "React", "TypeScript", "Portfolio", "Cyberpunk", "Web Developer"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    title: "Cyber Portfolio - Next.js Developer",
    description: "A cyberpunk-themed portfolio showcasing modern web development",
    url: "https://yourportfolio.com",
    siteName: "Cyber Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cyber Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Portfolio - Next.js Developer",
    description: "A cyberpunk-themed portfolio showcasing modern web development",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-cyber-dark text-white overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <div className="relative min-h-screen">
            {/* Matrix Background */}
            <MatrixBackground />

            {/* Cyber Grid Background */}
            <div className="fixed inset-0 cyber-grid-bg opacity-20 pointer-events-none" />

            {/* Navigation */}
            <Navigation />

            {/* Main Content */}
            <main className="relative z-10">{children}</main>

            {/* Scan Line Effect */}
            <div className="fixed top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyber-primary to-transparent opacity-50 animate-scan pointer-events-none" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
