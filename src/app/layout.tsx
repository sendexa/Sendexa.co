import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ExaHeader } from "@/layout/ExaHeader";
import { ExaFooter } from "@/layout/ExaFooter";
import { ThemeProvider } from "next-themes";
import { GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
//import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from "next";
import { AnalyticsProvider } from "@/context/AnalyticsProvider";
import { CookiesProvider } from "@/context/CookiesContext";
import { CookiesBanner } from "@/components/common/CookiesBanner";
import Script from "next/script";
import { TrackingScripts } from "@/components/common/TrackingScripts";

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sendexa | Africa's Leading Communication APIs",
    template: "%s | Sendexa", // Adds Sendexa suffix to child page titles
  },
  description:
    "Powering 10,000+ businesses with enterprise-grade SMS, WhatsApp, Email  APIs. 99.9% uptime, fastest delivery speeds, and developer-first tools.",
  metadataBase: new URL("https://sendexa.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sendexa | All-in-One Platform for Communications ",
    description:
      "Everything to engage customers and collect payments across Africa. Get started with 10,000 free credits.",
    url: "https://sendexa.co",
    siteName: "Sendexa",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sendexa | Build with Africa's Best APIs",
    description:
      "Node.js, Python & PHP SDKs available. 24/7 support with 15-min SLA.",
    images: ["/og/twitter.jpg"],
    creator: "@SendexaGH",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#3a0ca3",
    },
  },
  // themeColor: "#3a0ca3",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="theme-color" content="#111e4f" />
        <link rel="preconnect" href="https://api.sendexa.co" />
        <link rel="dns-prefetch" href="https://cdn.sendexa.co" />
      </head>
      <body
        className={`${outfit.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-50`}
      >
        <GoogleTagManager gtmId="G-FLDGHERSB9" />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="sendexa-theme"
        >
          <AnalyticsProvider>
            <CookiesProvider>
              <ExaHeader />
              <main id="main-content" className="min-h-screen">
                {children}
              </main>
              <ExaFooter />
              <CookiesBanner />
              <SpeedInsights />
            </CookiesProvider>
          </AnalyticsProvider>
        </ThemeProvider>

        <TrackingScripts />

        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FLDGHERSB9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FLDGHERSB9');
          `}
        </Script>
        <Script
          src="https://cdn.xtopay.co/xtopay.js"
          strategy="afterInteractive"
        />
        <Script src="https://js.sendexa.co/" strategy="afterInteractive" />
        <Script src="https://cdn.xtottel.com/" strategy="afterInteractive" />

        <Script
          src="https://vercel-speed-insights.vercel.app/script.js"
          strategy="afterInteractive"
          data-vercel-speed-insights="your-vercel-speed-insights-id"
        />
      </body>
    </html>
  );
}
