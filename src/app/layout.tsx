import { CustomCursor, Footer, NavBar, ScrollToTop } from "@/components/Global";
import type { Metadata } from "next";
import "./globals.css";
import { lexend, poppins, roboto } from "@/config/font";

export const metadata: Metadata = {
  title: " FlashCoinX - Advanced Flash Crypto Sender Solution",
  description:
    "FlashCoinX, a powerful Next.js solution, is designed for secure and efficient flash crypto transactions, supporting USDT TRC-20, BTC, and more. With seamless integration, instant on-chain confirmation, and high-volume transfer capabilities, FlashCoinX provides an ideal solution for institutions and high-frequency crypto users. Experience enhanced security, multi-platform compatibility, and round-the-clock support.",
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
