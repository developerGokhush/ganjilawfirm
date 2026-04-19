import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://ganjilawfirm.com"),
  title: {
    default: "Ganji Law Firm | Advocates & Legal Consultants",
    template: "%s | Ganji Law Firm",
  },
  description:
    "Ganji Law Firm is a Hyderabad-based Indian law practice advising clients on corporate law, criminal law, civil litigation, arbitration, and legal consulting.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ganji Law Firm | Advocates & Legal Consultants",
    description:
      "Hyderabad legal counsel for disputes, transactions, regulatory matters, and advisory work.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-mod-js wf-pending" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('unhandledrejection', function(event) {
              if (!event || !event.reason) return;
              var str = String(event.reason.stack || event.reason.message || event.reason);
              if (str.indexOf('timeline') !== -1 || str.indexOf('buildSubTimeline') !== -1) {
                event.preventDefault(); // Stop default browser error 
                event.stopImmediatePropagation(); // STOP Next.js from ever seeing this!
                console.warn("[Ganji Failsafe] Suppressed isolated Webflow IX2 timeline crash.");
              }
            }, true);
          `
        }} />
      </head>
      <body suppressHydrationWarning>
        {children}

        {/* Removed strategy="beforeInteractive". 
          Next.js will now default to "afterInteractive", safely injecting 
          these scripts without breaking React hydration.
        */}
        <Script src="/js/webfont.js" />
        <Script
          id="webfont-config"
          dangerouslySetInnerHTML={{
            __html: `
      var checkWebFont = setInterval(function() {
        if (typeof WebFont !== "undefined") {
          clearInterval(checkWebFont);
          WebFont.load({ google: { families: ["Onest:100,200,300,regular,500,600,700,800,900", "Geist:100,200,300,regular,500,600,700,800,900", "Noto Serif:regular,500", "Manrope:300,regular,500,600,700,800"] } });
        }
      }, 50);
    `
          }}
        />
        <Script
          id="webflow-mod-touch"
          dangerouslySetInnerHTML={{
            __html: `!function(o,c){("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(c.documentElement.className+=" w-mod-touch")}(window,document);`
          }}
        />
        <Script src="/js/jquery.js" />
        <Script src="/js/webflow.schunk.36b8fb49256177c8.js" />
        <Script src="/js/webflow.schunk.d4866bd1a19c1247.js" />
        <Script src="/js/webflow.03b827d2.658b4309977eb792.js" />
        <Script src="/js/gsap.min.js" />
      </body>
    </html>
  );
}
