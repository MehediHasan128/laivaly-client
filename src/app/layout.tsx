import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import '@smastrom/react-rating/style.css'
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Laivaly – Fashion for Men, Women & Kids",
    template: "Laivaly | %s",
  },
  description:
    "Laivaly is a modern clothing e-commerce platform offering trendy, high-quality fashion for men, women, and kids. Shop the latest styles with fast delivery and secure checkout.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Laivaly – Fashion for Everyone",
    description:
      "Access your Laivaly account to track orders, manage your profile, and explore our latest fashion collections.",
    url: "https://laivaly.vercel.app/",
    siteName: "Laivaly",
    images: [
      {
        url: "/images/meta/laivaly.png",
        width: 1200,
        height: 630,
        alt: "Laivaly Fashion Store",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://laivaly.vercel.app/"
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

// Laivaly@1254
