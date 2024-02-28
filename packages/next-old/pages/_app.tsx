import { Layout } from "antd";
import type { AppProps } from "next/app";

import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="flex">
      <Sidebar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
