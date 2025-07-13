import localFont from "next/font/local";

export const Gilroy = localFont({
  display: "swap",
  variable: "--font-family",
  src: [
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-UltraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../../shared/assets/fonts/Gilroy/Gilroy-Black.woff",
      weight: "1000",
      style: "normal",
    },
  ],
});
