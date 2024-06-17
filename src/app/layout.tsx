import React from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import Providers from "@/components/providers/providers";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Послуги Сміттєвозочка – Вивіз сміття 24/7",
  description: "Вивіз сміття по м.Київ та Київській області",
  openGraph: {
    title: "Сміттєвозочка - вивіз сміття по м.Київ та Київській області",
    images: [
      {
        url: "/og-thumbnail.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Сміттєвозочка - вивіз сміття по м.Київ та Київській області",
    description: "Вивіз сміття по м.Київ та Київській області",
    images: ["/og-thumbnail.jpg"],
    creator: "@denvudd",
  },
  creator: "@denvudd",
  applicationName: "Vantazhivochka",
  metadataBase: new URL("https://www.vantazhivochka-garbage.com/"),
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua">
      {/* <GoogleTagManager gtmId="GTM-WF53G2GB" /> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased bg-slate-50 dark:bg-slate-900 flex flex-col",
          fontSans.variable
        )}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
