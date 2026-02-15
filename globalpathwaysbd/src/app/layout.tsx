import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GlobalPathwaysBD - Study in UK | Education Consultancy Bangladesh",
    template: "%s | GlobalPathwaysBD",
  },
  description:
    "GlobalPathwaysBD is a leading education consultancy in Bangladesh helping students pursue higher education in the UK. Expert guidance for university admission, visa, IELTS, and scholarships.",
  keywords: [
    "study in UK",
    "UK university admission",
    "Bangladesh education consultancy",
    "UK student visa",
    "IELTS preparation Dhaka",
    "UK scholarship Bangladesh",
    "study abroad consultancy",
    "GlobalPathwaysBD",
    "higher education UK",
  ],
  authors: [{ name: "GlobalPathwaysBD" }],
  openGraph: {
    title: "GlobalPathwaysBD - Your Gateway to UK Education",
    description:
      "Expert education consultancy helping Bangladeshi students achieve their dream of studying at top UK universities.",
    url: "https://globalpathwaysbd.com",
    siteName: "GlobalPathwaysBD",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
