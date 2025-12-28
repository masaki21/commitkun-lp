import type { Metadata } from "next";
import Script from "next/script";
import { M_PLUS_Rounded_1c, Shippori_Mincho } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const rounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded",
  weight: ["400", "500", "700"],
  subsets: ["latin", "japanese"],
});

const mincho = Shippori_Mincho({
  variable: "--font-mincho",
  weight: ["400", "600", "700"],
  subsets: ["latin", "japanese"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "コミットくん | 毎日1分、体重を記録するだけ",
  description:
    "「いつの間にか太ってガッカリ」を防ぐための、ゆるい見守りアプリ。食事は入力しません。写真でOK。責めずに、いつでもリスタート。",
  openGraph: {
    title: "コミットくん | 毎日1分、体重を記録するだけ",
    description:
      "食事は写真でOK。責めずに、いつでもリスタートできる体重記録アプリです。",
    url: "/",
    siteName: "コミットくん",
    images: [
      {
        url: "/ogp.svg",
        width: 1200,
        height: 630,
        alt: "コミットくん 1枚完結LP",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "コミットくん | 毎日1分、体重を記録するだけ",
    description: "ゆるく続く体重記録。写真でOK、責めない設計。",
    images: ["/ogp.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="ja">
      <body className={`${rounded.variable} ${mincho.variable} antialiased`}>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
            <Analytics gaId={gaId} />
          </>
        )}
        {children}
      </body>
    </html>
  );
}
