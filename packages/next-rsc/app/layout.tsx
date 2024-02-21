import type { Metadata } from "next";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Layout } from "antd";

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
      <body className="flex">
        <AntdRegistry>
          <Sidebar />
          <Layout>{children}</Layout>
        </AntdRegistry>
      </body>
    </html>
  );
}
