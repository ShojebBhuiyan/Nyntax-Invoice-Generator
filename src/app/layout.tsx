import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RentalProvider from "@/providers/rental-info-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nyntax Invoice Generator",
  description: "Car rental invoice generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RentalProvider>
          {children}
        </RentalProvider>
      </body>
    </html>
  );
}
