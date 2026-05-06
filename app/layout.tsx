import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Спорт как путь к характеру, дисциплине и успеху",
  description:
    "Командный проект о футболе, баскетболе и волейболе: как спорт с детства формирует характер, дисциплину и личностный рост.",
  keywords: [
    "спорт с детства",
    "личностный рост",
    "школьный конкурс",
    "футбол",
    "баскетбол",
    "волейбол",
    "вдохновение",
    "развитие ученика",
    "Lakeview School Almaty"
  ],
  openGraph: {
    title: "Спорт как путь к характеру, дисциплине и успеху",
    description:
      "Современный интерактивный сайт о футболе, баскетболе и волейболе для школьного конкурса.",
    locale: "ru_RU",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className="transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
