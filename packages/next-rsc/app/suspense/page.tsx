import { Suspense } from "react";
import { Content } from "antd/es/layout/layout";
import { Divider, Skeleton } from "antd";

import Chart from "../components/Chart/Chart";
import Slow from "../components/Slow";
import SuperSlow from "../components/SuperSlow";

const SuspensePage = () => {
  return (
    <Content
      style={{
        padding: 24,
        margin: 16,
        background: "white",
      }}
    >
      <p>Client Component</p>
      <Chart />
      <Divider />

      <p>Server Component: Slow component</p>
      <Suspense fallback={<Skeleton active paragraph={false} />}>
        <Slow />
      </Suspense>
      <Divider />

      <p>Server Component: Super slow component</p>
      <Suspense fallback={<Skeleton active paragraph={false} />}>
        <SuperSlow />
      </Suspense>
    </Content>
  );
};

export default SuspensePage;
