import type { Metadata } from "next";
import "./globals.css";
import "./site-header.css";

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
    icon: "/sbs-icon.webp",
    shortcut: "/sbs-icon.webp",
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
        <meta name="codex-preview" content="development" />
      </head>
      <body>{children}</body>
    </html>
  );
}
