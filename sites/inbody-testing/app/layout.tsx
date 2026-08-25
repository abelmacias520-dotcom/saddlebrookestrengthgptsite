import type { Metadata } from "next";
import "./globals.css";
import "./site-header.css";

export const metadata: Metadata = {
  title: "InBody 380 & Grip Strength Testing | SaddleBrooke Strength",
  description: "Get an InBody 380 body composition test with included InGrip strength testing at SaddleBrooke Strength in Tucson, Arizona.",
  openGraph: {
    title: "InBody 380 & Grip Strength Testing | SaddleBrooke Strength",
    description: "Track body composition and grip strength together in one $25 appointment.",
    url: "https://saddlebrookestrength.com/inbody-testing",
    siteName: "SaddleBrooke Strength",
    images: [{ url: "https://saddlebrooke-inbody.abelmacias520.chatgpt.site/og.png", width: 1730, height: 909, alt: "InBody Testing — See the progress the scale can’t show." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InBody 380 & Grip Strength Testing | SaddleBrooke Strength",
    description: "Track body composition and grip strength together in one $25 appointment.",
    images: ["https://saddlebrooke-inbody.abelmacias520.chatgpt.site/og.png"],
  },
  icons: {
    icon: "/sbs-icon.webp",
    shortcut: "/sbs-icon.webp",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="codex-preview" content="development" />
      </head>
      <body>{children}</body>
    </html>
  );
}
