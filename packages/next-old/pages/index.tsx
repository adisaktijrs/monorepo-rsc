import { Content } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

export default function Home() {
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
      <Title level={4}>ANTD❤️ + Next Page Router (Non RSC + Suspense)</Title>
    </Content>
  );
}
