import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cloudmart - Making Work Effortless and Productive",
    template: "%s | Cloudmart"
  },
  description: "Cloudmart is a SaaS provider dedicated to helping individuals and businesses boost productivity and streamline daily tasks through powerful, user-friendly software solutions. Discover our mission to transform how you work.",
  keywords: [
    "SaaS",
    "productivity software",
    "business applications",
    "workflow automation",
    "business analytics",
    "cloud software",
    "work efficiency",
    "business tools"
  ],
  authors: [{ name: "Cloudmart Team" }],
  creator: "Cloudmart",
  publisher: "Cloudmart",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cloudmart.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloudmart.com',
    siteName: 'Cloudmart',
    title: 'Cloudmart - Making Work Effortless and Productive',
    description: 'Transform your workflow with Cloudmart\'s powerful productivity software solutions. Boost efficiency and streamline daily tasks.',
    images: [
      {
        url: '/og-image-cloudmart.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloudmart - Productivity Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloudmart - Making Work Effortless and Productive',
    description: 'Transform your workflow with Cloudmart\'s powerful productivity software solutions.',
    images: ['/og-image-cloudmart.jpg'],
    creator: '@cloudmart',
    site: '@cloudmart',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'SaaS Software',
  other: {
    'msapplication-TileColor': '#1e293b',
    'theme-color': '#1e293b',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Cloudmart',
    'application-name': 'Cloudmart',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="mobile-web-app-capable" content="yes"/>
        
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cloudmart",
              "url": "https://cloudmart.com",
              "logo": "https://cloudmart.com/logo.png",
              "description": "Cloudmart is a SaaS provider dedicated to helping individuals and businesses boost productivity and streamline daily tasks through powerful, user-friendly software solutions.",
              "foundingDate": "2025",
              // "sameAs": [
              //   "https://twitter.com/cloudmart",
              //   "https://linkedin.com/company/cloudmart",
              //   "https://facebook.com/cloudmart"
              // ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "support@cloudmart.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
