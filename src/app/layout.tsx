import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/Navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "E-Shop",
  description:
    "A simplified e-commerce store built with Next.js, Tailwind CSS, and DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <CartProvider>
          <Navbar />
          <main className="container mx-auto p-6 flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
