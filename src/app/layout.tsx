import type { Metadata, Viewport } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";

const dosis = Dosis({ subsets: ["latin"], variable: "--font-dosis" });

export const metadata: Metadata = {
  title: "Laivaly",
  description:
    "Laivaly is a modern clothing e-commerce platform offering trendy, high-quality fashion for men, women, and kids. Shop the latest styles with fast delivery and secure checkout.",
  icons: {
    icon: "/favicon.ico",
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dosis.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// Laivaly@1254
