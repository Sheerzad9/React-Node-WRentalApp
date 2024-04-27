"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "../store/index";
import Menu from "@/components/Menu/Menu";
import Spinner from "@/components/UI/Spinner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>WRents</title>
        <meta name="TODO" content="TODO" />
      </head>
      <body className={inter.className}>
        <Provider store={store}>
          <Spinner />
          <Menu />
          {children}
        </Provider>
      </body>
    </html>
  );
}
