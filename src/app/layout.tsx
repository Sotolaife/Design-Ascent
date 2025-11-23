import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GA_MEASUREMENT_ID, WEBSITE_URL } from "./config";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Olutola Studios",
    template: "%s | Olutola Studios",
  },
  description: "Join Olutola Studios’ free graphics design class and learn high‑income design skills that big brands pay for.",
  keywords: [
    "graphics design", 
    "graphic design course", 
    "free design class", 
    "Olutola Studios", 
    "high income skill design"
  ],
  metadataBase: new URL(WEBSITE_URL),
  openGraph: {
    title: "Olutola Studios – Free Graphics Design Class",
    description:
      "Learn the high-income graphics design skill that big brands pay for. Join Olutola Studios’ free design class.",
    url: WEBSITE_URL,
    siteName: "Olutola Studios",
    images: [
      {
        url: `${WEBSITE_URL}/favicon.ico`,
        width: 1200,
        height: 630,
        alt: "Olutola Studios Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olutola Studios – Free Graphics Design Class",
    description:
      "Join Olutola Studios’ free graphics design class and master high‑income design skills.",
    images: [`${WEBSITE_URL}/favicon.ico`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: WEBSITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="gtag-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {children}
        <Toaster />
      </body>
    </html>
  );
}
