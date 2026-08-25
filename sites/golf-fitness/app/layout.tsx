import type { Metadata } from "next";
import "./globals.css";
import "./site-header.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://saddlebrooke-golf-fitness.abelmacias520.chatgpt.site",
  ),
  title: "Golf Fitness Program | Saddlebrooke Strength",
  description:
    "Personalized golf-fitness training built around mobility, balance, strength, rotational control, and endurance.",
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
