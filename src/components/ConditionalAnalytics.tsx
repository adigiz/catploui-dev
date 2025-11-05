"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { areAnalyticsAllowed } from "@/utils/cookies";

export default function ConditionalAnalytics() {
  const [shouldLoadAnalytics, setShouldLoadAnalytics] = useState(false);

  useEffect(() => {
    const analyticsAllowed = areAnalyticsAllowed();
    setShouldLoadAnalytics(analyticsAllowed);
  }, []);

  // Don't render anything if analytics are not allowed
  if (!shouldLoadAnalytics) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-P7FPWVKN');
        `}
      </Script>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C0KWKYDB6E"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C0KWKYDB6E');
        `}
      </Script>

      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1094201916235905');
          fbq('track', 'PageView');
        `}
      </Script>

      <Script
        defer
        data-domain="captloui.com"
        src="https://plausible.io/js/script.outbound-links.js"
        strategy="afterInteractive"
      />
      <Script id="plausible-function" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
        `}
      </Script>

      <noscript>
        {/* Google Tag Manager (noscript) */}
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-P7FPWVKN"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
        {/* End Google Tag Manager (noscript) */}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1094201916235905&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}
