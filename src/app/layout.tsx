import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { GA_MEASUREMENT_ID, PIXEL_ID, WEBSITE_URL } from "./config";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Master Brand Design & Visual Storytelling Course Nigeria | Olutola Studios",
    template: "%s | Premium Creative Design Academy Nigeria",
  },
  description: "Join Nigeria's premier brand design masterclass. Learn high-income design skills, brand strategy & visual storytelling. Free 5-day design training with certificate. Next cohort enrolling now.",
  keywords: [
    "brand design course in Nigeria",
    "visual storytelling course",
    "free design training Nigeria",
    "creative design masterclass",
    "next cohort brand design",
    "high-income design skills",
    "learn brand identity design",
    "5-day free design class",
    "graphic design Nigeria",
    "brand strategy training",
    "become a creative designer Nigeria",
    "visual communication course",
    "design career Nigeria",
    "creative director training",
    "graphics design course Nigeria",
    "premium design education",
    "design masterclass Lagos",
    "Abuja design training",
    "Port Harcourt creative course",
    "UI UX design Nigeria"
  ],
  metadataBase: new URL(WEBSITE_URL),
  openGraph: {
    title: "Master Brand Design & Visual Storytelling | Olutola Studios Nigeria",
    description: "Transform into a sought-after brand designer in Nigeria. Learn complete brand design process, visual storytelling & high-income skills that top brands pay for. Free 5-day training available.",
    url: WEBSITE_URL,
    siteName: "Olutola Studios - Creative Design Academy",
    images: [
      {
        url: `${WEBSITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Olutola Studios - Brand Design Masterclass Nigeria",
      },
    ],
    type: "website",
    locale: "en_NG",
    countryName: "Nigeria",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Brand Design & Visual Storytelling Nigeria | Olutola Studios",
    description: "Join Nigeria's premier creative design academy. Learn high-income brand design skills from industry experts. Free 5-day design class available.",
    images: [`${WEBSITE_URL}/og-image.jpg`],
    creator: "@olutolastudios",
    site: "@olutolastudios",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: WEBSITE_URL,
    languages: {
      'en-NG': WEBSITE_URL,
    },
  },
  category: "education",
  classification: "Design Education Nigeria",
  authors: [{ name: "Olutola Studios", url: WEBSITE_URL }],
  publisher: "Olutola Studios",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  other: {
    "og:country-name": "Nigeria",
    "og:region": "Lagos",
    "og:locality": "Lagos, Nigeria",
    "business:contact_data:locality": "Lagos",
    "business:contact_data:country_name": "Nigeria",
    "business:contact_data:website": WEBSITE_URL,
  }
};

// JSON-LD Structured Data for SEO
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Brand Design Masterclass & Visual Storytelling Course',
  description: 'Comprehensive brand design and visual storytelling course for aspiring creative designers in Nigeria. Learn high-income design skills from industry experts.',
  provider: {
    '@type': 'Organization',
    name: 'Olutola Studios',
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/logo.png`,
    sameAs: [
      WEBSITE_URL,
      'https://www.instagram.com/olutolastudios/',
      'https://www.linkedin.com/in/olutola-studios-98094b30a/?originalSubdomain=ng'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos'
    }
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'NGN',
    availability: 'https://schema.org/InStock',
    validFrom: new Date().toISOString().split('T')[0]
  },
  coursePrerequisites: 'Basic design knowledge recommended but not required. Suitable for beginners and intermediate designers in Nigeria.',
  educationalCredentialAwarded: 'Certificate of Completion in Brand Design & Visual Storytelling',
  timeRequired: 'P8W',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: ['online', 'mixed'],
    location: {
      '@type': 'Place',
      name: 'Online & Lagos, Nigeria',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NG',
        addressLocality: 'Lagos'
      }
    }
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Design students, aspiring brand designers, creative professionals in Nigeria'
  },
  about: {
    '@type': 'Thing',
    name: 'Brand Design, Visual Storytelling, Graphic Design, Creative Direction'
  }
};

const instructorStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Olutola Studios Instructor Team',
  jobTitle: 'Senior Brand Designer & Creative Director',
  worksFor: {
    '@type': 'Organization',
    name: 'Olutola Studios'
  },
  knowsAbout: [
    'Brand Design',
    'Visual Storytelling',
    'Creative Direction',
    'Graphic Design',
    'Brand Strategy',
    'Visual Identity Design',
    'Nigerian Design Market'
  ],
  description: 'Experienced brand design professionals with extensive knowledge of the Nigerian creative industry and international design standards.',
  url: WEBSITE_URL
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-NG" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Preconnect for performance */}
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

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(instructorStructuredData) }}
        />

        {/* Additional SEO meta tags */}
        <meta name="classification" content="Design Education, Creative Courses Nigeria" />
        <meta name="author" content="Olutola Studios - Creative Design Academy Nigeria" />
        <meta name="reply-to" content="info@olutolastudios.online" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="target" content="all" />
        <meta name="rating" content="safe for kids" />
        <meta name="revisit-after" content="7 days" />
      </head>
      <body className="font-body antialiased">
        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              page_title: document.title,
              page_location: window.location.href,
            });
            
            // Enhanced ecommerce tracking for course conversions
            gtag('event', 'page_view', {
              'send_to': '${GA_MEASUREMENT_ID}',
              'page_title': document.title,
              'page_location': window.location.href
            });
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* Additional tracking for Nigerian audience */}
        <Script id="nigeria-audience" strategy="afterInteractive">
          {`
            // Track Nigerian audience specifically
            if (navigator.language === 'en-NG' || navigator.languages.includes('en-NG')) {
              gtag('event', 'nigerian_visitor', {
                'event_category': 'audience',
                'event_label': 'Nigerian Visitor'
              });
            }
          `}
        </Script>

        {children}
        <Toaster />
      </body>
    </html>
  );
}