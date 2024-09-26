import localFont from "next/font/local";
import "./globals.scss";
import { GeistSans } from "geist/font";

export const metadata = {
  title: "Arka Lal Chakravarty",
  description: "My services and portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
