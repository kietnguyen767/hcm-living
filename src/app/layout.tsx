import type { Metadata } from "next";
import { Playfair_Display, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ToastProvider } from "@/components/ui/toast";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ký Ức Sống Động - Di sản Chủ tịch Hồ Chí Minh",
  description: "Dự án văn hóa số giới thiệu sinh động về cuộc đời cứu nước vĩ đại, sự nghiệp cách mạng và các tác phẩm thơ văn, lý luận bất hủ của Chủ tịch Hồ Chí Minh.",
  keywords: ["Chủ tịch Hồ Chí Minh", "Bác Hồ", "Di sản Hồ Chí Minh", "Tác phẩm Hồ Chí Minh", "Lịch sử Việt Nam", "Trắc nghiệm lịch sử"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${playfair.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fff8f7] text-[#271718] font-sans selection:bg-[#9e0027]/20 selection:text-[#9e0027]">
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
