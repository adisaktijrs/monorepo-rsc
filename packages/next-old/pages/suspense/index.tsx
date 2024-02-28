import { Content } from "antd/es/layout/layout";
import { Alert, Divider } from "antd";
import { InferGetServerSidePropsType } from "next/types";

import Chart from "@/components/Chart";

export async function getServerSideProps() {
  console.info(
    `Initiate fetch: both component: ${new Date().toLocaleTimeString()}`
  );
  const [slowRes, slowestRes] = await Promise.all([
    fetch(`http:localhost:5000/slow`),
    fetch(`http:localhost:5000/slowest`),
  ]);
  const [slow, slowest] = await Promise.all([
    slowRes.json(),
    slowestRes.json(),
  ]);
  return { props: { slow, slowest } };
}

const SuspensePage = ({
  slow,
  slowest,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.info(`Render: both component: ${new Date().toLocaleTimeString()}`);
  return (
    <Content
      style={{
        padding: 24,
        margin: 16,
        background: "white",
      }}
    >
      <Alert
        message="Lorem ipsum dolor sit amet."
        type="info"
        showIcon
        closable
      />
      <Divider />

      <Chart />
      <Divider />

      <p>SSR Component: Slow component</p>
      <p>{slow.data}</p>
      <Divider />

      <p>SSR Component: Super slow component</p>
      <p>{slowest.data}</p>
    </Content>
  );
};

export default SuspensePage;
