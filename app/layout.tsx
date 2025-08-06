import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Pirata_One, EB_Garamond } from 'next/font/google';


const pirata = Pirata_One({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pirata-one',
});

const garamond = EB_Garamond({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-eb-garamond',
});
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
      <body className={`${pirata.variable} ${garamond.variable} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F6E1BB] via-[#f7f1dd] to-[#CCAE86] `}>{children}</body>
    </html>
  );
}
