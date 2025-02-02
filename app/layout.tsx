import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "./components/header/header";
import SideBar from "./components/sidebar/sidebar"
import Home from "./components/home/home"
import Footer from './components/footer/footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "todai",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>  <section className="flex bg-[#FFFFFF] min-h-screen flex-col">
        <div>
          <Header />
          <div className="w-full pl-10">
            <div className="grid grid-cols-12">
              <div className="col-span-2">
                <SideBar />
              </div>
              <div className="col-span-10">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </section></body>
    </html>
  );
}
