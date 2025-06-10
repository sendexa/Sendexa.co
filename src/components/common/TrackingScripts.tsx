// components/TrackingScripts.tsx
'use client';

import { useCookies } from '@/context/CookiesContext';
import Script from 'next/script';

export const TrackingScripts = () => {
  const { cookiesAccepted } = useCookies();

  if (!cookiesAccepted) return null;

  return (
    <>
      <Script 
        strategy="afterInteractive" 
        src="https://www.googletagmanager.com/gtag/js?id=G-FLDGHERSB9"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FLDGHERSB9');
        `}
      </Script>
    </>
  );
};