import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://saddlebrooke-strength-home.abelmacias520.chatgpt.site",
  ),
  title: "Saddlebrooke Strength | Personal Training & Fitness",
  description:
    "Personal training, golf fitness, group classes, and InBody testing in SaddleBrooke, Arizona.",
  icons: {
    icon: "/sbs-icon.webp",
    shortcut: "/sbs-icon.webp",
  },
  openGraph: {
    title: "Saddlebrooke Strength",
    description: "Stay strong. Move with confidence. Keep doing what you love.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Saddlebrooke Strength — Stay strong. Move with confidence.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saddlebrooke Strength",
    description: "Stay strong. Move with confidence. Keep doing what you love.",
    images: ["/og.png"],
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
