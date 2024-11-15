import { CustomCursor, Footer, NavBar, ScrollToTop } from "@/components/Global";
import type { Metadata } from "next";
import "./globals.css";
import { lexend, poppins, roboto } from "@/config/font";

export const metadata: Metadata = {
  title: " Coinx - Web3 Crypto Website Template",
  description:
    "Coinx, a react next js  template, is ideal for Web3, crypto, and blockchain websites. Featuring sleek design, interactive elements, and seamless animations and Effortlessly craft integration pages, user-friendly Design, engaging CTAs, and transparent pricing with Coinx. Unleash crypto's potential with Coinx.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lexend?.variable} ${roboto?.variable} ${poppins?.variable}`}
      >
        <NavBar />
        {children}
        <Footer />
        <CustomCursor />
        <ScrollToTop />
      </body>
    </html>
  );
}
