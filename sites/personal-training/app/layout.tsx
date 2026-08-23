import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://saddlebrooke-personal-training.abelmacias520.chatgpt.site",
  ),
  title: "One-on-One Personal Training | Saddlebrooke Strength",
  description:
    "One-on-one personal training in SaddleBrooke with testing, assessments, flexibility, strength, balance, and nutrition coaching.",
  openGraph: {
    title: "Stronger for What Matters.",
    description: "One-on-One Personal Training | Saddlebrooke Strength",
    images: [
      "https://saddlebrooke-personal-training.abelmacias520.chatgpt.site/og.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stronger for What Matters.",
    description: "One-on-One Personal Training | Saddlebrooke Strength",
    images: [
      "https://saddlebrooke-personal-training.abelmacias520.chatgpt.site/og.png",
    ],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
