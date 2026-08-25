import type { Metadata } from "next";
import "./globals.css";
import "./site-header.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cardio-kickboxing-mockup.abelmacias520.chatgpt.site"),
  title: "Group Classes | SaddleBrooke Strength",
  description:
    "Beginner-friendly Cardio Kickboxing and Ageless Jiu-Jitsu at SaddleBrooke Strength. Your first class is free.",
  openGraph: {
    title: "Small-Group Classes at SaddleBrooke Strength",
    description:
      "Beginner-friendly Cardio Kickboxing and Ageless Jiu-Jitsu. First class free.",
    images: [
      {
        url: "https://cardio-kickboxing-mockup.abelmacias520.chatgpt.site/og.png",
        width: 1800,
        height: 930,
        alt: "Small-Group Classes at SaddleBrooke Strength",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Small-Group Classes at SaddleBrooke Strength",
    description:
      "Beginner-friendly Cardio Kickboxing and Ageless Jiu-Jitsu. First class free.",
    images: ["https://cardio-kickboxing-mockup.abelmacias520.chatgpt.site/og.png"],
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
