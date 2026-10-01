import type { Metadata } from "next";
import { Libre_Baskerville, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const headingFont = Libre_Baskerville({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const bodyFont = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KHUDCAR",
  description: "NED Autonomous-Self Driving-Driverless Car official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-zinc-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
