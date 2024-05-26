import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({weight:['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ibrahim",
  description: "A full stack developer with a passion for all things web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
