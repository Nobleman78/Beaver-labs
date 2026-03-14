import localFont from "next/font/local";
import { Manrope } from "next/font/google";

export const gerbilFont = localFont({
  src: "../../public/fonts/gerbil.otf",
  weight: "700",
});

export const satoshiFont = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/Satoshi-Medium.otf",
      weight: "600",
      style: "medium",
    },
    {
      path: "../../public/fonts/Satoshi-Light.otf",
      weight: "300",
      style: "light",
    },
  ],
});

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});