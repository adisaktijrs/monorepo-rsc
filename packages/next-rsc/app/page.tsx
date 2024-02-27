import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

export default async function Home() {
  return (
    <Content
      style={{
        padding: 24,
        margin: 16,
        background: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title level={4}>ANTD❤️ + Next App Router (RSC + Suspense)</Title>
    </Content>
  );
}
