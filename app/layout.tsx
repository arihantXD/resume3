import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Poppins({
  variable: "--font-monts",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Arihant Kamde",
  description: "Arihant's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
