import { Content } from "antd/es/layout/layout";
import ImageEffect from "../components/ImageEffect";

const RSC = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const param = searchParams.s;
  return (
    <Content
      style={{
        padding: 24,
        margin: 16,
        background: "white",
      }}
    >
      <p>Image generator</p>
      <ImageEffect title={param} />
    </Content>
  );
};

export default RSC;
