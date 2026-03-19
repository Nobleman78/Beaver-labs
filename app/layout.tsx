import { gerbilFont } from "@/components/utils/font";
import "./globals.css";
import { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Beaver Labs",
  description: "Beaver Labs — Product Design & Engineering Studio",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights you need
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-white transition-colors duration-300`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}