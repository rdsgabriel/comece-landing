import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Comece",
  description: "Agencia Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="icon.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
