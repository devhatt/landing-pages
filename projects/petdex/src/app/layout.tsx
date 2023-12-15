import "../../../../styles/globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import React from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Petdex",
  description:
    "Bem vindo ao petdex. Clique aqui para saber mais sobre os pets.",
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
