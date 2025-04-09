import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Red_Hat_Text } from "next/font/google";
import { CartProvider } from "@/app/context/CartContext";
import { ModalProvider } from "./context/ModalContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const redHatText = Red_Hat_Text({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Product list with cart",
  description:
    "Product list with cart Assignment Frontend Mentor Coded by Suryarghya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${redHatText.variable} antialiased `}
      >
        <ModalProvider>
          <CartProvider>{children}</CartProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
