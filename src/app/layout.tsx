"use client";
import ResponsiveAppBar from "@/components/navbar";
import MUIThemeProvider from "../../theme/themeProvider";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Footer } from "@/components/home";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MUIThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          <ResponsiveAppBar />
          {children}
          <Footer />
        </body>
      </html>
    </MUIThemeProvider>
  );
}
