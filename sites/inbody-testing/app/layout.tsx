import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InBody 380 & Grip Strength Testing | SaddleBrooke Strength",
  description: "Get an InBody 380 body composition test with included InGrip strength testing at SaddleBrooke Strength in Tucson, Arizona.",
  openGraph: {
    title: "InBody 380 & Grip Strength Testing | SaddleBrooke Strength",
    description: "Track body composition and grip strength together in one $25 appointment.",
    url: "https://saddlebrooke-inbody.abelmacias520.chatgpt.site",
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
