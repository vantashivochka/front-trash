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
  title: "Сміттєвозочка – Вивіз сміття в Києві 24/7 | Доступні ціни",
  description: "Вивіз сміття по м.Київ та Київській області 24/7. Будівельне сміття, побутові відходи, меблі. Швидко та надійно. Першим клієнтам знижка 10%.",
  keywords: ["вивіз сміття Київ", "вивіз будівельного сміття", "вивіз побутових відходів", "сміттєвоз Київ", "вивіз старих меблів Київ"],
  openGraph: {
    title: "Сміттєвозочка - вивіз сміття по м.Київ та Київській області",
    description: "Вивіз сміття по м.Київ та Київській області 24/7. Швидко, надійно, за доступними цінами. Першим клієнтам знижка 10%.",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "/og-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Сміттєвозочка – вивіз сміття в Києві",
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
  applicationName: "Vantazhivochka Garbage",
  metadataBase: new URL("https://www.vantazhivochka-garbage.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <GoogleTagManager gtmId="GTM-KRTN8T9C" />
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Сміттєвозочка",
              description: "Вивіз сміття по м.Київ та Київській області 24/7",
              url: "https://www.vantazhivochka-garbage.com",
              telephone: ["+380633945095", "+380994162272"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Київ",
                addressCountry: "UA",
              },
              areaServed: ["Київ", "Київська область"],
              openingHours: "Mo-Su 00:00-24:00",
              priceRange: "$$",
              sameAs: ["https://t.me/VuvizSmitiaBot"],
            }),
          }}
        />
      </head>
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
