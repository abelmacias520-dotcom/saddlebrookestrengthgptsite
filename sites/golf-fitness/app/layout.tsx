import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://saddlebrooke-golf-fitness.abelmacias520.chatgpt.site",
  ),
  title: "Golf Fitness Program | Saddlebrooke Strength",
  description:
    "Personalized golf-fitness training for adults 55+, built around mobility, balance, strength, rotational control, and endurance.",
  openGraph: {
    title: "Move Better. Swing Stronger. Keep Playing.",
    description: "Golf Fitness at Saddlebrooke Strength",
    images: [
      "https://saddlebrooke-golf-fitness.abelmacias520.chatgpt.site/og.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Better. Swing Stronger. Keep Playing.",
    description: "Golf Fitness at Saddlebrooke Strength",
    images: [
      "https://saddlebrooke-golf-fitness.abelmacias520.chatgpt.site/og.png",
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
