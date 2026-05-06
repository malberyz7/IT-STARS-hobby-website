import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Моё хобби как источник вдохновения и личностного роста",
  description:
    "Премиальный сайт для школьного конкурса: как фотография становится источником вдохновения, дисциплины и личностного роста.",
  keywords: [
    "моё хобби",
    "личностный рост",
    "школьный конкурс",
    "фотография",
    "вдохновение",
    "развитие ученика",
    "Lakeview School Almaty"
  ],
  openGraph: {
    title: "Моё хобби как источник вдохновения и личностного роста",
    description:
      "Современный интерактивный проект о фотографии, вдохновении и личностном росте для школьного конкурса.",
    locale: "ru_RU",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
