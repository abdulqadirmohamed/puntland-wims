import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
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
      <body className={`${inter.className}  bg-[#F2F3F5]`}>
        <div className="xl:flex hidden">
          <div className="xl:w-1/6 h-full fixed left-0 overflow-y-auto">
            <Sidebar />
          </div>
        </div>
        <main className="xl:w-5/6 ml-auto ">
          <div className="mx-8">
            <Header />
          </div>
          <div className="my-4 mx-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
