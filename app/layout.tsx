import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkMode from "@/components/DarkMode";
import Navigation, { NavItem } from "@/components/Navigation";
import { Home } from "lucide-react";
import DarkModeSwitch from "@/components/DarkModeSwitch";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkMode
          defaultTheme="dark"
          attribute="class"
          disableTransitionOnChange
        > 
          {children}
          
        </DarkMode>
      </body>
    </html>
  );
}
