import { Prompt, Sarabun } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-prompt',
  display: 'swap',
});

const sarabun = Sarabun({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-sarabun',
  display: 'swap',
});

export const metadata = {
  title: "วิทยาลัยพณิชยการธนบุรี - Thonburi Commercial College",
  description: "เว็บไซต์อย่างเป็นทางการ วิทยาลัยพณิชยการธนบุรี สังกัดสถาบันการอาชีวศึกษากรุงเทพมหานคร",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`${prompt.variable} ${sarabun.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#fcfcfd] text-slate-800">{children}</body>
    </html>
  );
}

