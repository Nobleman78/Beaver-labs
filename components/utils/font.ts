import localFont from "next/font/local";
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
