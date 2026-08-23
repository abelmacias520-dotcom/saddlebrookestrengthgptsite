import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cardio-kickboxing-mockup.abelmacias520.chatgpt.site"),
  title: "Cardio Kickboxing Homepage Mockup",
  description:
    "A homepage concept for SaddleBrooke Strength small-group classes.",
  openGraph: {
    title: "Small-Group Classes at SaddleBrooke Strength",
    description:
      "Cardio Kickboxing and Ageless Jiu-Jitsu for adults 55+. First class free.",
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
      "Cardio Kickboxing and Ageless Jiu-Jitsu for adults 55+. First class free.",
    images: ["https://cardio-kickboxing-mockup.abelmacias520.chatgpt.site/og.png"],
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
