import { Inter as FontSans } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/providers/providers";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Послуги Вантажівочка – Вивіз сміття 24/7",
  description: "Вивіз сміття по м.Київ та Київській області",
  openGraph: {
    title: "Вантажівочка - вивіз сміття по м.Київ та Київській області",
    images: [
      {
        url: "/og-thumbnail.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Вантажівочка - грузоперевезення та вивіз сміття",
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
    <html lang="en">
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
