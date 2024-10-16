import type { Metadata } from "next";
import { Madimi_One, Chivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const madimi = Madimi_One({
  subsets: ["latin"],
  variable: '--font-madimi-one',
  weight: '400',
  display: 'swap'
});

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "$BRAIN",
  description: "An ugly mfer with a really fat head & low brain compute power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${madimi.variable} ${chivo.variable} scroll-smooth antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
