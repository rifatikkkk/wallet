import { nextui } from "@nextui-org/react";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: "Bebas Neue, sans-serif",
        avenir: "Avenir Next Cyr, sans-serif",
      },
      colors: {
        background: "#171719",
        gray: "#5A5A5A",
        lightGray: "#C7C7C7",
        orange: "#E75626",
        line: "#D2C4C4",
      },
    },
  },
  plugins: [nextui()],
};
