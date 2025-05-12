import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kamaldeep Singh Portfolio",
  description: "Kamaldeep Singh portfolio webpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/fav.png" sizes="any" />

         <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'EAB7Ts7NRFhABO2VLPhrsxdLnVoUNUbD1BZB07LRLNdJf8nSa3cRtRcMV5youlOddYmScwKqvwl3Bu5K1Qdre04sfplIrZAwwayVRoaEFPa15PwlWpbmL4NmJIg0Ob9ouAFAtfBEsl4hOLdOyiHKpkQZBngi3vKySaoZB4InspSGaF3X8dTOGYZCMnrEst1AlGUAZDZD'); 
          fbq('track', 'PageView');
        `}
      </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
