import "../../../../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Octopost",
  description:
    "A octo te leva para um mergulho em todas suas redes em um click",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} max-h-screen bg-primary-gray`}>
        {children}
      </body>
    </html>
  );
}
