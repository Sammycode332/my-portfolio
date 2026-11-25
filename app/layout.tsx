import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// next/font downloads these fonts at BUILD time and serves them from your
// own site, so visitors never make a request to Google.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This becomes the <title> and <meta name="description"> in the HTML <head>.
// It's what shows in the browser tab and in Google search results.
export const metadata: Metadata = {
  title: "Samuel Oroja — Backend Developer, AI-Integrated Systems",
  description:
    "I build the backend that connects real applications to LLMs.",
};

// The root layout wraps EVERY page. `children` is whatever page.tsx returns.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
