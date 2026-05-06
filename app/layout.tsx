import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Моё хобби — вдохновение и личностный рост",
  description:
    "Сайт для школьного конкурса о том, как фотография вдохновляет, развивает дисциплину и помогает личностному росту.",
  keywords: [
    "моё хобби",
    "личностный рост",
    "школьный конкурс",
    "фотография",
    "вдохновение",
    "развитие ученика"
  ]
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
